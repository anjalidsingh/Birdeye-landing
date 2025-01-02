"use client"

import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from '../sections/Footer'

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}