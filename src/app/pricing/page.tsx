'use client'

import { motion } from 'framer-motion'
import { ShieldCheckIcon, Users, Building2, HeartPulse, MoveRight } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// COLORES
const COLORS = {
  heroBg: '#0A0F1E',
  heroText: '#FFFFFF',
  heroMuted: '#98A2B3',
  label: '#1F4C9C',
  sectionBg: '#FFFFFF',
  sectionAlt: '#F5F0E8',
  headline: '#1A1F3C',
  body: '#6B7689',
  cardBg: '#F7F9FC',
  cardBorder: '#E8E0D0',
  buyerBg: '#EAF0FA',
  buyerBorder: '#1F4C9C',
  userBg: '#E8F3EC',
  userBorder: '#1F7A4D',
  buyerColor: '#1F4C9C',
  userColor: '#1F7A4D',
  pricingBg: '#0A0F1E',
  pricingCard: '#141B2D',
  pricingBorder: '#1E2A40',
  pricingText: '#FFFFFF',
  pricingMuted: '#98A2B3',
  pricingAccent: '#1F4C9C',
}

export default function PricingPage() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section style={{ backgroundColor: COLORS.heroBg }}
        className="pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span style={{ color: COLORS.label }}
            className="text-xs font-semibold tracking-widest uppercase">
            Pricing
          </span>
          <h1 style={{ color: COLORS.heroText }}
            className="text-5xl md:text-6xl font-bold mt-4 leading-tight max-w-3xl">
            Simple pricing.<br />
            <span style={{ color: COLORS.pricingAccent }}>Built for healthcare.</span>
          </h1>
          <p style={{ color: COLORS.heroMuted }}
            className="text-lg mt-6 max-w-2xl leading-relaxed">
            The patient never pays. FixedGap is a B2B platform —
            clinics and insurers subscribe, patients benefit.
          </p>
        </div>
      </section>

      {/* BUYER VS USER */}
      <section style={{ backgroundColor: COLORS.sectionBg }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <span style={{ color: COLORS.label }}
            className="text-xs font-semibold tracking-widest uppercase">
            How it works
          </span>
          <h2 style={{ color: COLORS.headline }}
            className="text-3xl md:text-4xl font-bold mt-4 leading-tight max-w-2xl">
            The patient uses it.<br />The clinic pays for it.
          </h2>
          <p style={{ color: COLORS.body }}
            className="text-lg mt-4 max-w-2xl leading-relaxed">
            In healthcare, the person who uses a tool is rarely the person who pays for it.
            FixedGap is designed around this reality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">

            {/* BUYER */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: COLORS.buyerBg,
                border: `2px solid ${COLORS.buyerBorder}`,
                borderRadius: '20px',
                padding: '32px',
              }}
            >
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: COLORS.buyerColor,
                color: '#FFFFFF',
                fontSize: '11px',
                fontWeight: 700,
                padding: '4px 12px',
                borderRadius: '999px',
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}>
                <Building2 size={12} />
                The Buyer
              </div>

              <h3 style={{ color: COLORS.headline, fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>
                Neurologists & Rehabilitation Clinics
              </h3>
              <p style={{ color: COLORS.body, fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
                The clinic subscribes to FixedGap to monitor their patient cohort between visits.
                They receive session reports automatically, access the clinical dashboard,
                and use the data to make better treatment decisions.
              </p>

              <div className="flex flex-col gap-3">
                {[
                  'Full access to the clinical dashboard',
                  'Automated session reports per patient',
                  'Clinical Recovery Index tracking',
                  'Early deterioration alerts',
                  'Longitudinal progress charts',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div style={{
                      width: '6px', height: '6px',
                      borderRadius: '50%',
                      backgroundColor: COLORS.buyerColor,
                      flexShrink: 0,
                    }} />
                    <p style={{ color: COLORS.body, fontSize: '13px' }}>{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* USER */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: COLORS.userBg,
                border: `2px solid ${COLORS.userBorder}`,
                borderRadius: '20px',
                padding: '32px',
              }}
            >
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: COLORS.userColor,
                color: '#FFFFFF',
                fontSize: '11px',
                fontWeight: 700,
                padding: '4px 12px',
                borderRadius: '999px',
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}>
                <HeartPulse size={12} />
                The User
              </div>

              <h3 style={{ color: COLORS.headline, fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>
                Post-Stroke Patients
              </h3>
              <p style={{ color: COLORS.body, fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
                The patient plays a short game from home — under 5 minutes,
                no setup, no hardware. They never see a price tag.
                Their only job is to show up and play.
              </p>

              <div className="flex flex-col gap-3">
                {[
                  'Zero cost — ever',
                  'No installation required',
                  'Any device with a camera',
                  'Under 5 minutes per session',
                  'Engaging, game-based experience',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div style={{
                      width: '6px', height: '6px',
                      borderRadius: '50%',
                      backgroundColor: COLORS.userColor,
                      flexShrink: 0,
                    }} />
                    <p style={{ color: COLORS.body, fontSize: '13px' }}>{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section style={{ backgroundColor: COLORS.pricingBg }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <span style={{ color: COLORS.label }}
            className="text-xs font-semibold tracking-widest uppercase">
            Plans
          </span>
          <h2 style={{ color: COLORS.pricingText }}
            className="text-3xl md:text-4xl font-bold mt-4 leading-tight max-w-2xl">
            Two ways to work with us.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">

            {/* Plan 1 — SaaS por neurólogo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: COLORS.pricingCard,
                border: `1px solid ${COLORS.pricingBorder}`,
                borderRadius: '20px',
                padding: '36px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <p style={{ color: COLORS.pricingMuted, fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
                For Clinics
              </p>
              <div className="flex items-end gap-1 mb-2">
                <span style={{ color: COLORS.pricingMuted, fontSize: '20px' }}>€</span>
                <span style={{ color: COLORS.pricingText, fontSize: '56px', fontWeight: 800, lineHeight: 1 }}>
                  30-50
                </span>
                <span style={{ color: COLORS.pricingMuted, fontSize: '14px', marginBottom: '8px' }}>
                  /month
                </span>
              </div>
              <p style={{ color: COLORS.pricingAccent, fontSize: '13px', fontWeight: 600, marginBottom: '24px' }}>
                per neurologist
              </p>
              <p style={{ color: COLORS.pricingMuted, fontSize: '14px', lineHeight: 1.7, marginBottom: '28px' }}>
                Hospitals and rehabilitation clinics subscribe per clinician.
                Unlimited patients per subscription.
              </p>
              <div className="flex flex-col gap-3 mb-28">
                {[
                  'Unlimited patients',
                  'Full clinical dashboard',
                  'Automated session reports',
                  'Early deterioration alerts',
                  'Priority support',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: COLORS.pricingAccent, flexShrink: 0 }} />
                    <p style={{ color: COLORS.pricingMuted, fontSize: '13px' }}>{item}</p>
                  </div>
                ))}
              </div>
              <a href="/contact"
                style={{
                  display: 'block',
                  backgroundColor: COLORS.pricingAccent,
                  color: '#FFFFFF',
                  padding: '14px 24px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textAlign: 'center',
                }}
                className="hover:opacity-90 transition-opacity">
                Contact us for pricing →
              </a>
            </motion.div>

            {/* Plan 2 — Por paciente aseguradoras */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: COLORS.pricingCard,
                border: `1px solid ${COLORS.pricingAccent}`,
                borderRadius: '20px',
                padding: '36px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Badge destacado */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                backgroundColor: COLORS.pricingAccent,
                color: '#FFFFFF',
                fontSize: '11px',
                fontWeight: 700,
                padding: '4px 12px',
                borderRadius: '999px',
              }}>
                Best ROI
              </div>

              <p style={{ color: COLORS.pricingMuted, fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
                For Insurers
              </p>
              <div className="flex items-end gap-1 mb-2">
                <span style={{ color: COLORS.pricingMuted, fontSize: '20px' }}>€</span>
                <span style={{ color: COLORS.pricingText, fontSize: '56px', fontWeight: 800, lineHeight: 1 }}>
                  20-30
                </span>
                <span style={{ color: COLORS.pricingMuted, fontSize: '14px', marginBottom: '8px' }}>
                  /patient
                </span>
              </div>
              <p style={{ color: COLORS.pricingAccent, fontSize: '13px', fontWeight: 600, marginBottom: '24px' }}>
                per 12-week episode
              </p>
              <p style={{ color: COLORS.pricingMuted, fontSize: '14px', lineHeight: 1.7, marginBottom: '28px' }}>
                Per-patient contracts for insurers and value-based care organizations.
                One prevented readmission saves €3,000-8,000.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  'Pay per patient episode',
                  'Full monitoring for 12 weeks',
                  'Outcome-based reporting',
                  'Readmission risk alerts',
                  'Population health analytics',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: COLORS.pricingAccent, flexShrink: 0 }} />
                    <p style={{ color: COLORS.pricingMuted, fontSize: '13px' }}>{item}</p>
                  </div>
                ))}
              </div>

              {/* ROI callout */}
              <div style={{
                backgroundColor: '#1A2035',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '20px',
              }}>
                <p style={{ color: COLORS.pricingMuted, fontSize: '12px', marginBottom: '4px' }}>
                  Cost vs. benefit
                </p>
                <p style={{ color: COLORS.pricingText, fontSize: '13px', lineHeight: 1.6 }}>
                  €20-30 per patient episode vs. €3,000-8,000 saved per prevented readmission.
                </p>
              </div>

              <a href="/contact"
                style={{
                  display: 'block',
                  backgroundColor: COLORS.pricingAccent,
                  color: '#FFFFFF',
                  padding: '14px 24px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textAlign: 'center',
                }}
                className="hover:opacity-90 transition-opacity">
                Contact us for pricing →
              </a>
            </motion.div>

          </div>

          {/* Nota de seguridad */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <ShieldCheckIcon size={16} style={{ color: COLORS.pricingMuted }} />
            <p style={{ color: COLORS.pricingMuted, fontSize: '13px' }}>
              GDPR compliant by design. No raw biometric data ever leaves the patient's device.
            </p>
          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ backgroundColor: COLORS.sectionAlt }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={{ color: COLORS.headline }}
            className="text-3xl md:text-4xl font-bold leading-tight">
            Not sure which plan fits?
          </h2>
          <p style={{ color: COLORS.body }}
            className="text-lg mt-4 leading-relaxed">
            Book a 30-minute call and we will walk you through the right option for your clinic or organization.
          </p>
          <a href="/contact"
            style={{ backgroundColor: COLORS.label, color: '#FFFFFF' }}
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-lg text-base font-semibold hover:opacity-90 transition-opacity">
            Book a call <MoveRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
