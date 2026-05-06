import { Container, AnimatedSection, SerifHeading, Body, Eyebrow } from '../ui'
import { motion } from 'framer-motion'

const STEPS = [
  { num: '01', title: 'Your idea',     blurb: 'Brainstorm with Sherpa.' },
  { num: '02', title: 'Your story',    blurb: 'Sherpa drafts and remembers every detail.' },
  { num: '03', title: 'Audio series',  blurb: 'We produce voiceover, SFX, and video.' },
  { num: '04', title: 'Listeners pay', blurb: 'Live on Pocket FM. You earn share.' },
]

export default function CompleteJourney() {
  return (
    <AnimatedSection id="journey" style={{ padding: '96px 0', background: '#e5edf5' }}>
      <Container>
        <div style={{ marginBottom: '56px', maxWidth: '720px' }}>
          <Eyebrow>The complete journey</Eyebrow>
          <SerifHeading size="lg">
            From a blank page to a paid audience.<br />We handle everything in between.
          </SerifHeading>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '12px',
          }}
          className="journey-grid"
        >
          {STEPS.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: '#ffffff',
                borderRadius: '6px',
                padding: '24px',
                position: 'relative',
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: '11px',
                  color: '#533afd',
                  marginBottom: '14px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Step {s.num}
              </p>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: '22px',
                  lineHeight: 1.2,
                  letterSpacing: '-0.01em',
                  color: '#061b31',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                {s.title}
                {i < STEPS.length - 1 && (
                  <span style={{ color: '#533afd', fontSize: '16px' }}>→</span>
                )}
              </p>

              <Body size="sm" color="#50617a">
                {s.blurb}
              </Body>
            </motion.div>
          ))}
        </div>

        <p
          style={{
            marginTop: '40px',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: '14px',
            color: '#50617a',
            paddingLeft: '14px',
            borderLeft: '2px solid #533afd',
            maxWidth: '640px',
            lineHeight: 1.5,
          }}
        >
          Most visitors will not read the rest of the page. If you read nothing else, you should still understand the loop.
        </p>
      </Container>

      <style>{`
        @media (max-width: 900px) { .journey-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 540px) { .journey-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </AnimatedSection>
  )
}
