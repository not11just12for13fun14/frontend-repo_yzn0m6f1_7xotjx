import React from 'react'
import { motion } from 'framer-motion'

const products = [
  { name: 'TeamVeer', caption: 'Semantic discovery for talent and roles', color: 'from-violet-500/20 to-indigo-500/20' },
  { name: 'Cassie', caption: 'AI job-search companion', color: 'from-indigo-500/20 to-violet-500/20' },
  { name: 'InterviewAce', caption: 'Interview acceleration', color: 'from-purple-500/20 to-indigo-500/20' },
  { name: 'OfferAce', caption: '90-day growth pathways', color: 'from-fuchsia-500/20 to-pink-500/20' },
]

export default function ProductGallery() {
  return (
    <section id="products" className="bg-[#080810] py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 * i }}
              className="group relative rounded-2xl border border-white/10 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} blur-2xl opacity-50`} />
              <div className="relative h-56 md:h-64 bg-[#0E0E18] flex items-center justify-center">
                <div className="h-32 w-48 rounded-xl bg-white/5 border border-white/10 shadow-2xl" />
              </div>
              <div className="relative p-6">
                <h3 className="text-white text-xl font-semibold">{p.name}</h3>
                <p className="text-white/70 text-sm">{p.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
