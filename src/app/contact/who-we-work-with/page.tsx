import { Stethoscope, TrendingUp, FlaskConical } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Gallery6 } from '@/components/ui/gallery6'

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

const partners = [
  {
    id: 'aws',
    title: 'AWS',
    summary: 'Cloud infrastructure and technical support for our platform.',
    image: '/logos/aws.png',
  },
  {
    id: 'saturno',
    title: 'SaturnoLabs',
    summary: 'Technology partner supporting our MVP development.',
    image: '/logos/saturno.png',
  },
  {
    id: 'rcc',
    title: 'Real Colegio Complutense at Harvard',
    summary: 'Accelerator and entrepreneurship program guiding our journey.',
    image: '/logos/Real_Colegio_Complutense.png',
  },
  {
    id: 'bosch',
    title: 'Bosch',
    summary: 'Industrial healthcare innovation partner and early supporter.',
    image: '/logos/BoschDefinitivo.png',
  },
  {
    id: 'catedra-bosch',
    title: 'Cátedra Bosch',
    summary: 'Academic collaboration and research partnership.',
    image: '/logos/catedraBosch.jpeg',
  },
  {
    id: 'ayuntamiento',
    title: 'Ayuntamiento de Madrid',
    summary: 'Local government support for healthcare innovation.',
    image: '/logos/ayuntamiento-madrid.png',
  },
  {
    id: 'comunidad',
    title: 'Comunidad de Madrid',
    summary: 'Regional government backing innovative health tech.',
    image: '/logos/ComunidadMadrid.png',
  },
  {
    id: 'ucm',
    title: 'Universidad Complutense de Madrid',
    summary: 'Academic research and clinical validation partner.',
    image: '/logos/Universidad_Complutense.png',
  },
]

export default function WhoWeWorkWithPage() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section style={{ backgroundColor: '#0A0F1E' }} className="pt-40 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <span style={{ color: '#1F4C9C' }}
            className="text-xs font-semibold tracking-widest uppercase">
            Who We Work With
          </span>
          <h1 style={{ color: '#FFFFFF' }}
            className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
            Our network and our people.
          </h1>
        </div>
      </section>

      {/* WHO SHOULD REACH OUT */}
      <section style={{ backgroundColor: '#FFFFFF' }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <span style={{ color: '#1F4C9C' }}
            className="text-xs font-semibold tracking-widest uppercase">
            Who should reach out
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {profiles.map(profile => (
              <div key={profile.title} style={{
                backgroundColor: '#F7F9FC',
                border: '1px solid #E8E0D0',
                borderRadius: '16px',
                padding: '24px',
              }}>
                <div style={{
                  backgroundColor: '#EAF0FA',
                  width: '44px', height: '44px', borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '16px',
                }}>
                  <profile.icon size={20} style={{ color: '#1F4C9C' }} />
                </div>
                <h3 style={{ color: '#1A1F3C', fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>
                  {profile.title}
                </h3>
                <p style={{ color: '#6B7689', fontSize: '13px', lineHeight: 1.6 }}>
                  {profile.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS CAROUSEL */}
      <section style={{ backgroundColor: '#F7F9FC' }} className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <Gallery6 heading="Backed and supported by" items={partners} />

          {/* Marco para foto de tracción */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div style={{
              aspectRatio: '16/9',
              borderRadius: '20px',
              overflow: 'hidden',
              backgroundColor: '#FFFFFF',
              border: '2px solid #E8E0D0',
              minHeight: '500px',
            }}>
              <img src="/linea.jpg" alt="3 months of progress timeline" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <p style={{
              color: '#1A1F3C',
              fontSize: '18px',
              fontWeight: 700,
              marginTop: '16px',
              textAlign: 'center'
            }}>
              From prototype to clinical validation in 3 months.
            </p>
            <p style={{
              color: '#6B7689',
              fontSize: '14px',
              marginTop: '8px',
              textAlign: 'center',
              lineHeight: 1.6
            }}>
              A visual timeline of our journey from Harvard HSIL Hackathon to clinical pilots and global recognition.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
