import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

// Pocket FM: 100B minutes streamed in 2024.
// 200M users × 115 min/day ÷ 86,400s ≈ 266,203 min/second
const BASE_MINUTES = 100_000_000_000
const INCREMENT_PER_SECOND = 266_203

function formatNumber(n) {
  return Math.floor(n).toLocaleString('en-US')
}

export default function LiveCounter() {
  const [minutes, setMinutes] = useState(BASE_MINUTES)
  const startTime = useRef(Date.now())
  const raf = useRef(null)

  useEffect(() => {
    const tick = () => {
      const elapsed = (Date.now() - startTime.current) / 1000
      setMinutes(BASE_MINUTES + elapsed * INCREMENT_PER_SECOND)
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [])

  return (
    <motion.div
      className="flex flex-col items-start"
      style={{ gap: '8px' }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <p
        style={{
          fontFamily: 'Mallory, sans-serif',
          fontWeight: 400,
          fontSize: '12px',
          color: '#6b6975',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
      >
        Total Minutes Listened
      </p>

      <div className="relative inline-flex items-start">
        <span
          className="tabular-nums"
          style={{
            fontFamily: "'Mallory', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(42px, 6vw, 76px)',
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            color: '#f5f3f1',
          }}
        >
          {formatNumber(minutes)}
        </span>
        {/* Signal blue live dot — product indicator per Refero spec */}
        <span className="ml-2 mt-2.5 flex h-2.5 w-2.5 shrink-0">
          <span
            className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full opacity-50"
            style={{ backgroundColor: '#0447ff' }}
          />
          <span
            className="relative inline-flex h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: '#0447ff' }}
          />
        </span>
      </div>

      <p style={{ fontFamily: 'Mallory, sans-serif', fontSize: '12px', color: '#6b6975', letterSpacing: '0.04em' }}>
        and counting live
      </p>
    </motion.div>
  )
}
