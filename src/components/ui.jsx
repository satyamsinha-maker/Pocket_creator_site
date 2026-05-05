import { motion } from 'framer-motion'

// ── Eyebrow label (small uppercase Inter-style label above headings) ─────────
export function Eyebrow({ children, color = '#777169' }) {
  return (
    <p
      style={{
        fontFamily: 'Mallory, sans-serif',
        fontWeight: 400,
        fontSize: '13px',
        color,
        letterSpacing: '0.01em',
        marginBottom: '12px',
      }}
    >
      {children}
    </p>
  )
}

// ── Section Heading (Mallory Bold, large, tight tracking) ────────────────────
export function SectionHeading({ children, size = 'lg', maxWidth = '760px' }) {
  const fontSize =
    size === 'xl' ? 'clamp(40px, 5.6vw, 72px)' :
    size === 'lg' ? 'clamp(32px, 4.5vw, 48px)' :
                    'clamp(24px, 3.2vw, 36px)'
  return (
    <h2
      style={{
        fontFamily: 'Mallory, sans-serif',
        fontWeight: 700,
        fontSize,
        lineHeight: 1.08,
        letterSpacing: '-0.02em',
        color: '#000000',
        maxWidth,
      }}
    >
      {children}
    </h2>
  )
}

// ── Pill Button (filled black or ghost white) ────────────────────────────────
export function PillButton({ variant = 'filled', children, onClick, ...rest }) {
  const filled = {
    backgroundColor: '#000000',
    color: '#fdfcfc',
    border: '1px solid #000000',
    boxShadow: 'rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px 0px, rgba(0,0,0,0.04) 0px 2px 4px 0px',
  }
  const ghost = {
    backgroundColor: '#ffffff',
    color: '#000000',
    border: '1px solid #e5e5e5',
    boxShadow: 'rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px 0px, rgba(0,0,0,0.04) 0px 2px 4px 0px',
  }
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ opacity: variant === 'filled' ? 0.88 : 1, backgroundColor: variant === 'ghost' ? '#f5f3f1' : undefined }}
      whileTap={{ scale: 0.97 }}
      style={{
        ...(variant === 'filled' ? filled : ghost),
        borderRadius: '9999px',
        padding: '0 18px',
        height: '38px',
        fontFamily: 'Mallory, sans-serif',
        fontWeight: variant === 'filled' ? 700 : 400,
        fontSize: '14px',
        letterSpacing: '0.01em',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
      }}
      {...rest}
    >
      {children}
    </motion.button>
  )
}

// ── Section wrapper with reveal-on-scroll fade-up ────────────────────────────
export function AnimatedSection({ children, className = '', style = {}, delay = 0 }) {
  return (
    <motion.section
      className={className}
      style={style}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.section>
  )
}

// ── Container with max-width and centred padding ─────────────────────────────
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

// ── Gradient Orb (replaces images — pure CSS radial gradient sphere) ─────────
export function GradientOrb({ from, to, accent, size = 220 }) {
  return (
    <motion.div
      style={{
        width: size,
        height: size,
        borderRadius: '9999px',
        position: 'relative',
        background: `radial-gradient(circle at 30% 25%, ${accent}, ${from} 35%, ${to} 100%)`,
        boxShadow: `inset -20px -20px 40px rgba(0,0,0,0.15), 0 8px 30px rgba(0,0,0,0.08)`,
        flexShrink: 0,
      }}
      animate={{
        boxShadow: [
          'inset -20px -20px 40px rgba(0,0,0,0.15), 0 8px 30px rgba(0,0,0,0.08)',
          'inset -25px -15px 50px rgba(0,0,0,0.18), 0 10px 36px rgba(0,0,0,0.10)',
          'inset -20px -20px 40px rgba(0,0,0,0.15), 0 8px 30px rgba(0,0,0,0.08)',
        ],
      }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

// ── Card with hairline elevation ─────────────────────────────────────────────
export function Card({ children, style = {}, className = '', hover = false }) {
  return (
    <motion.div
      className={className}
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: 'rgba(0,0,0,0.4) 0px 0px 1.143px 0px, rgba(0,0,0,0.04) 0px 2px 4px 0px',
        ...style,
      }}
      whileHover={hover ? { y: -2, boxShadow: 'rgba(0,0,0,0.5) 0px 0px 1.143px 0px, rgba(0,0,0,0.06) 0px 6px 16px 0px' } : undefined}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  )
}
