import { Container, AnimatedSection, SerifHeading, Body, Eyebrow, SCALE } from '../ui'
import { motion } from 'framer-motion'

const STEPS = [
  { num: '01', title: 'Your idea',     blurb: 'Brainstorm with Sherpa.' },
  { num: '02', title: 'Your story',    blurb: 'Sherpa drafts and remembers every detail.' },
  { num: '03', title: 'Audio series',  blurb: 'We produce voiceover, SFX, and video.' },
  { num: '04', title: 'Listeners pay', blurb: 'Live on Pocket FM. You earn share.' },
]

export default function CompleteJourney() {
  return (
    <AnimatedSection id="journey" style={{ padding: '96px 0', background: '#DAD9D2' }}>
      <Container>
        <div style={{ marginBottom: '56px', maxWidth: '720px' }}>
          <Eyebrow>The complete journey</Eyebrow>
          <SerifHeading size="h2">
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
                borderRadius: RADII.card,
                padding: '24px',
                position: 'relative',
              }}
            >
              {/* Step eyebrow */}
              <p
                style={{
                  fontFamily:    SCALE.eyebrow.family,
                  fontWeight:    SCALE.eyebrow.weight,
                  fontSize:      SCALE.eyebrow.fontSize,
                  lineHeight:    SCALE.eyebrow.lineHeight,
                  letterSpacing: SCALE.eyebrow.letterSpacing,
                  textTransform: SCALE.eyebrow.textTransform,
                  color: '#F51D00',
                  marginBottom: '14px',
                }}
              >
                Step {s.num}
              </p>

              {/* Step title — h3 (Season Mix) per typescale rule */}
              <h3
                style={{
                  fontFamily:    SCALE.h3.family,
                  fontWeight:    SCALE.h3.weight,
                  fontSize:      SCALE.h3.fontSize,
                  lineHeight:    SCALE.h3.lineHeight,
                  letterSpacing: SCALE.h3.letterSpacing,
                  color: '#1C1C1C',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                {s.title}
                {i < STEPS.length - 1 && (
                  <span style={{ color: '#F51D00', fontSize: SCALE.label.fontSize }}>→</span>
                )}
              </h3>

              <Body size="sm" color="#717171">
                {s.blurb}
              </Body>
            </motion.div>
          ))}
        </div>

        {/* Body callout */}
        <div style={{ marginTop: '40px', paddingLeft: '14px', borderLeft: '2px solid #F51D00', maxWidth: '640px' }}>
          <Body size="md" color="#717171">
            Most visitors will not read the rest of the page. If you read nothing else, you should still understand the loop.
          </Body>
        </div>
      </Container>

      <style>{`
        @media (max-width: 900px) { .journey-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 540px) { .journey-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </AnimatedSection>
  )
}
