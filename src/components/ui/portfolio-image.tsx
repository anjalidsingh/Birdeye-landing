"use client"

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

interface PortfolioImageProps {
  src: string
  alt: string
  className?: string
  fill?: boolean
  sizes?: string
  priority?: boolean
  quality?: number
  hasOverlay?: boolean
}

export function PortfolioImage({
  src,
  alt,
  className,
  fill = true,
  sizes,
  priority = false,
  quality = 90,
  hasOverlay = true,
}: PortfolioImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Loading Shimmer Effect */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 animate-pulse"
          />
        )}
      </AnimatePresence>

      {/* Main Image */}
      <Image
        src={error ? '/images/portfolio/fallback.webp' : src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        priority={priority}
        quality={quality}
        className={cn(
          'object-cover duration-700 ease-in-out',
          isLoading ? 'scale-110 blur-lg' : 'scale-100 blur-0'
        )}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => setError(true)}
      />

      {/* Gradient Overlay */}
      {hasOverlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-60" />
      )}

      {/* Error State */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/80">
          <p className="text-sm text-zinc-400">Failed to load image</p>
        </div>
      )}
    </div>
  )
}
