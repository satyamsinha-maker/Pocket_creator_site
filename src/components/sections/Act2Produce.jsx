import { motion } from 'framer-motion'
import { Container, AnimatedSection, SerifHeading, Body, Eyebrow } from '../ui'

function VoiceStub() {
  return (
    <div className="flex items-end gap-[3px] h-16 py-3">
      {Array.from({ length: 36 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{ height: [10, 28 + Math.abs(Math.sin(i * 0.5) * 26), 10] }}
          transition={{ duration: 1.5 + (i % 3) * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.04 }}
          className="w-[3px] bg-violet rounded-[1px]"
          style={{ opacity: 0.55 + (i % 4) * 0.1 }}
        />
      ))}
    </div>
  )
}

function SfxStub() {
  return (
    <svg viewBox="0 0 200 64" width="100%" height="64" fill="none" stroke="#F51D00" strokeWidth="1.5">
      <path d="M0 32 Q 20 8, 40 32 T 80 32 T 120 32 T 160 32 T 200 32" />
      <path d="M0 32 Q 14 50, 28 32 T 56 32 T 84 32 T 112 32 T 140 32 T 168 32 T 200 32" opacity="0.4" stroke="#ff6b4d" />
    </svg>
  )
}

function ThumbnailStub() {
  return (
    <div className="grid grid-cols-3 gap-1.5">
      {[
        'linear-gradient(90deg, rgb(114, 50, 241) 3.13%, rgb(251, 118, 250) 50%, rgb(255, 207, 94))',
        'radial-gradient(circle, rgb(127, 125, 252), rgb(244, 75, 204) 33%, rgb(229, 237, 245) 66%)',
        'linear-gradient(0deg, rgb(255, 46, 222), rgb(210, 152, 255))',
      ].map((g, i) => (
        <div key={i} className="aspect-[3/4] rounded-tag relative overflow-hidden" style={{ background: g }}>
          <div className="absolute bottom-1.5 left-1.5 right-1.5">
            <div className="h-[3px] bg-white/85 rounded-[1px] mb-[3px] w-[70%]" />
            <div className="h-[2px] bg-white/60 rounded-[1px] w-[50%]" />
          </div>
        </div>
      ))}
    </div>
  )
}

function VideoStub() {
  return (
    <div
      className="relative rounded-tag aspect-video overflow-hidden"
      style={{ background: 'radial-gradient(circle, rgb(127, 125, 252), rgb(244, 75, 204) 33%, rgb(229, 237, 245) 66%)' }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-tag bg-white flex items-center justify-center shadow-md">
        <svg width="10" height="12" viewBox="0 0 10 12" fill="none"><path d="M0 1 L10 6 L0 11 Z" fill="#F51D00" /></svg>
      </div>
      <div className="absolute bottom-2 left-2 text-[10px] text-midnight bg-white/85 px-1.5 py-0.5 rounded-tag">
        0:18 / 0:30
      </div>
    </div>
  )
}

const CARDS = [
  { title: 'Professional voice acting', body: 'Our voice cast brings every character to life, with regional accents and emotional range matched to your script.', visual: <VoiceStub /> },
  { title: 'Sound design and music',    body: 'Custom SFX and scoring layered into every episode, so listeners feel the world you built.',                       visual: <SfxStub /> },
  { title: 'Cover thumbnails',          body: 'Eye-catching artwork that makes listeners stop scrolling and hit play, designed in your story’s tone.',           visual: <ThumbnailStub /> },
  { title: 'Generative video',          body: 'Short-form video clips generated from your episodes, ready to share on social platforms and pull in new listeners.', visual: <VideoStub /> },
]

export default function Act2Produce() {
  return (
    <AnimatedSection className="py-[120px] bg-powder">
      <Container>
        <div className="max-w-[720px] mb-16">
          <Eyebrow>Act 2 · We produce it</Eyebrow>
          <SerifHeading size="lg">
            We turn your words into<br />a cinematic audio series.
          </SerifHeading>
          <div className="mt-5 max-w-[520px]">
            <Body size="md">
              You have written the episode. Now Pocket FM’s production pipeline takes over. Voice acting, sound design, thumbnails and AI-generated video. All matched to your story. All done for you.
            </Body>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -2, boxShadow: 'rgba(50, 50, 93, 0.12) 0px 16px 32px 0px' }}
              className="bg-white rounded-card p-7 shadow-soft transition-shadow duration-200"
            >
              <div className="mb-6 min-h-[76px]">{c.visual}</div>
              <p className="font-normal text-heading-sm leading-heading-sm tracking-heading-sm text-midnight mb-2">
                {c.title}
              </p>
              <Body size="sm" color="#50617a">{c.body}</Body>
            </motion.div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  )
}
