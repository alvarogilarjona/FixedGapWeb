'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HandKeypoints() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      gap: '16px',
      padding: '16px',
    }}>

      {/* Imagen de la mano con keypoints */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ width: '100%', maxWidth: '260px' }}
      >
        <Image
          src="/hand-keypoints.png"
          alt="Hand tracking with 21 MediaPipe landmarks"
          width={260}
          height={280}
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </motion.div>

      {/* Texto de estado */}
      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          color: '#1F4C9C',
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        ● 21 landmarks detected
      </motion.p>

    </div>
  )
}
