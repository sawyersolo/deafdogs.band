import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'


const dates = [
  {
    id: 1,
    dateLabel: 'July 17',
    year: '2025',
    city: 'Vancouver, BC',
    venue: 'Astoria Pub',
    note: 'Live @ the Astoria Pub · doors at 8pm',
    coords: { x: 30, y: 40 },
  },
  {
    id: 2,
    dateLabel: 'October 25',
    year: '',
    city: 'Vancouver, BC',
    venue: 'Red Gate Arts Society',
    note: 'Four-band bill at Red Gate',
    coords: { x: 24, y: 30 },
  },
  {
    id: 3,
    dateLabel: 'January 10',
    year: '',
    city: 'Vancouver, BC',
    venue: 'Redgate, 1965 Main Street',
    note: 'Night of bands at Redgate · doors at 8pm',
    coords: { x: 28, y: 34 },
  },
  {
    id: 4,
    dateLabel: 'December 18',
    year: '',
    city: 'Vancouver, BC',
    venue: 'The Cobalt',
    note: 'Back at the Cobalt with a stacked lineup',
    coords: { x: 29, y: 36 },
  },
  {
    id: 5,
    dateLabel: 'July 11',
    year: '',
    city: 'Vancouver, BC',
    venue: 'Wise Hall',
    note: 'Wise Hall show · ticket link in bio',
    coords: { x: 27, y: 38 },
  },
]

export default function Tour() {
  const [active, setActive] = useState(dates[0])

  return (
    <section className="section">
      <div className="section-heading">Shows</div>
      <p className="section-sub">
        A non-exhaustive slice of recent and upcoming shows pulled from social posts — mostly around
        Vancouver, with rooms like Astoria Pub, Wise Hall and Red Gate in the mix. For the latest, keep an eye
        on Instagram.
      </p>

      <div className="tour-grid" style={{ marginTop: '2rem' }}>
        <div className="surface">
          <div style={{ fontSize: '.8rem', textTransform: 'uppercase', letterSpacing: '.16em' }}>
            Selected dates
          </div>
          <div style={{ marginTop: '1rem', display: 'grid', gap: '.6rem' }}>
            {dates.map((d) => (
              <button
                className="btn-soft tour-btn"
                key={d.id}
                onClick={() => setActive(d)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  borderRadius: 999,
                  padding: '.5rem .9rem',
                  border:
                    active.id === d.id
                      ? '1px solid rgba(77,195,186,0.95)'
                      : '1px solid rgba(255,255,255,0.18)',
                  background:
                    active.id === d.id
                      ? 'radial-gradient(circle at 0 0, rgba(77,195,186,0.35), rgba(9,16,19,0.96))'
                      : 'rgba(6,12,16,0.96)',
                  cursor: 'pointer',
                }}
              >
                <div className="tour-date-block">
                  <div className="tour-date-label">
                    {d.dateLabel}
                    {d.year && ` · ${d.year}`}
                  </div>
                  <div className="tour-date-venue">{d.venue}</div>
                  <div className="tour-date-city">{d.city}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="surface">
          <div style={{ fontSize: '.8rem', textTransform: 'uppercase', letterSpacing: '.16em' }}>
            Map (Vancouver & area)
          </div>
          <div style={{ marginTop: '1rem' }}>
            <MapContainer
              center={[49.2827, -123.1207]}
              zoom={11}
              scrollWheelZoom={false}
              style={{ height: 300, width: '100%', borderRadius: 14, overflow: 'hidden' }}
            >
              <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {/* Astoria Pub */}
              <Marker position={[49.2807, -123.065]}>
                <Popup>Astoria Pub</Popup>
              </Marker>

              {/* Wise Hall */}
              <Marker position={[49.2737, -123.0695]}>
                <Popup>Wise Hall</Popup>
              </Marker>

              {/* Red Gate Arts Society */}
              <Marker position={[49.2827, -123.0995]}>
                <Popup>Red Gate Arts Society</Popup>
              </Marker>
            </MapContainer>
            <div style={{ marginTop: '1.2rem', fontSize: '.8rem' }}>
              <div style={{ textTransform: 'uppercase', letterSpacing: '.16em', fontSize: '.75rem' }}>
                Focused stop
              </div>
              <div style={{ fontSize: '1rem', marginTop: '.2rem' }}>{active.venue}</div>
              <div style={{ opacity: 0.85 }}>{active.city}</div>
              <div style={{ opacity: 0.7 }}>
                {active.dateLabel}
                {active.year && ` · ${active.year}`}
              </div>
              <div style={{ opacity: 0.7, marginTop: '.3rem' }}>{active.note}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
