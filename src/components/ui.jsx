import { motion } from 'framer-motion'

/* ── Typeface stacks ──────────────────────────────────────────────────── */
const SANS    = "'Mallory', ui-sans-serif, system-ui, sans-serif"     // body / UI
const DISPLAY = "'Season Mix', Georgia, 'Times New Roman', serif"     // headings only

/* ── Color tokens — see docs/design-system.md ─────────────────────────── *
 * Mirrors the @theme block in index.css. Use these constants in JS-side
 * style composition (motion variants, conditional inline styles, etc.).
 * For className-based styling, use Tailwind utilities directly.
 * ─────────────────────────────────────────────────────────────────────── */
export const COLORS = {
  // Ink family
  ink:        '#1C1C1C',
  inkTint1:   '#383838',
  inkTint2:   '#545454',
  inkTint3:   '#717171',
  inkTint4:   '#8D8D8D',
  inkTint5:   '#A9A9A9',
  inkTint6:   '#C6C6C6',
  inkTint7:   '#E2E2E2',
  inkShade1:  '#181818',
  inkShade2:  '#151515',
  inkShade3:  '#111111',

  // Vellum family
  vellum:        '#FAF9F1',
  vellumShade1:  '#DAD9D2',
  vellumShade2:  '#BBBAB4',
  vellumShade3:  '#9C9B96',
  vellumShade4:  '#7D7C78',

  // Scarlet family (brand)
  scarlet:        '#F51D00',
  scarletShade1:  '#D61900',
  scarletShade2:  '#B71500',
  scarletTint6:   '#FCC6BF',
  scarletTint7:   '#FDE2DF',

  // Semantic (text)
  textPrimary:    '#1C1C1C',   // = ink
  textSecondary:  '#717171',   // = ink-tint-3
  textTertiary:   '#8D8D8D',   // = ink-tint-4
  textDisabled:   '#A9A9A9',   // = ink-tint-5
  textOnDark:     '#FAF9F1',   // = vellum

  // Semantic (surface)
  surfacePage:     '#FAF9F1',  // = vellum
  surfaceCard:     '#FEFEFD',  // = vellum-tint-7
  surfaceAlt:      '#DAD9D2',  // = vellum-shade-1
  surfaceDivider:  '#BBBAB4',  // = vellum-shade-2
  surfaceInverse:  '#1C1C1C',  // = ink
}

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
export function Eyebrow({ children, color = COLORS.scarlet, style = {} }) {
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
        color: COLORS.textPrimary,        /* ink */
        maxWidth,
        ...style,
      }}
    >
      {children}
    </Tag>
  )
}

/* ── Subheading — 18 px lead paragraph (Mallory) ───────────────────────── */
export function Subheading({ children, color = COLORS.textSecondary, maxWidth, style = {} }) {
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
export function Body({ children, color = COLORS.textSecondary, size = 'md', maxWidth, style = {} }) {
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
export function Label({ children, color = COLORS.textPrimary, weight = 400, style = {} }) {
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
export function Caption({ children, color = COLORS.textTertiary, style = {} }) {
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

/* ── PillButton — semantic variants per design-system.md ──────────────── *
 *  filled   — Primary CTA: ink fill, vellum text, hover→ink-tint-1
 *  outlined — Secondary CTA: transparent fill, ink border + ink text,
 *             hover→ink-tint-7 background
 *  brand    — Brand CTA (use sparingly): scarlet fill, vellum text
 *  ghost    — text-only minimal action (no fill, no border)
 *  sienna   — legacy alias retained for Hero/FinalCTA; resolves to brand
 * ─────────────────────────────────────────────────────────────────────── */
export function PillButton({ variant = 'filled', children, onClick, ...rest }) {
  const variants = {
    filled: {
      backgroundColor: COLORS.ink,
      color:           COLORS.vellum,
      border:          `1px solid ${COLORS.ink}`,
      padding:         '0 24px',
      height:          '40px',
      hoverBg:         COLORS.inkTint1,
    },
    outlined: {
      backgroundColor: 'transparent',
      color:           COLORS.ink,
      border:          `1px solid ${COLORS.ink}`,
      padding:         '0 24px',
      height:          '40px',
      hoverBg:         COLORS.inkTint7,
    },
    ghost: {
      backgroundColor: 'transparent',
      color:           COLORS.ink,
      border:          'none',
      padding:         '0 4px',
      height:          '40px',
      hoverBg:         'rgba(28,28,28,0.05)',
    },
    brand: {
      backgroundColor: COLORS.scarlet,
      color:           COLORS.vellum,
      border:          `1px solid ${COLORS.scarlet}`,
      padding:         '0 24px',
      height:          '40px',
      hoverBg:         COLORS.scarletShade1,
    },
    sienna: { /* legacy alias — kept so Hero/FinalCTA submit buttons compile */
      backgroundColor: COLORS.scarlet,
      color:           COLORS.vellum,
      border:          `1px solid ${COLORS.scarlet}`,
      padding:         '0 18px',
      height:          '36px',
      hoverBg:         COLORS.scarletShade1,
    },
  }
  const v = variants[variant] || variants.filled
  const { hoverBg, ...visual } = v
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ backgroundColor: hoverBg }}
      whileTap={{ scale: 0.98 }}
      style={{
        ...visual,
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
        transition: 'background-color 120ms cubic-bezier(0.22, 1, 0.36, 1)',
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

/* Re-export the typescale + fonts so other modules can compose ad-hoc styles
 * (COLORS is exported at its declaration above)                              */
export { SCALE, SANS, DISPLAY }
