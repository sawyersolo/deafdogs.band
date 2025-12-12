import React from 'react'

const STRINGBREAKER = 'https://res.cloudinary.com/dkfl0rew9/image/upload/v1765444826/stringbreaker_keu1v5.png'
const LIVE_FROM_THE_POUND = 'https://res.cloudinary.com/dkfl0rew9/image/upload/v1765444826/livefromthepound_rpe1c8.png'
const COLOSSUS = 'https://res.cloudinary.com/dkfl0rew9/image/upload/v1765444826/colossus_nnliwd.png'

const photos = [
  {
    url: STRINGBREAKER,
    label: 'Stringbreaker artwork',
  },
  {
    url: LIVE_FROM_THE_POUND,
    label: 'Live from the Pound EP cover',
  },
  {
    url: COLOSSUS,
    label: 'Colossus single artwork',
  },
]

export default function Photos() {
  return (
    <section className="section">
      <div className="section-heading">Artwork &amp; sleeves</div>
      <p className="section-sub">
        The visual side of Deaf Dogs — worn vinyl textures, blown-out teal light and silhouettes
        that feel like they were caught at the edge of the stage.
      </p>
      <div className="grid grid-3" style={{ marginTop: '2rem' }}>
        {photos.map((p, i) => (
          <div
            key={i}
            className="surface"
            style={{
              padding: '.4rem',
              background:
                'radial-gradient(circle at 20% 0%, rgba(77,195,186,0.25), rgba(9,16,19,0.98))',
            }}
          >
            <img
              src={p.url}
              alt={p.label}
              style={{ width: '100%', borderRadius: 12, display: 'block', objectFit: 'cover' }}
            />
            <div style={{ fontSize: '.8rem', opacity: 0.8, marginTop: '.5rem' }}>{p.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
