import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { COLORS } from './ui'

/* ── ColumnRails ──────────────────────────────────────────────────────────
 * Two thin vertical hairlines fixed at the content-max-width edges, the
 * way ElevenLabs' homepage frames its column. Static (full viewport height)
 * and very subtle — they read as a quiet structural rail, not a progress
 * indicator.
 *
 * Hidden while the hero is in view; fade in once it scrolls past.
 *
 * Component name kept as ScrollProgressLines for import-compatibility.
 * ─────────────────────────────────────────────────────────────────────── */
export default function ScrollProgressLines() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    /* Show rails only after the hero has scrolled out of view */
    const hero = document.getElementById('top')
    if (!hero) return
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    )
    obs.observe(hero)
    return () => obs.disconnect()
  }, [])

  const lineCommon = {
    position: 'fixed',
    top: 0,
    bottom: 0,                            /* full viewport height */
    width: '1px',
    background: COLORS.vellumShade1,      /* #DAD9D2 — lightest visible warm hairline */
    pointerEvents: 'none',
    zIndex: 50,
  }

  return (
    <>
      <motion.div
        aria-hidden
        initial={false}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{
          ...lineCommon,
          left: 'max(clamp(20px, 5vw, 64px), calc(50vw - 600px))',
        }}
      />
      <motion.div
        aria-hidden
        initial={false}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{
          ...lineCommon,
          right: 'max(clamp(20px, 5vw, 64px), calc(50vw - 600px))',
        }}
      />
    </>
  )
}
