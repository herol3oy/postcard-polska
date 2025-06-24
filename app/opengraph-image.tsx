import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Postcard Polska - Traditional Polish Postcards';
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '2rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <img
          src="/warszawska_syrenka_postcard_front.JPG"
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '2rem',
            background: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
          }}
        >
          <h1 style={{ margin: 0, fontSize: '2.5rem' }}>Postcard Polska</h1>
          <p style={{ margin: '0.5rem 0 0', fontSize: '1.5rem' }}>Traditional Polish Postcards</p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
