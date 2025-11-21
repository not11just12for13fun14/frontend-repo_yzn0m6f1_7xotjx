import React from 'react'

export default function CTA() {
  return (
    <section className="relative bg-[#090915] py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 px-8 md:px-14 py-16 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(139,92,246,0.15),transparent_70%)]">
          <div className="max-w-3xl">
            <h3 className="text-white text-3xl md:text-4xl font-semibold tracking-tight">Explore the Veer Universe.</h3>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#products" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 text-white px-6 py-3 text-sm md:text-base shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition">See Our Products</a>
              <a href="#contact" className="group inline-flex items-center justify-center rounded-full bg-white/10 text-white backdrop-blur px-6 py-3 text-sm md:text-base border border-white/15 hover:bg-white/15 transition">Work With Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
