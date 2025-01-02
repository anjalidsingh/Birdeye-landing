"use client"

import { LoadingTriangle } from './loading-triangle'
import { motion } from 'framer-motion'

export function LoadingPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <LoadingTriangle size={64} color="blue-500" className="mb-4" />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/50 text-sm"
        >
          Loading...
        </motion.div>
      </motion.div>
    </div>
  )
}
