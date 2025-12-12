import React, { useRef, useState } from 'react'

const tracks = [
  {
    id: 'stringbreaker-track',
    title: 'Stringbreaker',
    release: 'Stringbreaker - Single',
    length: '3:46',
    audio: '/audio/stringbreaker.mp3', // replace with real URL or stream
  },
  {
    id: 'colossus-track',
    title: 'Colossus',
    release: 'Colossus - Single',
    length: '3:42',
    audio: '/audio/colossus.mp3',
  },
  {
    id: 'iwantyou-track',
    title: 'I Want You',
    release: 'Live from the Pound',
    length: '3:30',
    audio: '/audio/i-want-you.mp3',
  },
  {
    id: 'gpg-track',
    title: 'Growing Past Green',
    release: 'Live from the Pound',
    length: '4:05',
    audio: '/audio/growing-past-green.mp3',
  },
]

export default function Music() {
  const [nowPlaying, setNowPlaying] = useState(tracks[0])
  const audioRef = useRef(null)

  const handleSelect = (track) => {
    setNowPlaying(track)
    if (audioRef.current) {
      audioRef.current.src = track.audio
      audioRef.current.play().catch(() => {})
    }
  }

  return (
    <section className="section">
      <div className="section-heading">Listen</div>
      <p className="section-sub">
        Stream Deaf Dogs where you already live, or use the custom player below as a sketchpad
        for live sets, demos and unreleased tracks.
      </p>

      <div className="grid grid-2" style={{ marginTop: '2rem', alignItems: 'flex-start' }}>
        <div className="surface">
          <div style={{ fontSize: '.8rem', textTransform: 'uppercase', letterSpacing: '.14em' }}>
            Streaming portals
          </div>
          <p style={{ fontSize: '.8rem', opacity: 0.8 }}>
            These embeds point at the real Deaf Dogs artist page and releases. Swap them for
            specific albums, playlists or live sessions as they come out.
          </p>
          <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
            <iframe
              title="Deaf Dogs on Spotify"
              style={{ borderRadius: 12, border: 0, width: '100%', height: 152 }}
              src="https://open.spotify.com/embed/artist/1NbDJrrTa2uGG3GaUdKJs2?utm_source=generator"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
            <iframe
              title="Stringbreaker on Spotify"
              style={{ borderRadius: 12, border: 0, width: '100%', height: 152 }}
              src="https://open.spotify.com/embed/album/20cUlGpagjeBHNp4Ic649B?utm_source=generator"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>

        <div className="surface">
          <div style={{ fontSize: '.8rem', textTransform: 'uppercase', letterSpacing: '.14em' }}>
            Custom waveform player
          </div>
          <p style={{ fontSize: '.8rem', opacity: 0.8 }}>
            Wire this up to WAVs, stems or secret links — useful for premieres, in-progress mixes
            or sharing ideas with collaborators.
          </p>

          <div style={{ marginTop: '1rem' }}>
            <div
              style={{
                display: 'grid',
                gap: '.6rem',
                fontSize: '.8rem',
                marginBottom: '1rem',
              }}
            >
              {tracks.map(t => (
                <button
                  key={t.id}
                  onClick={() => handleSelect(t)}
                  style={{
                    textAlign: 'left',
                    borderRadius: 999,
                    padding: '.45rem .9rem',
                    border:
                      nowPlaying.id === t.id
                        ? '1px solid rgba(77,195,186,0.9)'
                        : '1px solid rgba(255,255,255,0.14)',
                    background:
                      nowPlaying.id === t.id
                        ? 'radial-gradient(circle at 0 0, rgba(77,195,186,0.4), rgba(9,16,19,0.96))'
                        : 'rgba(6,12,16,0.96)',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <div>
                      <div style={{ fontWeight: 600 }}>{t.title}</div>
                      <div style={{ opacity: 0.7, fontSize: '.75rem' }}>{t.release}</div>
                    </div>
                    <div style={{ opacity: 0.7 }}>{t.length}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* Fake waveform */}
            <div
              style={{
                borderRadius: 16,
                border: '1px solid rgba(164,196,189,0.35)',
                background:
                  'radial-gradient(circle at 0 0, rgba(77,195,186,0.35), rgba(9,16,19,0.98))',
                padding: '.9rem .8rem',
                marginBottom: '.7rem',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(40, 1fr)',
                  gap: '2px',
                  height: 40,
                  alignItems: 'center',
                }}
              >
                {Array.from({ length: 40 }).map((_, i) => {
                  const h = 10 + (Math.sin(i / 2) + 1) * 10 + (i % 3) * 3
                  return (
                    <div
                      key={i}
                      style={{
                        width: '100%',
                        height: h,
                        borderRadius: 999,
                        background:
                          'linear-gradient(to top, rgba(77,195,186,0.95), rgba(107,138,128,0.95))',
                        opacity: 0.95,
                      }}
                    />
                  )
                })}
              </div>
            </div>

            <audio ref={audioRef} controls style={{ width: '100%' }}>
              <source src={nowPlaying.audio} type="audio/mpeg" />
            </audio>

            <div style={{ marginTop: '.4rem', fontSize: '.75rem', opacity: 0.8 }}>
              Now playing: <strong>{nowPlaying.title}</strong> — {nowPlaying.release}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
