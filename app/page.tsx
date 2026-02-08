'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import PianoKeys from '@/components/piano-keys'
import AboutSection from '@/components/about-section'
import BackgroundMusic from '@/components/background-music'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <BackgroundMusic />
      <Header />
      <main className="overflow-hidden">
        <HeroSection />
        <PianoKeys />
        <AboutSection />
      </main>
      <Footer />
    </>
  )
}
