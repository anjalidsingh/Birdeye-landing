"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface SiteLogoProps {
  className?: string
}

export function SiteLogo({ className = '' }: SiteLogoProps) {
  return (
    <div className={`inline-block group ${className}`}>
      <Link href="/" className="flex items-center gap-3">
        <div className="relative w-12 h-12">
          <Image
            src="/logo-triangle.svg"
            alt="BirdEye Logo"
            fill
            className="object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <motion.h2 
          className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-500 group-hover:to-blue-400 transition-all duration-300"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
        >
          BirdEye
        </motion.h2>
      </Link>
    </div>
  )
}
