"use client"

import React, { useState } from 'react'
import Image from 'next/image'

interface ImageWithFallbackProps extends Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'> {
  src: string
  fallbackSrc?: string
  alt: string
}

export function ImageWithFallback({
  src,
  fallbackSrc = '/images/placeholder.jpg',
  alt,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => {
        setImgSrc(fallbackSrc)
      }}
    />
  )
}
