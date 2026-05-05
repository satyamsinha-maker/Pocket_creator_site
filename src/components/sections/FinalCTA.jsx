import { useState } from 'react'
import { Container, AnimatedSection, SerifHeading, Body, PillButton } from '../ui'

export default function FinalCTA() {
  const [v, setV] = useState('')
  return (
    <AnimatedSection style={{ padding: '140px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 70% at 50% 100%, rgba(184,92,58,0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <Container>
        <SerifHeading size="xl" maxWidth="780px">
          Your audience is waiting.
        </SerifHeading>
        <div style={{ margin: '24px auto 36px', maxWidth: '540px' }}>
          <Body size="lg" color="#3d3530">
            Sign up free. Write your first chapter today. We will handle the rest.
          </Body>
        </div>

        {/* Mirrored chat input */}
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: '#ffffff',
              border: '1px solid #e8dfd0',
              borderRadius: '14px',
              padding: '10px 10px 10px 18px',
              boxShadow: 'rgba(28,24,20,0.06) 0px 1px 2px 0px, rgba(28,24,20,0.04) 0px 4px 12px 0px',
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
                fontFamily: 'Mallory, sans-serif',
                fontSize: '15px',
                color: '#1c1814',
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
      </Container>
    </AnimatedSection>
  )
}
