import { motion } from 'framer-motion'

/* ── Typeface stacks ──────────────────────────────────────────────────── */
const SANS    = "'Mallory', ui-sans-serif, system-ui, sans-serif"     // body / UI
const DISPLAY = "'Season Mix', Georgia, 'Times New Roman', serif"     // headings only

/* ── Typescale lookup ─────────────────────────────────────────────────────
 * Single source of truth for sizes/leading/tracking. Headings (display, h1..h4)
 * all use Season Mix; everything else uses Mallory MP Narrow.
 * ─────────────────────────────────────────────────────────────────────── */
const SCALE = {
  display:    { fontSize: 'clamp(40px, 5.4vw, 56px)', lineHeight: 1.07, letterSpacing: '-0.03em',  family: DISPLAY, weight: 400 },
  h1:         { fontSize: 'clamp(36px, 4.5vw, 48px)', lineHeight: 1.10, letterSpacing: '-0.025em', family: DISPLAY, weight: 400 },
  h2:         { fontSize: 'clamp(28px, 3.4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.02em',  family: DISPLAY, weight: 400 },
  h3:         { fontSize: 'clamp(22px, 2.4vw, 28px)', lineHeight: 1.20, letterSpacing: '-0.015em', family: DISPLAY, weight: 400 },
  h4:         { fontSize: '20px',                     lineHeight: 1.25, letterSpacing: '-0.01em',  family: DISPLAY, weight: 400 },

  subheading: { fontSize: '18px',                     lineHeight: 1.5,  letterSpacing: '0',        family: SANS,    weight: 400 },
  body:       { fontSize: '16px',                     lineHeight: 1.55, letterSpacing: '0',        family: SANS,    weight: 400 },
  bodySm:     { fontSize: '14px',                     lineHeight: 1.45, letterSpacing: '0.003em',  family: SANS,    weight: 400 },
  label:      { fontSize: '13px',                     lineHeight: 1.4,  letterSpacing: '0.005em',  family: SANS,    weight: 400 },
  eyebrow:    { fontSize: '12px',                     lineHeight: 1.4,  letterSpacing: '0.08em',   family: SANS,    weight: 700, textTransform: 'uppercase' },
  caption:    { fontSize: '11px',                     lineHeight: 1.4,  letterSpacing: '0.02em',   family: SANS,    weight: 400 },
}

/* ── Eyebrow ──────────────────────────────────────────────────────────── */
export function Eyebrow({ children, color = '#F51D00', style = {} }) {
  return (
    <p
      style={{
        fontFamily:    SCALE.eyebrow.family,
        fontWeight:    SCALE.eyebrow.weight,
        fontSize:      SCALE.eyebrow.fontSize,
        lineHeight:    SCALE.eyebrow.lineHeight,
        letterSpacing: SCALE.eyebrow.letterSpacing,
        textTransform: SCALE.eyebrow.textTransform,
        color,
        marginBottom: '16px',
        ...style,
      }}
    >
      {children}
    </p>
  )
}

/* ── SerifHeading (legacy name kept) — Season Mix display heading ─────── *
 *  size: 'display' | 'h1' (alias 'xl') | 'h2' (alias 'lg') | 'h3' (alias 'md') | 'h4' (alias 'sm')
 *  Old aliases (xl/lg/md/sm) preserved so existing call sites continue to work.
 * ─────────────────────────────────────────────────────────────────────── */
export function SerifHeading({ children, size = 'h2', maxWidth = '760px', as: Tag = 'h2', style = {} }) {
  const map = { xl: 'display', lg: 'h2', md: 'h3', sm: 'h4' }
  const key = map[size] || size
  const t = SCALE[key] || SCALE.h2
  return (
    <Tag
      style={{
        fontFamily:    t.family,
        fontWeight:    t.weight,
        fontSize:      t.fontSize,
        lineHeight:    t.lineHeight,
        letterSpacing: t.letterSpacing,
        color: '#061b31',
        maxWidth,
        ...style,
      }}
    >
      {children}
    </Tag>
  )
}

/* ── Subheading — 18 px lead paragraph (Mallory) ───────────────────────── */
export function Subheading({ children, color = '#50617a', maxWidth, style = {} }) {
  const t = SCALE.subheading
  return (
    <p
      style={{
        fontFamily:    t.family,
        fontWeight:    t.weight,
        fontSize:      t.fontSize,
        lineHeight:    t.lineHeight,
        letterSpacing: t.letterSpacing,
        color,
        maxWidth,
        ...style,
      }}
    >
      {children}
    </p>
  )
}

/* ── Body — paragraph text (Mallory) ──────────────────────────────────── *
 *  size: 'lg' = subheading 18px, 'md' (default) = 16px, 'sm' = 14px
 * ─────────────────────────────────────────────────────────────────────── */
export function Body({ children, color = '#50617a', size = 'md', maxWidth, style = {} }) {
  const map = { lg: SCALE.subheading, md: SCALE.body, sm: SCALE.bodySm }
  const t = map[size] || SCALE.body
  return (
    <p
      style={{
        fontFamily:    t.family,
        fontWeight:    t.weight,
        fontSize:      t.fontSize,
        lineHeight:    t.lineHeight,
        letterSpacing: t.letterSpacing,
        color,
        maxWidth,
        ...style,
      }}
    >
      {children}
    </p>
  )
}

/* ── Label — UI label text (Mallory) ──────────────────────────────────── */
export function Label({ children, color = '#061b31', weight = 400, style = {} }) {
  const t = SCALE.label
  return (
    <span
      style={{
        fontFamily:    t.family,
        fontWeight:    weight,
        fontSize:      t.fontSize,
        lineHeight:    t.lineHeight,
        letterSpacing: t.letterSpacing,
        color,
        ...style,
      }}
    >
      {children}
    </span>
  )
}

/* ── Caption — small meta text (Mallory) ──────────────────────────────── */
export function Caption({ children, color = '#64748d', style = {} }) {
  const t = SCALE.caption
  return (
    <span
      style={{
        fontFamily:    t.family,
        fontWeight:    t.weight,
        fontSize:      t.fontSize,
        lineHeight:    t.lineHeight,
        letterSpacing: t.letterSpacing,
        color,
        ...style,
      }}
    >
      {children}
    </span>
  )
}

/* ── PillButton — Stripe-square buttons ───────────────────────────────── */
export function PillButton({ variant = 'filled', children, onClick, ...rest }) {
  const variants = {
    filled: {
      backgroundColor: '#F51D00',
      color: '#ffffff',
      border: '1px solid #F51D00',
      padding: '0 24px',
      height: '40px',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: '#061b31',
      border: 'none',
      padding: '0 4px',
      height: '40px',
    },
    outlined: {
      backgroundColor: 'transparent',
      color: '#F51D00',
      border: '1px solid #fcb8ad',
      padding: '0 24px',
      height: '40px',
    },
    sienna: { /* legacy alias — used by Hero/FinalCTA submit; map to filled */
      backgroundColor: '#F51D00',
      color: '#ffffff',
      border: '1px solid #F51D00',
      padding: '0 18px',
      height: '36px',
    },
  }
  const v = variants[variant] || variants.filled
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        backgroundColor:
          variant === 'ghost'    ? 'rgba(245,29,0,0.06)' :
          variant === 'outlined' ? 'rgba(245,29,0,0.04)' :
                                    '#c81700',
      }}
      whileTap={{ scale: 0.98 }}
      style={{
        ...v,
        borderRadius: '4px',
        fontFamily: SANS,
        fontWeight: 400,
        fontSize: SCALE.label.fontSize,
        letterSpacing: SCALE.label.letterSpacing,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        transition: 'background-color 0.18s',
      }}
      {...rest}
    >
      {children}
    </motion.button>
  )
}

/* ── AnimatedSection — restrained fade-up ─────────────────────────────── */
export function AnimatedSection({ children, className = '', style = {}, delay = 0, id }) {
  return (
    <motion.section
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.section>
  )
}

/* ── Container ───────────────────────────────────────────────────────── */
export function Container({ children, style = {} }) {
  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 32px',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

/* ── Card — Stripe Default Card (powder-blue) by default ──────────────── */
export function Card({ children, style = {}, className = '', hover = false, surface = 'powder' }) {
  const bg = surface === 'porcelain' ? '#f8fafd' : surface === 'white' ? '#ffffff' : '#e5edf5'
  return (
    <motion.div
      className={className}
      style={{
        backgroundColor: bg,
        borderRadius: '6px',
        padding: '12px',
        ...style,
      }}
      whileHover={hover ? {
        boxShadow: 'rgba(50, 50, 93, 0.12) 0px 16px 32px 0px',
        y: -2,
      } : undefined}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  )
}

/* ── FeatureCard — porcelain with soft xl shadow ──────────────────────── */
export function FeatureCard({ children, style = {}, hover = false }) {
  return (
    <motion.div
      style={{
        backgroundColor: '#f8fafd',
        borderRadius: '6px',
        padding: '12px',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 32px 8px',
        ...style,
      }}
      whileHover={hover ? { y: -2, boxShadow: 'rgba(50, 50, 93, 0.12) 0px 16px 32px 0px' } : undefined}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  )
}

/* Re-export the typescale so other modules can compose ad-hoc styles */
export { SCALE, SANS, DISPLAY }
