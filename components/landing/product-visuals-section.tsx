'use client'

import { motion } from 'framer-motion'
import { LayoutDashboard, Map, Smartphone } from 'lucide-react'
import { DashboardIllustration } from '@/components/illustrations/dashboard-illustration'
import { RouteOptimizationIllustration } from '@/components/illustrations/route-optimization-illustration'
import { MobileAppIllustration } from '@/components/illustrations/mobile-app-illustration'

const features = [
  {
    icon: LayoutDashboard,
    label: 'Live Fleet Command Centre',
    description: 'One unified dashboard gives fleet managers real-time visibility into every vehicle — location, speed, fuel, driver behaviour, and maintenance alerts — across your entire operation.',
    callouts: ['Real-time GPS tracking', 'Driver performance scores', 'Predictive maintenance alerts'],
    visual: 'dashboard',
    accent: 'primary',
  },
  {
    icon: Map,
    label: 'AI Route Optimization',
    description: "Our reinforcement learning engine continuously re-plans routes around Lagos's live traffic, road closures, and delivery windows — cutting average trip distance by up to 18% per run.",
    callouts: ['Live traffic re-routing', 'Multi-stop optimization', 'Fuel cost estimation'],
    visual: 'routes',
    accent: 'blue',
  },
  {
    icon: Smartphone,
    label: 'Driver Mobile App',
    description: 'The companion app puts turn-by-turn navigation, job updates, and compliance checklists right in drivers\' hands — no extra hardware required, works on any Android or iOS device.',
    callouts: ['Offline-capable navigation', 'Digital proof of delivery', 'Emergency SOS button'],
    visual: 'mobile',
    accent: 'green',
  },
]

function Visual({ type }: { type: string }) {
  if (type === 'dashboard') {
    return (
      <div className="w-full rounded-xl overflow-hidden border border-border/60 aspect-[960/380] bg-card">
        <DashboardIllustration />
      </div>
    )
  }
  if (type === 'routes') {
    return (
      <div className="w-full rounded-xl overflow-hidden border border-border/60 aspect-[720/400] bg-card">
        <RouteOptimizationIllustration />
      </div>
    )
  }
  return (
    <div className="flex justify-center">
      <div className="w-56 rounded-3xl overflow-hidden border border-border/60 aspect-[320/580] bg-card shadow-2xl">
        <MobileAppIllustration />
      </div>
    </div>
  )
}

const accentMap: Record<string, string> = {
  primary: 'text-primary border-primary/30 bg-primary/5',
  blue: 'text-blue-400 border-blue-400/30 bg-blue-400/5',
  green: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/5',
}

const iconBg: Record<string, string> = {
  primary: 'bg-primary/10 text-primary',
  blue: 'bg-blue-400/10 text-blue-400',
  green: 'bg-emerald-400/10 text-emerald-400',
}

export function ProductVisualsSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Product
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            <span className="text-foreground">See TransitFlow </span>
            <span className="text-gradient">in Action</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-base max-w-2xl mx-auto leading-relaxed">
            Built specifically for the Nigerian logistics environment — from Lagos traffic jams to remote inter-state corridors.
          </p>
        </motion.div>

        <div className="space-y-28">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0
            return (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`flex flex-col gap-10 lg:gap-16 items-center ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Visual */}
                <div className="w-full lg:w-3/5">
                  <Visual type={feature.visual} />
                </div>

                {/* Text */}
                <div className="w-full lg:w-2/5">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border mb-6 ${accentMap[feature.accent]}`}>
                    <feature.icon className="w-3.5 h-3.5" />
                    {feature.label}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.callouts.map((callout) => (
                      <li key={callout} className="flex items-center gap-3">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${iconBg[feature.accent]}`}>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-foreground/80 text-sm">{callout}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
