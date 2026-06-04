'use client'

import { motion } from 'framer-motion'

const partners = [
  { name: 'AWS Startups', logo: '/partners/aws.svg' },
  { name: 'Google Cloud', logo: '/partners/google-cloud.svg' },
  { name: 'Microsoft for Startups', logo: '/partners/microsoft.svg' },
  { name: 'NVIDIA Inception', logo: '/partners/nvidia.svg' },
]

export function PartnersSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
            <span className="text-foreground">Strategic </span>
            <span className="text-gradient">Partnerships</span>
          </h2>
          <p className="text-muted-foreground">
            Backed by world-class technology partners powering our innovation in transportation.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="bg-card rounded-xl p-6 md:p-8 flex flex-col items-center justify-center border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Placeholder for partner logo */}
              <div className="w-24 h-12 md:w-32 md:h-16 bg-foreground/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-foreground/15 transition-colors">
                <span className="text-xs text-muted-foreground font-medium text-center px-2">
                  {partner.name}
                </span>
              </div>
              <span className="text-sm text-muted-foreground text-center hidden md:block">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
