import { useEffect, useRef } from 'react'

// ── Pre-generated film grain frames ──────────────────────────────────────────
function buildNoiseCanvas(size) {
  const off = document.createElement('canvas')
  off.width = off.height = size
  const ctx = off.getContext('2d')
  const img = ctx.createImageData(size, size)
  const d   = img.data
  for (let i = 0; i < d.length; i += 4) {
    const v = Math.random() * 255 | 0
    d[i] = d[i+1] = d[i+2] = v
    d[i+3] = 255
  }
  ctx.putImageData(img, 0, 0)
  return off
}
const NOISE_FRAMES = Array.from({ length: 10 }, () => buildNoiseCanvas(512))

// ── Gradient blobs ───────────────────────────────────────────────────────────
// Positions & sizes are normalised to viewport (0-1), so the gradient stays
// proportionally placed at any resolution.
const BLOBS = [
  // Hot pink — bottom-left heat source
  { bx: 0.20, by: 0.85, r: 0.65, color: [232,  20,  90], alpha: 1.00, dx: 0.018, dy: 0.012, ph: 0.0, par: 0.07 },
  // Magenta core
  { bx: 0.36, by: 0.68, r: 0.55, color: [195,  30, 200], alpha: 0.85, dx: 0.014, dy: 0.020, ph: 1.1, par: 0.05 },
  // Deep purple — centre
  { bx: 0.55, by: 0.50, r: 0.65, color: [110,  35, 255], alpha: 0.95, dx: 0.010, dy: 0.015, ph: 2.3, par: 0.04 },
  // Vivid blue — upper right
  { bx: 0.80, by: 0.30, r: 0.55, color: [ 35,  70, 255], alpha: 0.95, dx: 0.016, dy: 0.011, ph: 0.7, par: 0.06 },
  // Bright blue — far right edge
  { bx: 0.98, by: 0.45, r: 0.50, color: [ 65, 110, 255], alpha: 0.75, dx: 0.012, dy: 0.018, ph: 1.8, par: 0.03 },
  // Near-white lavender — bottom right bloom
  { bx: 0.90, by: 0.82, r: 0.55, color: [220, 205, 255], alpha: 0.85, dx: 0.008, dy: 0.014, ph: 3.1, par: 0.05 },
  // Soft pink wash — bottom centre, ties pink → white
  { bx: 0.55, by: 0.92, r: 0.60, color: [255, 110, 165], alpha: 0.55, dx: 0.006, dy: 0.010, ph: 4.2, par: 0.04 },
]

function drawBlob(ctx, x, y, r, color, alpha) {
  const [R, G, B] = color
  const g = ctx.createRadialGradient(x, y, 0, x, y, r)
  g.addColorStop(0,    `rgba(${R},${G},${B},${alpha})`)
  g.addColorStop(0.45, `rgba(${R},${G},${B},${alpha * 0.5})`)
  g.addColorStop(1,    `rgba(${R},${G},${B},0)`)
  ctx.fillStyle = g
  ctx.beginPath()
  ctx.arc(x, y, r, 0, Math.PI * 2)
  ctx.fill()
}

export default function NebulaCanvas() {
  const canvasRef   = useRef(null)
  const offRef      = useRef(null)
  const mouse       = useRef({ x: 0.5, y: 0.5 })
  const targetMouse = useRef({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')

    // Offscreen canvas for blob rendering — kept at low res for free smoothing
    if (!offRef.current) offRef.current = document.createElement('canvas')
    const off    = offRef.current
    const offCtx = off.getContext('2d')

    let raf, frame = 0

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMove = (e) => {
      targetMouse.current.x = e.clientX / window.innerWidth
      targetMouse.current.y = e.clientY / window.innerHeight
    }
    window.addEventListener('mousemove', onMove)

    const draw = (ts) => {
      raf = requestAnimationFrame(draw)
      frame++

      const W = canvas.width
      const H = canvas.height
      const T = ts * 0.001

      // Lerp mouse
      mouse.current.x += (targetMouse.current.x - mouse.current.x) * 0.05
      mouse.current.y += (targetMouse.current.y - mouse.current.y) * 0.05
      const mx = mouse.current.x - 0.5
      const my = mouse.current.y - 0.5

      // ── 1. Render blobs to small offscreen canvas (1/4 res) ─────────────
      // Drawing radial gradients at low res, then upscaling, gives a free
      // gaussian-quality blend between blobs.
      const SCALE = 0.25
      const sw = Math.max(2, Math.floor(W * SCALE))
      const sh = Math.max(2, Math.floor(H * SCALE))
      if (off.width !== sw || off.height !== sh) {
        off.width  = sw
        off.height = sh
      }

      offCtx.fillStyle = '#09070e'
      offCtx.fillRect(0, 0, sw, sh)

      offCtx.globalCompositeOperation = 'lighter'
      const refDim = Math.min(sw, sh)

      for (const b of BLOBS) {
        const drift = 0.05
        const x = b.bx + Math.sin(T * b.dx * 6 + b.ph)         * drift + mx * b.par
        const y = b.by + Math.cos(T * b.dy * 6 + b.ph + 1)     * drift + my * b.par
        const breath = 1 + 0.06 * Math.sin(T * 0.6 + b.ph)
        drawBlob(offCtx, x * sw, y * sh, b.r * refDim * breath, b.color, b.alpha)
      }
      offCtx.globalCompositeOperation = 'source-over'

      // ── 2. Draw upscaled gradient to main canvas with smoothing + blur ─
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = 'high'
      ctx.filter = 'blur(12px)'
      ctx.drawImage(off, 0, 0, W, H)
      ctx.filter = 'none'

      // ── 3. Vignette — heavy darkening upper-left, gentle elsewhere ─────
      const vTL = ctx.createRadialGradient(0, 0, 0, 0, 0, Math.max(W, H) * 0.95)
      vTL.addColorStop(0,    'rgba(0,0,0,0.85)')
      vTL.addColorStop(0.35, 'rgba(0,0,0,0.35)')
      vTL.addColorStop(1,    'rgba(0,0,0,0)')
      ctx.fillStyle = vTL
      ctx.fillRect(0, 0, W, H)

      const vEdge = ctx.createRadialGradient(W*0.55, H*0.55, H*0.2, W*0.55, H*0.55, H*0.95)
      vEdge.addColorStop(0, 'rgba(0,0,0,0)')
      vEdge.addColorStop(1, 'rgba(0,0,0,0.4)')
      ctx.fillStyle = vEdge
      ctx.fillRect(0, 0, W, H)

      // ── 4. Film grain ──────────────────────────────────────────────────
      if (frame % 2 === 0) {
        const nf = NOISE_FRAMES[Math.floor(frame / 2) % NOISE_FRAMES.length]
        ctx.globalAlpha = 0.085
        ctx.globalCompositeOperation = 'screen'
        for (let tx = 0; tx < W; tx += 512)
          for (let ty = 0; ty < H; ty += 512)
            ctx.drawImage(nf, tx, ty)
        ctx.globalAlpha = 1
        ctx.globalCompositeOperation = 'source-over'
      }
    }

    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        zIndex: 0,
      }}
    />
  )
}
