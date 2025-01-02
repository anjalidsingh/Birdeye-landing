import './globals.css'
import { Montserrat } from 'next/font/google'
import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BirdEye Drone Solutions | Professional Aerial Services',
  description: 'Professional drone services for aerial photography, mapping, and inspections. FAA-compliant operations with a focus on safety and quality.',
  keywords: 'drone services, aerial photography, drone mapping, infrastructure inspection, FAA certified pilots',
  openGraph: {
    title: 'BirdEye Drone Solutions',
    description: 'Professional drone services with a focus on safety and quality',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} scroll-smooth`}>
      <body className="bg-black font-sans text-white antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
