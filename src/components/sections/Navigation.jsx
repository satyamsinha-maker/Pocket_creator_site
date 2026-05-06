import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { PillButton } from '../ui'

const NAV = [
  { label: 'How it works', href: '#journey' },
  { label: 'Stories',      href: '#stories' },
  { label: 'Earnings',     href: '#earn' },
  { label: 'Pricing',      href: '#pricing' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

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
        backgroundColor: 'rgba(255,255,255,0.85)',
        backdropFilter: 'saturate(180%) blur(20px)',
        WebkitBackdropFilter: 'saturate(180%) blur(20px)',
        borderBottom: scrolled ? '1px solid #e5edf5' : '1px solid transparent',
        transition: 'border-bottom 0.2s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 32px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo + wordmark */}
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M2 20 L9 8 L13 14 L17 6 L22 20 Z" stroke="#061b31" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
            <circle cx="17" cy="6" r="1.4" fill="#533afd" />
          </svg>
          <span
            style={{
              fontFamily: "'Mallory', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              letterSpacing: '-0.009px',
              color: '#061b31',
            }}
          >
            Pocket Sherpa
          </span>
        </a>

        {/* Centre links */}
        <ul
          style={{
            display: 'flex',
            gap: '32px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
          className="hidden md:flex"
        >
          {NAV.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                style={{
                  fontFamily: "'Mallory', sans-serif",
                  fontWeight: 400,
                  fontSize: '14px',
                  color: '#061b31',
                  textDecoration: 'none',
                  transition: 'color 0.18s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#533afd')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#061b31')}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Auth */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <PillButton variant="ghost">Sign in</PillButton>
          <PillButton variant="filled">Start writing free</PillButton>
        </div>
      </div>
    </motion.nav>
  )
}
