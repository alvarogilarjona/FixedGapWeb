'use client'

import { motion } from 'framer-motion'
import { MoveRight } from 'lucide-react'

const COLORS = {
  bg: '#0A0F1E',
  label: '#1F4C9C',
  headline: '#FFFFFF',
  body: '#98A2B3',
  placeholderBg: '#141B2D',
  placeholderBorder: '#1E2A40',
  btnBg: '#1F4C9C',
  btnText: '#FFFFFF',
}

export default function Demo() {
  return (
    <section style={{ backgroundColor: COLORS.bg }} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span style={{ color: COLORS.label }}
              className="text-xs font-semibold tracking-widest uppercase">
              Our Story
            </span>
            <h2 style={{ color: COLORS.headline }}
              className="text-3xl md:text-4xl font-bold mt-4 leading-tight max-w-2xl">
              The problem we are solving.
            </h2>
            <p style={{ color: COLORS.body }}
              className="text-base mt-4 max-w-xl leading-relaxed">
              Millions of stroke patients recover at home every day.
              Their clinical teams only see them weeks later. Watch how FixedGap closes this gap.
            </p>
          </div>
          <a href="/demo"
            style={{ color: COLORS.btnText, backgroundColor: COLORS.btnBg }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap shrink-0">
            See all videos <MoveRight size={16} />
          </a>
        </div>

        {/* Vídeo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            borderRadius: '16px',
            overflow: 'hidden',
            aspectRatio: '16/9',
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/TYvQgTtPtYA"
            title="FixedGap — Our Story"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ border: 'none', display: 'block' }}
          />
        </motion.div>

      </div>
    </section>
  )
}
