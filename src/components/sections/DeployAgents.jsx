import { Container, AnimatedSection, SectionHeading, Eyebrow, PillButton, Card } from '../ui'

const PILLARS = [
  { title: 'Configure',  body: 'Build and customise agents with prompts, knowledge bases, and tool calls.' },
  { title: 'Deploy',     body: 'Ship to web, telephony, mobile, and embedded devices in minutes.' },
  { title: 'Monitor',    body: 'Live dashboards reveal call traffic, latency, and conversion outcomes.' },
]

export default function DeployAgents() {
  return (
    <AnimatedSection style={{ padding: '96px 0' }}>
      <Container>
        <div style={{ marginBottom: '48px' }}>
          <Eyebrow>ElevenAgents</Eyebrow>
          <SectionHeading>Deploy agents that talk,<br />type, and take action</SectionHeading>
          <p style={{ fontFamily: 'Mallory, sans-serif', fontSize: '15px', lineHeight: 1.5, color: '#777169', maxWidth: '480px', marginTop: '20px' }}>
            Configure, deploy and monitor robust, reliable sounding agents in 70+ languages with leading accuracy and ultra-low latency across multiple channels.
          </p>
        </div>

        {/* Big card: chat + chart */}
        <Card style={{ padding: '24px', marginBottom: '32px', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'stretch' }} className="da-grid">
            {/* Chat panel */}
            <div
              style={{
                background: 'linear-gradient(135deg, #f0e8ff, #cfe0ff)',
                borderRadius: '12px',
                padding: '20px',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              {[
                { side: 'left',  text: 'Hi! How can we help today?' },
                { side: 'right', text: 'Need to reschedule my flight.' },
                { side: 'left',  text: "I've found 3 options. Want me to book the 2:40 PM?" },
                { side: 'right', text: 'Yes please.' },
              ].map((m, i) => (
                <div
                  key={i}
                  style={{
                    alignSelf: m.side === 'left' ? 'flex-start' : 'flex-end',
                    background: m.side === 'left' ? 'rgba(255,255,255,0.85)' : '#000',
                    color:      m.side === 'left' ? '#000' : '#fff',
                    padding: '8px 14px',
                    borderRadius: '14px',
                    fontSize: '13px',
                    fontFamily: 'Mallory, sans-serif',
                    maxWidth: '78%',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
                  }}
                >
                  {m.text}
                </div>
              ))}
            </div>

            {/* Chart panel */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: '12px',
                padding: '20px',
                border: '1px solid #e5e5e5',
                position: 'relative',
              }}
            >
              <p style={{ fontFamily: 'Mallory, sans-serif', fontWeight: 500, fontSize: '13px', color: '#000', marginBottom: '16px' }}>Calls handled</p>
              <svg viewBox="0 0 300 160" style={{ width: '100%', height: 'calc(100% - 40px)' }}>
                <defs>
                  <linearGradient id="grad-chart" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%"  stopColor="#0447ff" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#0447ff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,120 C40,100 60,80 90,75 C120,70 150,90 180,60 C210,35 240,50 300,30 L300,160 L0,160 Z" fill="url(#grad-chart)" />
                <path d="M0,120 C40,100 60,80 90,75 C120,70 150,90 180,60 C210,35 240,50 300,30" stroke="#0447ff" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
        </Card>

        {/* Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="da-pillars">
          {PILLARS.map((p) => (
            <Card key={p.title} style={{ padding: '20px' }} hover>
              <p style={{ fontFamily: 'Mallory, sans-serif', fontWeight: 700, fontSize: '15px', color: '#000', marginBottom: '6px' }}>{p.title}</p>
              <p style={{ fontFamily: 'Mallory, sans-serif', fontSize: '13px', lineHeight: 1.45, color: '#777169' }}>{p.body}</p>
            </Card>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '32px' }}>
          <PillButton variant="ghost">v0.6.0 →</PillButton>
          <PillButton variant="ghost">See demos</PillButton>
        </div>
      </Container>

      <style>{`
        @media (max-width: 768px) {
          .da-grid { grid-template-columns: 1fr !important; }
          .da-pillars { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </AnimatedSection>
  )
}
