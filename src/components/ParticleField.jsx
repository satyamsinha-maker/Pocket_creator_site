import { useEffect, useRef } from 'react'

const COUNT        = 220
const REPEL_RADIUS = 130
const REPEL_FORCE  = 1.1
const RETURN_SPEED = 0.032
const DAMPING      = 0.86

export default function ParticleField() {
  const canvasRef = useRef(null)
  const mouse     = useRef({ x: -9999, y: -9999 })
  const particles = useRef([])
  const raf       = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    const init = () => {
      particles.current = Array.from({ length: COUNT }, () => {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        return {
          x, y,
          ox: x,
          oy: y,
          vx: 0,
          vy: 0,
          r:  0.6 + Math.random() * 1.8,
          a:  0.15 + Math.random() * 0.55,
        }
      })
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const onLeave = () => { mouse.current = { x: -9999, y: -9999 } }

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const { x: mx, y: my } = mouse.current

      for (const p of particles.current) {
        const dx   = p.x - mx
        const dy   = p.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < REPEL_RADIUS && dist > 0) {
          const f  = (REPEL_RADIUS - dist) / REPEL_RADIUS
          p.vx    += (dx / dist) * f * REPEL_FORCE
          p.vy    += (dy / dist) * f * REPEL_FORCE
        }

        // spring back to origin
        p.vx += (p.ox - p.x) * RETURN_SPEED
        p.vy += (p.oy - p.y) * RETURN_SPEED

        p.vx *= DAMPING
        p.vy *= DAMPING
        p.x  += p.vx
        p.y  += p.vy

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(245,243,241,${p.a})`
        ctx.fill()
      }

      raf.current = requestAnimationFrame(tick)
    }

    resize()
    window.addEventListener('resize',    resize)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)
    raf.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf.current)
      window.removeEventListener('resize',    resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <>
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Grain overlay — SVG feTurbulence noise, shifts position to animate */}
      <div
        aria-hidden
        style={{
          position: 'fixed',
          inset: '-50%',
          width: '200%',
          height: '200%',
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 0.045,
          zIndex: 2,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '180px 180px',
          animation: 'grainShift 0.12s steps(1) infinite',
        }}
      />

      <style>{`
        @keyframes grainShift {
          0%  { transform: translate(0px,   0px)   }
          10% { transform: translate(-4px, -7px)   }
          20% { transform: translate(-9px,  4px)   }
          30% { transform: translate( 6px, -8px)   }
          40% { transform: translate(-3px,  6px)   }
          50% { transform: translate(-8px,  2px)   }
          60% { transform: translate( 7px, -1px)   }
          70% { transform: translate( 2px,  9px)   }
          80% { transform: translate(-6px,  3px)   }
          90% { transform: translate( 4px, -4px)   }
        }
      `}</style>
    </>
  )
}
