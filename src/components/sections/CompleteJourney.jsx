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
    <AnimatedSection id="journey" style={{ padding: '96px 0', background: '#f3ecdc' }}>
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
            gap: '0',
            position: 'relative',
          }}
          className="journey-grid"
        >
          {STEPS.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'relative',
                padding: '24px 24px 24px 0',
                borderTop: '1px solid #e8dfd0',
              }}
            >
              {/* Number */}
              <p
                style={{
                  fontFamily: "'Lora', Georgia, serif",
                  fontWeight: 400,
                  fontStyle: 'italic',
                  fontSize: '13px',
                  color: '#b85c3a',
                  marginBottom: '14px',
                  letterSpacing: '0.05em',
                }}
              >
                [{s.num}]
              </p>

              {/* Title */}
              <p
                style={{
                  fontFamily: "'Lora', Georgia, serif",
                  fontWeight: 600,
                  fontSize: '22px',
                  lineHeight: 1.2,
                  color: '#1c1814',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                {s.title}
                {i < STEPS.length - 1 && (
                  <span style={{ color: '#b85c3a', fontSize: '18px', fontFamily: 'Mallory, sans-serif' }}>
                    →
                  </span>
                )}
              </p>

              <Body size="sm" color="#6b5e52" maxWidth="220px">
                {s.blurb}
              </Body>
            </motion.div>
          ))}
        </div>

        <p
          style={{
            marginTop: '40px',
            fontFamily: "'Lora', Georgia, serif",
            fontStyle: 'italic',
            fontSize: '14px',
            color: '#8c4528',
            paddingLeft: '14px',
            borderLeft: '2px solid #b85c3a',
            maxWidth: '640px',
            lineHeight: 1.55,
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
