import { motion } from 'framer-motion'
import { Container, AnimatedSection, SerifHeading, Body, Eyebrow, Card } from '../ui'

function EarningsDashStub() {
  return (
    <div style={{ background: '#fff', border: '1px solid #e8dfd0', borderRadius: '12px', padding: '20px', boxShadow: 'rgba(28,24,20,0.4) 0px 0px 1.143px 0px, rgba(28,24,20,0.04) 0px 4px 12px 0px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>
          <p style={{ fontFamily: 'Mallory, sans-serif', fontSize: '11px', color: '#6b5e52', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>This month</p>
          <p style={{ fontFamily: "'Lora', Georgia, serif", fontWeight: 600, fontSize: '32px', color: '#1c1814', letterSpacing: '-0.02em' }}>₹84,520</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontFamily: 'Mallory, sans-serif', fontSize: '11px', color: '#6b5e52', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Listens</p>
          <p style={{ fontFamily: "'Lora', Georgia, serif", fontWeight: 600, fontSize: '32px', color: '#1c1814', letterSpacing: '-0.02em' }}>1.2M</p>
        </div>
      </div>

      <svg viewBox="0 0 320 80" style={{ width: '100%', height: 'auto' }}>
        <defs>
          <linearGradient id="earnGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#b85c3a" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#b85c3a" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,60 C30,50 60,55 90,40 C120,28 150,32 180,20 C210,12 240,18 270,8 C290,4 310,2 320,2 L320,80 L0,80 Z" fill="url(#earnGrad)" />
        <path d="M0,60 C30,50 60,55 90,40 C120,28 150,32 180,20 C210,12 240,18 270,8 C290,4 310,2 320,2" stroke="#b85c3a" strokeWidth="1.8" fill="none" />
      </svg>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', fontFamily: 'Mallory, sans-serif', fontSize: '10px', color: '#8c8174' }}>
        <span>Wk 1</span><span>Wk 2</span><span>Wk 3</span><span>Wk 4</span>
      </div>
    </div>
  )
}

const BLOCKS = [
  {
    title: 'A platform that already pays writers',
    body:  'Pocket FM listeners spend coins to unlock episodes. A share of every coin spent on your series goes directly to you, automatically, every month.',
  },
  {
    title: 'Built-in audience',
    body:  'You do not have to find listeners. Pocket FM does. Our recommendation engine surfaces your series to the readers most likely to love it, the same way Spotify surfaces music.',
  },
  {
    title: 'Transparent earnings',
    body:  'Track your listens, your earnings and your audience growth in a single dashboard. Know exactly how much you are making, in real time.',
  },
]

export default function Act3Earn() {
  return (
    <AnimatedSection id="earn" style={{ padding: '120px 0' }}>
      <Container>
        <div style={{ maxWidth: '720px', marginBottom: '64px' }}>
          <Eyebrow>Act 3 · Listeners pay</Eyebrow>
          <SerifHeading size="lg">
            Your story goes live.<br />You get paid.
          </SerifHeading>
          <div style={{ marginTop: '20px', maxWidth: '520px' }}>
            <Body size="md">
              Your finished series launches on Pocket FM, where 100 million listeners are already paying for serialized audio fiction. They listen, they pay, you earn. Every time.
            </Body>
          </div>
        </div>

        {/* Dashboard featured */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px', maxWidth: '720px', margin: '0 auto 64px' }}
        >
          <EarningsDashStub />
          <p style={{ fontFamily: "'Lora', Georgia, serif", fontStyle: 'italic', fontSize: '13px', color: '#6b5e52', textAlign: 'center', marginTop: '12px' }}>
            Anjali R. · ‘The Reckoning’ · 47 episodes live
          </p>
        </motion.div>

        {/* Three pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="act3-grid">
          {BLOCKS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -2 }}
              style={{
                background: '#fff',
                border: '1px solid #e8dfd0',
                borderRadius: '12px',
                padding: '28px',
              }}
            >
              <p style={{ fontFamily: "'Lora', Georgia, serif", fontStyle: 'italic', fontSize: '13px', color: '#b85c3a', marginBottom: '8px' }}>
                Block {String(i + 1).padStart(2, '0')}
              </p>
              <p style={{ fontFamily: "'Lora', Georgia, serif", fontWeight: 600, fontSize: '19px', lineHeight: 1.2, color: '#1c1814', marginBottom: '10px' }}>
                {b.title}
              </p>
              <Body size="sm">{b.body}</Body>
            </motion.div>
          ))}
        </div>
      </Container>

      <style>{`
        @media (max-width: 900px) { .act3-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </AnimatedSection>
  )
}
