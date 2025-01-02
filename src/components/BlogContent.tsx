"use client"

import React from 'react'

interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  // Use useEffect to ensure client-side rendering
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div 
      className="prose prose-lg max-w-none prose-headings:text-white prose-headings:font-bold prose-p:text-gray-300 prose-p:leading-relaxed prose-strong:text-white prose-ul:text-gray-300 prose-li:text-gray-300 prose-a:text-blue-400 hover:prose-a:text-blue-300 mt-8"
      dangerouslySetInnerHTML={{ __html: content }} 
    />
  )
}
