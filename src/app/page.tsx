import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import Pipeline from '@/components/sections/Pipeline';
import Demo from '@/components/sections/Demo';
import Traction from '@/components/sections/Traction';
import Metrics from '@/components/sections/Metrics';
import TeamPreview from '@/components/sections/TeamPreview';
import Manifesto from '@/components/sections/Manifesto';
import Team from '@/components/sections/Team';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <div style={{ height: 'calc(100vh + 5px)' }}>
        <Pipeline />
      </div>
      {/* <Demo /> */}  {/* pendiente — se activa cuando haya vídeo */}
      <Traction />
      <Metrics />
      <TeamPreview />
      <Contact />
      {/* <Manifesto /> */}  {/* pendiente — se construye después */}
      {/* <Team /> */}  {/* pendiente — se construye después */}
      <Footer />
    </main>
  );
}
