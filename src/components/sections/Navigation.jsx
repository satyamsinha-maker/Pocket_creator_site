import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Logo from '../Logo'

const NAV = [
  { label: 'How it works', href: '#journey' },
  { label: 'Stories',      href: '#stories' },
  { label: 'Earnings',     href: '#earn' },
]

const SANS = "'Mallory', sans-serif"

export default function Navigation() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)

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
      <div
        style={{
          width: '100%',
          padding: '0 clamp(20px, 5vw, 64px)',
          height: 'clamp(64px, 7vw, 88px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
        className="nav-row"
      >
        {/* ── LEFT: Logo ─────────────────────────────────────────────── */}
        <a
          href="#top"
          style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
          className="nav-logo"
        >
          <Logo scale={1} />
        </a>

        {/* ── RIGHT: links + CTA ────────────────────────────────────── */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: 'clamp(20px, 3vw, 40px)' }}
          className="nav-right"
        >
          <ul
            style={{
              display: 'flex',
              gap: 'clamp(20px, 3vw, 40px)',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
            className="nav-links"
          >
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  style={{
                    fontFamily: SANS,
                    fontWeight: 400,
                    fontSize: 'clamp(14px, 1.4vw, 20px)',
                    color: '#828282',
                    textDecoration: 'none',
                    transition: 'color 0.18s',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#1a1a1a')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#828282')}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <motion.a
            href="#signup"
            whileHover={{ backgroundColor: '#c81700' }}
            whileTap={{ scale: 0.98 }}
            style={{
              backgroundColor: '#F51D00',
              color: '#ffffff',
              fontFamily: SANS,
              fontWeight: 400,
              fontSize: 'clamp(14px, 1.4vw, 20px)',
              padding: 'clamp(6px, 0.6vw, 8px) clamp(14px, 1.6vw, 20px)',
              borderRadius: '32px',
              textDecoration: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              transition: 'background-color 0.18s',
              whiteSpace: 'nowrap',
            }}
          >
            Sign up
          </motion.a>

          {/* Hamburger (visible only ≤640px via CSS) */}
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
              <path d="M0 1H22M0 7H22M0 13H22" stroke="#1a1a1a" strokeWidth="1.6" />
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
                    fontFamily: SANS,
                    fontWeight: 400,
                    fontSize: '17px',
                    color: '#1a1a1a',
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
