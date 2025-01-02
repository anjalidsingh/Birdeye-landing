"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

export function Hero() {
  const { scrollYProgress } = useScroll()
  
  // Parallax and scale effects
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const backgroundScale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 1.2]), springConfig)
  const textY = useSpring(useTransform(scrollYProgress, [0, 0.5], [0, -100]), springConfig)
  const statsY = useSpring(useTransform(scrollYProgress, [0, 0.5], [0, 150]), springConfig)
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 0.9])
  const blur = useSpring(useTransform(scrollYProgress, [0, 0.5], [0, 8]), springConfig)
  const rotate = useSpring(useTransform(scrollYProgress, [0, 0.5], [0, -10]), springConfig)

  // Generate dynamic particles
  const particles = Array.from({ length: 30 }).map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 3,
    initialY: Math.random() * 100
  }))

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-zinc-950 overflow-hidden">
      {/* Animated Particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: useTransform(scrollYProgress, [0, 1], [0.3, 0]),
            y: useTransform(
              scrollYProgress,
              [0, 1],
              [0, (Math.random() - 0.5) * 500]
            ),
          }}
        />
      ))}

      {/* Background Video with Sound */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          scale: backgroundScale,
          filter: `blur(${blur}px)`,
          rotate
        }}
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          id="bgVideo"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.8)' }}
        >
          <source src="/videos/drone-flight.mp4" type="video/mp4" />
        </video>
        <audio id="droneSound" loop className="hidden">
          <source src="/sounds/drone-ambient.mp3" type="audio/mpeg" />
        </audio>
      </motion.div>

      {/* Animated Gradient Overlay */}
      <motion.div 
        className="absolute inset-0"
        style={{ 
          background: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)',
          opacity: overlayOpacity,
          scale: useTransform(scrollYProgress, [0, 1], [1, 1.2])
        }}
      />

      {/* Content */}
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ 
          opacity,
          y: textY
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-8">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <motion.span 
                className="inline-block text-blue-600 font-mono text-sm tracking-wider"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                AERIAL EXCELLENCE
              </motion.span>
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Capture Your World from a
                <motion.span 
                  className="block mt-2 bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  New Perspective
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto relative"
            >
              Professional drone services for creators, businesses, and visionaries. 
              Let's elevate your story together.
              <motion.span 
                className="absolute -right-2 -top-2 text-blue-500/40 text-2xl hidden sm:inline-block"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                ✧
              </motion.span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button
                size="lg"
                className="text-base rounded-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 relative group overflow-hidden"
                onClick={() => {
                  const servicesSection = document.getElementById('services')
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                <span className="relative z-10">Explore Services</span>
                <motion.div 
                  className="absolute inset-0 bg-blue-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ type: "tween", ease: "easeInOut" }}
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base rounded-full border-zinc-700 hover:bg-zinc-800 transition-all duration-300"
                onClick={() => {
                  const portfolioSection = document.getElementById('portfolio')
                  if (portfolioSection) {
                    portfolioSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                View Portfolio
              </Button>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
            style={{ y: statsY }}
          >
            {[
              { label: 'Projects Completed', value: '500+' },
              { label: 'Drone Pilots', value: '50+' },
              { label: 'Client Satisfaction', value: '99%' },
              { label: 'Cities Covered', value: '20+' }
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                className="text-center relative p-6 bg-white/10 backdrop-blur-xl shadow-2xl hover:bg-white/15 transition-all duration-300"
              >
                <motion.p 
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-zinc-300 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
