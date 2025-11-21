import React from 'react'
import { motion } from 'framer-motion'

export default function Mission() {
  return (
    <section className="relative bg-[#0A0A12] py-24" id="mission">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(139,92,246,0.12),transparent_70%)]" />
      <div className="relative container mx-auto px-6 md:px-12">
        <div className="max-w-4xl">
          <h2 className="text-white text-3xl md:text-4xl font-semibold tracking-tight">We believe every person deserves a guided path to better work.</h2>
          <p className="mt-4 text-white/70 text-lg">
            Veer builds intelligent tools that combine AI, behavioural science and labour-market analytics to help people navigate the most important transitions of their lives.
          </p>
        </div>
      </div>
    </section>
  )
}
