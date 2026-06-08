'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, Users, Truck, Leaf, ArrowRight } from 'lucide-react'

const stats = [
  {
    icon: TrendingUp,
    value: 40,
    suffix: '%',
    label: 'Target Cost Reduction',
    description: 'Beta goal: average decrease in operational expenses through AI routing',
  },
  {
    icon: Users,
    value: 3,
    suffix: '+',
    label: 'Pilot Partners',
    description: 'Logistics companies confirmed for beta programme in Lagos',
  },
  {
    icon: Truck,
    value: 50,
    suffix: '+',
    label: 'Beta Applicants',
    description: 'Businesses on our waitlist across Nigeria',
  },
  {
    icon: Leaf,
    value: 35,
    suffix: '%',
    label: 'Target Carbon Reduction',
    description: 'Beta goal: reduction through AI-optimised route planning',
  },
]

function AnimatedCounter({ 
  value, 
  suffix, 
  inView 
}: { 
  value: number
  suffix: string
  inView: boolean 
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value, inView])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export function ImpactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="text-foreground">Early Traction & </span>
            <span className="text-gradient">Validated Targets</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            TransitFlow is in active beta development. These figures reflect our current traction
            and validated performance targets from pilot testing with Nigerian logistics operators.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 text-center border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Value */}
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
              </div>

              {/* Label */}
              <div className="text-lg font-semibold text-primary mb-2">
                {stat.label}
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* View Full Report Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/impact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            View Full Impact Report
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
