import { motion } from 'framer-motion'
import { Container, AnimatedSection, SerifHeading, Body, Eyebrow, Label, Caption, SCALE } from '../ui'

function Avatar({ name, gradient }) {
  const initials = name.split(' ').map((n) => n[0]).slice(0, 2).join('')
  return (
    <div
      style={{
        width: 56,
        height: 56,
        borderRadius: '4px',
        background: gradient,
        color: '#ffffff',
        fontFamily:    SCALE.subheading.family,
        fontWeight:    SCALE.subheading.weight,
        fontSize:      SCALE.subheading.fontSize,        /* 18px */
        lineHeight:    SCALE.subheading.lineHeight,
        letterSpacing: SCALE.subheading.letterSpacing,
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
    gradient: 'radial-gradient(circle, rgb(127, 125, 252), rgb(244, 75, 204) 33%, rgb(229, 237, 245) 66%)',
    series:'The Boss’s Forbidden Love (Hindi)',
    quote: 'I had been writing on Wattpad for three years and earned nothing. My first Pocket Sherpa series hit one million listens in six weeks. I quit my IT job last month.',
    stats: ['47 episodes', '1.2M listens', '₹3,40,000 earned in 3 months'],
  },
  {
    name:  'Arjun Krishnan',
    role:  'Thriller writer',
    gradient: 'linear-gradient(0deg, rgb(255, 46, 222), rgb(210, 152, 255))',
    series:'Cold Currency (English)',
    quote: 'The memory tool is the unlock. I write a 120-episode series and Sherpa keeps every detail of every backstory. I’d still be on episode 8 without it.',
    stats: ['89 episodes', '2.8M listens', '₹6,10,000 earned to date'],
  },
  {
    name:  'Meera Joseph',
    role:  'Fantasy writer',
    gradient: 'linear-gradient(90deg, rgb(114, 50, 241) 3.13%, rgb(251, 118, 250) 50%, rgb(255, 207, 94))',
    series:'The Witch in the Walls (Malayalam)',
    quote: 'I wrote the first three episodes on a Sunday. By Friday it was on Pocket FM with full voice acting. That used to take a year and a publisher.',
    stats: ['23 episodes', '480k listens', 'First publication: 6 days'],
  },
]

export default function WriterStories() {
  return (
    <AnimatedSection id="stories" style={{ padding: '120px 0', background: '#e5edf5' }}>
      <Container>
        <div style={{ marginBottom: '56px', maxWidth: '720px' }}>
          <Eyebrow>Writers, paid</Eyebrow>
          <SerifHeading size="h2">
            Writers who turned their<br />stories into careers.
          </SerifHeading>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {STORIES.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ boxShadow: 'rgba(50, 50, 93, 0.12) 0px 16px 32px 0px' }}
              style={{
                background: '#ffffff',
                borderRadius: '6px',
                padding: '32px',
                display: 'grid',
                gridTemplateColumns: '72px 1fr',
                gap: '24px',
                alignItems: 'flex-start',
                transition: 'box-shadow 0.25s',
              }}
              className="story-card"
            >
              <Avatar name={s.name} gradient={s.gradient} />

              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', flexWrap: 'wrap', marginBottom: '4px' }}>
                  {/* h4 — Season Mix 20px for writer name */}
                  <h3
                    style={{
                      fontFamily:    SCALE.h4.family,
                      fontWeight:    SCALE.h4.weight,
                      fontSize:      SCALE.h4.fontSize,
                      lineHeight:    SCALE.h4.lineHeight,
                      letterSpacing: SCALE.h4.letterSpacing,
                      color: '#061b31',
                      margin: 0,
                    }}
                  >
                    {s.name}
                  </h3>
                  <Label color="#64748d">· {s.role}</Label>
                </div>

                <Eyebrow>Series: {s.series}</Eyebrow>

                <blockquote
                  style={{
                    /* subheading 18 px serif-feel quote — keep Mallory but at lead size */
                    fontFamily:    SCALE.subheading.family,
                    fontWeight:    SCALE.subheading.weight,
                    fontSize:      SCALE.subheading.fontSize,
                    lineHeight:    SCALE.subheading.lineHeight,
                    letterSpacing: SCALE.subheading.letterSpacing,
                    color: '#061b31',
                    borderLeft: '2px solid #F51D00',
                    paddingLeft: '16px',
                    marginBottom: '18px',
                  }}
                >
                  “{s.quote}”
                </blockquote>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                  {s.stats.map((st) => (
                    <Label key={st} color="#061b31" style={{ fontFeatureSettings: '"tnum"' }}>
                      {st}
                    </Label>
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
