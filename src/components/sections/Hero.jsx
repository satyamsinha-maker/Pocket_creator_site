import { useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { SCALE, SHADOWS, RADII } from '../ui'

/* Mountain backdrop — cycles every 3 s with a smooth cross-fade.
 * Add more entries to MOUNTAINS to extend the rotation. Files live in
 * /public/figma/ and use the naming pattern mountain-1.png, mountain-2.png …
 */
const MOUNTAINS = [
  '/figma/mountain.png',
  '/figma/mountain-2.png',
  '/figma/mountain-3.png',
]
const CYCLE_MS    = 5000   // total time per slot (display + fade)
const FADE_MS     = 2000   // cross-fade duration — slower, meditative

/* Figma reference dims (kept so mountain + product + text scale as one grid)
 *   mountain frame   : 1441 × 672 (aspect 2.144)
 *   product overlay  : 1015 × 579 (aspect 1.753)
 *   product top      : 59  / 672  ≈ 8.78%
 *   product width    : 1015/ 1441 ≈ 70.44%
 *
 *   Both the text-row container and the product image share width:
 *      width = min(70.44vw, MAX_PRODUCT_WIDTH)
 *   This keeps heading flush with product LEFT edge and body flush with
 *   product RIGHT edge, exactly as Figma specifies. The shared width
 *   variable is exposed as `--grid-w` so any further additions inherit it.
 */

const MAX_PRODUCT_WIDTH = '1280px'   // sane cap on ultrawide displays

/* ── BlurReveal ───────────────────────────────────────────────────────────
 * Splits a string into words and reveals them left → right by interpolating
 * `filter: blur(...)` from heavy → 0 with a per-word stagger. Looks like a
 * progressive focus pull across the line.
 *
 * Props:
 *   text           — the string to reveal
 *   delay          — seconds before the first word starts animating
 *   wordStaggerSec — seconds added per subsequent word (default 0.04)
 *   blurPx         — initial blur amount in pixels (default 12)
 *   duration       — duration each word takes to clear (default 0.6 s)
 * ─────────────────────────────────────────────────────────────────────── */
function BlurReveal({ text, delay = 0, wordStaggerSec = 0.04, blurPx = 12, duration = 0.6 }) {
  const words = text.split(' ')
  return (
    <>
      {words.map((w, i) => (
        <span key={i}>
          <motion.span
            initial={{ filter: `blur(${blurPx}px)`, opacity: 0 }}
            animate={{ filter: 'blur(0px)',         opacity: 1 }}
            transition={{
              duration,
              delay: delay + i * wordStaggerSec,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ display: 'inline-block', willChange: 'filter, opacity' }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </>
  )
}

export default function Hero() {
  // Cycle through mountain images every 3 s (no-op when only one image)
  const [mtnIdx, setMtnIdx] = useState(0)
  useEffect(() => {
    if (MOUNTAINS.length < 2) return
    const t = setInterval(
      () => setMtnIdx((i) => (i + 1) % MOUNTAINS.length),
      CYCLE_MS,
    )
    return () => clearInterval(t)
  }, [])

  /* ── Sherpa UI clip+blur reveal (bottom → top) ──────────────────────────
   * `reveal` drives a CSS mask that CLIPS the image, exposing it from bottom
   * upward. Above the leading edge the image is fully clipped (invisible).
   * Below it, the image is fully visible. A feathered transition zone makes
   * the leading edge soft. Simultaneously a global blur clears from heavy
   * → zero, so the just-revealed portion looks blurry at the moment of
   * appearance and sharpens as the reveal continues.
   * ───────────────────────────────────────────────────────────────────── */
  const reveal = useMotionValue(0)
  useEffect(() => {
    const ctrl = animate(reveal, 110, {
      duration: 1.8,
      delay: 0.4,
      ease: [0.22, 1, 0.36, 1],
    })
    return () => ctrl.stop()
  }, [reveal])
  const maskImage = useTransform(
    reveal,
    /* below the band → black (visible)   ·   above → transparent (clipped) */
    (v) => `linear-gradient(to top, black ${v - 8}%, transparent ${v + 8}%)`,
  )

  return (
    <section
      id="top"
      style={{
        position: 'relative',
        background: '#FAF9F1',           /* vellum page base */
        overflow: 'hidden',
        // Shared grid width — text + product use the same value
        '--grid-w': `min(70.44vw, ${MAX_PRODUCT_WIDTH})`,
      }}
    >
      {/* ── Text grid — locked to product image width ────────────────────── */}
      <div
        style={{
          width: 'var(--grid-w)',
          margin: '0 auto',
          padding: 'clamp(40px, 6vw, 88px) 0 0',
          boxSizing: 'border-box',
        }}
        className="hero-grid-text"
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 'clamp(24px, 3vw, 56px)',
            flexWrap: 'wrap',
          }}
          className="hero-text-row"
        >
          {/* Heading — aligns to LEFT edge of grid (= product left).
           *  Words reveal left → right with progressive blur clearing.
           */}
          <h1
            style={{
              flex: '1 1 320px',
              maxWidth: '560px',
              /* display token — Season Mix Regular, fluid 40 → 56 px */
              fontFamily:    SCALE.display.family,
              fontWeight:    SCALE.display.weight,
              fontSize:      SCALE.display.fontSize,
              lineHeight:    SCALE.display.lineHeight,
              letterSpacing: SCALE.display.letterSpacing,
              color: '#000000',
              margin: 0,
            }}
          >
            <BlurReveal
              text="Meet Sherpa, the AI that writes stories with you"
              delay={0.1}
              wordStaggerSec={0.06}
              blurPx={14}
              duration={0.7}
            />
          </h1>

          {/* Body — aligns to RIGHT edge of grid (= product right). Reveals
           *  after the heading has begun clearing.
           */}
          <p
            style={{
              flex: '0 1 340px',
              maxWidth: '340px',
              /* subheading token — Mallory MP Narrow, 18px, 1.5 line-height */
              fontFamily:    SCALE.subheading.family,
              fontWeight:    SCALE.subheading.weight,
              fontSize:      SCALE.subheading.fontSize,
              lineHeight:    SCALE.subheading.lineHeight,
              letterSpacing: SCALE.subheading.letterSpacing,
              color: '#717171',
              margin: 0,
            }}
          >
            <BlurReveal
              text="From a single idea to a published audio series. Sherpa walks the journey with you."
              delay={0.5}
              wordStaggerSec={0.04}
              blurPx={10}
              duration={0.6}
            />
          </p>
        </div>
      </div>

      {/* ── Full-bleed mountain stage (mountain + centered product) ───────── */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1441 / 672',   /* exact Figma frame ratio */
        }}
      >
        {/* Mountain background — edge-to-edge, cycles every 3 s with cross-fade.
         * All images are in the DOM at all times so they preload; only the
         * active one has opacity 1.
         */}
        {MOUNTAINS.map((src, i) => (
          <motion.img
            key={src}
            src={src}
            alt=""
            aria-hidden
            animate={{ opacity: i === mtnIdx ? 1 : 0 }}
            transition={{ duration: FADE_MS / 1000, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              opacity: i === 0 ? 1 : 0,    /* initial state matches motion */
            }}
          />
        ))}

        {/* White-to-transparent fade (matches Figma 45.76% gradient stop) */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, #FAF9F1 0%, rgba(250,249,241,0) 45.76%)',
            pointerEvents: 'none',
          }}
        />

        {/* Product screenshot — top-anchored at 8.78% of mountain (Figma constraint),
         *  horizontally centered, width = grid-w (matches text-row grid)
         *
         *  Static wrapper handles position+centering; motion.img only animates
         *  opacity so framer-motion's transform doesn't clobber translateX(-50%).
         */}
        <div
          style={{
            position: 'absolute',
            top:    '8.78%',                  /* (306 − 247) / 672  per Figma */
            left:   '50%',
            transform: 'translateX(-50%)',    /* horizontally centred         */
            width:  'var(--grid-w)',          /* 1015 / 1441 of mountain      */
            aspectRatio: '1015 / 579',        /* reserves slot before image  */
            zIndex: 2,
            borderRadius: RADII.panel,            /* 16px — rounder per skill */
            overflow: 'hidden',
            boxShadow: SHADOWS.elevated,           /* layered shadow-as-border */
          }}
        >
          {/* Single product image — clipped by mask, blur clears in tandem */}
          <motion.img
            src="/figma/product.png"
            alt="Sherpa writing app interface"
            initial={{ filter: 'blur(18px)' }}
            animate={{ filter: 'blur(0px)' }}
            transition={{ duration: 1.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              maskImage,
              WebkitMaskImage: maskImage,
              willChange: 'filter, mask-image',
            }}
          />
        </div>
      </div>

      {/* Mobile tweaks — let the grid breathe on narrow screens */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid-text { width: 88vw !important; }
        }
        @media (max-width: 600px) {
          .hero-text-row { gap: 16px !important; }
        }
      `}</style>
    </section>
  )
}
