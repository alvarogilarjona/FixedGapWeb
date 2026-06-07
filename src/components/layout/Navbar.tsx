'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Cpu,
  Activity,
  LayoutDashboard,
  Users,
  BookOpen,
  GraduationCap,
  FlaskConical,
  FileText,
  BarChart3,
} from 'lucide-react';

interface MegaMenuItem {
  icon: React.ReactNode;
  label: string;
  description: string;
  href: string;
}

interface MenuItem {
  label: string;
  description: string;
  items: MegaMenuItem[];
}

interface DirectItem {
  label: string;
  href: string;
}

const menuItems: MenuItem[] = [
  {
    label: 'Product',
    description:
      'Everything you need to understand how FixedGap captures and translates movement into clinical data.',
    items: [
      {
        icon: <Cpu className="w-5 h-5" />,
        label: 'Patient Experience',
        description: 'Rehabilitation that feels like a game',
        href: '/product/experience',
      },
      {
        icon: <Activity className="w-5 h-5" />,
        label: 'Biomarkers',
        description: '13 clinical biomarkers — MVP to roadmap',
        href: '/product/biomarkers',
      },
      {
        icon: <LayoutDashboard className="w-5 h-5" />,
        label: 'Clinical Dashboard',
        description: 'What the neurologist receives after each session',
        href: '/product/dashboard',
      },
    ],
  },
  {
    label: 'Demo',
    description:
      'See how FixedGap captures clinical biomarkers through a short daily game.',
    items: [
      {
        icon: null,
        label: 'Our Story',
        description: 'The problem we are solving',
        href: '/demo#story',
      },
      {
        icon: null,
        label: 'See it in action',
        description: 'FixedGap game walkthrough',
        href: '/demo#game',
      },
    ],
  },
  {
    label: 'Company',
    description:
      'Meet the team building the future of post-stroke rehabilitation monitoring.',
    items: [
      {
        icon: <BookOpen className="w-5 h-5" />,
        label: 'Our Story',
        description: 'From hackathon prototype to clinical platform',
        href: '/company/about',
      },
      {
        icon: <Users className="w-5 h-5" />,
        label: 'Team',
        description: 'The people behind FixedGap',
        href: '/company/team',
      },
      {
        icon: <GraduationCap className="w-5 h-5" />,
        label: 'Behind FixedGap',
        description: 'Why we exist and what drives us',
        href: '/company/behind-fixedgap',
      },
    ],
  },
  {
    label: 'Science',
    description:
      'The clinical evidence and peer-reviewed research behind every biomarker we measure.',
    items: [
      {
        icon: <FlaskConical className="w-5 h-5" />,
        label: 'Clinical Validation',
        description: 'Our validation framework and roadmap',
        href: '/science/validation',
      },
      {
        icon: <FileText className="w-5 h-5" />,
        label: 'Research References',
        description: 'Peer-reviewed literature 2024-2026',
        href: '/science/references',
      },
      {
        icon: <BarChart3 className="w-5 h-5" />,
        label: 'The Evidence',
        description: 'Clinical data on the rehabilitation gap',
        href: '/science/evidence',
      },
    ],
  },
];

const directItems: DirectItem[] = [
  { label: 'Market', href: '/market' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileOpenMenu, setMobileOpenMenu] = useState<string | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-brand-border h-20">
      <div className="mx-auto max-w-7xl px-6 h-full">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logonuevo.jpeg"
              alt="FixedGap"
              width={32}
              height={32}
              style={{ objectFit: 'contain' }}
            />
            <span className="text-2xl font-bold text-brand-navy">
              FixedGap
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Menu Items with Dropdown */}
            {menuItems.map((menu) => (
              <div
                key={menu.label}
                className="relative"
                onMouseEnter={() => setHoveredItem(menu.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {menu.label === 'Demo' ? (
                  <Link href="/demo" className="text-base font-medium text-brand-navy hover:text-brand-blue transition-colors">
                    {menu.label}
                  </Link>
                ) : (
                  <button className="text-base font-medium text-brand-navy hover:text-brand-blue transition-colors">
                    {menu.label}
                  </button>
                )}

                {/* Invisible bridge to prevent gap */}
                {hoveredItem === menu.label && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      width: '100%',
                      height: '12px',
                      background: 'transparent',
                    }}
                  />
                )}

                {/* Mega Menu Panel */}
                {hoveredItem === menu.label && (
                  <>
                    {/* Demo - Special Layout with Video Thumbnails */}
                    {menu.label === 'Demo' ? (
                      <div
                        style={{
                          position: 'absolute',
                          top: 'calc(100% + 12px)',
                          left: '50%',
                          marginLeft: '-550px',
                          minWidth: '1100px',
                          backgroundColor: 'white',
                          borderRadius: '16px',
                          boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
                          border: '1px solid #E8E0D0',
                          zIndex: 100,
                        }}
                        className="animate-fadeIn"
                      >
                        <div className="flex gap-10 p-8">
                          {/* Left Column */}
                          <div className="flex flex-col justify-between w-56 shrink-0">
                            <div>
                              <h3 className="font-semibold text-brand-navy text-lg mb-3">
                                Watch FixedGap
                              </h3>
                              <p className="text-sm text-brand-muted leading-relaxed">
                                {menu.description}
                              </p>
                            </div>
                            <a
                              href="/demo"
                              className="text-sm text-brand-blue font-medium hover:underline mt-6"
                            >
                              See all videos →
                            </a>
                          </div>

                          {/* Right Column - Video Thumbnails */}
                          <div className="grid grid-cols-2 gap-6 flex-1">
                            {/* Video 1 - Our Story */}
                            <div>
                              <div className="relative rounded-xl overflow-hidden">
                                <div className="bg-brand-navy aspect-video w-full flex items-center justify-center" style={{ minHeight: '240px' }}>
                                  <p style={{
                                    color: '#98A2B3',
                                    fontSize: '11px',
                                    fontWeight: 500,
                                    textAlign: 'center',
                                  }}>
                                    Video not available yet
                                  </p>
                                </div>
                              </div>
                              <p className="text-sm text-brand-navy font-semibold mt-3">
                                Our Story
                              </p>
                              <p className="text-sm text-brand-muted mt-1">
                                The problem we are solving
                              </p>
                            </div>

                            {/* Video 2 - See it in action */}
                            <div>
                              <div className="relative rounded-xl overflow-hidden">
                                <div className="bg-brand-navy aspect-video w-full flex items-center justify-center" style={{ minHeight: '240px' }}>
                                  <p style={{
                                    color: '#98A2B3',
                                    fontSize: '11px',
                                    fontWeight: 500,
                                    textAlign: 'center',
                                  }}>
                                    Video not available yet
                                  </p>
                                </div>
                              </div>
                              <p className="text-sm text-brand-navy font-semibold mt-3">
                                See it in action
                              </p>
                              <p className="text-sm text-brand-muted mt-1">
                                FixedGap game walkthrough
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Mega Menu with Icons for Product, Company, Science */
                      <div
                        style={{
                          position: 'absolute',
                          top: 'calc(100% + 12px)',
                          left: '50%',
                          marginLeft: menu.label === 'Product' ? '-450px' : '-400px',
                          minWidth: menu.label === 'Product' ? '900px' : '800px',
                          backgroundColor: 'white',
                          borderRadius: '12px',
                          boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
                          border: '1px solid #E8E0D0',
                          zIndex: 100,
                          padding: '24px 32px',
                        }}
                        className="animate-fadeIn"
                      >
                        {menu.label === 'Product' ? (
                          /* Product Layout: Description | Logo | Pages */
                          <div className="flex gap-8">
                            {/* Section 1: Product Description */}
                            <div className="w-[180px] shrink-0 border-r border-brand-border pr-6">
                              <h3 className="font-bold text-brand-navy text-[15px] mb-2">
                                {menu.label}
                              </h3>
                              <p className="text-[13px] text-brand-muted leading-relaxed">
                                {menu.description}
                              </p>
                            </div>

                            {/* Section 2: FixedGap Logo */}
                            <div className="w-[180px] shrink-0 border-r border-brand-border pr-6 flex flex-col items-center justify-center">
                              <img
                                src="/logonuevo.jpeg"
                                alt="FixedGap"
                                className="w-full h-auto rounded-lg shadow-md"
                              />
                              <p className="text-xs text-brand-muted text-center leading-relaxed mt-3">
                                Clinical-grade movement analysis through gamified rehabilitation
                              </p>
                            </div>

                            {/* Section 3: Pages */}
                            <div className="flex flex-col gap-1 flex-1">
                              {menu.items.map((item) => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-brand-beige transition-colors group"
                                >
                                  {/* Icon Box */}
                                  <div className="w-10 h-10 rounded-md bg-brand-cream border border-brand-border flex items-center justify-center shrink-0 group-hover:border-brand-blue transition-colors">
                                    <span className="text-brand-blue">
                                      {item.icon}
                                    </span>
                                  </div>

                                  {/* Text */}
                                  <div className="flex-1">
                                    <p className="text-base font-semibold text-brand-navy group-hover:text-brand-blue transition-colors">
                                      {item.label}
                                    </p>
                                    <p className="text-sm text-brand-muted">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          /* Default Layout for Company & Science */
                          <div className="flex gap-8">
                            {/* Section 1: Description */}
                            <div className="w-[180px] shrink-0 border-r border-brand-border pr-6">
                              <h3 className="font-bold text-brand-navy text-[15px] mb-2">
                                {menu.label}
                              </h3>
                              <p className="text-[13px] text-brand-muted leading-relaxed">
                                {menu.description}
                              </p>
                            </div>

                            {/* Section 2: FixedGap Logo */}
                            <div className="w-[180px] shrink-0 border-r border-brand-border pr-6 flex flex-col items-center justify-center">
                              <img
                                src="/logonuevo.jpeg"
                                alt="FixedGap"
                                className="w-full h-auto rounded-lg shadow-md"
                              />
                              <p className="text-xs text-brand-muted text-center leading-relaxed mt-3">
                                Clinical-grade movement analysis through gamified rehabilitation
                              </p>
                            </div>

                            {/* Section 3: Items with Icons */}
                            <div className="flex flex-col gap-1 flex-1">
                              {menu.items.map((item) => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-brand-beige transition-colors group"
                                >
                                  {/* Icon Box */}
                                  <div className="w-10 h-10 rounded-md bg-brand-cream border border-brand-border flex items-center justify-center shrink-0 group-hover:border-brand-blue transition-colors">
                                    <span className="text-brand-blue">
                                      {item.icon}
                                    </span>
                                  </div>

                                  {/* Text */}
                                  <div className="flex-1">
                                    <p className="text-base font-semibold text-brand-navy group-hover:text-brand-blue transition-colors">
                                      {item.label}
                                    </p>
                                    <p className="text-sm text-brand-muted">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}

            {/* Direct Links */}
            {directItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-base font-medium text-brand-navy hover:text-brand-blue transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Book a Demo Button */}
          <Link
            href="/contact"
            className="hidden lg:block bg-brand-blue text-white px-6 py-3 rounded-lg text-base font-medium hover:opacity-90 transition-all"
          >
            Book a Demo
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-brand-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-brand-border max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-4 space-y-4">
            {/* Mobile Menu Items */}
            {menuItems.map((menu) => (
              <div key={menu.label}>
                <button
                  className="flex items-center justify-between w-full text-brand-navy font-medium"
                  onClick={() =>
                    setMobileOpenMenu(
                      mobileOpenMenu === menu.label ? null : menu.label
                    )
                  }
                >
                  <span>{menu.label}</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      mobileOpenMenu === menu.label ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileOpenMenu === menu.label && (
                  <div className="mt-2 ml-4 space-y-2">
                    {menu.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="py-2">
                          <p className="text-sm font-semibold text-brand-navy">
                            {item.label}
                          </p>
                          <p className="text-xs text-brand-muted">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Direct Links Mobile */}
            {directItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-brand-navy hover:text-brand-blue font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Book a Demo Button Mobile */}
            <Link
              href="/contact"
              className="block w-full text-center bg-brand-blue text-white px-6 py-2 rounded-lg hover:opacity-90 transition-all font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-8"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close video"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video */}
            <div className="relative bg-black rounded-lg overflow-hidden">
              <video
                className="w-full h-auto"
                controls
                autoPlay
                playsInline
              >
                <source src="/demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video info */}
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-semibold">
                FixedGap Game Walkthrough
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                See how FixedGap captures clinical biomarkers through an engaging game
              </p>
              <a
                href="/demo"
                className="inline-block mt-4 text-brand-blue hover:underline text-sm font-medium"
              >
                View full demo page →
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
