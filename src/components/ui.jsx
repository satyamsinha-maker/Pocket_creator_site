import { motion } from 'framer-motion'

/* ── Eyebrow ──────────────────────────────────────────────────────────── */
export function Eyebrow({ children, className = '' }) {
  return (
    <p className={`text-[12px] font-normal tracking-eyebrow uppercase text-violet mb-4 ${className}`}>
      {children}
    </p>
  )
}

/* ── SerifHeading — legacy name; uses Mallory at large display sizes ──── */
export function SerifHeading({ children, size = 'lg', maxWidth, as: Tag = 'h2', className = '' }) {
  const sizeClasses =
    size === 'xl' ? 'text-[clamp(40px,5.4vw,56px)] leading-[1.07] tracking-display' :
    size === 'lg' ? 'text-[clamp(32px,4vw,44px)] leading-[1.1] tracking-heading-lg' :
    size === 'md' ? 'text-[clamp(24px,2.8vw,32px)] leading-[1.15] tracking-heading' :
                    'text-[clamp(20px,2.2vw,22px)] leading-[1.2] tracking-heading-sm'
  return (
    <Tag
      className={`font-normal text-midnight ${sizeClasses} ${className}`}
      style={maxWidth ? { maxWidth } : undefined}
    >
      {children}
    </Tag>
  )
}

/* ── Body ─────────────────────────────────────────────────────────────── */
export function Body({ children, color, size = 'md', maxWidth, className = '' }) {
  const sizeClass =
    size === 'lg' ? 'text-subheading leading-subheading' :
    size === 'sm' ? 'text-[12px] leading-[1.4]' :
                    'text-body leading-body'
  return (
    <p
      className={`font-normal ${color ? '' : 'text-slate'} ${sizeClass} ${className}`}
      style={{ ...(maxWidth ? { maxWidth } : {}), ...(color ? { color } : {}) }}
    >
      {children}
    </p>
  )
}

/* ── PillButton — Stripe square 4px buttons ───────────────────────────── */
export function PillButton({ variant = 'filled', children, onClick, className = '', ...rest }) {
  const variants = {
    filled:
      'bg-violet text-white border border-violet h-10 px-6 hover:bg-violet-dark',
    ghost:
      'bg-transparent text-midnight border-0 h-10 px-1 hover:bg-violet/[0.06]',
    outlined:
      'bg-transparent text-violet border border-violet-washed h-10 px-6 hover:bg-violet/[0.04]',
    sienna:
      'bg-violet text-white border border-violet h-9 px-[18px] hover:bg-violet-dark',
  }
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className={`${variants[variant] || variants.filled} rounded-button font-normal text-body cursor-pointer whitespace-nowrap inline-flex items-center gap-1.5 transition-colors duration-200 ${className}`}
      {...rest}
    >
      {children}
    </motion.button>
  )
}

/* ── AnimatedSection ──────────────────────────────────────────────────── */
export function AnimatedSection({ children, className = '', delay = 0, id, style = {} }) {
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
export function Container({ children, className = '' }) {
  return (
    <div className={`max-w-[1200px] mx-auto px-8 ${className}`}>
      {children}
    </div>
  )
}

/* ── Card ─────────────────────────────────────────────────────────────── */
export function Card({ children, className = '', hover = false, surface = 'powder' }) {
  const bg = surface === 'porcelain' ? 'bg-porcelain' : surface === 'white' ? 'bg-white' : 'bg-powder'
  return (
    <motion.div
      className={`${bg} rounded-card p-3 ${className}`}
      whileHover={hover ? { y: -2, boxShadow: 'rgba(50, 50, 93, 0.12) 0px 16px 32px 0px' } : undefined}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  )
}
