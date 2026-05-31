'use client'

import { motion } from 'framer-motion'

const COLORS = {
  bg: '#E8E8E8',
  label: '#1F4C9C',
  headline: '#1A1F3C',
  body: '#6B7689',
  cardBg: '#FFFFFF',
  cardBorder: '#E8E0D0',
  cardTitle: '#1A1F3C',
  cardSubtitle: '#1F4C9C',
  cardBody: '#6B7689',
  cardNumber: '#1F4C9C',
  cardNumberBg: '#EAF0FA',
  placeholderBg: '#D4D4D4',
  placeholderText: '#98A2B3',
  connectorColor: '#1F4C9C',
}

const steps = [
  {
    number: '01',
    subtitle: 'The Experience',
    title: 'Patient opens FixedGap',
    points: ['Under 5 minutes', 'No setup required', 'Any device with a camera', 'Engaging game'],
    image: null, // placeholder
    imageAlt: 'Patient playing FixedGap',
    align: 'left', // card izquierda, foto derecha
  },
  {
    number: '02',
    subtitle: 'The Technology',
    title: 'Computer vision captures movement',
    points: ['12 hand biomarkers', 'Real-time landmark tracking', 'No data leaves the device', 'ML models process instantly'],
    image: null, // placeholder
    imageAlt: 'Computer vision tracking',
    align: 'right', // foto izquierda, card derecha
  },
  {
    number: '03',
    subtitle: 'The Outcome',
    title: 'Neurologist receives the report',
    points: ['Full clinical report', 'Clinical Recovery Index', 'Sent automatically', 'Before the next appointment'],
    image: null, // placeholder
    imageAlt: 'Clinical dashboard',
    align: 'left', // card izquierda, foto derecha
  },
]

const stepOffsets = [0, 60, -30]  // px de desplazamiento vertical
const imageOffsets = [40, -30, 20]  // px

export default function Solution() {
  return (
    <section style={{ backgroundColor: COLORS.bg }} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <span style={{ color: COLORS.label }}
          className="text-xs font-semibold tracking-widest uppercase">
          The Solution
        </span>
        <h2 style={{ color: COLORS.headline }}
          className="text-4xl md:text-5xl font-bold mt-4 leading-tight max-w-2xl">
          Zero hardware.<br />
          <span style={{ color: COLORS.label }}>Just a webcam.</span>
        </h2>

        {/* Steps en zigzag */}
        <div className="mt-20 flex flex-col gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-80px' }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                step.align === 'right' ? 'lg:flex-row-reverse' : ''
              }`}
              style={{
                direction: step.align === 'right' ? 'rtl' : 'ltr',
                marginTop: `${stepOffsets[index]}px`,
              }}
            >
              {/* Card */}
              <div
                style={{
                  direction: 'ltr',
                  backgroundColor: COLORS.cardBg,
                  border: `1px solid ${COLORS.cardBorder}`,
                  borderRadius: '20px',
                  padding: '36px',
                }}
              >
                {/* Número */}
                <div style={{
                  backgroundColor: COLORS.cardNumberBg,
                  color: COLORS.cardNumber,
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '14px',
                  marginBottom: '20px',
                }}>
                  {step.number}
                </div>

                {/* Subtitle */}
                <p style={{ color: COLORS.cardSubtitle, fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  {step.subtitle}
                </p>

                {/* Título */}
                <h3 style={{ color: COLORS.cardTitle, fontSize: '22px', fontWeight: 700, lineHeight: 1.3, marginBottom: '20px' }}>
                  {step.title}
                </h3>

                {/* Puntos */}
                <div className="flex flex-col gap-3">
                  {step.points.map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: COLORS.cardNumber,
                        flexShrink: 0,
                      }} />
                      <p style={{ color: COLORS.cardBody, fontSize: '14px', lineHeight: 1.5 }}>
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Foto / Placeholder */}
              <div
                style={{
                  direction: 'ltr',
                  marginTop: `${imageOffsets[index]}px`,
                  backgroundColor: COLORS.placeholderBg,
                  borderRadius: '20px',
                  aspectRatio: '4/3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                {step.image ? (
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <p style={{ color: COLORS.placeholderText, fontSize: '13px', fontWeight: 500 }}>
                    [ Image — coming soon ]
                  </p>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
