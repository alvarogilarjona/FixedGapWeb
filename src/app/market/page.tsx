'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Globe3D, GlobeMarker } from '@/components/ui/3d-globe'
import { MoveRight } from 'lucide-react'

// COLORES — cambiar aquí para modificar toda la página
const COLORS = {
  heroBg: '#0A0F1E',
  heroText: '#FFFFFF',
  heroMuted: '#98A2B3',
  label: '#1F4C9C',
  sectionBg: '#FFFFFF',
  sectionAlt: '#E8E8E8',
  headline: '#1A1F3C',
  body: '#6B7689',
  cardBg: '#F7F9FC',
  cardBorder: '#E8E0D0',
  tamColor: '#1F4C9C',
  samColor: '#1A1F3C',
  somColor: '#1F7A4D',
  whyNowBg: '#0A0F1E',
  whyNowText: '#FFFFFF',
  whyNowMuted: '#98A2B3',
  modelBg: '#E8E8E8',
  modelHeadline: '#1A1F3C',
  modelPrice: '#1F4C9C',
  modelBody: '#6B7689',
  modelCardBg: '#FFFFFF',
  modelCardBorder: '#E8E0D0',
}

// Marcadores del globo
const markers: GlobeMarker[] = [
  {
    lat: 40.4168,
    lng: -3.7038,
    src: 'https://flagcdn.com/w80/es.png',
    label: 'Madrid',
    info: 'HQ & First Pilots',
  },
  {
    lat: 40.7128,
    lng: -74.006,
    src: 'https://flagcdn.com/w80/us.png',
    label: 'New York',
    info: 'U.S. Market Entry',
  },
  {
    lat: 52.52,
    lng: 13.405,
    src: 'https://flagcdn.com/w80/de.png',
    label: 'Berlin',
    info: 'DiGA Pathway',
  },
  {
    lat: 48.8566,
    lng: 2.3522,
    src: 'https://flagcdn.com/w80/fr.png',
    label: 'Paris',
    info: 'EU Expansion',
  },
]

// TAM / SAM / SOM
const marketSize = [
  {
    label: 'TAM',
    value: '$42B',
    description: 'Global neurorehabilitation + digital health technologies',
    color: COLORS.tamColor,
  },
  {
    label: 'SAM',
    value: '$8-12B',
    description: 'Post-stroke rehab monitoring in U.S., Germany, France, Spain',
    color: COLORS.samColor,
  },
  {
    label: 'SOM (Year 3)',
    value: '0.5-1%',
    description: '500-1,000 subscribers or 5,000-15,000 monthly active patients',
    color: COLORS.somColor,
  },
]

// Why now
const whyNow = [
  'Rising stroke prevalence globally',
  'Increasing strain on rehabilitation workforces',
  'Shift toward digital health and remote care',
  'Computer vision now accessible without hardware',
  'Value-based care models incentivize outcomes',
  'Patients already have cameras on their devices',
]

// Business model
const businessModel = [
  {
    price: '$149-249',
    unit: 'per clinician / month',
    description: 'Hospitals and rehab clinics subscribe. The neurologist pays, the patient plays for free.'
  },
  {
    price: '$45-65',
    unit: 'per patient / month',
    description: 'Per-patient contracts with insurers. ROI argument: one prevented readmission saves $3,000-8,000.'
  },
]

export default function MarketPage() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section style={{ backgroundColor: COLORS.heroBg }}
        className="pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span style={{ color: COLORS.label }}
            className="text-xs font-semibold tracking-widest uppercase">
            Market
          </span>
          <h1 style={{ color: COLORS.heroText }}
            className="text-5xl md:text-6xl font-bold mt-4 leading-tight max-w-3xl">
            A massive, underserved market.
          </h1>
          <p style={{ color: COLORS.heroMuted }}
            className="text-lg mt-6 max-w-2xl leading-relaxed">
            Post-stroke rehabilitation is one of the largest unmet needs
            in digital health — and it is growing.
          </p>
        </div>
      </section>

      {/* GLOBO — From Madrid to the world */}
      <section style={{ backgroundColor: COLORS.sectionBg }}
        className="py-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto">

          <span style={{ color: COLORS.label }}
            className="text-xs font-semibold tracking-widest uppercase">
            Go-to-market
          </span>
          <h2 style={{ color: COLORS.headline }}
            className="text-3xl md:text-4xl font-bold mt-4 leading-tight max-w-2xl">
            From Madrid to the world.
          </h2>
          <p style={{ color: COLORS.body }}
            className="text-lg mt-4 max-w-xl leading-relaxed">
            Starting in Spain, expanding to the U.S., Germany, and France —
            targeting the largest post-stroke rehabilitation markets where
            remote monitoring is most needed.
          </p>
          <p style={{ color: COLORS.body, fontSize: '13px' }}
            className="mt-3">
            Hover over the flags to explore each market
          </p>

        </div>

        {/* Globo 3D */}
        <Globe3D
          markers={markers}
          className="h-[450px] md:h-[550px] mt-8"
          config={{
            atmosphereColor: '#4da6ff',
            atmosphereIntensity: 0.4,
            showAtmosphere: true,
            bumpScale: 3,
            autoRotateSpeed: 0.4,
          }}
        />
      </section>

      {/* TAM / SAM / SOM */}
      <section style={{ backgroundColor: COLORS.sectionAlt }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <span style={{ color: COLORS.label }}
            className="text-xs font-semibold tracking-widest uppercase">
            Market opportunity
          </span>
          <h2 style={{ color: COLORS.headline }}
            className="text-3xl md:text-4xl font-bold mt-4 leading-tight max-w-2xl">
            The numbers behind the opportunity.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {marketSize.map(item => (
              <div key={item.label}
                style={{
                  backgroundColor: COLORS.cardBg,
                  border: `1px solid ${COLORS.cardBorder}`,
                  borderTop: `3px solid ${item.color}`,
                  borderRadius: '16px',
                  padding: '28px 24px',
                }}>
                <p style={{ color: item.color }}
                  className="text-xs font-bold tracking-widest uppercase">
                  {item.label}
                </p>
                <p style={{ color: COLORS.headline }}
                  className="text-4xl font-bold mt-3 leading-none">
                  {item.value}
                </p>
                <p style={{ color: COLORS.body }}
                  className="text-sm mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY NOW */}
      <section style={{ backgroundColor: COLORS.whyNowBg }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <span style={{ color: COLORS.label }}
            className="text-xs font-semibold tracking-widest uppercase">
            Why now
          </span>
          <h2 style={{ color: COLORS.whyNowText }}
            className="text-3xl md:text-4xl font-bold mt-4 leading-tight max-w-2xl">
            Six forces converging at once.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
            {whyNow.map((reason, index) => (
              <div key={index}
                className="flex items-start gap-4">
                <div style={{
                  backgroundColor: COLORS.label,
                  minWidth: '24px',
                  height: '24px',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                }}>
                  {index + 1}
                </div>
                <p style={{ color: COLORS.whyNowMuted }}
                  className="text-base leading-relaxed">
                  {reason}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BUSINESS MODEL */}
      <section style={{ backgroundColor: COLORS.modelBg }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <span style={{ color: COLORS.label }}
            className="text-xs font-semibold tracking-widest uppercase">
            Business model
          </span>
          <h2 style={{ color: COLORS.modelHeadline }}
            className="text-3xl md:text-4xl font-bold mt-4 leading-tight max-w-2xl">
            B2B SaaS. Simple and scalable.
          </h2>
          <p style={{ color: COLORS.modelBody }}
            className="text-lg mt-4 max-w-xl leading-relaxed">
            Hospitals and rehab clinics subscribe. Patients are users, not payers.
            Value-based contracts as a future phase.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {businessModel.map((model, index) => (
              <div key={index}
                style={{
                  backgroundColor: COLORS.modelCardBg,
                  border: `1px solid ${COLORS.modelCardBorder}`,
                  borderRadius: '16px',
                  padding: '28px 24px',
                }}>
                <p style={{ color: COLORS.modelPrice }}
                  className="text-4xl font-bold leading-none">
                  {model.price}
                </p>
                <p style={{ color: COLORS.label }}
                  className="text-xs font-semibold mt-2 tracking-wide">
                  {model.unit}
                </p>
                <p style={{ color: COLORS.modelBody }}
                  className="text-sm mt-4 leading-relaxed">
                  {model.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ backgroundColor: '#0A0F1E' }} className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={{ color: '#FFFFFF' }}
            className="text-3xl md:text-4xl font-bold leading-tight">
            Ready to be part of this market?
          </h2>
          <p style={{ color: '#98A2B3' }}
            className="text-lg mt-6 leading-relaxed">
            We are looking for clinical partners, investors, and early adopters.
          </p>
          <a href="/contact"
            style={{ backgroundColor: COLORS.label, color: '#FFFFFF' }}
            className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-lg text-base font-semibold hover:opacity-90 transition-opacity">
            Get in touch <MoveRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
