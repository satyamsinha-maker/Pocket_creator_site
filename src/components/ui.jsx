import { motion } from 'framer-motion'

const SANS = "'Mallory', ui-sans-serif, system-ui, sans-serif"

/* ── Eyebrow ──────────────────────────────────────────────────────────── */
export function Eyebrow({ children, color = '#533afd' }) {
  return (
    <p
      style={{
        fontFamily: SANS,
        fontWeight: 400,
        fontSize: '12px',
        color,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        marginBottom: '16px',
      }}
    >
      {children}
    </p>
  )
}

/* ── Heading — sohne-var/Inter weight 300, large sizes per Stripe scale ─ */
export function SerifHeading({ children, size = 'lg', maxWidth = '760px', as: Tag = 'h2' }) {
  const config =
    size === 'xl' ? { fontSize: 'clamp(40px, 5.4vw, 56px)', lineHeight: 1.07, letterSpacing: '-0.03em' } :
    size === 'lg' ? { fontSize: 'clamp(32px, 4vw, 44px)',   lineHeight: 1.10, letterSpacing: '-0.025em' } :
    size === 'md' ? { fontSize: 'clamp(24px, 2.8vw, 32px)', lineHeight: 1.15, letterSpacing: '-0.02em' } :
                    { fontSize: 'clamp(20px, 2.2vw, 22px)', lineHeight: 1.20, letterSpacing: '-0.01em' }
  return (
    <Tag
      style={{
        fontFamily: SANS,
        fontWeight: 400,
        color: '#061b31',
        maxWidth,
        ...config,
      }}
    >
      {children}
    </Tag>
  )
}

/* ── Body ─────────────────────────────────────────────────────────────── */
export function Body({ children, color = '#50617a', size = 'md', maxWidth, style = {} }) {
  const fontSize = size === 'lg' ? '18px' : size === 'sm' ? '12px' : '14px'
  const lineHeight = size === 'lg' ? 1.5 : 1.4
  return (
    <p
      style={{
        fontFamily: SANS,
        fontWeight: 400,
        fontSize,
        lineHeight,
        color,
        maxWidth,
        ...style,
      }}
    >
      {children}
    </p>
  )
}

/* ── PillButton — kept name for compat, now Stripe square buttons ─────── */
export function PillButton({ variant = 'filled', children, onClick, ...rest }) {
  const variants = {
    filled: {
      backgroundColor: '#533afd',
      color: '#ffffff',
      border: '1px solid #533afd',
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
      color: '#533afd',
      border: '1px solid #b9b9f9',
      padding: '0 24px',
      height: '40px',
    },
    sienna: { /* legacy alias — used by Hero/FinalCTA submit; map to filled */
      backgroundColor: '#533afd',
      color: '#ffffff',
      border: '1px solid #533afd',
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
          variant === 'ghost'    ? 'rgba(83,58,253,0.06)' :
          variant === 'outlined' ? 'rgba(83,58,253,0.04)' :
                                    '#3f29d9',
      }}
      whileTap={{ scale: 0.98 }}
      style={{
        ...v,
        borderRadius: '4px',
        fontFamily: SANS,
        fontWeight: 400,
        fontSize: '14px',
        letterSpacing: '0.003px',
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
