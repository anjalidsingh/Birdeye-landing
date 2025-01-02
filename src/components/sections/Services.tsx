"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { GlassCard } from '@/components/ui/glass-card'
import { 
  Building2, 
  Factory, 
  Ruler, 
  Mountain, 
  Camera, 
  Trees,
  Wind,
  Radio,
  Pipette,
  Check
} from 'lucide-react'
import { useState, useEffect } from 'react'

const services = [
  {
    title: 'Construction Progress Monitoring',
    description: 'Track construction progress with precision using aerial surveys, time-lapse documentation, and detailed site analysis.',
    Icon: Building2,
    features: [
      'Weekly Progress Reports',
      'Site Documentation',
      'BIM Integration',
      'Safety Compliance Checks'
    ],
    price: 'Based on Project Size',
    action: 'View Sample Report',
    portfolioLink: 'construction'
  },
  {
    title: 'Industrial Asset Inspection',
    description: 'Advanced inspection of industrial assets like towers, chimneys, solar panels, and wind turbines using specialized drones.',
    Icon: Factory,
    features: [
      'Thermal Imaging',
      'Structural Analysis',
      'Defect Detection',
      'Maintenance Planning'
    ],
    price: 'Custom Quote',
    action: 'See Case Studies',
    portfolioLink: 'industrial'
  },
  {
    title: 'Land Surveying & Mapping',
    description: 'High-precision topographic surveys, volumetric calculations, and detailed terrain mapping for development projects.',
    Icon: Ruler,
    features: [
      'Topographic Surveys',
      'Volumetric Analysis',
      'Contour Mapping',
      'GIS Integration'
    ],
    price: 'Per Acre',
    action: 'View Sample Maps',
    portfolioLink: 'land-surveying'
  },
  {
    title: 'Environmental Monitoring',
    description: 'Monitor environmental changes, assess vegetation health, and track wildlife patterns using advanced drone technology.',
    Icon: Trees,
    features: [
      'Vegetation Analysis',
      'Wildlife Tracking',
      'Erosion Monitoring',
      'Impact Assessment'
    ],
    price: 'Project Based',
    action: 'View Research',
    portfolioLink: 'environmental'
  },
  {
    title: 'Agriculture & Precision Farming',
    description: 'Optimize crop yields with drone-based agriculture solutions including crop health monitoring and precision spraying.',
    Icon: Pipette,
    features: [
      'Crop Health Analysis',
      'Irrigation Mapping',
      'Yield Estimation',
      'Pest Detection'
    ],
    price: 'Per Acre/Season',
    action: 'See Results',
    portfolioLink: 'agriculture'
  },
  {
    title: 'Emergency Response Support',
    description: 'Rapid deployment for emergency situations, providing real-time aerial data for disaster assessment and response planning.',
    Icon: Radio,
    features: [
      'Real-time Monitoring',
      'Thermal Detection',
      'Area Assessment',
      'Search Support'
    ],
    price: 'Priority Response',
    action: 'Response Times',
    portfolioLink: 'emergency-response'
  }
]

export function Services() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handlePortfolioClick = (category: string) => {
    if (mounted) {
      const portfolioSection = document.getElementById('portfolio')
      if (portfolioSection) {
        // Add category to URL
        const url = new URL(window.location.href)
        url.searchParams.set('category', category)
        window.history.pushState({}, '', url)
        
        // Scroll to portfolio
        portfolioSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  // Static version for SSR
  if (!mounted) {
    return (
      <section className="relative py-20 sm:py-32 bg-zinc-950">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[13px] uppercase tracking-[0.2em] text-blue-500 font-medium mb-4 inline-block">
              Our Services
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Professional Drone Solutions
            </h2>
            <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
              Industry-leading drone services tailored for your specific needs.
              From construction monitoring to environmental conservation.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <GlassCard key={index}>
                <div className="p-6">
                  <div className="mb-6">
                    <service.Icon className="w-12 h-12 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-zinc-400 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-zinc-300">
                        <Check className="w-5 h-5 text-blue-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
                    <span className="text-sm text-blue-400 font-medium">
                      {service.price}
                    </span>
                    <div className="opacity-50">
                      <Button 
                        variant="ghost"
                        className="text-white hover:text-blue-400 hover:bg-blue-500/10 transition-colors"
                      >
                        {service.action}
                        <span className="inline-block ml-2">→</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="services" className="relative py-20 sm:py-32 bg-zinc-950">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[13px] uppercase tracking-[0.2em] text-blue-500 font-medium mb-4 inline-block"
          >
            Professional Solutions
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Specialized Drone Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-zinc-400 leading-relaxed"
          >
            Advanced drone solutions for industries that demand precision, 
            reliability, and expertise. From construction monitoring to 
            environmental assessment, we deliver actionable insights.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.Icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full group hover:scale-[1.02] transition-transform duration-300">
                  <div className="p-6">
                    <div className="mb-6 p-3 rounded-lg inline-block bg-blue-500/10">
                      <IconComponent className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-zinc-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
                      <span className="text-sm text-blue-400 font-medium">
                        {service.price}
                      </span>
                      <div>
                        <Button 
                          variant="ghost"
                          onClick={() => handlePortfolioClick(service.portfolioLink)}
                          className="text-white hover:text-blue-400 hover:bg-blue-500/10 transition-colors group/button"
                        >
                          {service.action}
                          <span className="inline-block ml-2 transition-transform duration-200 group-hover/button:translate-x-1">→</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Button 
            size="lg"
            onClick={() => {
              if (mounted) {
                const portfolioSection = document.getElementById('portfolio')
                if (portfolioSection) {
                  portfolioSection.scrollIntoView({ behavior: 'smooth' })
                }
              }
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-6 text-lg"
          >
            Get a Custom Quote
            <span className="ml-2">→</span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
