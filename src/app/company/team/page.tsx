import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const COLORS = {
  bg: '#FFFFFF',
  heroBg: '#0A0F1E',
  label: '#1F4C9C',
  headline: '#FFFFFF',
  heroBody: '#98A2B3',
  cardBg: '#F7F9FC',
  cardBorder: '#E8E0D0',
  nameColor: '#1A1F3C',
  roleColor: '#1F4C9C',
  descColor: '#6B7689',
  linkedinColor: '#1F4C9C',
}

const team = [
  {
    name: 'Álvaro Gil-Arjona',
    role: 'Lead ML & Computer Vision',
    description: 'Designs and trains the models that extract clinical metrics from camera feeds — hand landmarks, gaze tracking, and facial symmetry scoring.',
    photo: '/team/alvaro.jpg',
    photoPosition: 'center 20%',
    linkedin: 'https://www.linkedin.com/in/alvarogilarjona/',
    github: 'https://github.com/alvarogilarjona'
  },
  {
    name: 'Mateo Pérez',
    role: 'Lead Fullstack Engineer',
    description: 'Built the entire platform end-to-end — from the computer vision pipeline to the clinical dashboard and the game frontend. Owns the architecture and ships fast.',
    photo: '/team/mateo.jpg',
    photoPosition: 'center 15%',
    linkedin: 'https://www.linkedin.com/in/mateoperezguzman/',
    github: 'https://github.com/mpchachi'
  },
  {
    name: 'Luis Molina',
    role: 'Product Strategy & UX',
    description: 'Bridges the gap between what clinicians need and what we build. Defines product direction, runs user research, and shapes the experience patients interact with.',
    photo: '/team/luis.jpg',
    photoPosition: 'center 25%',
    linkedin: 'https://www.linkedin.com/in/luis-molina-salvador/',
    github: 'https://github.com/34lumo'
  },
  {
    name: 'Marco García',
    role: 'Data Science & Business Strategy',
    description: 'Translates clinical data into actionable insights and drives the business model. Handles market analysis, partnerships, and growth strategy.',
    photo: '/team/marco.jpg',
    photoPosition: 'center 30%',
    linkedin: 'https://www.linkedin.com/in/marco-garcia-lopez-4b0037308/',
    github: 'https://github.com/marcusen78-sketch'
  },
  {
    name: 'Helene Weinberg',
    role: 'Biomedical Engineer, Clinical Translation',
    description: 'Ensures our metrics are clinically meaningful. Translates rehabilitation science into measurable digital biomarkers and validates accuracy against clinical standards.',
    photo: '/team/helene.jpg',
    photoPosition: 'center 20%',
    linkedin: 'https://www.linkedin.com/in/helene-weinberg/'
  },
  {
    name: 'José Antonio López',
    role: 'Physician & Clinical Advisor',
    description: 'Practicing physician who guides clinical relevance. Validates that what we capture maps to real diagnostic and treatment decisions in stroke rehabilitation.',
    photo: '/team/jal.jpg',
    photoPosition: 'center 30%',
    linkedin: '#'
  },
]

export default function TeamPage() {
  return (
    <main>
      <Navbar />

      {/* Hero de la página */}
      <section style={{ backgroundColor: COLORS.heroBg }}
        className="pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span style={{ color: COLORS.label }}
            className="text-xs font-semibold tracking-widest uppercase">
            The Team
          </span>
          <h1 style={{ color: COLORS.headline }}
            className="text-5xl md:text-6xl font-bold mt-4 leading-tight max-w-3xl">
            Built by engineers,<br />guided by medicine.
          </h1>
          <p style={{ color: COLORS.heroBody }}
            className="text-lg mt-6 max-w-2xl leading-relaxed">
            FixedGap was born at the Harvard HSIL Hackathon 2026, competing
            against teams from 50 countries. Our team combines computer science,
            biomedical engineering, business strategy, and clinical medicine.
          </p>
        </div>
      </section>

      {/* Grid del equipo */}
      <section style={{ backgroundColor: COLORS.bg }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map(member => (
              <div key={member.name}
                style={{
                  backgroundColor: COLORS.cardBg,
                  border: `1px solid ${COLORS.cardBorder}`,
                  borderRadius: '16px',
                  overflow: 'hidden',
                }}>

                {/* Foto */}
                <div style={{ height: '240px', overflow: 'hidden' }}>
                  <img
                    src={member.photo}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: member.photoPosition || 'center 20%',
                    }}
                  />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 style={{ color: COLORS.nameColor }}
                    className="text-lg font-bold">
                    {member.name}
                  </h3>
                  <p style={{ color: COLORS.roleColor }}
                    className="text-sm font-semibold mt-1">
                    {member.role}
                  </p>
                  <p style={{ color: COLORS.descColor }}
                    className="text-sm mt-3 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center gap-4 mt-4">
                    {/* LinkedIn */}
                    {member.linkedin && (
                      <a href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: COLORS.linkedinColor }}
                        className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </a>
                    )}

                    {/* GitHub */}
                    {member.github && (
                      <a href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: COLORS.linkedinColor }}
                        className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
