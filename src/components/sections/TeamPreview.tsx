const COLORS = {
  bg: '#FFFFFF',
  label: '#1F4C9C',
  headline: '#1A1F3C',
  body: '#6B7689',
  statNumber: '#1A1F3C',
  statLabel: '#6B7689',
  divider: '#E8E0D0',
  ctaColor: '#1F4C9C',
}

export default function TeamPreview() {
  return (
    <section style={{ backgroundColor: COLORS.bg }} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Label */}
        <span style={{ color: COLORS.label }}
          className="text-xs font-semibold tracking-widest uppercase">
          The Team
        </span>

        {/* Headline */}
        <h2 style={{ color: COLORS.headline }}
          className="text-4xl md:text-5xl font-bold mt-4 leading-tight max-w-2xl">
          Built by engineers, guided by medicine.
        </h2>

        {/* Descripción */}
        <p style={{ color: COLORS.body }}
          className="text-lg mt-6 max-w-2xl leading-relaxed">
          FixedGap was born at the Harvard HSIL Hackathon 2026.
          Our team combines computer science, biomedical engineering,
          business strategy, and clinical medicine — united by a single goal:
          making post-stroke recovery visible from home.
        </p>

        {/* Stats en fila */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-0"
          style={{ borderTop: `1px solid ${COLORS.divider}`, borderBottom: `1px solid ${COLORS.divider}` }}>
          {[
            { number: '6', label: 'Co-founders' },
            { number: '3', label: 'Universities' },
            { number: '2', label: 'Countries' },
            { number: '50', label: 'Countries competing' },
          ].map((stat, index) => (
            <div key={stat.label}
              style={{
                borderLeft: index > 0 ? `1px solid ${COLORS.divider}` : 'none',
              }}
              className="px-8 py-8 flex flex-col gap-1">
              <span style={{ color: COLORS.statNumber }}
                className="text-4xl font-bold">
                {stat.number}
              </span>
              <span style={{ color: COLORS.statLabel }}
                className="text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a href="/company/team"
            style={{ color: COLORS.ctaColor, borderColor: COLORS.ctaColor }}
            className="text-sm font-semibold border-b pb-0.5 hover:opacity-70 transition-opacity">
            Meet the full team →
          </a>
        </div>

      </div>
    </section>
  )
}
