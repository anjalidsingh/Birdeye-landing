"use client"

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SiteLogo } from '@/components/ui/site-logo'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Services', href: pathname === '/' ? '#services' : '/#services' },
    { name: 'Portfolio', href: pathname === '/' ? '#portfolio' : '/#portfolio' },
    { name: 'About', href: pathname === '/' ? '#about' : '/#about' },
    { name: 'Blog', href: '/blog' },
  ]

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    if (href.startsWith('#') && pathname === '/') {
      const element = document.getElementById(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800/50' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <SiteLogo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="group relative text-zinc-300 hover:text-white transition-colors uppercase text-sm tracking-wider"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-x-0 -bottom-2 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" style={{
                  clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)'
                }} />
              </Link>
            ))}
            <Link href="/#contact">
              <Button className="bg-white text-black hover:bg-white/90">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-300 hover:text-white md:hidden"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-transform origin-right ${mobileMenuOpen ? 'rotate-45 translate-y-[2px]' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current transform transition-transform origin-right ${mobileMenuOpen ? '-rotate-45 -translate-y-[2px]' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="block group relative text-zinc-300 hover:text-white transition-colors uppercase text-sm tracking-wider"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" style={{
                      clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)'
                    }} />
                  </Link>
                ))}
                <Link href="/#contact" className="block">
                  <Button className="w-full bg-white text-black hover:bg-white/90">
                    Get Started
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
