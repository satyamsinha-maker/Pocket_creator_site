import { motion } from 'framer-motion'
import LiveCounter from './LiveCounter'
import NebulaCanvas from './NebulaCanvas'

const stats = [
  { value: '200M+',   label: 'Listeners Worldwide' },
  { value: '75,000+', label: 'Audio Series' },
  { value: '115 min', label: 'Avg. Daily Listen' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
})

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: '#0e0e0f' }}
    >
      {/* Nebula canvas — planet + glow + grain + particles */}
      <NebulaCanvas />

      {/* Faint radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 45% at 50% 10%, rgba(4,71,255,0.04) 0%, transparent 70%)',
          zIndex: 1,
        }}
      />

      <div
        className="relative z-10 flex flex-col items-start w-full"
        style={{ maxWidth: '1200px', margin: '0', padding: '112px 64px 100px 96px' }}
      >
        {/* Eyebrow */}
        <motion.p
          style={{
            fontFamily: 'Mallory, sans-serif',
            fontWeight: 400,
            fontSize: '13px',
            color: '#6b6975',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}
          {...fadeUp(0)}
        >
          The World's #1 Audio Series Platform
        </motion.p>

        {/* Headline */}
        <motion.h1
          style={{
            fontFamily: "'Mallory', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(40px, 6.5vw, 80px)',
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            color: '#f5f3f1',
            maxWidth: '720px',
            marginBottom: '24px',
          }}
          {...fadeUp(0.08)}
        >
          Stories That Keep<br />You Hooked
        </motion.h1>

        {/* Body */}
        <motion.p
          style={{
            fontFamily: 'Mallory, sans-serif',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: 1.6,
            color: '#9c98a6',
            maxWidth: '420px',
            marginBottom: '36px',
            letterSpacing: '0.01em',
          }}
          {...fadeUp(0.16)}
        >
          Dive into 75,000+ audio series — romance, thriller, fantasy & more.
          Crafted by 250,000+ writers, voiced by world-class artists.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-row items-center gap-3"
          style={{ marginBottom: '64px' }}
          {...fadeUp(0.24)}
        >
          <motion.button
            style={{
              backgroundColor: '#f5f3f1',
              color: '#0e0e0f',
              borderRadius: '9999px',
              padding: '0 22px',
              height: '42px',
              fontFamily: 'Mallory, sans-serif',
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: '0.02em',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              boxShadow: 'rgba(245,243,241,0.08) 0px 0px 0px 1px',
            }}
            whileHover={{ opacity: 0.88 }}
            whileTap={{ scale: 0.97 }}
          >
            Start Listening Free
          </motion.button>

          <motion.button
            style={{
              backgroundColor: 'transparent',
              color: '#f5f3f1',
              borderRadius: '9999px',
              padding: '0 18px',
              height: '42px',
              fontFamily: 'Mallory, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              letterSpacing: '0.01em',
              border: '1px solid #2a2a2d',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
            whileHover={{ borderColor: '#6b6975', backgroundColor: '#161618' }}
            whileTap={{ scale: 0.97 }}
          >
            Explore Stories
          </motion.button>
        </motion.div>

        {/* Divider */}
        <motion.div
          style={{ width: '40px', height: '1px', backgroundColor: '#2a2a2d', marginBottom: '32px' }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.5, transformOrigin: 'left' }}
        />

        {/* Stats row */}
        <motion.div
          className="flex flex-wrap items-start"
          style={{ gap: '40px', marginBottom: '40px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.32, duration: 0.6 }}
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-start" style={{ gap: '3px' }}>
              <span
                style={{
                  fontFamily: "'Mallory', sans-serif",
                  fontWeight: 700,
                  fontSize: '28px',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  color: '#f5f3f1',
                }}
              >
                {value}
              </span>
              <span
                style={{
                  fontFamily: 'Mallory, sans-serif',
                  fontWeight: 400,
                  fontSize: '12px',
                  color: '#6b6975',
                  letterSpacing: '0.05em',
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Live Counter */}
        <LiveCounter />
      </div>
    </section>
  )
}
