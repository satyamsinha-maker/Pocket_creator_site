import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { PillButton } from '../ui'

const NAV = ['Featured', 'Solutions', 'Developers', 'About', 'Pricing']

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(253,252,252,0.85)',
        backdropFilter: 'saturate(180%) blur(20px)',
        WebkitBackdropFilter: 'saturate(180%) blur(20px)',
        borderBottom: scrolled ? '1px solid #e5e5e5' : '1px solid transparent',
        transition: 'border-bottom 0.2s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 32px',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo + wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            aria-hidden
            style={{
              width: 22,
              height: 22,
              borderRadius: '9999px',
              background:
                'conic-gradient(from 180deg, #3d75d8, #75bee5, #52d0e9, #1f5fcf, #2c54ca, #ade8f3, #d8f1f5, #2bbad0, #1e53b0, #2f40d2, #3d75d8)',
            }}
          />
          <span
            style={{
              fontFamily: 'Mallory, sans-serif',
              fontWeight: 700,
              fontSize: '15px',
              letterSpacing: '0.02em',
              color: '#000',
            }}
          >
            ElevenLabs
          </span>
        </div>

        {/* Centre links */}
        <ul
          style={{
            display: 'flex',
            gap: '28px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
          className="hidden md:flex"
        >
          {NAV.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                style={{
                  fontFamily: 'Mallory, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  color: '#000000',
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                  transition: 'color 0.18s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#777169')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#000000')}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Auth buttons */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <PillButton variant="ghost">Log in</PillButton>
          <PillButton variant="filled">Sign up</PillButton>
        </div>
      </div>
    </motion.nav>
  )
}
