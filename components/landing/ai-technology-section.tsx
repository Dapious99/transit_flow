'use client'

import { motion } from 'framer-motion'
import { Brain, Database, Cpu, TrendingUp, Eye, Zap } from 'lucide-react'

const aiCapabilities = [
  {
    icon: Database,
    title: 'Data the AI Uses',
    points: [
      'Real-time GPS telemetry from vehicle IoT devices',
      'Historical route and traffic pattern data',
      'Fuel consumption logs and engine diagnostics',
      'Driver behaviour scores (speed, braking, idling)',
      'Weather, road condition, and congestion feeds',
      'Delivery schedules and cargo manifest data',
    ],
  },
  {
    icon: Brain,
    title: 'What the AI Predicts & Detects',
    points: [
      'Optimal multi-stop routes updated in real time',
      'Vehicle breakdowns before they happen (predictive maintenance)',
      'Driver fatigue and unsafe behaviour anomalies',
      'Estimated delivery windows with traffic-aware ETAs',
      'Fuel theft and idling waste detection',
      'Demand surge forecasting for fleet pre-positioning',
    ],
  },
  {
    icon: Eye,
    title: 'Models & Techniques',
    points: [
      'Reinforcement learning for adaptive route optimisation',
      'LSTM neural networks for predictive maintenance',
      'Computer vision for driver behaviour monitoring',
      'Graph Neural Networks (GNN) for traffic flow modelling',
      'Anomaly detection for fraud and theft prevention',
      'Time-series forecasting for demand prediction',
    ],
  },
  {
    icon: Cpu,
    title: 'Why GPU Infrastructure Is Essential',
    points: [
      'Real-time inference across thousands of vehicles simultaneously',
      'Training computer vision models on dashcam footage',
      'Running parallel route optimisation for large fleets',
      'Processing millions of sensor events per second',
      'Low-latency edge AI in vehicle-mounted units',
      'Accelerated ML model retraining as new data arrives',
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function AITechnologySection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
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
            AI Technology
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="text-foreground">Intelligence That </span>
            <span className="text-gradient">Moves Your Fleet Forward</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            TransitFlow&apos;s AI engine is the core of the platform — not a bolt-on feature.
            It continuously learns from every vehicle, route, and delivery to make smarter
            decisions in real time across Nigeria&apos;s complex logistics environment.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {aiCapabilities.map((cap) => (
            <motion.div
              key={cap.title}
              variants={itemVariants}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <cap.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{cap.title}</h3>
              <ul className="space-y-2.5">
                {cap.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* AI flow diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-card rounded-2xl border border-border p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">How the AI Works — End to End</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            {[
              { step: '01', label: 'IoT Data Ingestion', desc: 'GPS, OBD-II, sensors stream live from vehicles' },
              { step: '02', label: 'Edge Processing', desc: 'On-device AI filters noise and detects real-time anomalies' },
              { step: '03', label: 'Cloud AI Engine', desc: 'Models run on GPU-backed infrastructure for deep inference' },
              { step: '04', label: 'Decision Output', desc: 'Optimised routes, alerts, and maintenance schedules generated' },
              { step: '05', label: 'Continuous Learning', desc: 'Models retrain on new data to improve with every trip' },
            ].map((item, index) => (
              <div key={item.step} className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/15 text-primary font-bold text-sm mb-3">
                    {item.step}
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">{item.label}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
                {index < 4 && (
                  <Zap className="hidden md:block w-5 h-5 text-primary/40 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
