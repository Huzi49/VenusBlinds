import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const alt = 'Venus Blinds'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          background: '#00a9e0',
          color: 'white',
          width: 200,
          height: 200,
          borderRadius: '50%',
          marginBottom: 40,
          fontWeight: 'bold'
        }}>
          VB
        </div>
        <div style={{ 
          fontSize: 60, 
          fontWeight: 'bold',
          color: '#333'
        }}>
          Venus Blinds
        </div>
        <div style={{ 
          fontSize: 36, 
          color: '#666',
          marginTop: 20
        }}>
          Premium Window Treatments
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported size metadata
      // config to also set the ImageResponse width and height
      ...size,
    }
  )
}
