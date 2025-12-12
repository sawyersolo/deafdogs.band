import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PageTransition({ children, locationKey }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={locationKey}
        initial={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, scale: 1.02, filter: 'blur(6px)' }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'relative' }}
      >
        {/* Liquid-ish top wipe */}
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            originY: 0,
            background:
              'radial-gradient(circle at 20% 0%, rgba(255,79,216,0.9), transparent 55%), ' +
              'radial-gradient(circle at 80% 20%, rgba(123,92,255,0.85), transparent 60%)',
            mixBlendMode: 'screen',
            pointerEvents: 'none',
            zIndex: 5,
          }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
