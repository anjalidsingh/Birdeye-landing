"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { PortfolioImage } from '@/components/ui/portfolio-image'
import { ImageFallback } from '@/components/ui/image-fallback'
import { Building2, Factory, Trees, Ruler, Leaf, Shield } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

// Add serviceLinks to map portfolio items to their corresponding service sections
const serviceLinks = {
  "Construction": "construction-monitoring",
  "Industrial": "industrial-inspection",
  "Mapping": "land-surveying",
  "Environmental": "environmental-monitoring",
  "Agriculture": "precision-agriculture",
  "Emergency": "emergency-response"
}

const portfolioItems = [
  {
    title: "Mumbai Metro Construction Monitoring",
    description: "Weekly progress tracking and 3D modeling for Mumbai Metro Line 3 construction, enabling precise timeline management and safety compliance.",
    image: "/images/portfolio/construction/metro-construction.webp",
    imageAlt: "Aerial view of Mumbai Metro construction site showing progress tracking with drone technology",
    category: "Construction",
    icon: Building2,
    stats: [
      "52 weeks of monitoring",
      "98% timeline accuracy",
      "15% cost reduction",
      "Zero safety incidents"
    ],
    deliverables: [
      "Weekly progress reports",
      "3D BIM models",
      "Safety compliance docs",
      "Time-lapse footage"
    ],
    caseStudyUrl: "/case-studies/mumbai-metro",
    relatedService: "construction-monitoring",
    sampleReport: "/samples/construction-report.pdf"
  },
  {
    title: "Wind Farm Inspection Program",
    description: "Comprehensive inspection of 50+ wind turbines across Maharashtra, identifying maintenance needs and optimizing performance.",
    image: "/images/portfolio/industrial/wind-turbine-inspection.webp",
    imageAlt: "Drone performing thermal inspection of wind turbine blades",
    category: "Industrial",
    icon: Factory,
    stats: [
      "50+ turbines inspected",
      "12 critical issues found",
      "30% faster inspections",
      "₹2.5Cr savings"
    ],
    deliverables: [
      "Thermal analysis reports",
      "Blade damage assessment",
      "Maintenance schedules",
      "Performance data"
    ],
    caseStudyUrl: "/case-studies/wind-farm",
    relatedService: "industrial-inspection",
    sampleReport: "/samples/inspection-report.pdf"
  },
  {
    title: "Pune Smart City Mapping",
    description: "High-precision 3D mapping of Pune's developing areas for smart city planning and infrastructure development.",
    image: "/images/portfolio/mapping/city-mapping.webp",
    imageAlt: "3D point cloud visualization of Pune city mapping project",
    category: "Mapping",
    icon: Ruler,
    stats: [
      "2,000 acres mapped",
      "2cm accuracy",
      "48hr delivery",
      "100% coverage"
    ],
    deliverables: [
      "3D city models",
      "Topographic maps",
      "Infrastructure plans",
      "Development zones"
    ],
    caseStudyUrl: "/case-studies/pune-smart-city",
    relatedService: "land-surveying",
    sampleReport: "/samples/mapping-report.pdf"
  },
  {
    title: "Western Ghats Conservation",
    description: "Environmental monitoring and wildlife tracking in the Western Ghats, supporting conservation efforts and habitat protection.",
    image: "/images/portfolio/environmental/forest-monitoring.webp",
    imageAlt: "Drone imagery of Western Ghats forest canopy with environmental monitoring overlay",
    category: "Environmental",
    icon: Trees,
    stats: [
      "500km² monitored",
      "15 species tracked",
      "95% accuracy",
      "6-month study"
    ],
    deliverables: [
      "Habitat maps",
      "Species reports",
      "Change detection",
      "Action plans"
    ],
    caseStudyUrl: "/case-studies/western-ghats",
    relatedService: "environmental-monitoring",
    sampleReport: "/samples/conservation-report.pdf"
  },
  {
    title: "Maharashtra Agriculture Project",
    description: "Precision agriculture solution for 1000+ acres of farmland, optimizing irrigation and crop health monitoring.",
    image: "/images/portfolio/agriculture/crop-monitoring.webp",
    imageAlt: "NDVI map overlay showing crop health analysis of agricultural fields",
    category: "Agriculture",
    icon: Leaf,
    stats: [
      "1,000+ acres covered",
      "25% water savings",
      "20% yield increase",
      "90% pest detection"
    ],
    deliverables: [
      "Crop health maps",
      "Irrigation plans",
      "Yield forecasts",
      "Treatment zones"
    ],
    caseStudyUrl: "/case-studies/maharashtra-agriculture",
    relatedService: "precision-agriculture",
    sampleReport: "/samples/agriculture-report.pdf"
  },
  {
    title: "Disaster Response - Flood Mapping",
    description: "Emergency response and mapping support during Maharashtra floods, aiding rescue operations and damage assessment.",
    image: "/images/portfolio/emergency/flood-response.webp",
    imageAlt: "Real-time flood mapping with thermal overlay for emergency response",
    category: "Emergency",
    icon: Shield,
    stats: [
      "24/7 operations",
      "100+ sites mapped",
      "15min response time",
      "1000+ assisted"
    ],
    deliverables: [
      "Real-time maps",
      "Damage reports",
      "Evacuation plans",
      "Resource allocation"
    ],
    caseStudyUrl: "/case-studies/disaster-response",
    relatedService: "emergency-response",
    sampleReport: "/samples/emergency-report.pdf"
  }
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  show: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
}

const overlayVariants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
}

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [mounted, setMounted] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    setMounted(true)
    const category = searchParams?.get('category')
    if (category && categories.includes(category)) {
      setSelectedCategory(category)
    }
  }, [])

  const categories = ["All", ...new Set(portfolioItems.map(item => item.category))]
  const filteredItems = selectedCategory && selectedCategory !== "All" 
    ? portfolioItems.filter(item => item.category === selectedCategory)
    : portfolioItems

  // Interactive version
  const renderPortfolio = () => (
    <motion.section 
      id="portfolio" 
      className="py-20 bg-zinc-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-500 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Explore our portfolio of successful drone projects across various industries
          </p>
        </motion.div>
        
        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={itemVariants}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                  : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700/50 backdrop-blur-sm"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="group relative bg-zinc-900/50 rounded-xl border border-white/10 overflow-hidden backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <button 
                className="w-full text-left"
                onClick={() => setSelectedProject(item)}
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <PortfolioImage
                    src={item.image}
                    alt={item.imageAlt}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                    className="rounded-t-xl transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 p-3 rounded-full bg-blue-500/20 backdrop-blur-sm z-10 transform group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-blue-400" />
                  </div>
                </div>

                <div className="p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 line-clamp-2 mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.stats.slice(0, 2).map((stat, i) => (
                      <span 
                        key={i}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-blue-500/10 text-blue-400"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && mounted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={(e) => {
                if (e.target === e.currentTarget) setSelectedProject(null)
              }}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative bg-zinc-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
              >
                <div className="relative">
                  <div className="relative h-72 sm:h-80">
                    <PortfolioImage
                      src={selectedProject.image}
                      alt={selectedProject.imageAlt}
                      sizes="(max-width: 1200px) 100vw, 1200px"
                      priority
                      className="rounded-t-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent opacity-60" />
                    <button
                      className="absolute top-4 right-4 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10 backdrop-blur-sm"
                      onClick={() => setSelectedProject(null)}
                    >
                      ✕
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {selectedProject.title}
                      </h3>
                      <p className="text-zinc-300 text-lg">
                        {selectedProject.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                            Project Stats
                          </h4>
                          <ul className="space-y-3">
                            {selectedProject.stats.map((stat: string, index: number) => (
                              <li 
                                key={index} 
                                className="text-zinc-400 flex items-center"
                              >
                                <span className="w-1.5 h-1.5 bg-blue-500/50 rounded-full mr-2" />
                                {stat}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                            Deliverables
                          </h4>
                          <ul className="space-y-3">
                            {selectedProject.deliverables.map((item: string, index: number) => (
                              <li 
                                key={index} 
                                className="text-zinc-400 flex items-center"
                              >
                                <span className="w-1.5 h-1.5 bg-blue-500/50 rounded-full mr-2" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Button
                        variant="default"
                        className="bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/25"
                        onClick={() => {
                          if (mounted) {
                            window.open(selectedProject.caseStudyUrl, '_blank')
                          }
                        }}
                      >
                        View Case Study
                        <span className="ml-2">→</span>
                      </Button>
                      <Button
                        variant="outline"
                        className="border-blue-500 text-blue-500 hover:bg-blue-500/10"
                        onClick={() => {
                          if (mounted) {
                            window.open(selectedProject.sampleReport, '_blank')
                          }
                        }}
                      >
                        View Sample Report
                        <span className="ml-2">→</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  )

  // Static version for SSR
  if (!mounted) {
    return (
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-500 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Explore our portfolio of successful drone projects across various industries
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <div
                key={category}
                className="px-6 py-3 rounded-full text-sm font-medium bg-zinc-800/50 text-zinc-400 backdrop-blur-sm"
              >
                {category}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div 
                key={item.title}
                className="relative bg-zinc-900/50 rounded-xl border border-white/10 overflow-hidden backdrop-blur-sm"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <PortfolioImage
                    src={item.image}
                    alt={item.imageAlt}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                    className="rounded-t-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 p-3 rounded-full bg-blue-500/20 backdrop-blur-sm z-10">
                    <item.icon className="w-6 h-6 text-blue-400" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 line-clamp-2 mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.stats.slice(0, 2).map((stat, i) => (
                      <span 
                        key={i}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-blue-500/10 text-blue-400"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return renderPortfolio()
}
