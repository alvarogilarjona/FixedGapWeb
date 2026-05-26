'use client'

const COLORS = {
  bg: '#FFFFFF',
  label: '#1F4C9C',
  headline: '#1A1F3C',
  badgeBg: '#EAF0FA',
  badgeBorder: '#E8E0D0',
  fadeFrom: '#FFFFFF',
}

const partners = [
  { name: 'AWS', logo: '/logos/aws.png' },
  { name: 'SaturnoLabs', logo: '/logos/saturno.png' },
  { name: 'Ayuntamiento de Madrid', logo: '/logos/ayuntamiento-madrid.png' },
  { name: 'Real Colegio Complutense at Harvard', logo: '/logos/Real_Colegio_Complutense.png' },
  { name: 'Universidad Complutense de Madrid', logo: '/logos/Universidad_Complutense.png' },
  { name: 'Comunidad de Madrid', logo: '/logos/ComunidadMadrid.png' },
  { name: 'Bosch', logo: '/logos/BoschDefinitivo.png' },
]

// Duplicar el array para el loop infinito
const allPartners = [...partners, ...partners, ...partners]

export default function Traction() {
  return (
    <section style={{ backgroundColor: COLORS.bg }} className="py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 mb-12">

        {/* Label */}
        <span style={{ color: COLORS.label }}
          className="text-xs font-semibold tracking-widest uppercase">
          Traction
        </span>

        {/* Headline */}
        <h2 style={{ color: COLORS.headline }}
          className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
          Backed and supported by.
        </h2>

      </div>

      {/* Carrusel */}
      <div style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        padding: '0',
      }}>

        {/* Fade izquierda */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '120px',
          background: 'linear-gradient(to right, #FFFFFF, transparent)',
          zIndex: 10,
          pointerEvents: 'none',
        }} />

        {/* Fade derecha */}
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '120px',
          background: 'linear-gradient(to left, #FFFFFF, transparent)',
          zIndex: 10,
          pointerEvents: 'none',
        }} />

        {/* Track animado */}
        <div style={{
          display: 'flex',
          gap: '64px',
          alignItems: 'center',
          animation: 'scroll-logos 30s linear infinite',
          width: 'max-content',
          padding: '16px 48px',
        }}>
          {allPartners.map((partner, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                height: '40px',
              }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                style={{
                  height: '36px',
                  width: 'auto',
                  maxWidth: '120px',
                  objectFit: 'contain',
                  opacity: 0.85,
                  transition: 'opacity 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0.85'}
                onError={e => { e.currentTarget.style.display = 'none' }}
              />
            </div>
          ))}
        </div>

      </div>

      {/* Keyframe para la animación */}
      <style>{`
        @keyframes scroll-logos {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
      `}</style>

    </section>
  )
}
