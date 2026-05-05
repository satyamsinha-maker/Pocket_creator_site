import { motion } from 'framer-motion'
import { Container, AnimatedSection, SerifHeading, Body, Eyebrow } from '../ui'

/* Avatar — initials only, no photos */
function Avatar({ name, tone = '#b85c3a' }) {
  const initials = name.split(' ').map((n) => n[0]).slice(0, 2).join('')
  return (
    <div
      style={{
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: `linear-gradient(135deg, ${tone}, ${tone}88)`,
        color: '#faf6ed',
        fontFamily: "'Lora', Georgia, serif",
        fontWeight: 600,
        fontSize: '18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 'none',
      }}
    >
      {initials}
    </div>
  )
}

const STORIES = [
  {
    name:  'Priya Sharma',
    role:  'Romance writer',
    tone:  '#b85c3a',
    series:'The Boss’s Forbidden Love (Hindi)',
    quote: 'I had been writing on Wattpad for three years and earned nothing. My first Pocket Sherpa series hit one million listens in six weeks. I quit my IT job last month.',
    stats: ['47 episodes', '1.2M listens', '₹3,40,000 earned in 3 months'],
  },
  {
    name:  'Arjun Krishnan',
    role:  'Thriller writer',
    tone:  '#1c1814',
    series:'Cold Currency (English)',
    quote: 'The memory tool is the unlock. I write a 120-episode series and Sherpa keeps every detail of every backstory. I’d still be on episode 8 without it.',
    stats: ['89 episodes', '2.8M listens', '₹6,10,000 earned to date'],
  },
  {
    name:  'Meera Joseph',
    role:  'Fantasy writer',
    tone:  '#c19a3e',
    series:'The Witch in the Walls (Malayalam)',
    quote: 'I wrote the first three episodes on a Sunday. By Friday it was on Pocket FM with full voice acting. That used to take a year and a publisher.',
    stats: ['23 episodes', '480k listens', 'First publication: 6 days'],
  },
]

export default function WriterStories() {
  return (
    <AnimatedSection id="stories" style={{ padding: '120px 0', background: '#f3ecdc' }}>
      <Container>
        <div style={{ marginBottom: '56px', maxWidth: '720px' }}>
          <Eyebrow>Writers, paid</Eyebrow>
          <SerifHeading size="lg">
            Writers who turned their<br />stories into careers.
          </SerifHeading>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {STORIES.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: '#fff',
                border: '1px solid #e8dfd0',
                borderRadius: '14px',
                padding: '32px',
                display: 'grid',
                gridTemplateColumns: '72px 1fr',
                gap: '24px',
                alignItems: 'flex-start',
              }}
              className="story-card"
            >
              <Avatar name={s.name} tone={s.tone} />

              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', flexWrap: 'wrap', marginBottom: '4px' }}>
                  <p style={{ fontFamily: "'Lora', Georgia, serif", fontWeight: 600, fontSize: '18px', color: '#1c1814' }}>
                    {s.name}
                  </p>
                  <span style={{ fontFamily: 'Mallory, sans-serif', fontSize: '13px', color: '#6b5e52' }}>· {s.role}</span>
                </div>
                <p style={{ fontFamily: 'Mallory, sans-serif', fontSize: '12px', color: '#b85c3a', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>
                  Series: {s.series}
                </p>

                <blockquote
                  style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontStyle: 'italic',
                    fontSize: '19px',
                    lineHeight: 1.5,
                    color: '#1c1814',
                    borderLeft: '2px solid #b85c3a',
                    paddingLeft: '16px',
                    marginBottom: '18px',
                  }}
                >
                  “{s.quote}”
                </blockquote>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                  {s.stats.map((st) => (
                    <span
                      key={st}
                      style={{
                        fontFamily: 'Mallory, sans-serif',
                        fontWeight: 700,
                        fontSize: '13px',
                        color: '#1c1814',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {st}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>

      <style>{`
        @media (max-width: 640px) {
          .story-card { grid-template-columns: 1fr !important; padding: 24px !important; }
        }
      `}</style>
    </AnimatedSection>
  )
}
