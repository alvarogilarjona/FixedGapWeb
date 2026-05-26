'use client'

import { Mail, Video } from 'lucide-react'
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
}

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

      <Footer />
    </main>
  )
}
