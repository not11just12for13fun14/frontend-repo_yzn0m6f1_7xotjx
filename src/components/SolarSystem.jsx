import React from 'react'
import { motion } from 'framer-motion'

const planets = [
  { name: 'TeamVeer', tagline: 'Semantic Discovery', color: 'from-violet-500 to-fuchsia-500' },
  { name: 'Cassie', tagline: 'AI Job-Search Companion', color: 'from-indigo-500 to-violet-500' },
  { name: 'InterviewAce', tagline: 'Interview Mastery', color: 'from-purple-500 to-indigo-500' },
  { name: 'OfferAce', tagline: 'Job → Growth Pathways (Coming Soon)', color: 'from-fuchsia-500 to-pink-500' },
  { name: 'Future Moons', tagline: 'Micro products', color: 'from-sky-400 to-indigo-400' },
]

function Orbit({ size, children, delay = 0 }) {
  return (
    <motion.div
      className="absolute rounded-full border border-white/10"
      style={{ width: size, height: size, left: `calc(50% - ${size/2}px)`, top: `calc(50% - ${size/2}px)` }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, ease: 'linear', duration: 80 - size / 15, delay }}
    >
      {children}
    </motion.div>
  )
}

function Planet({ index, name, tagline, color }) {
  const radius = 140 + index * 90
  const size = 18 + index * 6
  return (
    <motion.div
      className="absolute"
      style={{ left: `calc(50% + ${radius}px)`, top: '50%' }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 * index }}
    >
      <div className="relative group">
        <div className={`h-${size} w-${size} rounded-full bg-gradient-to-br ${color} shadow-[0_0_25px_rgba(139,92,246,0.35)]`} />
        <div className="absolute -left-32 top-6 w-64 opacity-0 pointer-events-none group-hover:opacity-100 transition">
          <div className="backdrop-blur-md bg-white/10 border border-white/15 rounded-xl p-3">
            <p className="text-white text-sm font-medium">{name}</p>
            <p className="text-white/70 text-xs">{tagline}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function SolarSystem() {
  return (
    <section id="solar" className="relative min-h-[90vh] bg-[#0A0A12] py-24 overflow-hidden">
      {/* soft center sun */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-72 w-72 rounded-full bg-gradient-to-br from-violet-500/20 to-indigo-500/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-white/90 text-3xl md:text-4xl font-semibold">The Veer Solar System</h2>
          <p className="text-white/60 mt-2">Veer Core at the center — intelligent orbits of products around it.</p>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl h-[640px]">
        {[360, 540, 720].map((s, i) => (
          <Orbit key={i} size={s} delay={i * 4} />
        ))}

        {/* Core sun */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-24 w-24 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 shadow-[0_0_50px_rgba(139,92,246,0.6)] border border-white/20 flex items-center justify-center text-white font-semibold">
            Veer
          </div>
        </div>

        {planets.map((p, i) => (
          <Orbit key={p.name} size={300 + i * 120} delay={i * 2}>
            <Planet index={i} {...p} />
          </Orbit>
        ))}
      </div>
    </section>
  )
}
