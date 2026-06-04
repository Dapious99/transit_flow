'use client'

import { motion } from 'framer-motion'
import { 
  Clock, 
  TrendingDown, 
  AlertTriangle, 
  Fuel, 
  Users, 
  DollarSign 
} from 'lucide-react'

const problems = [
  {
    icon: Clock,
    title: 'Delivery Delays',
    description: 'Inefficient routing and lack of real-time tracking lead to missed deadlines and frustrated customers.',
    stat: '34%',
    statLabel: 'of deliveries arrive late',
  },
  {
    icon: TrendingDown,
    title: 'Operational Inefficiency',
    description: 'Manual processes and disconnected systems waste valuable time and resources across your fleet.',
    stat: '₦4.2M',
    statLabel: 'lost per vehicle annually',
  },
  {
    icon: AlertTriangle,
    title: 'Safety Concerns',
    description: 'Without proper monitoring, driver safety and vehicle maintenance become reactive rather than proactive.',
    stat: '23%',
    statLabel: 'increase in incidents',
  },
  {
    icon: Fuel,
    title: 'Fuel Wastage',
    description: 'Unoptimized routes and idling vehicles burn through fuel budgets and increase carbon footprints.',
    stat: '15-20%',
    statLabel: 'fuel wasted on average',
  },
  {
    icon: Users,
    title: 'Driver Management',
    description: 'Difficulty tracking driver performance, compliance, and workload distribution across your fleet.',
    stat: '40%',
    statLabel: 'driver turnover rate',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs',
    description: 'Lack of visibility into maintenance, insurance claims, and operational expenses erodes profit margins.',
    stat: '28%',
    statLabel: 'costs remain invisible',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export function ProblemsSection() {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
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
            The Challenge
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="text-foreground">The Hidden Costs of </span>
            <span className="text-gradient">Inefficient Transport</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Traditional fleet management is broken. These are the challenges 
            costing Nigerian businesses billions every year — and why we built TransitFlow.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {problems.map((problem) => (
            <motion.div
              key={problem.title}
              variants={itemVariants}
              className="group relative glass rounded-2xl p-8 hover:glow-primary transition-all duration-300 overflow-hidden"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-5 group-hover:bg-destructive/15 transition-colors">
                  <problem.icon className="w-7 h-7 text-destructive" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {problem.description}
                </p>

                {/* Stat */}
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-destructive">
                    {problem.stat}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {problem.statLabel}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
