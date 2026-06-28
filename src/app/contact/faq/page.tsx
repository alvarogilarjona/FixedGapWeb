'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, MoveRight } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const FAQ_COLORS = {
  heroBg: '#0A0F1E',
  heroText: '#FFFFFF',
  heroMuted: '#98A2B3',
  bg: '#F7F9FC',
  label: '#1F4C9C',
  headline: '#1A1F3C',
  questionBg: '#FFFFFF',
  questionBorder: '#E8E0D0',
  questionBorderActive: '#1F4C9C',
  questionText: '#1A1F3C',
  answerText: '#6B7689',
  iconColor: '#1F4C9C',
  divider: '#E8E0D0',
  ctaBg: '#0A0F1E',
  ctaText: '#FFFFFF',
  btnBg: '#1F4C9C',
  btnText: '#FFFFFF',
}

const faqs = [
  {
    question: 'Is FixedGap available now?',
    answer: 'We are currently in the pilot phase, working with selected neurologists and rehabilitation clinics. Contact us to join the waitlist.'
  },
  {
    question: 'How long does a demo take?',
    answer: 'A typical demo is 30 minutes — we walk you through the patient experience and the clinical dashboard, and answer any questions.'
  },
  {
    question: 'Do I need any hardware to try it?',
    answer: 'No. FixedGap uses only the camera already on your computer, tablet, or smartphone. No wearables, no VR headset, no specialized equipment.'
  },
  {
    question: 'What clinical metrics does it capture?',
    answer: 'Pinch precision, hand opening speed, finger individuation, range of motion, movement smoothness, reaction time, and inter-repetition variability. Enough for clinicians to assess whether a patient is improving, stable, or deteriorating.'
  },
  {
    question: 'Is it for clinics or for home use?',
    answer: 'Both. Patients play a short game at home while clinicians monitor recovery trends from their dashboard. It extends care beyond the clinic without adding workload.'
  },
  {
    question: 'Who pays for FixedGap?',
    answer: 'Hospitals, rehabilitation centers, and clinics subscribe. Patients are users, not payers. Future phases may include value-based contracts with insurers.'
  },
  {
    question: 'What conditions does it support?',
    answer: 'Initially, post-stroke motor rehabilitation. The same model can extend to Parkinson\'s disease, multiple sclerosis, and other conditions with neurological motor deficits.'
  },
  {
    question: 'Is patient data private?',
    answer: 'Yes. All processing happens locally in the patient\'s browser. No audio, no video, no biometric raw data ever leaves the device. Only the computed clinical metrics are stored. We are GDPR compliant by design.'
  },
]

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div
      style={{
        backgroundColor: FAQ_COLORS.questionBg,
        border: `1px solid ${isOpen ? FAQ_COLORS.questionBorderActive : FAQ_COLORS.questionBorder}`,
        borderRadius: '12px',
        overflow: 'hidden',
        transition: 'border-color 0.2s ease',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <div style={{
        padding: '20px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
      }}>
        <p style={{
          color: FAQ_COLORS.questionText,
          fontSize: '16px',
          fontWeight: 600,
          lineHeight: 1.4,
        }}>
          {question}
        </p>
        <div style={{ color: FAQ_COLORS.iconColor, flexShrink: 0 }}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div style={{
              padding: '0 24px 20px',
              borderTop: `1px solid ${FAQ_COLORS.divider}`,
              paddingTop: '16px',
            }}>
              <p style={{ color: FAQ_COLORS.answerText, fontSize: '14px', lineHeight: 1.7 }}>
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section style={{ backgroundColor: FAQ_COLORS.heroBg }} className="pt-40 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <span style={{ color: FAQ_COLORS.label }}
            className="text-xs font-semibold tracking-widest uppercase">
            FAQ
          </span>
          <h1 style={{ color: FAQ_COLORS.heroText }}
            className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
            Quick answers.
          </h1>
          <p style={{ color: FAQ_COLORS.heroMuted }}
            className="text-lg mt-6 max-w-xl leading-relaxed">
            Everything you need to know before reaching out.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: FAQ_COLORS.bg }} className="py-24 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ backgroundColor: FAQ_COLORS.ctaBg }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={{ color: FAQ_COLORS.ctaText }}
            className="text-3xl md:text-4xl font-bold leading-tight">
            Didn&apos;t find what you were looking for?
          </h2>
          <a href="/contact"
            style={{ backgroundColor: FAQ_COLORS.btnBg, color: FAQ_COLORS.btnText }}
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-lg text-base font-semibold hover:opacity-90 transition-opacity">
            Get in touch <MoveRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
