import React from 'react'

const items = [
  { year: '2023', label: 'TeamVeer' },
  { year: '2024', label: 'Cassie' },
  { year: '2024', label: 'InterviewAce' },
  { year: '2025', label: 'OfferAce' },
  { year: '2025', label: 'The Veer Passport' },
  { year: 'Future', label: 'More planets' },
]

export default function Roadmap() {
  return (
    <section className="relative bg-[#070711] py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 px-6 md:px-10 py-16 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(139,92,246,0.12),transparent_70%)]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-[90%] md:w-[80%] rounded-full border border-white/15" />
          </div>
          <div className="relative grid grid-cols-2 md:grid-cols-6 gap-6">
            {items.map((item) => (
              <div key={item.year} className="text-center">
                <div className="text-white/70 text-sm">{item.year}</div>
                <div className="mt-1 text-white font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
