import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Logo() {
  return (
    <Link href="/" className="relative group">
      <motion.div
        className="relative flex items-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {/* Logo Icon */}
        <div className="mr-2 relative">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transform group-hover:rotate-12 transition-transform duration-300"
          >
            <motion.path
              d="M16 4L4 28H28L16 4Z"
              className="stroke-blue-500"
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
              className="fill-blue-500"
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            />
          </svg>
          <div className="absolute -inset-0.5 bg-blue-500 blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </div>

        {/* Logo Text */}
        <div className="flex items-baseline">
          <span className="text-2xl font-bold tracking-tight">bird</span>
          <motion.span
            className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-400"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            eye
          </motion.span>
        </div>

        {/* Tagline */}
        <motion.span
          className="absolute -bottom-4 left-0 text-[10px] text-zinc-500 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ y: -5 }}
          whileHover={{ y: 0 }}
        >
          drone solutions
        </motion.span>
      </motion.div>
    </Link>
  )
}
