import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container, AnimatedSection, SerifHeading, Eyebrow, Body, Caption, SCALE } from '../ui'

const GENRES = ['All', 'Romance', 'Thriller', 'Fantasy', 'Drama']

const SERIES = [
  { title: 'The Boss’s Forbidden Love',     genre: 'Romance',  episodes: 47, writer: 'Priya Sharma',   gradient: 'radial-gradient(circle, rgb(127, 125, 252), rgb(244, 75, 204) 33%, rgb(229, 237, 245) 66%)' },
  { title: 'Cold Currency',                  genre: 'Thriller', episodes: 89, writer: 'Arjun Krishnan', gradient: 'linear-gradient(135deg, #1C1C1C, #F51D00)' },
  { title: 'The Witch in the Walls',         genre: 'Fantasy',  episodes: 23, writer: 'Meera Joseph',   gradient: 'linear-gradient(0deg, rgb(255, 46, 222), rgb(210, 152, 255))' },
  { title: 'Empire of Ashes',                genre: 'Thriller', episodes: 64, writer: 'Vikram Rao',     gradient: 'linear-gradient(90deg, rgb(114, 50, 241) 3.13%, rgb(251, 118, 250) 50%, rgb(255, 207, 94))' },
  { title: 'After Midnight',                 genre: 'Romance',  episodes: 32, writer: 'Sara Iqbal',     gradient: 'linear-gradient(135deg, #ff2ede, #d298ff)' },
  { title: 'The Cartographer’s Daughter',    genre: 'Drama',    episodes: 28, writer: 'Devika Menon',   gradient: 'linear-gradient(135deg, #F51D00, #F8715F 60%, #FCC6BF)' },
  { title: 'Ravan’s Diary',                  genre: 'Fantasy',  episodes: 41, writer: 'Karthik Iyer',   gradient: 'radial-gradient(circle, #ff6118, #F51D00 60%, #1C1C1C)' },
  { title: 'Last Train to Banaras',          genre: 'Drama',    episodes: 19, writer: 'Anya Banerjee',  gradient: 'linear-gradient(135deg, #717171, #1C1C1C)' },
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
          {/* Cover title — h4 (Season Mix) reduced to fit covers */}
          <h3
            style={{
              fontFamily:    SCALE.h4.family,
              fontWeight:    SCALE.h4.weight,
              fontSize:      '18px',                     /* tightened from h4 20px to fit */
              lineHeight:    1.15,
              letterSpacing: SCALE.h4.letterSpacing,
              color: '#fff',
              textShadow: '0 1px 6px rgba(0,0,0,0.25)',
              margin: 0,
            }}
          >
            {s.title}
          </h3>
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
            <svg width="11" height="12" viewBox="0 0 11 12" fill="#F51D00"><rect x="1" y="1" width="3" height="10" /><rect x="7" y="1" width="3" height="10" /></svg>
          ) : (
            <svg width="10" height="12" viewBox="0 0 10 12" fill="#F51D00"><path d="M0 1 L10 6 L0 11 Z" /></svg>
          )}
        </button>
      </div>

      <div style={{ padding: '14px 16px' }}>
        {/* h4-ish title in dark */}
        <h3
          style={{
            fontFamily:    SCALE.label.family,
            fontWeight:    SCALE.label.weight,
            fontSize:      '15px',
            lineHeight:    1.3,
            letterSpacing: '-0.005em',
            color: '#1C1C1C',
            margin: '0 0 4px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {s.title}
        </h3>
        <Caption color="#8D8D8D">
          {s.genre} · {s.episodes} episodes · {s.writer}
        </Caption>
      </div>
    </motion.article>
  )
}

export default function SampleStories() {
  const [genre, setGenre] = useState('All')
  const filtered = genre === 'All' ? SERIES : SERIES.filter((s) => s.genre === genre)

  return (
    <AnimatedSection style={{ padding: '120px 0', background: '#FAF9F1' }}>
      <Container>
        <div style={{ marginBottom: '40px', maxWidth: '720px' }}>
          <Eyebrow>Sample stories</Eyebrow>
          <SerifHeading size="h2">Listen to what writers are creating.</SerifHeading>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
          {GENRES.map((g) => {
            const active = g === genre
            return (
              <button
                key={g}
                onClick={() => setGenre(g)}
                style={{
                  background: active ? '#F51D00' : '#ffffff',
                  color: active ? '#ffffff' : '#1C1C1C',
                  border: '1px solid',
                  borderColor: active ? '#F51D00' : '#DAD9D2',
                  borderRadius: '4px',
                  padding: '8px 14px',
                  fontFamily:    SCALE.label.family,
                  fontWeight:    SCALE.label.weight,
                  fontSize:      SCALE.label.fontSize,
                  lineHeight:    SCALE.label.lineHeight,
                  letterSpacing: SCALE.label.letterSpacing,
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

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <Body size="sm" color="#8D8D8D">
            Tap a cover to hear a 30-second sample.
          </Body>
        </div>
      </Container>

      <style>{`
        @media (max-width: 900px) { .sample-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .sample-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </AnimatedSection>
  )
}
