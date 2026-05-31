'use client'

import { MoveRight } from 'lucide-react'

const COLORS = {
  bg: '#0A0F1E',
  headline: '#FFFFFF',
  email: '#FFFFFF',
  emailHover: '#1F4C9C',
  btnBg: '#1F4C9C',
  btnText: '#FFFFFF',
  divider: '#1E2A40',
}

export default function Contact() {
  return (
    <section style={{ backgroundColor: COLORS.bg }} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Headline grande */}
        <h2 style={{
          color: COLORS.headline,
          fontSize: 'clamp(3rem, 7vw, 6rem)',
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: '-0.03em',
        }}>
          Let's talk.
        </h2>

        {/* Divider */}
        <div style={{
          height: '1px',
          backgroundColor: COLORS.divider,
          marginTop: '40px',
          marginBottom: '40px',
        }} />

        {/* Email + CTA en fila */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          <a href="mailto:hello@fixedgap.com"
            style={{
              color: COLORS.email,
              fontSize: 'clamp(1.2rem, 3vw, 2rem)',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.color = COLORS.emailHover}
            onMouseLeave={e => e.currentTarget.style.color = COLORS.email}
          >
            hello@fixedgap.com
          </a>

          <a href="/contact"
            style={{
              backgroundColor: COLORS.btnBg,
              color: COLORS.btnText,
              padding: '14px 28px',
              borderRadius: '10px',
              fontSize: '15px',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              flexShrink: 0,
            }}
            className="hover:opacity-90 transition-opacity">
            Book a 30-min call <MoveRight size={16} />
          </a>

        </div>

      </div>
    </section>
  )
}
