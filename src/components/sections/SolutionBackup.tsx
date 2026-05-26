export default function Solution() {
  // COLORES — cambiar aquí para modificar toda la sección
  const COLORS = {
    bg: '#1A1F3C', // fondo oscuro navy — cambiar aquí
    label: '#6B7689', // color label pequeño
    headline: '#FFFFFF', // headline principal
    headlineAccent: '#1F4C9C', // palabra o línea en azul
    body: '#98A2B3', // texto descriptivo
    highlight: '#FFFFFF', // texto destacado "Zero hardware..."
    ctaText: '#1F4C9C', // color del link CTA
    ctaBorder: '#1F4C9C', // borde del link CTA
  };

  return (
    <section
      id="solution"
      style={{ backgroundColor: COLORS.bg }}
      className="py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Label pequeño */}
        <span
          style={{ color: COLORS.headline }}
          className="text-sm font-bold tracking-widest uppercase"
        >
          The Solution
        </span>

        {/* Headline en dos líneas */}
        <h2
          style={{ color: COLORS.headline }}
          className="text-4xl md:text-6xl font-bold mt-6 leading-tight max-w-3xl"
        >
          The clinical intelligence layer
          <br />
          <span style={{ color: COLORS.headlineAccent }}>
            for post-stroke rehabilitation.
          </span>
        </h2>

        {/* Párrafo descriptivo */}
        <p
          style={{ color: COLORS.body }}
          className="text-lg mt-8 max-w-2xl leading-relaxed"
        >
          Computer vision captures hand kinematics through any webcam —
          translating a short game session into a full clinical report for the
          neurologist. No sensors. No wearables. No installation.
        </p>

        {/* Línea destacada */}
        <p
          style={{ color: COLORS.highlight }}
          className="text-xl font-semibold mt-10 max-w-xl leading-relaxed"
        >
          Zero hardware. Zero installation. Zero friction.
        </p>

        {/* CTA */}
        <a
          href="/product"
          style={{ color: COLORS.ctaText, borderColor: COLORS.ctaBorder }}
          className="inline-flex items-center gap-2 mt-10 text-sm font-semibold border-b pb-0.5 hover:opacity-70 transition-opacity"
        >
          See how it works →
        </a>
      </div>
    </section>
  );
}
