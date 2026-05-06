import { motion } from 'framer-motion'
import { Container, AnimatedSection, SerifHeading, Eyebrow } from '../ui'

function Avatar({ name, gradient }) {
  const initials = name.split(' ').map((n) => n[0]).slice(0, 2).join('')
  return (
    <div
      className="w-14 h-14 rounded-tag text-white text-[18px] font-normal flex items-center justify-center flex-none"
      style={{ background: gradient }}
    >
      {initials}
    </div>
  )
}

const STORIES = [
  {
    name:     'Priya Sharma',
    role:     'Romance writer',
    gradient: 'radial-gradient(circle, rgb(127, 125, 252), rgb(244, 75, 204) 33%, rgb(229, 237, 245) 66%)',
    series:   'The Boss’s Forbidden Love (Hindi)',
    quote:    'I had been writing on Wattpad for three years and earned nothing. My first Pocket Sherpa series hit one million listens in six weeks. I quit my IT job last month.',
    stats:    ['47 episodes', '1.2M listens', '₹3,40,000 earned in 3 months'],
  },
  {
    name:     'Arjun Krishnan',
    role:     'Thriller writer',
    gradient: 'linear-gradient(0deg, rgb(255, 46, 222), rgb(210, 152, 255))',
    series:   'Cold Currency (English)',
    quote:    'The memory tool is the unlock. I write a 120-episode series and Sherpa keeps every detail of every backstory. I’d still be on episode 8 without it.',
    stats:    ['89 episodes', '2.8M listens', '₹6,10,000 earned to date'],
  },
  {
    name:     'Meera Joseph',
    role:     'Fantasy writer',
    gradient: 'linear-gradient(90deg, rgb(114, 50, 241) 3.13%, rgb(251, 118, 250) 50%, rgb(255, 207, 94))',
    series:   'The Witch in the Walls (Malayalam)',
    quote:    'I wrote the first three episodes on a Sunday. By Friday it was on Pocket FM with full voice acting. That used to take a year and a publisher.',
    stats:    ['23 episodes', '480k listens', 'First publication: 6 days'],
  },
]

export default function WriterStories() {
  return (
    <AnimatedSection id="stories" className="py-[120px] bg-powder">
      <Container>
        <div className="mb-14 max-w-[720px]">
          <Eyebrow>Writers, paid</Eyebrow>
          <SerifHeading size="lg">
            Writers who turned their<br />stories into careers.
          </SerifHeading>
        </div>

        <div className="flex flex-col gap-5">
          {STORIES.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ boxShadow: 'rgba(50, 50, 93, 0.12) 0px 16px 32px 0px' }}
              className="bg-white rounded-card p-8 grid grid-cols-1 sm:grid-cols-[72px_1fr] gap-6 items-start transition-shadow duration-200"
            >
              <Avatar name={s.name} gradient={s.gradient} />

              <div>
                <div className="flex items-baseline gap-3 flex-wrap mb-1">
                  <p className="font-normal text-subheading text-midnight tracking-heading-sm">{s.name}</p>
                  <span className="text-[13px] text-ghost">· {s.role}</span>
                </div>
                <p className="font-normal text-caption text-violet uppercase tracking-eyebrow mb-3.5">
                  Series: {s.series}
                </p>

                <blockquote className="font-normal text-[20px] leading-[1.4] tracking-heading-sm text-midnight border-l-2 border-violet pl-4 mb-4.5">
                  “{s.quote}”
                </blockquote>

                <div className="flex flex-wrap gap-5">
                  {s.stats.map((st) => (
                    <span key={st} className="font-normal text-[13px] text-midnight tabular-nums">{st}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  )
}
