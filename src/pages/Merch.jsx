import React from 'react'
const merchItems = [
  {
    id: 'hoodie-stringbreaker',
    name: 'Stringbreaker Hoodie',
    variant: 'Black / Seafoam Print',
    img: 'https://res.cloudinary.com/dkfl0rew9/image/upload/v1765444826/stringbreaker_keu1v5.png',
  },
  {
    id: 'tee-colossus',
    name: 'Colossus Tee',
    variant: 'Black / Moss Print',
    img: 'https://res.cloudinary.com/dkfl0rew9/image/upload/v1765444826/colossus_nnliwd.png',
  },
  {
    id: 'poster-pound',
    name: 'Live From The Pound Poster',
    variant: '11x17 Print',
    img: 'https://res.cloudinary.com/dkfl0rew9/image/upload/v1765444826/livefromthepound_rpe1c8.png',
  },
]

export default function Merch() {
  return (
    <section className="section merch-section">
      <div className="merch-inner">
        <div className="section-heading">Merch</div>
        <p className="section-sub">
          Pieces built around the Stringbreaker visual palette — teal flashes, worn textures and
          art that feels like a frame from a show you half-remember.
        </p>

        <div className="grid grid-3" style={{ marginTop: '2rem' }}>
          {merchItems.map(item => (
            <div key={item.id} className="surface">
              <div className="surface-inner">
                <div className="aspect-w-1 aspect-h-1 merch-img-frame">
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                  />
                </div>
                <h3 className="card-title" style={{ marginTop: '0.75rem' }}>
                  {item.name}
                </h3>
                <p className="card-sub" style={{ fontSize: '0.85rem' }}>
                  {item.variant}
                </p>
                <p className="card-sub" style={{ fontSize: '.75rem', opacity: 0.7, marginTop: '0.75rem' }}>
                  Store coming soon — this design will be available in a future drop.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="coming-soon-overlay">COMING SOON</div>
    </section>
  )
}
