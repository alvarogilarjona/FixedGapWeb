'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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
  lineColor: '#1F4C9C',
}

const steps = [
  {
    number: '01',
    subtitle: 'The Experience',
    title: 'Patient opens FixedGap',
    points: ['Under 5 minutes', 'No setup required', 'Any device with a camera', 'Engaging game'],
    image: null,
    align: 'left',
    offset: 0,
  },
  {
    number: '02',
    subtitle: 'The Technology',
    title: 'Computer vision captures movement',
    points: ['12 hand biomarkers', 'Real-time landmark tracking', 'No data leaves the device', 'ML models process instantly'],
    image: '/hand-tracking.jpg',
    align: 'right',
    offset: 80,
  },
  {
    number: '03',
    subtitle: 'The Outcome',
    title: 'Neurologist receives the report',
    points: ['Full clinical report', 'Clinical Recovery Index', 'Sent automatically', 'Before the next appointment'],
    image: null,
    align: 'left',
    offset: -40,
  },
]

// Componente de línea curva SVG animada
function CurvedLine({ active }: { active: boolean }) {
  return (
    <div style={{
      width: '100%',
      height: '120px',
      display: 'flex',
      justifyContent: 'center',
      overflow: 'visible',
    }}>
      <svg
        width="400"
        height="120"
        viewBox="0 0 400 120"
        style={{ overflow: 'visible' }}
      >
        <motion.path
          d="M 50 0 C 50 60, 350 60, 350 120"
          fill="none"
          stroke={COLORS.lineColor}
          strokeWidth="2"
          strokeDasharray="8 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={active ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
        {/* Punto al final de la línea */}
        <motion.circle
          cx="350"
          cy="120"
          r="4"
          fill={COLORS.lineColor}
          initial={{ opacity: 0, scale: 0 }}
          animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.3, delay: 1.1 }}
        />
      </svg>
    </div>
  )
}

// Card individual
function StepCard({ step, index }: { step: typeof steps[0], index: number }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={{ marginTop: `${step.offset}px` }}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}
        style={{ direction: step.align === 'right' ? 'rtl' : 'ltr' }}
      >
        {/* Card */}
        <div style={{
          direction: 'ltr',
          backgroundColor: COLORS.cardBg,
          border: `1px solid ${COLORS.cardBorder}`,
          borderRadius: '20px',
          padding: '36px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        }}>
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

          <p style={{
            color: COLORS.cardSubtitle,
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '8px'
          }}>
            {step.subtitle}
          </p>

          <h3 style={{
            color: COLORS.cardTitle,
            fontSize: '22px',
            fontWeight: 700,
            lineHeight: 1.3,
            marginBottom: '20px'
          }}>
            {step.title}
          </h3>

          <div className="flex flex-col gap-3">
            {step.points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                className="flex items-center gap-3"
              >
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
              </motion.div>
            ))}
          </div>
        </div>

        {/* Foto / Placeholder */}
        <motion.div
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
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {step.image ? (
            <img src={step.image} alt={step.subtitle} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <p style={{ color: COLORS.placeholderText, fontSize: '13px', fontWeight: 500 }}>
              [ Image — coming soon ]
            </p>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

// Línea con detección de scroll
function ConnectorLine({ index }: { index: number }) {
  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: true
  })

  // La línea entre 01→02 va hacia la derecha
  // La línea entre 02→03 va hacia la izquierda
  const direction = index === 0 ? 'right' : 'left'

  return (
    <div ref={ref} style={{ width: '100%', height: '120px', display: 'flex', justifyContent: 'center', overflow: 'visible' }}>
      <svg width="500" height="120" viewBox="0 0 500 120" style={{ overflow: 'visible' }}>
        <motion.path
          d={direction === 'right'
            ? "M 100 0 C 100 80, 400 40, 400 120"
            : "M 400 0 C 400 80, 100 40, 100 120"
          }
          fill="none"
          stroke={COLORS.lineColor}
          strokeWidth="1.5"
          strokeDasharray="8 5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        />
        <motion.circle
          cx={direction === 'right' ? 400 : 100}
          cy={120}
          r={5}
          fill={COLORS.lineColor}
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 0.8, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 1.3 }}
        />
      </svg>
    </div>
  )
}

export default function Solution() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false // Permite que la animación se revierta al salir
  })

  return (
    <motion.section
      ref={ref}
      animate={{
        backgroundColor: inView ? '#0A0F1E' : '#E8E8E8'
      }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="py-24 px-6"
    >
      {/* Contenido */}
      <div className="max-w-5xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            animate={{
              color: inView ? '#98A2B3' : '#1F4C9C'
            }}
            transition={{ duration: 0.8 }}
            className="text-sm font-semibold tracking-widest uppercase"
          >
            The Solution
          </motion.span>
          <motion.h2
            animate={{
              color: inView ? '#FFFFFF' : '#1A1F3C'
            }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mt-4 leading-tight max-w-2xl"
          >
            Zero hardware.<br />
            <motion.span
              animate={{
                color: inView ? '#98A2B3' : '#1F4C9C'
              }}
              transition={{ duration: 0.8 }}
            >
              Just a webcam.
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Steps */}
        <div className="mt-20 flex flex-col gap-12">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>

      </div>
    </motion.section>
  )
}
