'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const srOnly: React.CSSProperties = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0,0,0,0)',
  whiteSpace: 'nowrap',
  border: 0,
}

const COLORS = {
  bg: '#FFFFFF',
  bgAlt: '#0A0F1E',
  label: '#1F4C9C',
  labelAlt: '#98A2B3',
  headline: '#1A1F3C',
  headlineAlt: '#FFFFFF',
  body: '#6B7689',
  bodyAlt: '#98A2B3',
  tagBg: '#EAF0FA',
  tagColor: '#1F4C9C',
  metricBg: '#F7F9FC',
  metricBorder: '#E8E0D0',
  metricText: '#1A1F3C',
  cardBg: '#FFFFFF',
  cardBgAlt: '#141B2D',
  cardBorder: '#E8E0D0',
  cardBorderAlt: '#1E2A40',
  cardTitle: '#1A1F3C',
  cardTitleAlt: '#FFFFFF',
  cardBody: '#6B7689',
  cardBodyAlt: '#98A2B3',
  bulletColor: '#1F4C9C',
  bulletColorAlt: '#4A7BDB',
  imagePlaceholder: '#E8E0D0',
}

const metrics = [
  'Pinch Precision (M1)',
  'Reach Precision',
  'Endpoint Overshoot',
  'Movement Smoothness — SPARC (M11)',
  'Index Extension Accuracy',
  'Hand Opening Speed (M2)',
  'Rotation Range of Motion (M4)',
  'Pronation/Supination Speed',
  'Inter-hand Asymmetry Index',
  'Recovery Gap',
]

const stakeholders = [
  {
    title: 'For clinicians',
    points: [
      'Continuous visibility into recovery between visits',
      'Data-driven decisions instead of patient recall',
      'Earlier detection of deterioration',
      'Better patient prioritization',
    ]
  },
  {
    title: 'For patients',
    points: [
      'Engaging rehabilitation — not repetitive exercises',
      'Feel supported between appointments',
      'Increased motivation and adherence',
      'Awareness of their own progress',
    ]
  },
  {
    title: 'For health systems',
    points: [
      'More patients monitored, same resources',
      'Reduced long-term costs and complications',
      'Fewer unnecessary check-ins',
      'More efficient use of specialist capacity',
    ]
  },
]

export default function Solution() {
  return (
    <>
      {/* PARTE 1 — One camera. Hand tracking. */}
      <section style={{ backgroundColor: COLORS.bg }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">

          {/* SEO Headings - invisible */}
          <h2 style={srOnly}>Computer Vision Rehabilitation — No Hardware Required</h2>
          <h3 style={srOnly}>Hand tracking with 21 landmarks in real time</h3>
          <h3 style={srOnly}>Clinical-grade movement analysis through any webcam</h3>

          <span style={{ color: COLORS.label }}
            className="text-xs font-semibold tracking-widest uppercase">
            What we capture
          </span>
          <h2 style={{ color: COLORS.headline }}
            className="text-4xl md:text-5xl font-bold mt-4 leading-tight max-w-2xl">
            One camera.<br />Clinical-grade hand tracking.
          </h2>
          <p style={{ color: COLORS.body }}
            className="text-lg mt-4 max-w-2xl leading-relaxed">
            Everything a physiotherapist checks in a 15-minute visit —
            captured automatically every session.
          </p>

          {/* Layout dos columnas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 items-center">

            {/* Columna izquierda — descripción + métricas */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 style={{ color: COLORS.headline }}
                className="text-2xl font-bold mb-4">
                21 landmarks tracked per hand.
              </h3>
              <p style={{ color: COLORS.body }}
                className="text-base leading-relaxed mb-8">
                MediaPipe detects every joint in real time across three clinical games —
                pinch, finger extension, and wrist rotation. Each movement maps directly
                to an item on the Fugl-Meyer Assessment scale, captured automatically every session.
              </p>

              {/* Grid de métricas */}
              <div className="grid grid-cols-2 gap-3">
                {metrics.map((metric, i) => (
                  <motion.div
                    key={metric}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    style={{
                      backgroundColor: COLORS.metricBg,
                      border: `1px solid ${COLORS.metricBorder}`,
                      borderRadius: '8px',
                      padding: '10px 14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: COLORS.bulletColor,
                      flexShrink: 0,
                    }} />
                    <span style={{ color: COLORS.metricText, fontSize: '13px', fontWeight: 500 }}>
                      {metric}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Columna derecha — imagen */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                aspectRatio: '4/3',
              }}
            >
              <Image
                src="/hand-tracking.jpg"
                alt="FixedGap hand tracking with computer vision"
                width={600}
                height={450}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement!.style.backgroundColor = COLORS.imagePlaceholder
                  e.currentTarget.parentElement!.innerHTML = '<p style="display:flex;align-items:center;justify-content:center;height:100%;color:#98A2B3;font-size:13px">[ Hand tracking image — coming soon ]</p>'
                }}
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* PARTE 2 — Value for every stakeholder */}
      <section style={{ backgroundColor: COLORS.bgAlt }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <span style={{ color: COLORS.labelAlt }}
            className="text-xs font-semibold tracking-widest uppercase">
            Value proposition
          </span>
          <h2 style={{ color: COLORS.headlineAlt }}
            className="text-4xl md:text-5xl font-bold mt-4 leading-tight max-w-2xl">
            Value for every stakeholder.
          </h2>
          <p style={{ color: COLORS.bodyAlt }}
            className="text-lg mt-4 max-w-2xl leading-relaxed">
            FixedGap creates measurable value across the entire care chain.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {stakeholders.map((stakeholder, index) => (
              <motion.div
                key={stakeholder.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                style={{
                  backgroundColor: COLORS.cardBg,
                  border: `1px solid ${COLORS.cardBorder}`,
                  borderRadius: '16px',
                  padding: '28px',
                }}
              >
                <h3 style={{ color: COLORS.cardTitle, fontSize: '17px', fontWeight: 700, marginBottom: '16px' }}>
                  {stakeholder.title}
                </h3>
                <div className="flex flex-col gap-3">
                  {stakeholder.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: COLORS.bulletColor,
                        flexShrink: 0,
                        marginTop: '6px',
                      }} />
                      <p style={{ color: COLORS.cardBody, fontSize: '13px', lineHeight: 1.6 }}>
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
