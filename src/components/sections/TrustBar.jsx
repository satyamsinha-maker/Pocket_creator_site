import { Container, AnimatedSection, PillButton } from '../ui'

const LOGOS = [
  { name: 'Doodle',     style: { fontFamily: 'serif', fontStyle: 'italic' } },
  { name: 'B2C',        style: { fontWeight: 700, letterSpacing: '0.05em' } },
  { name: 'IBM ALL',    style: { fontWeight: 700, letterSpacing: '0.1em' } },
  { name: 'NLLB Apps',  style: { fontWeight: 500 } },
  { name: 'OPENERA',    style: { fontWeight: 700, letterSpacing: '0.18em' } },
  { name: 'Adidas',     style: { fontFamily: 'serif', fontWeight: 600 } },
  { name: 'Foodics',    style: { fontWeight: 500, fontStyle: 'italic' } },
  { name: 'mozilla',    style: { fontWeight: 700, letterSpacing: '-0.02em' } },
  { name: 'Disney',     style: { fontFamily: 'cursive', fontWeight: 700 } },
]

export default function TrustBar() {
  return (
    <AnimatedSection style={{ padding: '48px 0 72px' }}>
      <Container>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '28px',
          }}
        >
          <p
            style={{
              fontFamily: 'Mallory, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              color: '#777169',
            }}
          >
            Trusted by leading developers and enterprises
          </p>
          <PillButton variant="ghost">Read all stories</PillButton>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
            gap: '32px 40px',
            alignItems: 'center',
            justifyItems: 'center',
            paddingTop: '8px',
          }}
        >
          {LOGOS.map((l) => (
            <span
              key={l.name}
              style={{
                fontSize: '18px',
                color: '#b1b0b0',
                whiteSpace: 'nowrap',
                userSelect: 'none',
                ...l.style,
              }}
            >
              {l.name}
            </span>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  )
}
