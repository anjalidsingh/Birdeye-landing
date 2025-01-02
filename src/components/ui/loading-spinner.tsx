"use client"

import { LoadingTriangle } from './loading-triangle'

interface LoadingSpinnerProps {
  size?: number
  color?: string
  className?: string
}

export function LoadingSpinner({ 
  size = 24, 
  color = 'blue-500',
  className = ''
}: LoadingSpinnerProps) {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <LoadingTriangle size={size} color={color} />
    </div>
  )
}
