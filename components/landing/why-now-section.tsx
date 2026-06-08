'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Smartphone, ShoppingCart, Fuel, Globe, Clock } from 'lucide-react'

const drivers = [
  {
    icon: TrendingUp,
    title: 'Nigeria\'s Logistics Market Is Booming',
    description: 'Nigeria\'s logistics industry is projected to grow rapidly as e-commerce, FMCG distribution, and cross-border trade accelerate. Yet most fleet operators still rely on manual tracking, WhatsApp, and paper manifests.',
  },
  {
    icon: Smartphone,
    title: 'Mobile & Internet Penetration Reaching Scale',
    description: 'Smartphone adoption across Lagos, Abuja, and Port Harcourt has crossed a critical threshold. Drivers, dispatchers, and business owners are ready for app-based tools — the infrastructure finally exists.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Is Exploding Delivery Demand',
    description: 'Online retail in Nigeria grew significantly post-COVID, creating intense last-mile delivery pressure. Logistics companies are stretched thin without visibility tools, losing customers to delivery failures.',
  },
  {
    icon: Fuel,
    title: 'Fuel Costs Have Become a Crisis',
    description: 'Following subsidy removal, fuel costs now represent 40–60% of operating expenses for many fleet operators. AI-driven route optimisation is no longer a luxury — it is a financial survival tool.',
  },
  {
    icon: Globe,
    title: 'Government Digitisation Push',
    description: 'Nigeria\'s government and regulatory bodies are pushing for digital freight records, fleet compliance systems, and transport sector modernisation — creating a tailwind for tech-first logistics platforms.',
  },
  {
    icon: Clock,
    title: 'First-Mover Advantage Is Now',
    description: 'No dominant AI-native fleet management platform has captured the Nigerian market. This is the window to establish infrastructure, build trust with operators, and lock in network effects.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function WhyNowSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Why Now
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="text-foreground">The Conditions for </span>
            <span className="text-gradient">Disruption Are Here</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nigeria&apos;s logistics sector is at an inflection point. Rising costs, digital adoption,
            and e-commerce growth have created an urgent demand for intelligent fleet tools —
            and no one has built the right platform for this market. Until now.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {drivers.map((driver) => (
            <motion.div
              key={driver.title}
              variants={itemVariants}
              className="group bg-card rounded-2xl p-7 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <driver.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-3 leading-snug">{driver.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{driver.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
