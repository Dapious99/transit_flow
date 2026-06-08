'use client'

import { motion } from 'framer-motion'
import { Users, MapPin, CreditCard, TrendingUp, Building2, Package } from 'lucide-react'

const targetUsers = [
  { icon: Building2, label: 'Logistics & Haulage Companies', desc: 'SME and enterprise freight operators managing inter-state cargo' },
  { icon: Package, label: 'FMCG Distributors', desc: 'Consumer goods companies with high-frequency last-mile delivery needs' },
  { icon: Users, label: 'E-Commerce Fulfilment', desc: 'Online retailers and 3PL providers serving Nigerian e-commerce growth' },
  { icon: TrendingUp, label: 'Delivery Startups', desc: 'Tech-forward logistics brands building scalable dispatch operations' },
]

const launchMarkets = [
  { country: 'Nigeria', cities: 'Lagos, Abuja, Port Harcourt, Kano', status: 'Primary', flag: '🇳🇬' },
  { country: 'Ghana', cities: 'Accra, Kumasi', status: 'Phase 2', flag: '🇬🇭' },
  { country: 'Kenya', cities: 'Nairobi, Mombasa', status: 'Phase 3', flag: '🇰🇪' },
  { country: 'Rwanda', cities: 'Kigali', status: 'Phase 3', flag: '🇷🇼' },
]

const revenueStreams = [
  { icon: CreditCard, label: 'SaaS Subscription', desc: 'Per-vehicle monthly pricing for SME fleets and enterprise plans for large operators' },
  { icon: Building2, label: 'Enterprise Contracts', desc: 'Custom-scoped deployments with SLA, API access, and dedicated support' },
  { icon: TrendingUp, label: 'AI Credits', desc: 'Usage-based pricing for advanced analytics, AI route jobs, and predictive maintenance scans' },
  { icon: MapPin, label: 'Data & Insights', desc: 'Anonymised fleet intelligence reports sold to insurers, fuel companies, and urban planners' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export function MarketSection() {
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
            Market Opportunity
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="text-foreground">A Massive, </span>
            <span className="text-gradient">Underserved Market</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nigeria alone has over 2 million commercial vehicles and a logistics sector worth
            billions — yet the vast majority of operators have no digital fleet management tools.
            We are building the category-defining platform for African logistics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Target Users */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-7 border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Target Users</h3>
            </div>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
              {targetUsers.map((user) => (
                <motion.div key={user.label} variants={itemVariants} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                    <user.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{user.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{user.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Launch Markets */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-2xl p-7 border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Launch Markets</h3>
            </div>
            <div className="space-y-4">
              {launchMarkets.map((market) => (
                <div key={market.country} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl leading-none">{market.flag}</span>
                    <div>
                      <p className="text-sm font-medium text-foreground">{market.country}</p>
                      <p className="text-xs text-muted-foreground">{market.cities}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    market.status === 'Primary'
                      ? 'bg-primary/15 text-primary'
                      : 'bg-secondary text-muted-foreground'
                  }`}>
                    {market.status}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Pan-African expansion roadmap extends to South Africa, Senegal, and Côte d&apos;Ivoire in Phase 4+
              </p>
            </div>
          </motion.div>

          {/* Revenue Model */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-2xl p-7 border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Revenue Model</h3>
            </div>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
              {revenueStreams.map((stream) => (
                <motion.div key={stream.label} variants={itemVariants} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                    <stream.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{stream.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{stream.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
