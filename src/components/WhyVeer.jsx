import React from 'react'
import { Sparkles, Brain, Heart } from 'lucide-react'

const items = [
  { title: 'Intelligent AI Infrastructure', icon: Brain, copy: 'Purpose-built systems that understand work across roles, skills and outcomes.' },
  { title: 'Human-Centred Design', icon: Heart, copy: 'Tools shaped around dignity, clarity and confidence for every user.' },
  { title: 'Future-Proof Ecosystem', icon: Sparkles, copy: 'A constellation of products that evolve together to guide people through change.' },
]

export default function WhyVeer() {
  return (
    <section className="bg-[#090915] py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="relative rounded-2xl border border-white/10 p-6 bg-white/5">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-white text-lg font-semibold">{item.title}</h3>
                <p className="text-white/70 text-sm mt-1">{item.copy}</p>
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_0%,rgba(139,92,246,0.2),transparent_60%)]" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
