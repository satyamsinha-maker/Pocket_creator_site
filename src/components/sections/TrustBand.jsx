import { Container, AnimatedSection, Body, SCALE } from '../ui'

const STATS = [
  { value: '4,200',    label: 'writers in beta' },
  { value: '2.1M',     label: 'chapters written' },
  { value: '38M',      label: 'hours listened' },
  { value: '₹2.4 Cr',  label: 'paid out to writers' },
]

export default function TrustBand() {
  return (
    <AnimatedSection style={{ padding: '64px 0', background: '#ffffff' }}>
      <Container>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
          className="trust-grid"
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                paddingLeft: i === 0 ? 0 : '24px',
                borderLeft: i === 0 ? 'none' : '1px solid #e5edf5',
              }}
              className="trust-item"
            >
              {/* Stat number — display token (Season Mix, fluid 40 → 56) */}
              <p
                style={{
                  fontFamily:    SCALE.display.family,
                  fontWeight:    SCALE.display.weight,
                  fontSize:      SCALE.display.fontSize,
                  lineHeight:    SCALE.display.lineHeight,
                  letterSpacing: SCALE.display.letterSpacing,
                  color: '#1C1C1C',
                  marginBottom: '8px',
                  fontFeatureSettings: '"tnum"',
                }}
              >
                {s.value}
              </p>
              <Body size="sm" color="#717171">
                {s.label}
              </Body>
            </div>
          ))}
        </div>
      </Container>

      <style>{`
        @media (max-width: 900px) {
          .trust-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 32px 24px !important; }
          .trust-item { border-left: none !important; padding-left: 0 !important; }
        }
      `}</style>
    </AnimatedSection>
  )
}
