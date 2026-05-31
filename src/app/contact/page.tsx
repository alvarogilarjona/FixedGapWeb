'use client'

import { Mail, Video, Stethoscope, TrendingUp, FlaskConical } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const COLORS = {
  heroBg: '#0A0F1E',
  heroText: '#FFFFFF',
  heroMuted: '#98A2B3',
  label: '#1F4C9C',
  sectionBg: '#FFFFFF',
  headline: '#1A1F3C',
  body: '#6B7689',
  cardBg: '#F7F9FC',
  cardBorder: '#E8E0D0',
  cardTitle: '#1A1F3C',
  cardBody: '#6B7689',
  iconBg: '#EAF0FA',
  iconColor: '#1F4C9C',
  emailColor: '#1F4C9C',
  btnBg: '#1F4C9C',
  btnText: '#FFFFFF',
  profileBg: '#F7F9FC',
  profileBorder: '#E8E0D0',
  profileIcon: '#1F4C9C',
  profileIconBg: '#EAF0FA',
  profileTitle: '#1A1F3C',
  profileBody: '#6B7689',
  faqBg: '#E8E8E8',
  faqQuestion: '#1A1F3C',
  faqAnswer: '#6B7689',
  faqBorder: '#E8E0D0',
  locationBg: '#0A0F1E',
  locationText: '#FFFFFF',
  locationMuted: '#98A2B3',
}

const profiles = [
  {
    icon: Stethoscope,
    title: 'Neurologists & Clinicians',
    body: 'Interested in monitoring your patients between visits with objective daily data.'
  },
  {
    icon: TrendingUp,
    title: 'Investors',
    body: 'Looking to back the future of neurological rehabilitation technology.'
  },
  {
    icon: FlaskConical,
    title: 'Partners & Researchers',
    body: 'Want to collaborate, run a clinical pilot, or explore research opportunities.'
  },
]

const faqs = [
  {
    question: 'Do I need to buy any hardware or sensors?',
    answer: 'No. FixedGap uses only the camera already on your computer, tablet, or smartphone. No wearables, no VR headset, no specialized equipment.'
  },
  {
    question: 'What clinical metrics does it capture?',
    answer: 'Reaction time, eye-hand latency, movement accuracy, coordination score, completion time, error rate, and longitudinal trends. Enough for clinicians to assess whether a patient is improving, stable, or deteriorating.'
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
]

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section style={{ backgroundColor: COLORS.heroBg }}
        className="pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span style={{ color: COLORS.label }}
            className="text-xs font-semibold tracking-widest uppercase">
            Contact
          </span>
          <h1 style={{ color: COLORS.heroText }}
            className="text-5xl md:text-6xl font-bold mt-4 leading-tight max-w-2xl">
            Let's talk.
          </h1>
          <p style={{ color: COLORS.heroMuted }}
            className="text-lg mt-6 max-w-xl leading-relaxed">
            Whether you are a neurologist, an investor, or just curious —
            we would love to hear from you.
          </p>
        </div>
      </section>

      {/* DOS OPCIONES */}
      <section style={{ backgroundColor: COLORS.sectionBg }}
        className="py-24 px-6">
        <div className="max-w-3xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Email */}
            <div style={{
              backgroundColor: COLORS.cardBg,
              border: `1px solid ${COLORS.cardBorder}`,
              borderRadius: '16px',
              padding: '36px 28px',
            }} className="flex flex-col gap-6">

              <div style={{
                backgroundColor: COLORS.iconBg,
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Mail size={20} style={{ color: COLORS.iconColor }} />
              </div>

              <div>
                <h2 style={{ color: COLORS.cardTitle }}
                  className="text-xl font-bold">
                  Send us an email
                </h2>
                <p style={{ color: COLORS.cardBody }}
                  className="text-sm mt-2 leading-relaxed">
                  For general enquiries, partnerships, clinical collaborations, or press.
                </p>
              </div>

              <a href="mailto:hello@fixedgap.com"
                style={{ color: COLORS.emailColor }}
                className="text-base font-semibold hover:opacity-70 transition-opacity mt-auto">
                hello@fixedgap.com →
              </a>

            </div>

            {/* Book a call */}
            <div style={{
              backgroundColor: COLORS.cardBg,
              border: `1px solid ${COLORS.cardBorder}`,
              borderRadius: '16px',
              padding: '36px 28px',
            }} className="flex flex-col gap-6">

              <div style={{
                backgroundColor: COLORS.iconBg,
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Video size={20} style={{ color: COLORS.iconColor }} />
              </div>

              <div>
                <h2 style={{ color: COLORS.cardTitle }}
                  className="text-xl font-bold">
                  Book a call
                </h2>
                <p style={{ color: COLORS.cardBody }}
                  className="text-sm mt-2 leading-relaxed">
                  Schedule a 30-minute Zoom call with the team. Available for investors, clinicians, and partners.
                </p>
              </div>

              <a href="https://cal.com/fixedgap"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: COLORS.btnBg,
                  color: COLORS.btnText,
                  borderRadius: '8px',
                  padding: '12px 20px',
                  fontSize: '14px',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: 'auto',
                }}
                className="hover:opacity-90 transition-opacity">
                Book a 30-min call →
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* FAQ RÁPIDO */}
      <section style={{ backgroundColor: COLORS.faqBg }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto">

          <span style={{ color: COLORS.label }}
            className="text-xs font-semibold tracking-widest uppercase">
            Quick answers
          </span>

          <div className="mt-10 flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div key={index} style={{
                borderBottom: index < faqs.length - 1 ? `1px solid ${COLORS.faqBorder}` : 'none',
                paddingBottom: '20px',
              }}>
                <h3 style={{ color: COLORS.faqQuestion, fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>
                  {faq.question}
                </h3>
                <p style={{ color: COLORS.faqAnswer, fontSize: '14px', lineHeight: 1.7 }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* UBICACIÓN */}
      <section style={{ backgroundColor: COLORS.locationBg }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">

          <p style={{ color: COLORS.locationMuted, fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Where we are
          </p>

          <h3 style={{ color: COLORS.locationText, fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>
            Based in Madrid.<br />Building globally.
          </h3>

          <p style={{ color: COLORS.locationMuted, fontSize: '14px', marginTop: '12px', lineHeight: 1.6 }}>
            Born at the Harvard HSIL Hackathon 2026.<br />
            Top 20 globally out of 50 countries.
          </p>

          <div style={{
            marginTop: '24px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            border: '1px solid #2E3757',
            borderRadius: '999px',
            padding: '6px 16px',
            backgroundColor: '#1A2035',
          }}>
            <span style={{ color: '#FFFFFF', fontSize: '13px', fontWeight: 600 }}>
              🎓 Harvard HSIL Top 20 — Global Phase 2026
            </span>
          </div>

        </div>
      </section>

      {/* WHO SHOULD REACH OUT */}
      <section style={{ backgroundColor: COLORS.sectionBg }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto">

          <span style={{ color: COLORS.label }}
            className="text-xs font-semibold tracking-widest uppercase">
            Who should reach out
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {profiles.map(profile => (
              <div key={profile.title} style={{
                backgroundColor: COLORS.profileBg,
                border: `1px solid ${COLORS.profileBorder}`,
                borderRadius: '16px',
                padding: '24px',
              }}>
                <div style={{
                  backgroundColor: COLORS.profileIconBg,
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}>
                  <profile.icon size={20} style={{ color: COLORS.profileIcon }} />
                </div>
                <h3 style={{ color: COLORS.profileTitle, fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>
                  {profile.title}
                </h3>
                <p style={{ color: COLORS.profileBody, fontSize: '13px', lineHeight: 1.6 }}>
                  {profile.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
