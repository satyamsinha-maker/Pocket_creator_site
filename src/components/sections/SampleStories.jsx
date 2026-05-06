import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container, AnimatedSection, SerifHeading, Eyebrow } from '../ui'

const GENRES = ['All', 'Romance', 'Thriller', 'Fantasy', 'Drama']

const SERIES = [
  { title: 'The Boss’s Forbidden Love',     genre: 'Romance',  episodes: 47, writer: 'Priya Sharma',   gradient: 'radial-gradient(circle, rgb(127, 125, 252), rgb(244, 75, 204) 33%, rgb(229, 237, 245) 66%)' },
  { title: 'Cold Currency',                  genre: 'Thriller', episodes: 89, writer: 'Arjun Krishnan', gradient: 'linear-gradient(135deg, #061b31, #F51D00)' },
  { title: 'The Witch in the Walls',         genre: 'Fantasy',  episodes: 23, writer: 'Meera Joseph',   gradient: 'linear-gradient(0deg, rgb(255, 46, 222), rgb(210, 152, 255))' },
  { title: 'Empire of Ashes',                genre: 'Thriller', episodes: 64, writer: 'Vikram Rao',     gradient: 'linear-gradient(90deg, rgb(114, 50, 241) 3.13%, rgb(251, 118, 250) 50%, rgb(255, 207, 94))' },
  { title: 'After Midnight',                 genre: 'Romance',  episodes: 32, writer: 'Sara Iqbal',     gradient: 'linear-gradient(135deg, #ff2ede, #d298ff)' },
  { title: 'The Cartographer’s Daughter',    genre: 'Drama',    episodes: 28, writer: 'Devika Menon',   gradient: 'linear-gradient(135deg, #F51D00, #ff6b4d 60%, #fcb8ad)' },
  { title: 'Ravan’s Diary',                  genre: 'Fantasy',  episodes: 41, writer: 'Karthik Iyer',   gradient: 'radial-gradient(circle, #ff6118, #F51D00 60%, #061b31)' },
  { title: 'Last Train to Banaras',          genre: 'Drama',    episodes: 19, writer: 'Anya Banerjee',  gradient: 'linear-gradient(135deg, #50617a, #061b31)' },
]

function Card({ s }) {
  const [playing, setPlaying] = useState(false)
  return (
    <motion.article
      whileHover={{ y: -2, boxShadow: 'rgba(50, 50, 93, 0.12) 0px 16px 32px 0px' }}
      className="bg-white rounded-card overflow-hidden cursor-pointer shadow-input transition-shadow duration-200"
    >
      <div className="aspect-[4/5] relative overflow-hidden" style={{ background: s.gradient }}>
        <div className="absolute bottom-3.5 left-3.5 right-3.5">
          <p className="font-normal text-[15px] text-white tracking-heading-sm leading-[1.15] [text-shadow:0_1px_6px_rgba(0,0,0,0.25)]">
            {s.title}
          </p>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); setPlaying(!playing) }}
          className="absolute top-3 right-3 w-9 h-9 rounded-tag bg-white border-0 cursor-pointer flex items-center justify-center shadow-md"
          aria-label={playing ? 'Pause sample' : 'Play 30-second sample'}
        >
          {playing ? (
            <svg width="11" height="12" viewBox="0 0 11 12" fill="#F51D00"><rect x="1" y="1" width="3" height="10" /><rect x="7" y="1" width="3" height="10" /></svg>
          ) : (
            <svg width="10" height="12" viewBox="0 0 10 12" fill="#F51D00"><path d="M0 1 L10 6 L0 11 Z" /></svg>
          )}
        </button>
      </div>

      <div className="px-4 py-3.5">
        <p className="font-normal text-[15px] text-midnight mb-1 tracking-heading-sm whitespace-nowrap overflow-hidden text-ellipsis">
          {s.title}
        </p>
        <p className="text-[12px] text-ghost">
          {s.genre} · {s.episodes} episodes · {s.writer}
        </p>
      </div>
    </motion.article>
  )
}

export default function SampleStories() {
  const [genre, setGenre] = useState('All')
  const filtered = genre === 'All' ? SERIES : SERIES.filter((s) => s.genre === genre)

  return (
    <AnimatedSection className="py-[120px] bg-white">
      <Container>
        <div className="mb-10 max-w-[720px]">
          <Eyebrow>Sample stories</Eyebrow>
          <SerifHeading size="lg">Listen to what writers are creating.</SerifHeading>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {GENRES.map((g) => {
            const active = g === genre
            return (
              <button
                key={g}
                onClick={() => setGenre(g)}
                className={`rounded-tag px-3.5 py-2 text-[13px] cursor-pointer border transition-all duration-200 ${
                  active
                    ? 'bg-violet text-white border-violet'
                    : 'bg-white text-midnight border-powder hover:border-violet-washed'
                }`}
              >
                {g}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((s) => <Card key={s.title} s={s} />)}
        </div>

        <p className="text-[13px] text-ghost text-center mt-8">
          Tap a cover to hear a 30-second sample.
        </p>
      </Container>
    </AnimatedSection>
  )
}
