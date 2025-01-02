"use client"

import React from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { GlassCard } from '@/components/ui/glass-card'
import { BlogContent } from '@/components/blog-content'
import Image from 'next/image'

const blogPosts = {
  'beginners-guide-drone-photography': {
    title: "Beginner's Guide to Drone Photography",
    content: `
      <h2>Getting Started with Drone Photography</h2>
      <p>Drone photography opens up a whole new world of creative possibilities. This guide will help you get started with the basics.</p>
      
      <h3>Essential Equipment</h3>
      <ul>
        <li>A reliable drone with a good camera</li>
        <li>Extra batteries</li>
        <li>Memory cards</li>
        <li>Filters for different lighting conditions</li>
      </ul>

      <h3>Basic Techniques</h3>
      <p>Start with simple maneuvers and gradually work your way up to more complex shots. Always prioritize safety and follow local regulations.</p>
    `,
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e",
    date: "December 23, 2024",
    author: "Kritika Singh",
    readTime: "5 min read",
    category: "Photography"
  },
  'how-to-choose-first-drone': {
    title: "How to Choose Your First Drone",
    content: `
      <h2>Selecting Your First Drone</h2>
      <p>Choosing your first drone can be overwhelming. Here's what you need to consider.</p>
      
      <h3>Key Factors</h3>
      <ul>
        <li>Budget and intended use</li>
        <li>Camera quality requirements</li>
        <li>Flight time and range</li>
        <li>Portability needs</li>
      </ul>

      <h3>Recommendations</h3>
      <p>For beginners, we recommend starting with a mid-range drone that offers a good balance of features and ease of use.</p>
    `,
    image: "https://images.unsplash.com/photo-1579683670728-96c9abc7a088",
    date: "December 23, 2024",
    author: "Anjali Singh",
    readTime: "7 min read",
    category: "Buying Guide"
  },
  'drone-maintenance-101': {
    title: "Drone Maintenance 101",
    content: `
      <h2>Basic Drone Maintenance</h2>
      <p>Regular maintenance is crucial for keeping your drone in optimal flying condition.</p>
      
      <h3>Regular Checks</h3>
      <ul>
        <li>Propeller inspection</li>
        <li>Battery health monitoring</li>
        <li>Firmware updates</li>
        <li>Calibration procedures</li>
      </ul>

      <h3>Cleaning Tips</h3>
      <p>Keep your drone clean and well-maintained to ensure safe and reliable operation.</p>
    `,
    image: "https://images.unsplash.com/photo-1576154435735-667d35eb1a81",
    date: "December 23, 2024",
    author: "Prashant Singh",
    readTime: "6 min read",
    category: "Maintenance"
  }
}

export default function BlogPost() {
  const params = useParams()
  const [isLoading, setIsLoading] = React.useState(true)
  const slug = params?.slug as string
  const post = blogPosts[slug as keyof typeof blogPosts]

  React.useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-8">Post Not Found</h1>
          <Link href="/blog" className="inline-block">
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <Link href="/blog" className="inline-block">
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                ← Back to Blog
              </Button>
            </Link>
          </div>

          <article>
            <GlassCard className="overflow-hidden mb-8">
              <div className="relative w-full h-[400px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </GlassCard>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-sm">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400">
                  {post.category}
                </span>
                <span className="text-gray-400">{post.readTime}</span>
              </div>

              <h1 className="text-4xl font-bold text-white">{post.title}</h1>
              
              <div className="flex items-center gap-4 text-gray-400 pb-8 border-b border-white/10">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>

              <BlogContent content={post.content} />
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  )
}