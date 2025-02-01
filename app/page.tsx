"use client";

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowTo from './components/HowTo'
import ImageUpload from './components/ImageUpload'
import About from './components/About'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <div className="section-border" />
      <HowTo />
      <div className="section-border" />
      <ImageUpload />
      <div className="section-border" />
      <About />
      <div className="section-border" />
      <Reviews />
      <div className="section-border" />
      <FAQ />
      <div className="section-border" />
      <Contact />
      <Footer />
    </main>
  )
}

