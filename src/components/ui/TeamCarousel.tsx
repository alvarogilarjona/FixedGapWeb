"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TeamMember {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

const team: TeamMember[] = [
  {
    name: "Álvaro Gil Arjona",
    title: "Co-founder, Product & Strategy",
    description: "Álvaro leads product direction, strategy, user experience, and company positioning at FixedGap. Pursuing Computer Science and Business at UCM, he translates the clinical problem into a usable product experience while driving the website, demo videos, pitch materials, and external communication.",
    imageUrl: "/AlvaroNueva.png",
    linkedinUrl: "https://www.linkedin.com/in/alvarogilarjona/",
    githubUrl: "https://github.com/alvarogilarjona",
  },
  {
    name: "Mateo Pérez Guzmán",
    title: "Co-founder, MVP Engineering",
    description: "Mateo leads MVP engineering and software development at FixedGap. Software Engineer at Galeo and dual degree student in Computer Science and Business at UCM. He focuses on MVP architecture, computer vision implementation, and technical execution.",
    imageUrl: "/team/mateo.jpg",
    linkedinUrl: "https://www.linkedin.com/in/mateoperezguzman/",
    githubUrl: "https://github.com/mpchachi",
  },
  {
    name: "Luis Molina Salvador",
    title: "Co-founder, Strategy",
    description: "Luis leads strategy, fundraising, partnerships, go-to-market, and investor outreach at FixedGap. Jr Software Developer at Amazon with a double degree in Computer Engineering and Business at UCM, plus experience in AI development and equity analysis.",
    imageUrl: "/team/luis.jpg",
    linkedinUrl: "https://www.linkedin.com/in/luis-molina-salvador/",
    githubUrl: "https://github.com/34lumo",
  },
  {
    name: "Marco García López",
    title: "Co-founder, MVP Engineering",
    description: "Marco leads MVP engineering, computer vision implementation, and technical execution at FixedGap. Pursuing a double degree in Computer Science and Business at UCM. He focuses on software development, product architecture, and computer vision logic.",
    imageUrl: "/team/marco.jpg",
    linkedinUrl: "https://www.linkedin.com/in/marco-garcia-lopez-4b0037308/",
    githubUrl: "https://github.com/marcusen78-sketch",
  },
  {
    name: "Helene Weinberg",
    title: "Co-founder, Clinical & Biomedical Translation",
    description: "Helene leads the clinical and biomedical translation layer at FixedGap. Cum Laude Biomedical Engineering graduate from Binghamton University, incoming MiM at IESE, and Healthcare Management certified by Cornell. She bridges engineering, clinical relevance, and healthcare business execution.",
    imageUrl: "/team/helene.jpg",
    linkedinUrl: "https://www.linkedin.com/in/helene-weinberg/",
  },
  {
    name: "José Antonio López-Martín",
    title: "Advisor, Medicine & Clinical Research",
    description: "José Antonio serves as senior clinical validator and medical research lead at FixedGap. Director of Research and Innovation at Atrys with deep experience in translational medicine, precision medicine, and clinical development. He provides physician-level judgment and defines the clinical validation pathway.",
    imageUrl: "/team/jal.jpg",
    linkedinUrl: "#",
  },
]

export function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () =>
    setCurrentIndex((index) => (index + 1) % team.length)
  const handlePrevious = () =>
    setCurrentIndex((index) => (index - 1 + team.length) % team.length)

  const current = team[currentIndex]

  return (
    <div className="w-full max-w-5xl mx-auto px-4">

      {/* Desktop layout */}
      <div className="hidden md:flex relative items-center">

        {/* Foto */}
        <div className="w-[470px] h-[470px] rounded-3xl overflow-hidden bg-gray-200 flex-shrink-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Image
                src={current.imageUrl}
                alt={current.name}
                width={470}
                height={470}
                className="w-full h-full object-cover object-center"
                draggable={false}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 ml-[-80px] z-10 max-w-xl flex-1"
          style={{ border: '1px solid #E8E0D0' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2"
                  style={{ color: '#1A1F3C' }}>
                  {current.name}
                </h2>
                <p className="text-sm font-semibold"
                  style={{ color: '#1F4C9C' }}>
                  {current.title}
                </p>
              </div>

              <p className="text-base leading-relaxed mb-8"
                style={{ color: '#6B7689' }}>
                {current.description}
              </p>

              <div className="flex gap-3">
                {current.linkedinUrl && current.linkedinUrl !== '#' && (
                  <Link
                    href={current.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
                    style={{ backgroundColor: '#1A1F3C' }}
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </Link>
                )}
                {current.githubUrl && current.githubUrl !== '#' && (
                  <Link
                    href={current.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
                    style={{ backgroundColor: '#1A1F3C' }}
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </Link>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden max-w-sm mx-auto text-center">
        <div className="w-full aspect-square bg-gray-200 rounded-3xl overflow-hidden mb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Image
                src={current.imageUrl}
                alt={current.name}
                width={400}
                height={400}
                className="w-full h-full object-cover"
                draggable={false}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h2 className="text-xl font-bold mb-2"
                style={{ color: '#1A1F3C' }}>
                {current.name}
              </h2>
              <p className="text-sm font-semibold mb-4"
                style={{ color: '#1F4C9C' }}>
                {current.title}
              </p>
              <p className="text-sm leading-relaxed mb-6"
                style={{ color: '#6B7689' }}>
                {current.description}
              </p>
              <div className="flex justify-center gap-3">
                {current.linkedinUrl && current.linkedinUrl !== '#' && (
                  <Link
                    href={current.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#1A1F3C' }}
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </Link>
                )}
                {current.githubUrl && current.githubUrl !== '#' && (
                  <Link
                    href={current.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#1A1F3C' }}
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </Link>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navegación */}
      <div className="flex justify-center items-center gap-6 mt-8">
        <button
          onClick={handlePrevious}
          aria-label="Previous"
          className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
          style={{ backgroundColor: '#F7F9FC', border: '1px solid #E8E0D0' }}
        >
          <ChevronLeft className="w-6 h-6" style={{ color: '#1A1F3C' }} />
        </button>

        <div className="flex gap-2">
          {team.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className="w-3 h-3 rounded-full transition-colors"
              style={{ backgroundColor: i === currentIndex ? '#1A1F3C' : '#E8E0D0' }}
              aria-label={`Go to member ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next"
          className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
          style={{ backgroundColor: '#F7F9FC', border: '1px solid #E8E0D0' }}
        >
          <ChevronRight className="w-6 h-6" style={{ color: '#1A1F3C' }} />
        </button>
      </div>

    </div>
  )
}
