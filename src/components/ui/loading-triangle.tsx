"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface LoadingTriangleProps {
  size?: number
  color?: string
  className?: string
}

export function LoadingTriangle({ 
  size = 32, 
  color = 'blue-500',
  className = ''
}: LoadingTriangleProps) {
  return (
    <div className={`relative ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transform transition-transform duration-300"
      >
        <motion.path
          d="M16 4L4 28H28L16 4Z"
          className={`stroke-${color}`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        />
        <motion.circle
          cx="16"
          cy="16"
          r="4"
          className={`fill-${color}`}
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>
      <div className={`absolute -inset-0.5 bg-${color} blur-lg opacity-20`} />
    </div>
  )
}
