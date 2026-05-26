'use client'

import { Mail } from 'lucide-react'

const COLORS = {
  bg: '#0A0F1E',
  logo: '#FFFFFF',
  tagline: '#6B7689',
  linkTitle: '#FFFFFF',
  link: '#6B7689',
  linkHover: '#FFFFFF',
  divider: '#1A2035',
  copyright: '#6B7689',
  email: '#1F4C9C',
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: COLORS.bg }} className="px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Top row — logo + columnas de links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12">

          {/* Logo y tagline */}
          <div className="col-span-2">
            <span style={{ color: COLORS.logo }}
              className="text-xl font-bold">
              FixedGap
            </span>
            <p style={{ color: COLORS.tagline }}
              className="text-sm mt-3 leading-relaxed max-w-xs">
              Daily biomarkers from home.<br />
              Post-stroke rehabilitation, reimagined.
            </p>
            <a href="mailto:hello@fixedgap.com"
              style={{ color: COLORS.email }}
              className="flex items-center gap-2 text-sm font-medium mt-6 hover:opacity-80 transition-opacity">
              <Mail size={14} />
              hello@fixedgap.com
            </a>
          </div>

          {/* Columna Product */}
          <div>
            <h4 style={{ color: COLORS.linkTitle }}
              className="text-xs font-semibold tracking-widest uppercase mb-4">
              Product
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'How it works', href: '/product/how-it-works' },
                { label: 'Biomarkers', href: '/product/biomarkers' },
                { label: 'Dashboard', href: '/product/dashboard' },
              ].map(link => (
                <a key={link.label} href={link.href}
                  style={{ color: COLORS.link }}
                  className="text-sm hover:opacity-100 transition-opacity"
                  onMouseEnter={e => e.currentTarget.style.color = COLORS.linkHover}
                  onMouseLeave={e => e.currentTarget.style.color = COLORS.link}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Columna Company */}
          <div>
            <h4 style={{ color: COLORS.linkTitle }}
              className="text-xs font-semibold tracking-widest uppercase mb-4">
              Company
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Our Story', href: '/company/about' },
                { label: 'Team', href: '/company/team' },
                { label: 'Manifesto', href: '/company/manifesto' },
              ].map(link => (
                <a key={link.label} href={link.href}
                  style={{ color: COLORS.link }}
                  className="text-sm hover:opacity-100 transition-opacity"
                  onMouseEnter={e => e.currentTarget.style.color = COLORS.linkHover}
                  onMouseLeave={e => e.currentTarget.style.color = COLORS.link}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Columna Science & Pricing */}
          <div>
            <h4 style={{ color: COLORS.linkTitle }}
              className="text-xs font-semibold tracking-widest uppercase mb-4">
              More
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Market', href: '/market' },
                { label: 'Science', href: '/science' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Contact', href: '/contact' },
                { label: 'Book a Demo', href: 'https://cal.com/fixedgap' },
              ].map(link => (
                <a key={link.label} href={link.href}
                  style={{ color: COLORS.link }}
                  className="text-sm hover:opacity-100 transition-opacity"
                  onMouseEnter={e => e.currentTarget.style.color = COLORS.linkHover}
                  onMouseLeave={e => e.currentTarget.style.color = COLORS.link}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div style={{ backgroundColor: COLORS.divider }}
          className="h-px w-full mt-16 mb-8" />

        {/* Bottom row — copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{ color: COLORS.copyright }}
            className="text-xs">
            © 2026 FixedGap. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms of Use', href: '/terms' },
            ].map(link => (
              <a key={link.label} href={link.href}
                style={{ color: COLORS.copyright }}
                className="text-xs hover:opacity-80 transition-opacity">
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
