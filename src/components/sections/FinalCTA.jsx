import { Container, AnimatedSection, PillButton } from '../ui'

export default function FinalCTA() {
  return (
    <AnimatedSection style={{ padding: '120px 0', textAlign: 'center' }}>
      <Container>
        <h2
          style={{
            fontFamily: 'Mallory, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(36px, 5vw, 64px)',
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            color: '#000',
            marginBottom: '32px',
          }}
        >
          The most realistic voice AI platform
        </h2>
        <div style={{ display: 'inline-flex', gap: '8px' }}>
          <PillButton variant="ghost">Talk to sales</PillButton>
          <PillButton variant="filled">Sign up</PillButton>
        </div>
      </Container>
    </AnimatedSection>
  )
}
