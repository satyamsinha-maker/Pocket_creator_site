import { useState } from 'react'
import { Container, AnimatedSection, SerifHeading, Body, PillButton, SCALE } from '../ui'

export default function FinalCTA() {
  const [v, setV] = useState('')
  return (
    <AnimatedSection style={{ padding: '160px 0', textAlign: 'center', position: 'relative', overflow: 'hidden', background: '#FAF9F1' }}>
      {/* Dreamy gradient halo behind the headline */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '900px',
          height: '900px',
          pointerEvents: 'none',
          background: 'radial-gradient(circle, rgba(127,125,252,0.28), rgba(244,75,204,0.14) 33%, rgba(229,237,245,0) 66%)',
          filter: 'blur(20px)',
        }}
      />
      <Container>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <SerifHeading size="xl" maxWidth="780px">
            Your audience is waiting.
          </SerifHeading>
          <div style={{ margin: '24px auto 36px', maxWidth: '540px' }}>
            <Body size="lg" color="#717171">
              Sign up free. Write your first chapter today. We will handle the rest.
            </Body>
          </div>

          <div style={{ maxWidth: '660px', margin: '0 auto' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                background: '#ffffff',
                border: '1px solid #BBBAB4',
                borderRadius: '4px',
                padding: '8px 8px 8px 16px',
                boxShadow: 'rgba(23, 23, 23, 0.06) 0px 3px 6px 0px',
                gap: '8px',
                textAlign: 'left',
              }}
            >
              <input
                value={v}
                onChange={(e) => setV(e.target.value)}
                placeholder="What story do you want to tell the world?"
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  fontFamily:    SCALE.bodySm.family,
                  fontWeight:    SCALE.bodySm.weight,
                  fontSize:      SCALE.bodySm.fontSize,
                  lineHeight:    SCALE.bodySm.lineHeight,
                  letterSpacing: SCALE.bodySm.letterSpacing,
                  color: '#1C1C1C',
                  padding: '8px 0',
                }}
              />
              <PillButton variant="sienna">
                Start writing free
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7 H12 M8 3 L12 7 L8 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </PillButton>
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  )
}
