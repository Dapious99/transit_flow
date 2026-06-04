'use client'

import { motion } from 'framer-motion'
import { 
  Route, 
  Radar, 
  BarChart3, 
  Smartphone, 
  Bell, 
  Leaf 
} from 'lucide-react'

const features = [
  {
    icon: Radar,
    title: 'Real-time GPS Tracking',
    description: 'Monitor your entire fleet with precision GPS tracking, live location updates, and comprehensive trip history.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Route,
    title: 'AI Route Optimization',
    description: 'Leverage machine learning algorithms to calculate the most efficient routes, reducing fuel costs and delivery times.',
    color: 'bg-chart-2/10 text-chart-2',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Gain actionable insights with comprehensive dashboards, custom reports, and predictive maintenance alerts.',
    color: 'bg-chart-3/10 text-chart-3',
  },
  {
    icon: Smartphone,
    title: 'Mobile Driver App',
    description: 'Empower drivers with an intuitive mobile app for navigation, task management, and instant communication.',
    color: 'bg-chart-4/10 text-chart-4',
  },
  {
    icon: Bell,
    title: 'Smart Alerts & Notifications',
    description: 'Receive instant alerts for speeding, geofence violations, maintenance needs, and critical events.',
    color: 'bg-chart-5/10 text-chart-5',
  },
  {
    icon: Leaf,
    title: 'Sustainability Dashboard',
    description: 'Track and reduce your carbon footprint with detailed emissions reporting and eco-driving recommendations.',
    color: 'bg-green-500/10 text-green-500',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function FeaturesSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Platform Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="text-foreground">Comprehensive </span>
            <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From smart tracking to health monitoring, our integrated platform provides 
            everything you need for modern fleet management.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Number Badge */}
              <div className="absolute top-6 right-6 text-6xl font-bold text-foreground/5 group-hover:text-primary/10 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6`}>
                <feature.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
