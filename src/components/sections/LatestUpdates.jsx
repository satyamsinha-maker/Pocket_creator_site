import { motion } from 'framer-motion'
import { Container, AnimatedSection, SectionHeading, PillButton } from '../ui'

const UPDATES = [
  {
    title: 'Introducing\nMusic',
    badge: 'Introducing Music — ElevenStudios',
    date: '2026-04-22',
    gradient: 'linear-gradient(135deg, #ffe1c8 0%, #ff8e6a 45%, #ff5a70 100%)',
  },
  {
    title: 'Eleven Labs\nfor Government',
    badge: 'Introducing Eleven Labs for Government',
    date: '2026-04-10',
    gradient: 'linear-gradient(135deg, #ffd5a8 0%, #ff8b65 50%, #d54a55 100%)',
  },
  {
    title: 'Expressive\nMode',
    badge: 'Introducing Expressive Mode for Voice agents',
    date: '2026-03-29',
    gradient: 'linear-gradient(135deg, #d6c4ff 0%, #8a6bff 50%, #4d2eb1 100%)',
  },
]

export default function LatestUpdates() {
  return (
    <AnimatedSection style={{ padding: '96px 0' }}>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px' }}>
          <SectionHeading size="md">Latest updates</SectionHeading>
          <PillButton variant="ghost">All posts</PillButton>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="lu-grid">
          {UPDATES.map((u, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              style={{
                display: 'block',
                borderRadius: '16px',
                overflow: 'hidden',
                textDecoration: 'none',
                color: '#000',
              }}
            >
              <div
                style={{
                  background: u.gradient,
                  borderRadius: '16px',
                  aspectRatio: '5 / 3',
                  padding: '28px',
                  display: 'flex',
                  alignItems: 'flex-end',
                  marginBottom: '12px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Mallory, sans-serif',
                    fontWeight: 700,
                    fontSize: '24px',
                    lineHeight: 1.1,
                    color: '#fff',
                    whiteSpace: 'pre-line',
                    textShadow: '0 1px 6px rgba(0,0,0,0.18)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {u.title}
                </p>
              </div>
              <p style={{ fontFamily: 'Mallory, sans-serif', fontSize: '13px', fontWeight: 500, color: '#000', marginBottom: '4px' }}>{u.badge}</p>
              <p style={{ fontFamily: 'Mallory, sans-serif', fontSize: '12px', color: '#777169' }}>{u.date}</p>
            </motion.a>
          ))}
        </div>
      </Container>

      <style>{`
        @media (max-width: 768px) {
          .lu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </AnimatedSection>
  )
}
