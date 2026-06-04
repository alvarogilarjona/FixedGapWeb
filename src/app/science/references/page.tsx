import { ExternalLink } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

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
  cardTitle: '#1A1F3C',
  cardBody: '#6B7689',
  tagValidated: '#1F7A4D',
  tagValidatedBg: '#E8F3EC',
  tagGrounded: '#1F4C9C',
  tagGroundedBg: '#EAF0FA',
  transparencyBg: '#0A0F1E',
  transparencyText: '#FFFFFF',
  transparencyMuted: '#98A2B3',
  divider: '#E8E0D0',
}

const references = [
  {
    id: '01',
    title: 'Adaptation and feasibility of the online version of the Fugl-Meyer scale for the assessment of patients following cerebrovascular accidents',
    authors: 'Dos Santos, C.L. et al.',
    journal: 'PLOS ONE',
    year: '2024',
    doi: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11502211/',
    relevance: 'Validates the Fugl-Meyer Assessment as the gold standard for upper extremity motor recovery after stroke — the scale our biomarkers correlate against.',
    tag: 'validated',
  },
  {
    id: '02',
    title: 'Adaptación y validación al español de la escala Fugl-Meyer en el manejo de la rehabilitación de pacientes con ictus',
    authors: 'Blanco, M.',
    journal: 'Universidad Complutense de Madrid',
    year: '2011',
    doi: 'https://produccioncientifica.ucm.es/documentos/5d39995129995206844416ea',
    relevance: 'Spanish validation of the Fugl-Meyer scale — directly relevant for our target market in Spain.',
    tag: 'validated',
  },
  {
    id: '03',
    title: 'Global, regional, and national burden of stroke and its risk factors, 1990–2021: a systematic analysis for the Global Burden of Disease Study 2021',
    authors: 'GBD 2021 Stroke Collaborators',
    journal: 'Stroke',
    year: '2024',
    doi: 'https://www.ahajournals.org/doi/10.1161/STROKEAHA.124.048033',
    relevance: 'Global stroke epidemiology — 12.2M new cases per year worldwide, 7.25M deaths annually.',
    tag: 'grounded',
  },
  {
    id: '04',
    title: 'World Stroke Organization (WSO): Global Stroke Fact Sheet 2025',
    authors: 'Feigin, V.L. et al.',
    journal: 'International Journal of Stroke',
    year: '2025',
    doi: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11786524/',
    relevance: 'Updated global stroke burden data. 1 in 4 people will suffer a stroke in their lifetime.',
    tag: 'grounded',
  },
  {
    id: '05',
    title: 'Heart Disease and Stroke Statistics — 2024 Update',
    authors: 'Virani, S.S. et al.',
    journal: 'Circulation',
    year: '2024',
    doi: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000001209',
    relevance: '795,000 new strokes per year in the US. One death every 3 minutes 14 seconds.',
    tag: 'grounded',
  },
  {
    id: '06',
    title: 'Adherence in Digital Mental Health Apps',
    authors: 'Morales, J. et al.',
    journal: 'JMIR Human Factors',
    year: '2025',
    doi: 'https://humanfactors.jmir.org/2025/1/e69464',
    relevance: 'Evidence base for adherence challenges in digital health — directly relevant to FixedGap\'s gamification approach.',
    tag: 'grounded',
  },
  {
    id: '07',
    title: 'Effect of a Mobile Health App on Treatment Adherence in Rehabilitation',
    authors: 'Suso-Ribera, C. et al.',
    journal: 'JMIR Rehabilitation and Assistive Technologies',
    year: '2023',
    doi: 'https://rehab.jmir.org/2023/1/e43507/',
    relevance: 'Digital health apps improve rehabilitation adherence — supports the clinical rationale for FixedGap\'s game-based approach.',
    tag: 'grounded',
  },
  {
    id: '08',
    title: 'Global, regional, and national burden of stroke',
    authors: 'Collaborators of The Lancet Neurology',
    journal: 'The Lancet Neurology',
    year: '2026',
    doi: 'https://www.thelancet.com/journals/laneur/article/PIIS1474-4422(26)00093-1/fulltext',
    relevance: 'Most recent global stroke burden data — 12M+ new cases annually, 70% increase over three decades.',
    tag: 'grounded',
  },
]

export default function ReferencesPage() {
  const validated = references.filter(r => r.tag === 'validated')
  const grounded = references.filter(r => r.tag === 'grounded')

  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section style={{ backgroundColor: COLORS.heroBg }}
        className="pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span style={{ color: COLORS.label }}
            className="text-xs font-semibold tracking-widest uppercase">
            Research References
          </span>
          <h1 style={{ color: COLORS.heroText }}
            className="text-5xl md:text-6xl font-bold mt-4 leading-tight max-w-3xl">
            The evidence behind every biomarker.
          </h1>
          <p style={{ color: COLORS.heroMuted }}
            className="text-lg mt-6 max-w-2xl leading-relaxed">
            Every metric FixedGap captures is grounded in peer-reviewed clinical
            literature. Here is the scientific foundation behind our biomarker panel.
          </p>
        </div>
      </section>

      {/* DIRECTLY VALIDATED */}
      <section style={{ backgroundColor: COLORS.sectionBg }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <span style={{ color: COLORS.label }}
            className="text-xs font-semibold tracking-widest uppercase">
            Directly validated
          </span>
          <h2 style={{ color: COLORS.headline }}
            className="text-3xl font-bold mt-4 mb-2">
            Evidence with direct validation.
          </h2>
          <p style={{ color: COLORS.body }}
            className="text-base mb-12 max-w-2xl leading-relaxed">
            These references directly validate the specific metrics and methods
            FixedGap uses to capture and score hand kinematics.
          </p>

          <div className="flex flex-col gap-4">
            {validated.map(ref => (
              <ReferenceCard key={ref.id} reference={ref} COLORS={COLORS} />
            ))}
          </div>

        </div>
      </section>

      {/* CLINICALLY GROUNDED */}
      <section style={{ backgroundColor: COLORS.sectionAlt }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <span style={{ color: COLORS.label }}
            className="text-xs font-semibold tracking-widest uppercase">
            Clinically grounded
          </span>
          <h2 style={{ color: COLORS.headline }}
            className="text-3xl font-bold mt-4 mb-2">
            Strong theoretical foundation.
          </h2>
          <p style={{ color: COLORS.body }}
            className="text-base mb-12 max-w-2xl leading-relaxed">
            These references provide the clinical rationale for our biomarkers.
            Direct validation in our specific implementation is ongoing.
          </p>

          <div className="flex flex-col gap-4">
            {grounded.map(ref => (
              <ReferenceCard key={ref.id} reference={ref} COLORS={COLORS} />
            ))}
          </div>

        </div>
      </section>

      {/* NOTA DE TRANSPARENCIA */}
      <section style={{ backgroundColor: COLORS.transparencyBg }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto">

          <span style={{ color: COLORS.label }}
            className="text-xs font-semibold tracking-widest uppercase">
            A note on transparency
          </span>

          <p style={{ color: COLORS.transparencyText }}
            className="text-lg mt-6 leading-relaxed">
            FixedGap is currently in clinical validation phase. The references
            above represent the scientific foundation on which we built our
            biomarker panel — not direct validation of our specific product implementation.
          </p>
          <p style={{ color: COLORS.transparencyMuted }}
            className="text-base mt-4 leading-relaxed">
            We are actively conducting pilot studies with neurologists and
            rehabilitation clinics to generate direct clinical evidence.
            Results will be published as they become available.
          </p>

        </div>
      </section>

      <Footer />
    </main>
  )
}

// Componente de referencia individual
function ReferenceCard({ reference, COLORS }: { reference: typeof references[0], COLORS: any }) {
  return (
    <div style={{
      backgroundColor: COLORS.cardBg,
      border: `1px solid ${COLORS.cardBorder}`,
      borderRadius: '12px',
      padding: '24px 28px',
      display: 'flex',
      gap: '20px',
      alignItems: 'flex-start',
    }}>

      {/* Número */}
      <span style={{
        color: COLORS.label,
        fontSize: '13px',
        fontWeight: 700,
        minWidth: '28px',
        paddingTop: '2px',
      }}>
        {reference.id}
      </span>

      {/* Contenido */}
      <div style={{ flex: 1 }}>
        <div className="flex items-start justify-between gap-4">
          <h3 style={{ color: COLORS.cardTitle, fontSize: '15px', fontWeight: 700, lineHeight: 1.4 }}>
            {reference.title}
          </h3>
          {reference.doi !== '#' && (
            <a href={reference.doi} target="_blank" rel="noopener noreferrer"
              style={{ color: COLORS.label, flexShrink: 0 }}
              className="hover:opacity-70 transition-opacity mt-0.5">
              <ExternalLink size={14} />
            </a>
          )}
        </div>

        <p style={{ color: COLORS.body, fontSize: '13px', marginTop: '4px' }}>
          {reference.authors} · <em>{reference.journal}</em> · {reference.year}
        </p>

        <p style={{ color: COLORS.cardBody, fontSize: '13px', marginTop: '10px', lineHeight: 1.6 }}>
          {reference.relevance}
        </p>

        {/* Tag */}
        <div style={{
          display: 'inline-flex',
          marginTop: '12px',
          backgroundColor: reference.tag === 'validated' ? COLORS.tagValidatedBg : COLORS.tagGroundedBg,
          color: reference.tag === 'validated' ? COLORS.tagValidated : COLORS.tagGrounded,
          fontSize: '11px',
          fontWeight: 600,
          padding: '3px 10px',
          borderRadius: '999px',
        }}>
          {reference.tag === 'validated' ? 'Directly validated' : 'Clinically grounded'}
        </div>
      </div>

    </div>
  )
}
