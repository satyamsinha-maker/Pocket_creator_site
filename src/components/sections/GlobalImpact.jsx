import { Container, AnimatedSection, SectionHeading } from '../ui'
import { motion } from 'framer-motion'

const STORIES = [
  {
    tag: 'Story',
    label: 'Brand authenticity',
    title: 'How NVIDIA scaled multilingual narration with V3.',
    gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2a2520 60%, #ff8a3a 100%)',
    textColor: '#ffffff',
  },
  {
    tag: 'Case study',
    label: 'AI Designer',
    title: 'How Designjoy ships 5,000 voice variants per week.',
    gradient: 'linear-gradient(135deg, #2a1a1a 0%, #6b2a25 60%, #ff5a45 100%)',
    textColor: '#ffffff',
  },
  {
    tag: 'Story',
    label: 'Voice cloning',
    title: 'A theatre studio that gave its founder a second voice.',
    gradient: 'linear-gradient(135deg, #1a1a22 0%, #2c2840 60%, #6b6090 100%)',
    textColor: '#ffffff',
  },
]

export default function GlobalImpact() {
  return (
    <AnimatedSection style={{ padding: '96px 0' }}>
      <Container>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <SectionHeading maxWidth="100%">Showcasing the global<br />impact of AI audio research</SectionHeading>

          {/* mini tab row */}
          <div style={{ display: 'inline-flex', gap: '8px', marginTop: '20px' }}>
            <button style={{ background: '#000', color: '#fdfcfc', border: '1px solid #000', padding: '6px 12px', borderRadius: '18px', fontFamily: 'Mallory, sans-serif', fontWeight: 700, fontSize: '12px', letterSpacing: '0.05em', textTransform: 'uppercase', cursor: 'pointer' }}>Showcased</button>
            <button style={{ background: 'transparent', color: '#000', border: '1px solid #e5e5e5', padding: '6px 12px', borderRadius: '18px', fontFamily: 'Mallory, sans-serif', fontWeight: 700, fontSize: '12px', letterSpacing: '0.05em', textTransform: 'uppercase', cursor: 'pointer' }}>Voice library</button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="gi-grid">
          {STORIES.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              style={{
                background: s.gradient,
                borderRadius: '16px',
                padding: '24px',
                aspectRatio: '4 / 5',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                color: s.textColor,
              }}
            >
              <span
                style={{
                  fontFamily: 'Mallory, sans-serif',
                  fontWeight: 700,
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  alignSelf: 'flex-start',
                  background: 'rgba(255,255,255,0.18)',
                  padding: '4px 10px',
                  borderRadius: '9999px',
                }}
              >
                {s.tag}
              </span>
              <div>
                <p style={{ fontFamily: 'Mallory, sans-serif', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.7, marginBottom: '8px' }}>
                  {s.label}
                </p>
                <p style={{ fontFamily: 'Mallory, sans-serif', fontWeight: 700, fontSize: '20px', lineHeight: 1.2, letterSpacing: '-0.01em' }}>
                  {s.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      <style>{`
        @media (max-width: 768px) {
          .gi-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </AnimatedSection>
  )
}
