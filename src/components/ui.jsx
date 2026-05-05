import { motion } from 'framer-motion'

/* ── Eyebrow ──────────────────────────────────────────────────────────── */
export function Eyebrow({ children, color = '#b85c3a' }) {
  return (
    <p
      style={{
        fontFamily: 'Mallory, sans-serif',
        fontWeight: 700,
        fontSize: '12px',
        color,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        marginBottom: '14px',
      }}
    >
      {children}
    </p>
  )
}

/* ── SerifHeading — Lora for literary tone ────────────────────────────── */
export function SerifHeading({ children, size = 'lg', maxWidth = '760px', as: Tag = 'h2' }) {
  const fontSize =
    size === 'xl' ? 'clamp(44px, 6vw, 76px)' :
    size === 'lg' ? 'clamp(34px, 4.5vw, 52px)' :
    size === 'md' ? 'clamp(26px, 3vw, 36px)' :
                    'clamp(22px, 2.4vw, 28px)'
  return (
    <Tag
      style={{
        fontFamily: "'Lora', Georgia, serif",
        fontWeight: 500,
        fontSize,
        lineHeight: 1.1,
        letterSpacing: '-0.01em',
        color: '#1c1814',
        maxWidth,
      }}
    >
      {children}
    </Tag>
  )
}

/* ── Body text helper ─────────────────────────────────────────────────── */
export function Body({ children, color = '#6b5e52', size = 'md', maxWidth, style = {} }) {
  const fontSize = size === 'lg' ? '17px' : size === 'sm' ? '13px' : '15px'
  return (
    <p
      style={{
        fontFamily: 'Mallory, sans-serif',
        fontWeight: 400,
        fontSize,
        lineHeight: 1.55,
        color,
        maxWidth,
        ...style,
      }}
    >
      {children}
    </p>
  )
}

/* ── PillButton — ink filled / ghost / sienna accent ──────────────────── */
export function PillButton({ variant = 'filled', children, onClick, ...rest }) {
  const variants = {
    filled: {
      backgroundColor: '#1c1814',
      color: '#faf6ed',
      border: '1px solid #1c1814',
    },
    ghost: {
      backgroundColor: '#ffffff',
      color: '#1c1814',
      border: '1px solid #e8dfd0',
    },
    sienna: {
      backgroundColor: '#b85c3a',
      color: '#faf6ed',
      border: '1px solid #b85c3a',
    },
  }
  const v = variants[variant]
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        opacity: variant === 'ghost' ? 1 : 0.9,
        backgroundColor:
          variant === 'ghost' ? '#f3ecdc' :
          variant === 'sienna' ? '#8c4528' :
          undefined,
      }}
      whileTap={{ scale: 0.97 }}
      style={{
        ...v,
        borderRadius: '9999px',
        padding: '0 20px',
        height: '40px',
        fontFamily: 'Mallory, sans-serif',
        fontWeight: variant === 'ghost' ? 400 : 700,
        fontSize: '14px',
        letterSpacing: '0.01em',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        boxShadow: variant === 'ghost'
          ? 'rgba(28,24,20,0.06) 0px 0px 0px 1px, rgba(28,24,20,0.04) 0px 1px 2px 0px'
          : 'rgba(28,24,20,0.06) 0px 1px 2px 0px',
      }}
      {...rest}
    >
      {children}
    </motion.button>
  )
}

/* ── AnimatedSection — restrained fade-up on scroll ───────────────────── */
export function AnimatedSection({ children, className = '', style = {}, delay = 0, id }) {
  return (
    <motion.section
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 24 }}
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

/* ── Card with hairline elevation ─────────────────────────────────────── */
export function Card({ children, style = {}, className = '', hover = false }) {
  return (
    <motion.div
      className={className}
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: 'rgba(28,24,20,0.4) 0px 0px 1.143px 0px, rgba(28,24,20,0.04) 0px 2px 4px 0px',
        ...style,
      }}
      whileHover={hover ? { y: -2, boxShadow: 'rgba(28,24,20,0.5) 0px 0px 1.143px 0px, rgba(28,24,20,0.06) 0px 6px 16px 0px' } : undefined}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  )
}
