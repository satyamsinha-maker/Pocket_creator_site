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
      className={`sticky top-0 z-[100] bg-white/85 backdrop-blur-xl backdrop-saturate-150 transition-[border] duration-200 ${scrolled ? 'border-b border-powder' : 'border-b border-transparent'}`}
    >
      <div className="max-w-[1200px] mx-auto px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 no-underline">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M2 20 L9 8 L13 14 L17 6 L22 20 Z" stroke="#061b31" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
            <circle cx="17" cy="6" r="1.4" fill="#F51D00" />
          </svg>
          <span className="font-normal text-base tracking-heading-sm text-midnight">
            Pocket Sherpa
          </span>
        </a>

        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {NAV.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-normal text-body text-midnight no-underline transition-colors duration-200 hover:text-violet"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-3 items-center">
          <PillButton variant="ghost">Sign in</PillButton>
          <PillButton variant="filled">Start writing free</PillButton>
        </div>
      </div>
    </motion.nav>
  )
}
