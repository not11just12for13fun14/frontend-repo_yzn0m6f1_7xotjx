import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#070711] border-t border-white/10 py-10" id="contact">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-white/80">
          <span className="inline-block h-3 w-3 rounded-full border border-white/40" />
          <span className="font-medium tracking-wide">VEER</span>
        </div>
        <nav className="flex items-center gap-6 text-white/60 text-sm">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#careers" className="hover:text-white transition">Careers</a>
          <a href="#products" className="hover:text-white transition">Products</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
