'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MoveRight } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const COLORS = {
  heroBg: '#0A0F1E',
  heroText: '#FFFFFF',
  heroMuted: '#98A2B3',
  label: '#1F4C9C',
  sectionBg: '#FFFFFF',
  sectionAlt: '#F5F0E8',
  sectionDark: '#0A0F1E',
  headline: '#1A1F3C',
  body: '#6B7689',
  cardBg: '#F7F9FC',
  cardBorder: '#E8E0D0',
  cardTitle: '#1A1F3C',
  cardBody: '#6B7689',
  tagBg: '#EAF0FA',
  tagColor: '#1F4C9C',
  placeholderBg: '#E8E0D0',
  placeholderText: '#98A2B3',
  btnBg: '#1F4C9C',
  btnText: '#FFFFFF',
  numberColor: '#1F4C9C',
}

const games = [
  {
    number: '01',
    title: 'The Water Jug',
    tag: 'Wrist Pronation & Supination',
    description: 'The patient tilts a virtual water jug to pour water into a glass. The wrist rotation required to complete the task captures pronation and supination range — one of the most clinically relevant movements for post-stroke motor recovery.',
    biomarker: 'Wrist pronation/supination range of motion',
    why: 'Wrist rotation is one of the first movements affected after stroke and one of the last to recover. Measuring it daily provides a precise picture of motor trajectory.',
    image: null,
    align: 'left',
  },
  {
    number: '02',
    title: 'The Pill Organizer',
    tag: 'Pinch & Fine Motor Control',
    description: 'The patient drags pills into a weekly organizer using a pinch gesture — thumb and index finger closing to grab and release each pill. The precision and speed of each pinch is captured frame by frame.',
    biomarker: 'Pinch precision, finger individuation, grip aperture variability',
    why: 'Pinch grip is a fundamental daily task — buttoning, writing, opening containers. Its degradation after stroke is immediate and its recovery is a key functional milestone.',
    image: null,
    align: 'right',
  },
  {
    number: '03',
    title: 'The Light Switches',
    tag: 'Bilateral Motor Asymmetry',
    description: 'The patient turns light switches on and off — alternating between left and right side targets. The system measures the timing and accuracy difference between both sides, detecting asymmetry in bilateral motor control.',
    biomarker: 'Bilateral motor asymmetry, reaction time laterality, hemispatial neglect',
    why: 'Post-stroke motor impairment is almost always asymmetric. Detecting the gap between the affected and unaffected side — and tracking how it closes over time — is one of the most clinically meaningful indicators of recovery.',
    image: null,
    align: 'left',
  },
]

export default function ExperiencePage() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section style={{ backgroundColor: COLORS.heroBg }} className="pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span style={{ color: COLORS.label }}
            className="text-xs font-semibold tracking-widest uppercase">
            Patient Experience
          </span>
          <h1 style={{ color: COLORS.heroText }}
            className="text-5xl md:text-6xl font-bold mt-4 leading-tight max-w-3xl">
            Three games.<br />
            <span style={{ color: COLORS.label }}>One clinical session.</span>
          </h1>
          <p style={{ color: COLORS.heroMuted }}
            className="text-lg mt-6 max-w-2xl leading-relaxed">
            Each game is designed around a specific rehabilitation movement.
            Under 5 minutes. No setup. No hardware. The clinical data is
            captured automatically.
          </p>
        </div>
      </section>

      {/* TRES JUEGOS */}
      {games.map((game, index) => (
        <section
          key={game.number}
          style={{ backgroundColor: index % 2 === 0 ? COLORS.sectionBg : COLORS.sectionAlt }}
          className="py-24 px-6"
        >
          <div className="max-w-5xl mx-auto">
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              style={{ direction: game.align === 'right' ? 'rtl' : 'ltr' }}
            >

              {/* Texto */}
              <motion.div
                initial={{ opacity: 0, x: game.align === 'right' ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{ direction: 'ltr' }}
              >
                {/* Número + tag */}
                <div className="flex items-center gap-3 mb-6">
                  <span style={{
                    color: COLORS.numberColor,
                    fontSize: '13px',
                    fontWeight: 800,
                  }}>
                    {game.number}
                  </span>
                  <span style={{
                    backgroundColor: COLORS.tagBg,
                    color: COLORS.tagColor,
                    fontSize: '11px',
                    fontWeight: 600,
                    padding: '4px 12px',
                    borderRadius: '999px',
                    letterSpacing: '0.05em',
                  }}>
                    {game.tag}
                  </span>
                </div>

                {/* Título */}
                <h2 style={{ color: COLORS.headline }}
                  className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  {game.title}
                </h2>

                {/* Descripción */}
                <p style={{ color: COLORS.body }}
                  className="text-base leading-relaxed mb-6">
                  {game.description}
                </p>

                {/* Biomarcador */}
                <div style={{
                  backgroundColor: COLORS.cardBg,
                  border: `1px solid ${COLORS.cardBorder}`,
                  borderRadius: '12px',
                  padding: '16px 20px',
                  marginBottom: '16px',
                }}>
                  <p style={{ color: COLORS.label, fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
                    Biomarker captured
                  </p>
                  <p style={{ color: COLORS.cardTitle, fontSize: '14px', fontWeight: 600 }}>
                    {game.biomarker}
                  </p>
                </div>

                {/* Por qué importa */}
                <div style={{
                  borderLeft: `3px solid ${COLORS.label}`,
                  paddingLeft: '16px',
                }}>
                  <p style={{ color: COLORS.body, fontSize: '13px', lineHeight: 1.7, fontStyle: 'italic' }}>
                    {game.why}
                  </p>
                </div>

              </motion.div>

              {/* Imagen / Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: game.align === 'right' ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                style={{
                  direction: 'ltr',
                  backgroundColor: COLORS.placeholderBg,
                  borderRadius: '20px',
                  aspectRatio: '4/3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                {game.image ? (
                  <Image
                    src={game.image}
                    alt={game.title}
                    width={600}
                    height={450}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <p style={{ color: COLORS.placeholderText, fontSize: '13px', fontWeight: 500 }}>
                    [ {game.title} — coming soon ]
                  </p>
                )}
              </motion.div>

            </div>
          </div>
        </section>
      ))}

      {/* CTA FINAL */}
      <section style={{ backgroundColor: COLORS.sectionDark }} className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={{ color: '#FFFFFF' }}
            className="text-3xl md:text-4xl font-bold leading-tight">
            Ready to see it in action?
          </h2>
          <p style={{ color: '#98A2B3' }}
            className="text-lg mt-6 leading-relaxed">
            Book a demo and watch a full session from start to clinical report.
          </p>
          <a href="/contact"
            style={{ backgroundColor: COLORS.btnBg, color: COLORS.btnText }}
            className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-lg text-base font-semibold hover:opacity-90 transition-opacity">
            Book a Demo <MoveRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
