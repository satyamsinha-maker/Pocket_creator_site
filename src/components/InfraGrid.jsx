import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const GRID_W    = 18
const GRID_H    = 18
const CELL_SIZE = 1.1
const GAP       = 0.18

// Node "types" with heights and accent colors
const NODE_TYPES = [
  { h: 0.12, color: 0x1a1a1f, emissive: 0x0a0a12, weight: 50 },  // flat ground tile
  { h: 0.35, color: 0x1e1e26, emissive: 0x0d0d1a, weight: 25 },  // low block
  { h: 0.75, color: 0x222230, emissive: 0x10102a, weight: 12 },  // mid block
  { h: 1.4,  color: 0x252538, emissive: 0x14143a, weight:  8 },  // tall block
  { h: 0.3,  color: 0x1a1f2e, emissive: 0x060f2a, weight:  3 },  // blue accent
  { h: 0.45, color: 0x2a1a10, emissive: 0x3a1a00, weight:  2 },  // orange accent
]

function pickType() {
  const total = NODE_TYPES.reduce((s, t) => s + t.weight, 0)
  let r = Math.random() * total
  for (const t of NODE_TYPES) { r -= t.weight; if (r <= 0) return t }
  return NODE_TYPES[0]
}

export default function InfraGrid() {
  const mountRef = useRef(null)

  useEffect(() => {
    const W = mountRef.current.clientWidth
    const H = mountRef.current.clientHeight

    // ── Renderer ────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(W, H)
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)

    // ── Scene / Camera ───────────────────────────────────────────────────────
    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100)
    camera.position.set(0, 11, 11)
    camera.lookAt(0, 0, 0)

    // Target rotation driven by mouse
    const targetRot = { x: 0, y: 0 }
    const currentRot = { x: 0, y: 0 }

    // ── Lights ───────────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.15))

    const dirLight = new THREE.DirectionalLight(0x8888ff, 0.4)
    dirLight.position.set(-5, 10, 5)
    scene.add(dirLight)

    const orangeLight = new THREE.PointLight(0xff6020, 2.5, 18)
    orangeLight.position.set(3, 4, 3)
    scene.add(orangeLight)

    const blueLight = new THREE.PointLight(0x0447ff, 2, 16)
    blueLight.position.set(-4, 3, -3)
    scene.add(blueLight)

    // ── Grid of nodes ────────────────────────────────────────────────────────
    const group = new THREE.Group()
    scene.add(group)

    const nodes = []
    const step  = CELL_SIZE + GAP
    const offX  = ((GRID_W - 1) * step) / 2
    const offZ  = ((GRID_H - 1) * step) / 2

    for (let row = 0; row < GRID_H; row++) {
      for (let col = 0; col < GRID_W; col++) {
        const type = pickType()
        const geo  = new THREE.BoxGeometry(CELL_SIZE, type.h, CELL_SIZE)
        const mat  = new THREE.MeshStandardMaterial({
          color:     type.color,
          emissive:  new THREE.Color(type.emissive),
          emissiveIntensity: 0.6,
          roughness: 0.85,
          metalness: 0.3,
        })
        const mesh = new THREE.Mesh(geo, mat)
        mesh.position.set(
          col * step - offX,
          type.h / 2,
          row * step - offZ
        )
        group.add(mesh)
        nodes.push({
          mesh,
          baseEmissive: new THREE.Color(type.emissive),
          pulseSpeed:   0.4 + Math.random() * 1.2,
          pulseOffset:  Math.random() * Math.PI * 2,
          basePosY:     type.h / 2,
        })
      }
    }

    // ── Connection lines between random neighbours ───────────────────────────
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x0447ff,
      transparent: true,
      opacity: 0.12,
    })

    for (let i = 0; i < 60; i++) {
      const a = nodes[Math.floor(Math.random() * nodes.length)]
      const b = nodes[Math.floor(Math.random() * nodes.length)]
      if (a === b) continue
      const pts = [
        new THREE.Vector3(a.mesh.position.x, a.mesh.position.y + 0.05, a.mesh.position.z),
        new THREE.Vector3(b.mesh.position.x, b.mesh.position.y + 0.05, b.mesh.position.z),
      ]
      const geo  = new THREE.BufferGeometry().setFromPoints(pts)
      group.add(new THREE.Line(geo, lineMat))
    }

    // ── Orange accent highlight lines ────────────────────────────────────────
    const accentMat = new THREE.LineBasicMaterial({
      color: 0xff6020,
      transparent: true,
      opacity: 0.18,
    })
    for (let i = 0; i < 25; i++) {
      const a = nodes[Math.floor(Math.random() * nodes.length)]
      const b = nodes[Math.floor(Math.random() * nodes.length)]
      if (a === b) continue
      const pts = [
        new THREE.Vector3(a.mesh.position.x, a.mesh.position.y + 0.05, a.mesh.position.z),
        new THREE.Vector3(b.mesh.position.x, b.mesh.position.y + 0.05, b.mesh.position.z),
      ]
      group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), accentMat))
    }

    // ── Mouse interaction ────────────────────────────────────────────────────
    const onMouseMove = (e) => {
      const nx = (e.clientX / window.innerWidth)  * 2 - 1   // -1 → +1
      const ny = (e.clientY / window.innerHeight) * 2 - 1
      targetRot.y =  nx * 0.25   // subtle yaw
      targetRot.x = -ny * 0.15   // subtle pitch
    }
    window.addEventListener('mousemove', onMouseMove)

    // ── Resize ───────────────────────────────────────────────────────────────
    const onResize = () => {
      const w = mountRef.current?.clientWidth  || window.innerWidth
      const h = mountRef.current?.clientHeight || window.innerHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    // ── Animate ──────────────────────────────────────────────────────────────
    let raf
    const clock = new THREE.Clock()

    const animate = () => {
      raf = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      // Smooth camera rotation toward target
      currentRot.x += (targetRot.x - currentRot.x) * 0.06
      currentRot.y += (targetRot.y - currentRot.y) * 0.06
      group.rotation.x = currentRot.x
      group.rotation.y = currentRot.y + t * 0.018   // slow auto-spin

      // Pulse node emissive intensity
      for (const n of nodes) {
        const pulse = 0.5 + 0.5 * Math.sin(t * n.pulseSpeed + n.pulseOffset)
        n.mesh.material.emissiveIntensity = 0.3 + pulse * 0.7
      }

      // Drift orange point light
      orangeLight.position.x = Math.sin(t * 0.3) * 5
      orangeLight.position.z = Math.cos(t * 0.2) * 5
      blueLight.position.x   = Math.cos(t * 0.25) * 6
      blueLight.position.z   = Math.sin(t * 0.35) * 6

      renderer.render(scene, camera)
    }
    animate()

    // ── Cleanup ──────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  )
}
