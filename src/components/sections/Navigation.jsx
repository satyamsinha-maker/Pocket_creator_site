import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Logo from '../Logo'
import { SCALE, COLORS } from '../ui'

const NAV = [
  { label: 'How it works', href: '#journey' },
  { label: 'Stories',      href: '#stories' },
  { label: 'Earnings',     href: '#earn' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(255,255,255,0.92)',
        backdropFilter: 'saturate(180%) blur(20px)',
        WebkitBackdropFilter: 'saturate(180%) blur(20px)',
        borderBottom: scrolled ? '1px solid #ececec' : '1px solid transparent',
        transition: 'border-bottom 0.2s ease',
      }}
    >
      {/* 3-column grid: 1fr | auto | 1fr — keeps centre menu perfectly centred
       *  regardless of left-cluster or right-cluster width.                    */}
      <div
        style={{
          width: '100%',
          padding: '0 clamp(20px, 5vw, 64px)',
          height: 'clamp(64px, 7vw, 88px)',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          gap: '16px',
        }}
        className="nav-row"
      >
        {/* ── LEFT — Logo ─────────────────────────────────────────────── */}
        <a
          href="#top"
          style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', justifySelf: 'start' }}
        >
          <Logo scale={1} />
        </a>

        {/* ── CENTRE — Menu links ──────────────────────────────────────── */}
        <ul
          style={{
            display: 'flex',
            gap: 'clamp(20px, 3vw, 40px)',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            justifySelf: 'center',
          }}
          className="nav-links"
        >
          {NAV.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                style={{
                  fontFamily:    SCALE.body.family,
                  fontWeight:    SCALE.body.weight,
                  fontSize:      SCALE.body.fontSize,        /* 16px body */
                  lineHeight:    SCALE.body.lineHeight,
                  letterSpacing: SCALE.body.letterSpacing,
                  color: COLORS.textSecondary,               /* ink-tint-3 */
                  textDecoration: 'none',
                  transition: 'color 0.18s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.textPrimary)}
                onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.textSecondary)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── RIGHT — CTA + (mobile) hamburger ────────────────────────── */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '12px', justifySelf: 'end' }}
        >
          {/* Primary CTA — ink fill, vellum text per design-system.md */}
          <motion.a
            href="#signup"
            whileHover={{ backgroundColor: COLORS.inkTint1 }}
            whileTap={{ scale: 0.98 }}
            style={{
              backgroundColor: COLORS.ink,
              color:           COLORS.vellum,
              fontFamily:    SCALE.body.family,
              fontWeight:    SCALE.body.weight,
              fontSize:      SCALE.body.fontSize,
              lineHeight:    SCALE.body.lineHeight,
              letterSpacing: SCALE.body.letterSpacing,
              padding: '8px 20px',
              borderRadius: '32px',
              textDecoration: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              transition: 'background-color 120ms cubic-bezier(0.22, 1, 0.36, 1)',
              whiteSpace: 'nowrap',
            }}
          >
            Start writing
          </motion.a>

          {/* Hamburger — visible only ≤ 768 px via CSS */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="nav-burger"
            style={{
              display: 'none',
              width: 40,
              height: 40,
              padding: 0,
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
              <path d="M0 1H22M0 7H22M0 13H22" stroke={COLORS.ink} strokeWidth="1.6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            borderTop: '1px solid #ececec',
            background: '#ffffff',
            padding: '20px 24px',
          }}
          className="nav-drawer"
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily:    SCALE.subheading.family,
                    fontWeight:    SCALE.subheading.weight,
                    fontSize:      SCALE.subheading.fontSize,    /* 18px subheading */
                    lineHeight:    SCALE.subheading.lineHeight,
                    letterSpacing: SCALE.subheading.letterSpacing,
                    color: COLORS.textPrimary,
                    textDecoration: 'none',
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-burger { display: inline-flex !important; }
        }
        @media (max-width: 380px) {
          .nav-row { gap: 8px !important; }
        }
      `}</style>
    </motion.nav>
  )
}
