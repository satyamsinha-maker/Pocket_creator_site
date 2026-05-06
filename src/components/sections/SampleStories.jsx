import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container, AnimatedSection, SerifHeading, Eyebrow } from '../ui'

const SANS = "'Mallory', sans-serif"

const GENRES = ['All', 'Romance', 'Thriller', 'Fantasy', 'Drama']

const SERIES = [
  { title: 'The Boss’s Forbidden Love',     genre: 'Romance',  episodes: 47, writer: 'Priya Sharma',   gradient: 'radial-gradient(circle, rgb(127, 125, 252), rgb(244, 75, 204) 33%, rgb(229, 237, 245) 66%)' },
  { title: 'Cold Currency',                  genre: 'Thriller', episodes: 89, writer: 'Arjun Krishnan', gradient: 'linear-gradient(135deg, #061b31, #533afd)' },
  { title: 'The Witch in the Walls',         genre: 'Fantasy',  episodes: 23, writer: 'Meera Joseph',   gradient: 'linear-gradient(0deg, rgb(255, 46, 222), rgb(210, 152, 255))' },
  { title: 'Empire of Ashes',                genre: 'Thriller', episodes: 64, writer: 'Vikram Rao',     gradient: 'linear-gradient(90deg, rgb(114, 50, 241) 3.13%, rgb(251, 118, 250) 50%, rgb(255, 207, 94))' },
  { title: 'After Midnight',                 genre: 'Romance',  episodes: 32, writer: 'Sara Iqbal',     gradient: 'linear-gradient(135deg, #ff2ede, #d298ff)' },
  { title: 'The Cartographer’s Daughter',    genre: 'Drama',    episodes: 28, writer: 'Devika Menon',   gradient: 'linear-gradient(135deg, #533afd, #8087ff 60%, #b9b9f9)' },
  { title: 'Ravan’s Diary',                  genre: 'Fantasy',  episodes: 41, writer: 'Karthik Iyer',   gradient: 'radial-gradient(circle, #ff6118, #533afd 60%, #061b31)' },
  { title: 'Last Train to Banaras',          genre: 'Drama',    episodes: 19, writer: 'Anya Banerjee',  gradient: 'linear-gradient(135deg, #50617a, #061b31)' },
]

function Card({ s }) {
  const [playing, setPlaying] = useState(false)
  return (
    <motion.article
      whileHover={{ y: -2, boxShadow: 'rgba(50, 50, 93, 0.12) 0px 16px 32px 0px' }}
      style={{
        background: '#ffffff',
        borderRadius: '6px',
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: 'rgba(23, 23, 23, 0.06) 0px 3px 6px 0px',
        transition: 'box-shadow 0.25s',
      }}
    >
      <div
        style={{
          aspectRatio: '4 / 5',
          background: s.gradient,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14 }}>
          <p style={{ fontFamily: SANS, fontWeight: 400, fontSize: '15px', color: '#fff', letterSpacing: '-0.009em', lineHeight: 1.15, textShadow: '0 1px 6px rgba(0,0,0,0.25)' }}>
            {s.title}
          </p>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); setPlaying(!playing) }}
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            width: 36,
            height: 36,
            borderRadius: '4px',
            background: '#ffffff',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'rgba(0,0,0,0.15) 0px 2px 6px 0px',
          }}
          aria-label={playing ? 'Pause sample' : 'Play 30-second sample'}
        >
          {playing ? (
            <svg width="11" height="12" viewBox="0 0 11 12" fill="#533afd"><rect x="1" y="1" width="3" height="10" /><rect x="7" y="1" width="3" height="10" /></svg>
          ) : (
            <svg width="10" height="12" viewBox="0 0 10 12" fill="#533afd"><path d="M0 1 L10 6 L0 11 Z" /></svg>
          )}
        </button>
      </div>

      <div style={{ padding: '14px 16px' }}>
        <p style={{ fontFamily: SANS, fontWeight: 400, fontSize: '15px', color: '#061b31', marginBottom: '4px', letterSpacing: '-0.009em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {s.title}
        </p>
        <p style={{ fontFamily: SANS, fontSize: '12px', color: '#64748d' }}>
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
    <AnimatedSection style={{ padding: '120px 0', background: '#ffffff' }}>
      <Container>
        <div style={{ marginBottom: '40px', maxWidth: '720px' }}>
          <Eyebrow>Sample stories</Eyebrow>
          <SerifHeading size="lg">Listen to what writers are creating.</SerifHeading>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
          {GENRES.map((g) => {
            const active = g === genre
            return (
              <button
                key={g}
                onClick={() => setGenre(g)}
                style={{
                  background: active ? '#533afd' : '#ffffff',
                  color: active ? '#ffffff' : '#061b31',
                  border: '1px solid',
                  borderColor: active ? '#533afd' : '#e5edf5',
                  borderRadius: '4px',
                  padding: '8px 14px',
                  fontFamily: SANS,
                  fontSize: '13px',
                  fontWeight: 400,
                  cursor: 'pointer',
                  transition: 'all 0.18s',
                }}
              >
                {g}
              </button>
            )
          })}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
          }}
          className="sample-grid"
        >
          {filtered.map((s) => <Card key={s.title} s={s} />)}
        </div>

        <p style={{ fontFamily: SANS, fontSize: '13px', color: '#64748d', textAlign: 'center', marginTop: '32px' }}>
          Tap a cover to hear a 30-second sample.
        </p>
      </Container>

      <style>{`
        @media (max-width: 900px) { .sample-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .sample-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </AnimatedSection>
  )
}
