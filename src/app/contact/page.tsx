'use client'

import { useState } from 'react'
import { MoveRight } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const COLORS = {
  heroBg: '#0A0F1E',
  heroText: '#FFFFFF',
  heroMuted: '#98A2B3',
  label: '#1F4C9C',
  formBg: '#141B2D',
  formBorder: '#1E2A40',
  formBorderFocus: '#1F4C9C',
  labelColor: '#98A2B3',
  inputText: '#FFFFFF',
  inputPlaceholder: '#6B7689',
  btnBg: '#1F4C9C',
  btnText: '#FFFFFF',
  locationBg: '#0A0F1E',
  locationText: '#FFFFFF',
  locationMuted: '#98A2B3',
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Por ahora solo muestra confirmación
    setSubmitted(true)
  }

  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section style={{ backgroundColor: COLORS.heroBg }}
        className="pt-40 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 style={{
            color: COLORS.heroText,
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: '-0.03em',
          }}>
            Let's talk.
          </h1>
        </div>
      </section>

      {/* FORMULARIO */}
      <section style={{ backgroundColor: COLORS.heroBg }}
        className="py-24 px-6">
        <div className="max-w-3xl mx-auto">

          {!submitted ? (
            <form onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Nombre */}
              <div className="flex flex-col gap-2">
                <label style={{ color: COLORS.labelColor, fontSize: '13px', fontWeight: 600 }}>
                  Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    backgroundColor: COLORS.formBg,
                    border: `1px solid ${COLORS.formBorder}`,
                    borderRadius: '10px',
                    padding: '12px 16px',
                    color: COLORS.inputText,
                    fontSize: '14px',
                    outline: 'none',
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = COLORS.formBorderFocus}
                  onBlur={e => e.currentTarget.style.borderColor = COLORS.formBorder}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label style={{ color: COLORS.labelColor, fontSize: '13px', fontWeight: 600 }}>
                  Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    backgroundColor: COLORS.formBg,
                    border: `1px solid ${COLORS.formBorder}`,
                    borderRadius: '10px',
                    padding: '12px 16px',
                    color: COLORS.inputText,
                    fontSize: '14px',
                    outline: 'none',
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = COLORS.formBorderFocus}
                  onBlur={e => e.currentTarget.style.borderColor = COLORS.formBorder}
                />
              </div>

              {/* Teléfono */}
              <div className="flex flex-col gap-2">
                <label style={{ color: COLORS.labelColor, fontSize: '13px', fontWeight: 600 }}>
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+34 600 000 000"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    backgroundColor: COLORS.formBg,
                    border: `1px solid ${COLORS.formBorder}`,
                    borderRadius: '10px',
                    padding: '12px 16px',
                    color: COLORS.inputText,
                    fontSize: '14px',
                    outline: 'none',
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = COLORS.formBorderFocus}
                  onBlur={e => e.currentTarget.style.borderColor = COLORS.formBorder}
                />
              </div>

              {/* Mensaje */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label style={{ color: COLORS.labelColor, fontSize: '13px', fontWeight: 600 }}>
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us who you are and what you are looking for..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    backgroundColor: COLORS.formBg,
                    border: `1px solid ${COLORS.formBorder}`,
                    borderRadius: '10px',
                    padding: '12px 16px',
                    color: COLORS.inputText,
                    fontSize: '14px',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = COLORS.formBorderFocus}
                  onBlur={e => e.currentTarget.style.borderColor = COLORS.formBorder}
                />
              </div>

              {/* Submit */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  style={{
                    backgroundColor: COLORS.btnBg,
                    color: COLORS.btnText,
                    padding: '14px 32px',
                    borderRadius: '10px',
                    fontSize: '15px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                  className="hover:opacity-90 transition-opacity"
                >
                  Send message <MoveRight size={16} />
                </button>
              </div>

            </form>
          ) : (
            /* Confirmación */
            <div style={{ maxWidth: '480px' }}>
              <p style={{ color: '#1F7A4D', fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>
                ✓ Message sent
              </p>
              <p style={{ color: COLORS.heroMuted, fontSize: '14px', lineHeight: 1.7 }}>
                Thanks for reaching out. We will get back to you as soon as possible.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* WHERE WE ARE */}
      <section style={{ backgroundColor: '#FFFFFF' }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">

          <p style={{ color: '#1F4C9C', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Where we are
          </p>

          <h3 style={{ color: '#1A1F3C', fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>
            Based in Madrid.<br />Building globally.
          </h3>

          <p style={{ color: '#6B7689', fontSize: '14px', marginTop: '12px', lineHeight: 1.6 }}>
            Born at the Harvard HSIL Hackathon 2026.<br />
            2nd place globally.
          </p>

          <div style={{
            marginTop: '24px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            border: '1px solid #E8E0D0',
            borderRadius: '999px',
            padding: '6px 16px',
            backgroundColor: '#EAF0FA',
          }}>
            <span style={{ color: '#1A1F3C', fontSize: '13px', fontWeight: 600 }}>
              🏆 2nd place — Harvard HSIL Hackathon 2026
            </span>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
