import React from 'react'

const STRINGBREAKER = 'https://res.cloudinary.com/dkfl0rew9/image/upload/v1765444826/stringbreaker_keu1v5.png'
const LIVE_FROM_THE_POUND = 'https://res.cloudinary.com/dkfl0rew9/image/upload/v1765444826/livefromthepound_rpe1c8.png'
const COLOSSUS = 'https://res.cloudinary.com/dkfl0rew9/image/upload/v1765444826/colossus_nnliwd.png'

const albums = [
  {
    id: 'colossus-single',
    title: 'Colossus',
    type: 'Single · 2025',
    cover: COLOSSUS,
    description:
      'A towering, slow-build single that leans into heavy guitars, anxious crescendos and a chorus that refuses to resolve cleanly.',
    link: 'https://open.spotify.com/album/60XnjNoOS3nOVkcftqVqQn',
  },
  {
    id: 'stringbreaker-single',
    title: 'Stringbreaker',
    type: 'Single · 2024',
    cover: STRINGBREAKER,
    description:
      'Hooky, driving and cinematic — Stringbreaker is the band breathing hard under streetlights, replaying the night in slow motion.',
    link: 'https://open.spotify.com/album/20cUlGpagjeBHNp4Ic649B',
  },
  {
    id: 'live-from-the-pound',
    title: 'Live from the Pound',
    type: 'EP · 2023',
    cover: LIVE_FROM_THE_POUND,
    description:
      'A live EP that captures Deaf Dogs in a small room at full volume: voices cracking, guitars interlocking and the crowd right on top of the band.',
    link: 'https://deafdogshq.bandcamp.com/album/live-from-the-pound-2',
  },
]

export default function Albums() {
  return (
    <section className="section">
      <div className="section-heading">Releases</div>
      <p className="section-sub">
        Singles and live recordings from Deaf Dogs, moving from tightly wound studio tracks
        to recordings that feel like the amps are in the next room.
      </p>
      <div className="grid grid-3" style={{ marginTop: '2rem' }}>
        {albums.map(a => (
          <div key={a.id} className="surface">
            <div
              style={{
                borderRadius: 16,
                overflow: 'hidden',
                marginBottom: '1rem',
                boxShadow: '0 18px 40px rgba(0,0,0,0.7)',
              }}
            >
              <img
                src={a.cover}
                alt={a.title}
                style={{ width: '100%', display: 'block', objectFit: 'cover' }}
              />
            </div>
            <h3
              style={{
                margin: 0,
                textTransform: 'uppercase',
                letterSpacing: '.14em',
                fontSize: '.9rem',
              }}
            >
              {a.title}
            </h3>
            <div style={{ fontSize: '.75rem', opacity: 0.7, marginTop: '.2rem' }}>{a.type}</div>
            <p style={{ fontSize: '.8rem', opacity: 0.8, marginTop: '.6rem' }}>{a.description}</p>
            <a
              href={a.link}
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: '.8rem',
                marginTop: '.5rem',
                display: 'inline-block',
                textDecoration: 'underline',
                opacity: 0.85,
              }}
            >
              Open on streaming
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
