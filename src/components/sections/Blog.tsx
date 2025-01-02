"use client"

import React from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { GlassCard } from '@/components/ui/glass-card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const blogPosts = [
  {
    id: 1,
    title: "Beginner's Guide to Drone Photography",
    category: "Photography",
    image: "/images/blog/drone-photography.webp",
    excerpt: "Master the basics of aerial photography with our comprehensive guide for beginners.",
    readTime: "5 min read",
    tags: ["Photography", "Beginners", "Tips"],
    slug: "beginners-guide-drone-photography"
  },
  {
    id: 2,
    title: "How to Choose Your First Drone",
    category: "Buying Guide",
    image: "/images/blog/drone-choosing.webp",
    excerpt: "Everything you need to know about selecting the perfect drone for your needs and budget.",
    readTime: "7 min read",
    tags: ["Buying Guide", "Drones", "Beginners"],
    slug: "how-to-choose-first-drone"
  },
  {
    id: 3,
    title: "Drone Maintenance 101",
    category: "Maintenance",
    image: "/images/blog/drone-maintenance.webp",
    excerpt: "Essential maintenance tips to keep your drone flying safely and efficiently.",
    readTime: "6 min read",
    tags: ["Maintenance", "Tips", "Safety"],
    slug: "drone-maintenance-101"
  },
  {
    id: 4,
    title: "Commercial Drone Applications",
    category: "Business",
    image: "/images/blog/drone-applications.webp",
    excerpt: "Explore how drones are transforming various industries and business operations.",
    readTime: "8 min read",
    tags: ["Business", "Industry", "Innovation"],
    slug: "commercial-drone-applications"
  },
  {
    id: 5,
    title: "Drone Racing: Getting Started",
    category: "Racing",
    image: "/images/blog/drone-racing.webp",
    excerpt: "Your complete guide to entering the exciting world of drone racing.",
    readTime: "5 min read",
    tags: ["Racing", "Sport", "Competition"],
    slug: "drone-racing-getting-started"
  },
  {
    id: 6,
    title: "Advanced Drone Repair Tips",
    category: "Repair",
    image: "/images/blog/drone-repair.webp",
    excerpt: "DIY repair guides for common drone issues and maintenance procedures.",
    readTime: "10 min read",
    tags: ["Repair", "DIY", "Technical"],
    slug: "advanced-drone-repair-tips"
  }
]

export function Blog() {
  const { scrollYProgress } = useScroll()
  
  // Parallax and fade effects
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  // Generate particles for background
  const particles = Array.from({ length: 15 }).map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 3
  }))

  return (
    <section className="relative py-32 bg-zinc-950 overflow-hidden" id="blog">
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

      <div className="container mx-auto px-4 relative z-10">
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
          >
            Latest Articles
          </motion.h2>
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
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
              <GlassCard className="h-full group">
                <Link href={`/blog/${post.slug}`} className="block">
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
                </Link>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link href="/blog">
            <Button
              variant="outline"
              size="lg"
              className="text-base rounded-full group border-zinc-800 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
            >
              View All Articles
              <motion.span 
                className="inline-block ml-2"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                →
              </motion.span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
