"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { GlassCard } from '@/components/ui/glass-card'

const blogPosts = [
  {
    id: 'beginners-guide-drone-photography',
    title: "Beginner's Guide to Drone Photography",
    category: "Photography",
    image: "/images/blog/drone-photography.webp",
    excerpt: "Master the basics of aerial photography with our comprehensive guide for beginners.",
    readTime: "5 min read",
  },
  {
    id: 'how-to-choose-first-drone',
    title: "How to Choose Your First Drone",
    category: "Regulations",
    image: "/images/blog/drone-regulations.webp",
    excerpt: "Stay compliant with the latest drone regulations and guidelines for commercial operations.",
    readTime: "8 min read",
  },
  {
    id: 'drone-maintenance-101',
    title: "Advanced Drone Mapping Techniques",
    category: "Mapping",
    image: "/images/blog/drone-mapping.webp",
    excerpt: "Discover professional mapping techniques using modern drone technology.",
    readTime: "10 min read",
  },
]

export default function BlogPage() {
  const { scrollYProgress } = useScroll()
  
  // Parallax and fade effects
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  // Generate particles for background
  const particles = Array.from({ length: 20 }).map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 3
  }))

  return (
    <div className="min-h-screen relative bg-zinc-950 overflow-hidden">
      {/* Background Particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: useTransform(scrollYProgress, [0, 1], [0.3, 0]),
            y: useTransform(
              scrollYProgress,
              [0, 1],
              [0, (Math.random() - 0.5) * 300]
            ),
          }}
        />
      ))}

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />

      <section className="relative py-32">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            style={{ y: headerY, opacity }}
            className="text-center mb-20"
          >
            <motion.span 
              className="inline-block text-blue-500 font-mono text-sm tracking-wider mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              DRONE INSIGHTS
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
            >
              Latest Insights
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-zinc-400 max-w-2xl mx-auto"
            >
              Stay updated with the latest trends, techniques, and regulations in the drone industry.
            </motion.p>
          </motion.div>

          {/* Blog Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link href={`/blog/${post.id}`}>
                  <GlassCard className="h-full group">
                    <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-blue-400 font-medium">{post.category}</span>
                        <span className="text-sm text-zinc-400">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-zinc-400 line-clamp-2">{post.excerpt}</p>
                      <motion.div 
                        className="mt-4 flex items-center text-blue-400 font-medium"
                        whileHover={{ x: 5 }}
                      >
                        Read More
                        <svg
                          className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
