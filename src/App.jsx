import React from 'react'
import Hero from './components/Hero'
import SolarSystem from './components/SolarSystem'
import ScrollingCards from './components/ScrollingCards'
import Mission from './components/Mission'
import ProductGallery from './components/ProductGallery'
import WhyVeer from './components/WhyVeer'
import Roadmap from './components/Roadmap'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#05050A] text-white">
      <Hero />
      <SolarSystem />
      <ScrollingCards />
      <Mission />
      <ProductGallery />
      <WhyVeer />
      <Roadmap />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
