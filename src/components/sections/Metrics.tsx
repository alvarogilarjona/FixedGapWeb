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
  bg: '#0A0F1E',
  label: '#6B7689',
  headline: '#FFFFFF',
  body: '#98A2B3',
  metricNumber: '#FFFFFF',
  metricUnit: '#1F4C9C',
  metricLabel: '#98A2B3',
  divider: '#1A2035',
}

const metrics = [
  {
    number: '13M',
    unit: '',
    label: 'strokes every year worldwide',
  },
  {
    number: '€0',
    unit: '',
    label: 'hardware cost',
  },
  {
    number: '60',
    unit: 's',
    label: 'per session',
  },
  {
    number: '795K',
    unit: '',
    label: 'new strokes per year in the US',
  },
  {
    number: '14',
    unit: '',
    label: 'clinical biomarkers on roadmap',
  },
]

export default function Metrics() {
  return (
    <section style={{ backgroundColor: COLORS.bg }} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* SEO Headings - invisible */}
        <h2 style={srOnly}>The Scale of Post-Stroke Rehabilitation</h2>
        <h3 style={srOnly}>13 million strokes every year worldwide</h3>
        <h3 style={srOnly}>795000 new strokes per year in the United States</h3>
        <h3 style={srOnly}>Zero hardware cost for post-stroke rehabilitation monitoring</h3>

        {/* Label */}
        <span style={{ color: COLORS.label }}
          className="text-sm font-semibold tracking-widest uppercase">
          By the numbers
        </span>

        {/* Headline */}
        <h2 style={{ color: COLORS.headline }}
          className="text-5xl md:text-6xl font-bold mt-4 leading-tight max-w-2xl">
          The scale of the problem.<br />
          The precision of the solution.
        </h2>

        {/* Grid de métricas */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              style={{
                borderLeft: index > 0 ? `1px solid ${COLORS.divider}` : 'none',
              }}
              className="px-8 py-6 flex flex-col gap-2"
            >
              {/* Número grande */}
              <div className="flex items-baseline gap-1">
                <span style={{
                  color: COLORS.metricNumber,
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                }}>
                  {metric.number}
                </span>
                {metric.unit && (
                  <span style={{
                    color: COLORS.metricUnit,
                    fontSize: '1.5rem',
                    fontWeight: 700,
                  }}>
                    {metric.unit}
                  </span>
                )}
              </div>

              {/* Label */}
              <p style={{
                color: COLORS.metricLabel,
                fontSize: '0.75rem',
                lineHeight: 1.5,
              }}>
                {metric.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
