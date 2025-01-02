"use client"

import { GlassCard } from './glass-card'
import { LoadingTriangle } from './loading-triangle'

export function BlogSkeleton() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto">
          {/* Center loading triangle */}
          <div className="flex justify-center mb-8">
            <LoadingTriangle size={48} color="blue-500" />
          </div>

          <article>
            <GlassCard className="overflow-hidden mb-8">
              <div className="relative w-full h-[400px] bg-white/10 animate-pulse flex items-center justify-center">
                <LoadingTriangle size={64} color="white" className="opacity-50" />
              </div>
            </GlassCard>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-24 h-6 bg-blue-500/20 rounded-full animate-pulse" />
                <div className="w-20 h-6 bg-white/10 rounded animate-pulse" />
              </div>

              <div className="w-3/4 h-12 bg-white/10 rounded animate-pulse" />
              
              <div className="flex items-center gap-4 pb-8 border-b border-white/10">
                <div className="w-32 h-6 bg-white/10 rounded animate-pulse" />
                <div className="w-2 h-2 bg-white/10 rounded-full" />
                <div className="w-32 h-6 bg-white/10 rounded animate-pulse" />
              </div>

              <div className="space-y-4 mt-8">
                <div className="w-full h-6 bg-white/10 rounded animate-pulse" />
                <div className="w-5/6 h-6 bg-white/10 rounded animate-pulse" />
                <div className="w-4/6 h-6 bg-white/10 rounded animate-pulse" />
                <div className="w-full h-6 bg-white/10 rounded animate-pulse" />
                <div className="w-3/4 h-6 bg-white/10 rounded animate-pulse" />
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
