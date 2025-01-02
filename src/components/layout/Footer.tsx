"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowUpRight, Linkedin, Github, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GlassCard } from '@/components/ui/glass-card'
import { SiteLogo } from '@/components/ui/site-logo'

const partnerLogos = [
  { name: 'Company 1', src: '/logos/logo1.png' },
  { name: 'Company 2', src: '/logos/logo2.png' },
  { name: 'Company 3', src: '/logos/logo3.png' },
  { name: 'Company 4', src: '/logos/logo4.png' },
  { name: 'Company 5', src: '/logos/logo5.png' },
  { name: 'Company 6', src: '/logos/logo6.png' }
]

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-[#0077b5]' },
  { name: 'Github', icon: Github, href: 'https://github.com', color: 'hover:text-[#333]' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com', color: 'hover:text-[#1DA1F2]' }
]

const contactInfo = [
  { 
    icon: Mail, 
    text: 'info@birdeye.com',
    href: 'mailto:info@birdeye.com'
  },
  { 
    icon: Phone, 
    text: '+91 (555) 123-4567',
    href: 'tel:+915551234567'
  },
  { 
    icon: MapPin, 
    text: 'Mumbai, Maharashtra',
    href: 'https://maps.google.com'
  }
]

const stats = [
  { label: 'Satisfied Clients', value: '100+' },
  { label: 'Projects Completed', value: '500+' },
  { label: 'Cities Covered', value: '20+' }
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
}

export function Footer() {
  return (
    <footer className="relative bg-zinc-950 pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full mix-blend-screen filter blur-[128px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full mix-blend-screen filter blur-[128px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Partners Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-lg font-semibold text-center text-white mb-8">Trusted By Industry Leaders</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {partnerLogos.map((logo) => (
              <motion.div
                key={logo.name}
                variants={logoVariants}
                className="relative h-12 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center"
            >
              <GlassCard className="p-6 h-full hover:border-blue-500/50 transition-colors duration-300">
                <h4 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-500">
                  {stat.value}
                </h4>
                <p className="text-zinc-400 text-sm md:text-base mt-2">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <SiteLogo />
            <p className="text-zinc-400 max-w-sm text-base leading-relaxed">
              Elevating perspectives through cutting-edge drone solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ name, icon: Icon, href, color }) => (
                <a 
                  key={name}
                  href={href}
                  className={`w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300 group`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className={`w-5 h-5 text-zinc-400 transition-colors duration-300 ${color}`} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <ul className="space-y-3">
                  <li>
                    <Link href="/about" className="text-zinc-400 hover:text-blue-400 transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-zinc-400 hover:text-blue-400 transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="text-zinc-400 hover:text-blue-400 transition-colors">
                      Portfolio
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li>
                    <Link href="/contact" className="text-zinc-400 hover:text-blue-400 transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-zinc-400 hover:text-blue-400 transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-zinc-400 hover:text-blue-400 transition-colors">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map(({ icon: Icon, text, href }) => (
                <li key={text}>
                  <a 
                    href={href}
                    className="flex items-center gap-3 text-zinc-400 hover:text-blue-400 transition-colors group"
                  >
                    <Icon className="w-5 h-5" />
                    <span>{text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="text-zinc-400">Stay updated with our latest news and offers.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-zinc-500"
              />
              <Button className="w-full">
                Subscribe
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-white/10 text-center text-zinc-400"
        >
          <p>&copy; {new Date().getFullYear()} BirdEye. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
