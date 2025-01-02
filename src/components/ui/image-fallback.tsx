"use client"

import { LucideIcon } from 'lucide-react'

interface ImageFallbackProps {
  Icon: LucideIcon
  title: string
  className?: string
}

export function ImageFallback({ Icon, title, className }: ImageFallbackProps) {
  return (
    <div className={`flex flex-col items-center justify-center space-y-4 p-8 ${className}`}>
      <Icon className="w-12 h-12 text-blue-400 opacity-50" />
      <p className="text-sm text-zinc-400 text-center">{title}</p>
    </div>
  )
}
