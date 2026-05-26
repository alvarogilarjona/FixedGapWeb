'use client'

import { MoveRight } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const COLORS = {
  heroBg: '#0A0F1E',
  heroText: '#FFFFFF',
  heroAccent: '#1F4C9C',
  heroMuted: '#98A2B3',
  label: '#1F4C9C',
  sectionBg: '#FFFFFF',
  sectionAlt: '#F5F0E8',
  headline: '#1A1F3C',
  body: '#6B7689',
  cardBg: '#F7F9FC',
  cardBorder: '#E8E0D0',
  cardIcon: '#1F4C9C',
  cardIconBg: '#EAF0FA',
  placeholderBg: '#E8E0D0',
  placeholderText: '#98A2B3',
  ctaBg: '#0A0F1E',
  ctaText: '#FFFFFF',
  ctaBody: '#98A2B3',
  btnBg: '#1F4C9C',
  btnText: '#FFFFFF',
  stepNumber: '#1F4C9C',
  stepNumberBg: '#EAF0FA',
  stepBorder: '#E8E0D0',
}

const phases = [
  {
    number: '01',
    title: 'Open the game',
    description: 'No installation. No setup. The patient opens FixedGap on any device with a camera and starts immediately.'
  },
  {
    number: '02',
    title: 'Cast the line',
    description: 'A hand gesture unlocks the fishing rod. The camera detects the movement in real time — no controller needed.'
  },
  {
    number: '03',
    title: 'A fish bites',
    description: 'When a fish bites, a clinical challenge appears. The patient completes it to reel the fish in.'
  },
  {
    number: '04',
    title: 'Complete the challenge',
    description: 'Each challenge captures a different clinical biomarker — pinch precision, finger individuation, hand opening speed.'
  },
  {
    number: '05',
    title: 'Session complete',
    description: 'The session ends in under 5 minutes. The clinical report is automatically sent to the neurologist.'
  },
]

const challenges = [
  {
    title: 'Pinch Precision',
    description: 'Touch thumb and index finger together. Captures fine motor control and dexterity.'
  },
  {
    title: 'Hand Opening',
    description: 'Open the hand fully and hold. Measures extension speed and range of motion.'
  },
  {
    title: 'Finger Individuation',
    description: 'Extend a specific number of fingers. Tests independent finger control — one of the most specific markers of cortical recovery.'
  },
  {
    title: 'Sustained Phonation',
    description: 'Hold the vowel sound "A". Captures dysarthria biomarkers — phonation time and vocal stability.'
  },
]

export default function ExperiencePage() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section style={{ backgroundColor: COLORS.heroBg }}
        className="pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <span style={{ color: COLORS.label }}
            className="text-xs font-semibold tracking-widest uppercase">
            Patient Experience
          </span>
          <h1 style={{ color: COLORS.heroText }}
            className="text-5xl md:text-6xl font-bold mt-6 leading-tight max-w-3xl">
            Rehabilitation that feels like a game.
          </h1>
          <p style={{ color: COLORS.heroMuted }}
            className="text-lg mt-6 max-w-2xl leading-relaxed">
            Patients open FixedGap, play a short fishing game, and close it.
            Under 5 minutes. No setup. No hardware. No friction.
            The clinical data is captured automatically.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS — fases */}
      <section style={{ backgroundColor: COLORS.sectionBg }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <span style={{ color: COLORS.label }}
            className="text-xs font-semibold tracking-widest uppercase">
            A session in 5 steps
          </span>
          <h2 style={{ color: COLORS.headline }}
            className="text-3xl md:text-4xl font-bold mt-4 leading-tight max-w-2xl">
            Simple for the patient.<br />Powerful for the clinician.
          </h2>

          <div className="mt-16 flex flex-col">
            {phases.map((phase, index) => (
              <div key={phase.number}
                style={{
                  borderBottom: index < phases.length - 1
                    ? `1px solid ${COLORS.stepBorder}` : 'none',
                  padding: '28px 0',
                }}
                className="flex items-start gap-8">

                {/* Número */}
                <div style={{
                  backgroundColor: COLORS.stepNumberBg,
                  color: COLORS.stepNumber,
                  minWidth: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '14px',
                }}>
                  {phase.number}
                </div>

                {/* Texto */}
                <div>
                  <h3 style={{ color: COLORS.headline }}
                    className="text-lg font-bold">
                    {phase.title}
                  </h3>
                  <p style={{ color: COLORS.body }}
                    className="text-sm mt-2 leading-relaxed max-w-xl">
                    {phase.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLACEHOLDER VÍDEO/CAPTURAS */}
      <section style={{ backgroundColor: COLORS.sectionAlt }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <span style={{ color: COLORS.label }}
            className="text-xs font-semibold tracking-widest uppercase">
            See it in action
          </span>
          <h2 style={{ color: COLORS.headline }}
            className="text-3xl md:text-4xl font-bold mt-4 leading-tight max-w-2xl">
            Watch a full session.
          </h2>

          {/* Placeholder vídeo */}
          <div style={{
            backgroundColor: COLORS.placeholderBg,
            borderRadius: '16px',
            aspectRatio: '16/9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `1px solid ${COLORS.cardBorder}`,
            marginTop: '32px',
          }}>
            <p style={{ color: COLORS.placeholderText }}
              className="text-sm font-medium">
              [ Game video — coming soon ]
            </p>
          </div>

        </div>
      </section>

      {/* LOS RETOS CLÍNICOS */}
      <section style={{ backgroundColor: COLORS.sectionBg }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <span style={{ color: COLORS.label }}
            className="text-xs font-semibold tracking-widest uppercase">
            Clinical challenges
          </span>
          <h2 style={{ color: COLORS.headline }}
            className="text-3xl md:text-4xl font-bold mt-4 leading-tight max-w-2xl">
            Every challenge captures a biomarker.
          </h2>
          <p style={{ color: COLORS.body }}
            className="text-lg mt-6 max-w-2xl leading-relaxed">
            When a fish bites, a rehabilitation challenge appears.
            Each one is designed to capture a specific clinical metric
            — invisibly, while the patient focuses on catching the fish.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {challenges.map(challenge => (
              <div key={challenge.title}
                style={{
                  backgroundColor: COLORS.cardBg,
                  border: `1px solid ${COLORS.cardBorder}`,
                  borderRadius: '16px',
                  padding: '24px',
                }}>
                <h3 style={{ color: COLORS.headline }}
                  className="text-base font-bold">
                  {challenge.title}
                </h3>
                <p style={{ color: COLORS.body }}
                  className="text-sm mt-2 leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ backgroundColor: COLORS.ctaBg }} className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={{ color: COLORS.ctaText }}
            className="text-3xl md:text-4xl font-bold leading-tight">
            Ready to see it in action?
          </h2>
          <p style={{ color: COLORS.ctaBody }}
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
