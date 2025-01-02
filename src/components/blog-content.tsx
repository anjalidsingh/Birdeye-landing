"use client"

import React from 'react'
import Link from 'next/link'

interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Process content to wrap links in Next.js Link component
  const processContent = (htmlContent: string) => {
    const div = document.createElement('div')
    div.innerHTML = htmlContent

    // Replace all anchor tags with Next.js Links
    div.querySelectorAll('a').forEach(anchor => {
      const href = anchor.getAttribute('href')
      if (href) {
        const span = document.createElement('span')
        span.innerHTML = `<Link href="${href}">${anchor.innerHTML}</Link>`
        anchor.parentNode?.replaceChild(span, anchor)
      }
    })

    return div.innerHTML
  }

  if (!mounted) {
    // Return a placeholder with the same structure but without links
    return (
      <div 
        className="prose prose-lg max-w-none prose-headings:text-white prose-headings:font-bold prose-p:text-gray-300 prose-p:leading-relaxed prose-strong:text-white prose-ul:text-gray-300 prose-li:text-gray-300 prose-a:text-blue-400 hover:prose-a:text-blue-300 mt-8"
        dangerouslySetInnerHTML={{ 
          __html: content.replace(/<a/g, '<span').replace(/<\/a>/g, '</span>')
        }} 
      />
    )
  }

  return (
    <div 
      className="prose prose-lg max-w-none prose-headings:text-white prose-headings:font-bold prose-p:text-gray-300 prose-p:leading-relaxed prose-strong:text-white prose-ul:text-gray-300 prose-li:text-gray-300 prose-a:text-blue-400 hover:prose-a:text-blue-300 mt-8"
      dangerouslySetInnerHTML={{ __html: processContent(content) }} 
    />
  )
}
