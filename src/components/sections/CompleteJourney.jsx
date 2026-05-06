import { Container, AnimatedSection, SerifHeading, Body, Eyebrow } from '../ui'
import { motion } from 'framer-motion'

const STEPS = [
  { num: '01', title: 'Your idea',     blurb: 'Brainstorm with Sherpa.' },
  { num: '02', title: 'Your story',    blurb: 'Sherpa drafts and remembers every detail.' },
  { num: '03', title: 'Audio series',  blurb: 'We produce voiceover, SFX, and video.' },
  { num: '04', title: 'Listeners pay', blurb: 'Live on Pocket FM. You earn share.' },
]

export default function CompleteJourney() {
  return (
    <AnimatedSection id="journey" className="py-24 bg-powder">
      <Container>
        <div className="mb-14 max-w-[720px]">
          <Eyebrow>The complete journey</Eyebrow>
          <SerifHeading size="lg">
            From a blank page to a paid audience.<br />We handle everything in between.
          </SerifHeading>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-card p-6 relative"
            >
              <p className="font-normal text-caption text-violet mb-3.5 tracking-eyebrow uppercase">
                Step {s.num}
              </p>
              <p className="font-normal text-heading-sm leading-heading-sm tracking-heading-sm text-midnight mb-2 flex items-center gap-2.5">
                {s.title}
                {i < STEPS.length - 1 && <span className="text-violet text-base">→</span>}
              </p>
              <Body size="sm" color="#50617a">{s.blurb}</Body>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 font-normal text-body text-slate pl-3.5 border-l-2 border-violet max-w-[640px] leading-[1.5]">
          Most visitors will not read the rest of the page. If you read nothing else, you should still understand the loop.
        </p>
      </Container>
    </AnimatedSection>
  )
}
