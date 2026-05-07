import { motion } from 'framer-motion'
import { Container, AnimatedSection, SerifHeading, Body, Eyebrow, SCALE } from '../ui'

const eyebrowStyle = (color = '#F51D00') => ({
  fontFamily: SCALE.eyebrow.family, fontWeight: SCALE.eyebrow.weight,
  fontSize: SCALE.eyebrow.fontSize, lineHeight: SCALE.eyebrow.lineHeight,
  letterSpacing: SCALE.eyebrow.letterSpacing, textTransform: SCALE.eyebrow.textTransform,
  color,
})
const captionStyle = (color = '#8D8D8D') => ({
  fontFamily: SCALE.caption.family, fontWeight: SCALE.caption.weight,
  fontSize: SCALE.caption.fontSize, lineHeight: SCALE.caption.lineHeight,
  letterSpacing: SCALE.caption.letterSpacing, color,
})

function EarningsDashStub() {
  return (
    <div style={{ background: '#ffffff', borderRadius: '6px', padding: '24px', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 32px 8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>
          <p style={{ ...eyebrowStyle('#8D8D8D'), marginBottom: '6px' }}>This month</p>
          {/* h2 — Season Mix, fluid 28 → 36 px */}
          <p
            style={{
              fontFamily:    SCALE.h2.family,
              fontWeight:    SCALE.h2.weight,
              fontSize:      SCALE.h2.fontSize,
              lineHeight:    SCALE.h2.lineHeight,
              letterSpacing: SCALE.h2.letterSpacing,
              color: '#1C1C1C',
              fontFeatureSettings: '"tnum"',
            }}
          >
            ₹84,520
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ ...eyebrowStyle('#8D8D8D'), marginBottom: '6px' }}>Listens</p>
          <p
            style={{
              fontFamily:    SCALE.h2.family,
              fontWeight:    SCALE.h2.weight,
              fontSize:      SCALE.h2.fontSize,
              lineHeight:    SCALE.h2.lineHeight,
              letterSpacing: SCALE.h2.letterSpacing,
              color: '#1C1C1C',
              fontFeatureSettings: '"tnum"',
            }}
          >
            1.2M
          </p>
        </div>
      </div>

      <svg viewBox="0 0 320 80" style={{ width: '100%', height: 'auto' }}>
        <defs>
          <linearGradient id="earnGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F51D00" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#F51D00" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,60 C30,50 60,55 90,40 C120,28 150,32 180,20 C210,12 240,18 270,8 C290,4 310,2 320,2 L320,80 L0,80 Z" fill="url(#earnGrad)" />
        <path d="M0,60 C30,50 60,55 90,40 C120,28 150,32 180,20 C210,12 240,18 270,8 C290,4 310,2 320,2" stroke="#F51D00" strokeWidth="1.8" fill="none" />
      </svg>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px' }}>
        <span style={captionStyle('#8D8D8D')}>Wk 1</span>
        <span style={captionStyle('#8D8D8D')}>Wk 2</span>
        <span style={captionStyle('#8D8D8D')}>Wk 3</span>
        <span style={captionStyle('#8D8D8D')}>Wk 4</span>
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
    <AnimatedSection id="earn" style={{ padding: '120px 0', background: '#ffffff' }}>
      <Container>
        <div style={{ maxWidth: '720px', marginBottom: '64px' }}>
          <Eyebrow>Act 3 · Listeners pay</Eyebrow>
          <SerifHeading size="h2">
            Your story goes live.<br />You get paid.
          </SerifHeading>
          <div style={{ marginTop: '20px', maxWidth: '520px' }}>
            <Body size="md">
              Your finished series launches on Pocket FM, where 100 million listeners are already paying for serialized audio fiction. They listen, they pay, you earn. Every time.
            </Body>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px', maxWidth: '720px', margin: '0 auto 64px' }}
        >
          <EarningsDashStub />
          <div style={{ textAlign: 'center', marginTop: '12px' }}>
            <Body size="sm" color="#717171">
              Anjali R. · ‘The Reckoning’ · 47 episodes live
            </Body>
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="act3-grid">
          {BLOCKS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -2, boxShadow: 'rgba(50, 50, 93, 0.12) 0px 16px 32px 0px' }}
              style={{
                background: '#e5edf5',
                borderRadius: '6px',
                padding: '24px',
                transition: 'box-shadow 0.25s',
              }}
            >
              <p style={{ ...eyebrowStyle('#F51D00'), marginBottom: '10px' }}>
                Block {String(i + 1).padStart(2, '0')}
              </p>
              {/* h3 — Season Mix per typescale rule */}
              <h3
                style={{
                  fontFamily:    SCALE.h3.family,
                  fontWeight:    SCALE.h3.weight,
                  fontSize:      SCALE.h3.fontSize,
                  lineHeight:    SCALE.h3.lineHeight,
                  letterSpacing: SCALE.h3.letterSpacing,
                  color: '#1C1C1C',
                  marginBottom: '10px',
                }}
              >
                {b.title}
              </h3>
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
