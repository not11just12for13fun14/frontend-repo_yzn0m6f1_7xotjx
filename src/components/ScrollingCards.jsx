import React from 'react'
import { motion } from 'framer-motion'
import { Planet, Orbit, Rocket } from 'lucide-react'

const cards = [
  {
    title: 'TeamVeer',
    copy: 'Where it all began. Semantic job discovery powering the universe.',
    icon: Planet,
    gradient: 'from-violet-600/40 via-fuchsia-500/20 to-indigo-600/40'
  },
  {
    title: 'Cassie',
    copy: 'The world’s first AI job-search companion. Built with ApplyGateway.',
    icon: Orbit,
    gradient: 'from-indigo-600/40 via-violet-500/20 to-purple-600/40'
  },
  {
    title: 'InterviewAce',
    copy: 'Your personal interview accelerator. Built with Reed.',
    icon: Rocket,
    gradient: 'from-purple-600/40 via-indigo-500/20 to-violet-600/40'
  },
  {
    title: 'OfferAce (Coming Soon)',
    copy: 'A personalised navigation system for the first 90 days and beyond.',
    icon: Planet,
    gradient: 'from-fuchsia-600/40 via-pink-500/20 to-violet-600/40'
  }
]

export default function ScrollingCards() {
  return (
    <section className="bg-[#090915]" id="planets">
      <div className="container mx-auto px-0 md:px-6 py-20">
        <div className="space-y-8">
          {cards.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 * i }}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(139,92,246,0.08), rgba(59,130,246,0.04))`
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} blur-3xl opacity-40`} />
                <div className="relative p-8 md:p-14">
                  <div className="flex items-center gap-4 text-white">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/20">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{c.title}</h3>
                  </div>
                  <p className="mt-3 text-white/70 max-w-3xl">{c.copy}</p>
                </div>
                <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full border border-white/10 opacity-40" />
                <div className="absolute -right-36 -bottom-36 h-96 w-96 rounded-full border border-white/10 opacity-20" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
