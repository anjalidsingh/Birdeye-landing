import { cn } from "@/lib/utils"
import React from "react"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function GlassCard({ className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-white/10 bg-white/5 backdrop-blur-lg",
        className
      )}
      {...props}
    />
  )
}
