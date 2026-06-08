'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Users, Code2, Building2, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const tractionItems = [
  {
    icon: Code2,
    label: 'MVP Status',
    value: 'In Development',
    detail: 'Core fleet tracking platform actively being built — beta access opening Q1 2025',
    highlight: true,
  },
  {
    icon: Building2,
    label: 'Pilot Partners',
    value: '3 Confirmed',
    detail: 'Logistics companies in Lagos confirmed for closed beta programme',
    highlight: false,
  },
  {
    icon: Users,
    label: 'Beta Waitlist',
    value: '50+ Applications',
    detail: 'Fleet operators across Nigeria signed up for early access to the platform',
    highlight: false,
  },
  {
    icon: Star,
    label: 'Founder Experience',
    value: '10+ Years',
    detail: 'Combined team experience in Nigerian logistics, AI/ML research, and product development',
    highlight: false,
  },
]

const testimonials = [
  {
    quote: 'As a logistics operator in Lagos, we lose hours every week to route confusion and fuel overruns. A platform like TransitFlow would immediately change how we run our operations.',
    author: 'Operations Manager',
    company: 'Mid-size haulage company, Lagos',
  },
  {
    quote: "We've been waiting for an African-built fleet management tool that understands our roads, our costs, and our drivers. This is exactly the kind of solution the market needs.",
    author: 'Fleet Director',
    company: 'FMCG distribution company, Abuja',
  },
]

export function TractionSection() {
  return (
    <section className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Traction & Progress
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="text-foreground">Early Progress, </span>
            <span className="text-gradient">Real Validation</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are in active beta development with confirmed pilot partners.
            The problem is validated, the market is ready, and the build is underway.
          </p>
        </motion.div>

        {/* Traction cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tractionItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-6 border transition-all duration-300 ${
                item.highlight
                  ? 'bg-primary/10 border-primary/40'
                  : 'bg-card border-border'
              }`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                item.highlight ? 'bg-primary/20' : 'bg-primary/10'
              }`}>
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-xl font-bold text-foreground mb-2">{item.value}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Market validation quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card rounded-2xl p-7 border border-border relative"
            >
              <div className="absolute top-5 left-6 text-4xl text-primary/20 font-serif leading-none select-none">&ldquo;</div>
              <p className="text-sm text-muted-foreground leading-relaxed italic mb-5 pt-4">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Waitlist CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm mb-5">
            Currently onboarding pilot users across Lagos and Abuja. Beta access opening soon.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 rounded-full"
          >
            <Link href="/contact" className="flex items-center">
              Apply for Beta Access
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
