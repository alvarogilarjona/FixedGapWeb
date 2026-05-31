import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 bg-brand-navy">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/videos/videoNuevo.mp4" type="video/mp4" />
        </video>

        {/* Overlay oscuro encima del vídeo para legibilidad del texto */}
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-5xl mx-auto">

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">Your patients recover every day.</span>
          <br />
          <span className="text-brand-blue">You find out weeks later.</span>
        </h1>

        {/* Subline */}
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          FixedGap bridges the gap between clinical visits with daily post-stroke
          rehabilitation monitoring — using only a webcam.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" href="/contact">
            Book a Demo
          </Button>
          <Button variant="secondary-white" href="#problem">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
