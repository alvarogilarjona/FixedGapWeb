'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const COLORS = {
  bg: '#FFFFFF',
  heroBg: '#0A0F1E',
  label: '#1F4C9C',
  headline: '#FFFFFF',
  heroBody: '#98A2B3',
  categoryBg: '#F7F9FC',
  categoryBorder: '#E8E0D0',
  categoryActive: '#1F4C9C',
  categoryActiveBg: '#EAF0FA',
  categoryText: '#1A1F3C',
  categoryTextActive: '#1F4C9C',
  cardBg: '#FFFFFF',
  cardBorder: '#E8E0D0',
  cardShadow: '0 8px 32px rgba(31,76,156,0.10)',
  metricTitle: '#1A1F3C',
  metricBody: '#6B7689',
}

const categories = [
  {
    id: 'kinematics',
    label: 'Kinematics',
    subtitle: 'Quality of movement',
    metrics: [
      {
        name: 'Movement Smoothness',
        subtitle: 'SPARC / Jerk Score',
        description: 'Measures how fluid or jerky a hand movement is. A healthy, well-controlled movement is smooth; a neurologically impaired one is fragmented and stuttering.',
        insight: 'Single most sensitive marker of neurological motor recovery. Directly correlates with Fugl-Meyer Assessment scores.'
      },
      {
        name: 'Peak & Mean Movement Velocity',
        subtitle: 'Speed of hand and finger movements',
        description: 'Speed measured both as the maximum speed reached and the average speed throughout the movement. Velocity drops sharply after stroke and recovers in a predictable pattern.',
        insight: 'Direct, intuitive progress metric. Separates motor impairment from cognitive and effort issues.'
      },
      {
        name: 'Range of Motion',
        subtitle: 'ROM — Angular amplitude',
        description: 'The angular or linear amplitude of finger and wrist movement — how fully the patient opens, closes, flexes, or extends.',
        insight: 'Quantifies severity of stiffness and spasticity. Intuitive for patients.'
      },
    ]
  },
  {
    id: 'fine-motor',
    label: 'Fine Motor Control',
    subtitle: 'Dexterity and precision',
    metrics: [
      {
        name: 'Finger Individuation',
        subtitle: 'Independent finger control',
        description: 'The ability to move each finger independently without involuntarily activating the others. After stroke, fingers often move as a mass.',
        insight: 'One of the most specific markers of cortical recovery. Correlates with ability to perform daily tasks.'
      },
      {
        name: 'Accuracy / Task Precision',
        subtitle: 'Spatial deviation from target',
        description: 'How closely the patient movements match the intended target in the game — spatial deviation, overshoot, undershoot.',
        insight: 'Measures visuomotor coordination. Detects neglect or attention issues.'
      },
      {
        name: 'Reaction Time',
        subtitle: 'Neural processing speed',
        description: 'The delay between when the game presents a stimulus and when the patient begins moving. Measures central nervous system processing speed.',
        insight: 'Detects slowed neural transmission common after stroke. Sensitive to fatigue and cognitive load.'
      },
    ]
  },
  {
    id: 'tone-tremor',
    label: 'Tone & Tremor',
    subtitle: 'Rigidity and involuntary movement',
    metrics: [
      {
        name: 'Tremor',
        subtitle: 'Frequency & amplitude',
        description: 'Involuntary, rhythmic oscillations of the hand or fingers during intentional movement or at rest. Measured in Hz and mm.',
        insight: 'Appearance of new resting tremor triggers immediate alert. Possible adverse effect or neurological change.'
      },
      {
        name: 'Inter-repetition Variability',
        subtitle: 'Consistency between movements',
        description: 'The inconsistency between one repetition of a movement and the next. A healthy motor system is highly repeatable.',
        insight: 'Higher CV = worse central motor control. Decreasing CV over weeks = motor learning and cortical consolidation.'
      },
    ]
  },
  {
    id: 'endurance',
    label: 'Endurance & Fatigue',
    subtitle: 'Stamina and consistency',
    metrics: [
      {
        name: 'Intra-session Fatigue Index',
        subtitle: 'Performance drop within session',
        description: 'The drop in motor performance from the beginning to the end of the 1-minute game session.',
        insight: 'Reveals neuromuscular and central fatigue. Progressive improvement = better motor stamina.'
      },
      {
        name: 'Movement Execution Time',
        subtitle: 'Time to complete each movement',
        description: 'The total time taken to complete each individual movement from onset to completion.',
        insight: 'Direct proxy for spasticity. Comparing to reaction time separates planning delays from execution delays.'
      },
      {
        name: 'Task Completion Rate',
        subtitle: 'Percentage of exercises completed',
        description: 'The percentage of game exercises that the patient successfully completes within each session.',
        insight: 'Most intuitive dashboard metric for the physician. Tracks functional recovery in real-world terms.'
      },
      {
        name: 'Inter-session Adherence',
        subtitle: 'Consistency across sessions',
        description: 'Tracks whether the patient is playing regularly, how many days have passed, and day-to-day variability in performance.',
        insight: 'Single strongest predictor of rehabilitation outcome. Identifies patients at risk of disengagement.'
      },
    ]
  },
]

export default function BiomarkersPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id)
  const active = categories.find(c => c.id === activeCategory)!

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section style={{ backgroundColor: COLORS.heroBg }}
        className="pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span style={{ color: COLORS.label }}
            className="text-xs font-semibold tracking-widest uppercase">
            Biomarkers
          </span>
          <h1 style={{ color: COLORS.headline }}
            className="text-5xl md:text-6xl font-bold mt-4 leading-tight max-w-3xl">
            Hand Rehabilitation<br />Biomarkers.
          </h1>
          <p style={{ color: COLORS.heroBody }}
            className="text-lg mt-6 max-w-2xl leading-relaxed">
            12 clinically validated metrics extracted from hand movement
            through computer vision. No hardware required.
          </p>
        </div>
      </section>

      {/* Selector + Flashcards */}
      <section style={{ backgroundColor: COLORS.bg }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Columna izquierda — categorías */}
            <div className="flex flex-col gap-3">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    backgroundColor: activeCategory === cat.id
                      ? COLORS.categoryActiveBg : COLORS.categoryBg,
                    border: `1px solid ${activeCategory === cat.id
                      ? COLORS.categoryActive : COLORS.categoryBorder}`,
                    borderRadius: '12px',
                    padding: '16px 20px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <p style={{
                    color: activeCategory === cat.id
                      ? COLORS.categoryTextActive : COLORS.categoryText,
                    fontWeight: 700,
                    fontSize: '15px',
                  }}>
                    {cat.label}
                  </p>
                  <p style={{
                    color: COLORS.metricBody,
                    fontSize: '12px',
                    marginTop: '4px',
                  }}>
                    {cat.subtitle}
                  </p>
                </button>
              ))}
            </div>

            {/* Columna derecha — flashcards animadas */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="flex flex-col gap-4"
                >
                  {active.metrics.map((metric, index) => (
                    <motion.div
                      key={metric.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: 'easeOut',
                        delay: index * 0.08
                      }}
                      style={{
                        backgroundColor: COLORS.cardBg,
                        border: `1px solid ${COLORS.cardBorder}`,
                        borderRadius: '16px',
                        padding: '24px 28px',
                        boxShadow: COLORS.cardShadow,
                      }}
                    >
                      <h3 style={{ color: COLORS.metricTitle }}
                        className="text-lg font-bold">
                        {metric.name}
                      </h3>
                      <p style={{ color: COLORS.label, fontSize: '12px', fontWeight: 600 }}
                        className="mt-1">
                        {metric.subtitle}
                      </p>
                      <p style={{ color: COLORS.metricBody }}
                        className="text-sm mt-3 leading-relaxed">
                        {metric.description}
                      </p>
                      <div style={{
                        borderTop: `1px solid ${COLORS.cardBorder}`,
                        marginTop: '16px',
                        paddingTop: '16px',
                      }}>
                        <p style={{
                          color: COLORS.metricTitle,
                          fontSize: '12px',
                          fontWeight: 600,
                          marginBottom: '4px'
                        }}>
                          Clinical insight
                        </p>
                        <p style={{ color: COLORS.metricBody }}
                          className="text-sm leading-relaxed">
                          {metric.insight}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
