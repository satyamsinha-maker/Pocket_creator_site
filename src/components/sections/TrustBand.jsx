import { Container, AnimatedSection, Body } from '../ui'

const STATS = [
  { value: '4,200',    label: 'writers in beta' },
  { value: '2.1M',     label: 'chapters written' },
  { value: '38M',      label: 'hours listened' },
  { value: '₹2.4 Cr',  label: 'paid out to writers' },
]

export default function TrustBand() {
  return (
    <AnimatedSection className="py-16 bg-white">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={i === 0 ? '' : 'lg:pl-6 lg:border-l lg:border-powder'}
            >
              <p className="font-normal text-[clamp(36px,4.5vw,56px)] leading-display tracking-display text-midnight mb-2 tabular-nums">
                {s.value}
              </p>
              <Body size="sm" color="#50617a">{s.label}</Body>
            </div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  )
}
