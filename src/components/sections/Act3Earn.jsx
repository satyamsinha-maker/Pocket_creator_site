import { motion } from 'framer-motion'
import { Container, AnimatedSection, SerifHeading, Body, Eyebrow } from '../ui'

function EarningsDashStub() {
  return (
    <div className="bg-white rounded-card p-6 shadow-soft">
      <div className="flex justify-between mb-5">
        <div>
          <p className="font-normal text-caption text-ghost uppercase tracking-eyebrow mb-1.5">This month</p>
          <p className="font-normal text-heading text-midnight tracking-heading tabular-nums">₹84,520</p>
        </div>
        <div className="text-right">
          <p className="font-normal text-caption text-ghost uppercase tracking-eyebrow mb-1.5">Listens</p>
          <p className="font-normal text-heading text-midnight tracking-heading tabular-nums">1.2M</p>
        </div>
      </div>

      <svg viewBox="0 0 320 80" className="w-full h-auto">
        <defs>
          <linearGradient id="earnGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F51D00" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#F51D00" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,60 C30,50 60,55 90,40 C120,28 150,32 180,20 C210,12 240,18 270,8 C290,4 310,2 320,2 L320,80 L0,80 Z" fill="url(#earnGrad)" />
        <path d="M0,60 C30,50 60,55 90,40 C120,28 150,32 180,20 C210,12 240,18 270,8 C290,4 310,2 320,2" stroke="#F51D00" strokeWidth="1.8" fill="none" />
      </svg>

      <div className="flex justify-between mt-3 text-[10px] text-ghost">
        <span>Wk 1</span><span>Wk 2</span><span>Wk 3</span><span>Wk 4</span>
      </div>
    </div>
  )
}

const BLOCKS = [
  { title: 'A platform that already pays writers', body: 'Pocket FM listeners spend coins to unlock episodes. A share of every coin spent on your series goes directly to you, automatically, every month.' },
  { title: 'Built-in audience',                    body: 'You do not have to find listeners. Pocket FM does. Our recommendation engine surfaces your series to the readers most likely to love it, the same way Spotify surfaces music.' },
  { title: 'Transparent earnings',                 body: 'Track your listens, your earnings and your audience growth in a single dashboard. Know exactly how much you are making, in real time.' },
]

export default function Act3Earn() {
  return (
    <AnimatedSection id="earn" className="py-[120px] bg-white">
      <Container>
        <div className="max-w-[720px] mb-16">
          <Eyebrow>Act 3 · Listeners pay</Eyebrow>
          <SerifHeading size="lg">
            Your story goes live.<br />You get paid.
          </SerifHeading>
          <div className="mt-5 max-w-[520px]">
            <Body size="md">
              Your finished series launches on Pocket FM, where 100 million listeners are already paying for serialized audio fiction. They listen, they pay, you earn. Every time.
            </Body>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-[720px] mx-auto"
        >
          <EarningsDashStub />
          <p className="font-normal text-[13px] text-slate text-center mt-3">
            Anjali R. · ‘The Reckoning’ · 47 episodes live
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {BLOCKS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -2, boxShadow: 'rgba(50, 50, 93, 0.12) 0px 16px 32px 0px' }}
              className="bg-powder rounded-card p-6 transition-shadow duration-200"
            >
              <p className="font-normal text-caption text-violet uppercase tracking-eyebrow mb-2.5">
                Block {String(i + 1).padStart(2, '0')}
              </p>
              <p className="font-normal text-heading-sm leading-heading-sm tracking-heading-sm text-midnight mb-2.5">
                {b.title}
              </p>
              <Body size="sm">{b.body}</Body>
            </motion.div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  )
}
