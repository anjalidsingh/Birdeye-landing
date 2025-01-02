"use client"

import React from 'react'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Portfolio } from '@/components/sections/Portfolio'
import { Blog } from '@/components/sections/Blog'
import Contact from '@/components/sections/Contact'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Main Content */}
      <main className="flex flex-col min-h-screen">
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  )
}