import React from 'react'
import Spline from '@splinetool/react-spline'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-[#070711]">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Cosmic gradient overlay for depth (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(120,77,255,0.25),transparent_60%)]" />

      {/* Halo crown around the Veer Sun */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-purple-500/10 via-fuchsia-400/10 to-indigo-400/10 blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-white/95 tracking-tight text-4xl sm:text-5xl md:text-6xl font-semibold"
            >
              Veer — The Solar System of Work
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
              className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl"
            >
              An intelligent AI ecosystem guiding people from job search to career lift-off.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a href="#solar" className="group inline-flex items-center justify-center rounded-full bg-white/10 text-white backdrop-blur px-6 py-3 text-sm md:text-base border border-white/15 hover:bg-white/15 transition">
                Explore the Universe
              </a>
              <a href="#products" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 text-white px-6 py-3 text-sm md:text-base shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition">
                See Our Products
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pulsing chevron */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute left-1/2 bottom-8 -translate-x-1/2 text-white/70"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-7 h-7 animate-pulse" />
        </motion.div>
      </motion.div>
    </section>
  )
}
