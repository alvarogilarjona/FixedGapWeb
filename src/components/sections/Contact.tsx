import { Mail, Video } from 'lucide-react'

const COLORS = {
  bg: '#1A1F3C',
  label: '#6B7689',
  headline: '#FFFFFF',
  body: '#98A2B3',
  cardBg: '#242B45',
  cardBorder: '#2E3757',
  cardTitle: '#FFFFFF',
  cardBody: '#98A2B3',
  emailColor: '#1F4C9C',
  emailBg: '#1A2035',
  btnBg: '#1F4C9C',
  btnText: '#FFFFFF',
  iconBg: '#1A2035',
  iconColor: '#1F4C9C',
}

export default function Contact() {
  return (
    <section id="contact" style={{ backgroundColor: COLORS.bg }} className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Label */}
        <span style={{ color: COLORS.label }}
          className="text-xs font-semibold tracking-widest uppercase">
          Get in touch
        </span>

        {/* Headline */}
        <h2 style={{ color: COLORS.headline }}
          className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
          Let's talk.
        </h2>

        {/* Subtext */}
        <p style={{ color: COLORS.body }}
          className="text-lg mt-6 max-w-xl mx-auto leading-relaxed">
          Whether you're a neurologist, an investor, or just curious —
          we'd love to hear from you.
        </p>

        {/* Dos opciones de contacto */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">

          {/* Opción A — Email */}
          <div style={{
            backgroundColor: COLORS.cardBg,
            border: `1px solid ${COLORS.cardBorder}`,
            borderRadius: '16px',
            padding: '32px 24px',
          }} className="flex flex-col items-center gap-4 text-center">

            <div style={{
              backgroundColor: COLORS.iconBg,
              width: '48px',
              height: '48px',
              borderRadius: '12px',
            }} className="flex items-center justify-center">
              <Mail size={20} style={{ color: COLORS.iconColor }} />
            </div>

            <div>
              <h3 style={{ color: COLORS.cardTitle }}
                className="font-semibold text-base">
                Send us an email
              </h3>
              <p style={{ color: COLORS.cardBody }}
                className="text-sm mt-2 leading-relaxed">
                For general enquiries, partnerships, or press.
              </p>
            </div>

            <a href="mailto:hello@fixedgap.com"
              style={{
                backgroundColor: COLORS.emailBg,
                color: COLORS.emailColor,
                borderRadius: '8px',
                padding: '10px 20px',
                fontSize: '13px',
                fontWeight: 600,
              }}
              className="hover:opacity-80 transition-opacity mt-auto">
              hello@fixedgap.com
            </a>
          </div>

          {/* Opción B — Book a call */}
          <div style={{
            backgroundColor: COLORS.cardBg,
            border: `1px solid ${COLORS.cardBorder}`,
            borderRadius: '16px',
            padding: '32px 24px',
          }} className="flex flex-col items-center gap-4 text-center">

            <div style={{
              backgroundColor: COLORS.iconBg,
              width: '48px',
              height: '48px',
              borderRadius: '12px',
            }} className="flex items-center justify-center">
              <Video size={20} style={{ color: COLORS.iconColor }} />
            </div>

            <div>
              <h3 style={{ color: COLORS.cardTitle }}
                className="font-semibold text-base">
                Book a call
              </h3>
              <p style={{ color: COLORS.cardBody }}
                className="text-sm mt-2 leading-relaxed">
                Schedule a 30-minute Zoom call with the team.
              </p>
            </div>

            <a href="https://cal.com/fixedgap"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: COLORS.btnBg,
                color: COLORS.btnText,
                borderRadius: '8px',
                padding: '10px 20px',
                fontSize: '13px',
                fontWeight: 600,
              }}
              className="hover:opacity-90 transition-opacity mt-auto">
              Book a 30-min call →
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
