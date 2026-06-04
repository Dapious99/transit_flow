'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { 
  TrendingUp, 
  Users, 
  Truck, 
  Leaf,
  Globe,
  Award,
  ArrowRight,
  BarChart3
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

const impactMetrics = [
  {
    icon: TrendingUp,
    value: '40%',
    label: 'Average Cost Reduction',
    description: 'Businesses using TransitFlow reduce operational costs by an average of 40% within the first year.',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Businesses Served',
    description: 'From SMEs to large enterprises across Nigeria\'s major commercial hubs.',
  },
  {
    icon: Truck,
    value: '25,000+',
    label: 'Vehicles Managed',
    description: 'Our platform monitors and optimizes routes for over 25,000 vehicles nationwide.',
  },
  {
    icon: Leaf,
    value: '35%',
    label: 'Carbon Reduction',
    description: 'Through optimized routing and eco-driving recommendations, we help reduce fleet emissions.',
  },
  {
    icon: Globe,
    value: '10+',
    label: 'Nigerian Cities',
    description: 'TransitFlow operates across Lagos, Abuja, Port Harcourt, Kano, Ibadan, and more.',
  },
  {
    icon: Award,
    value: '98%',
    label: 'Customer Satisfaction',
    description: 'Our customers rate their experience with TransitFlow as excellent or outstanding.',
  },
]

const caseStudies = [
  {
    company: 'Dangote Transport Ltd.',
    industry: 'Industrial Freight',
    results: [
      { metric: 'Delivery Time', value: '-28%' },
      { metric: 'Fuel Costs', value: '-35%' },
      { metric: 'Customer Satisfaction', value: '+42%' },
    ],
    quote: 'TransitFlow transformed our delivery operations across Nigeria. We now complete 30% more runs with the same fleet size.',
    author: 'Adaeze Obiora',
    role: 'Operations Director',
  },
  {
    company: 'GreenMove Nigeria',
    industry: 'Sustainable Transport',
    results: [
      { metric: 'Carbon Emissions', value: '-45%' },
      { metric: 'Route Efficiency', value: '+38%' },
      { metric: 'Driver Retention', value: '+25%' },
    ],
    quote: 'The sustainability dashboard helped us achieve our carbon reduction targets two years ahead of schedule.',
    author: 'Babatunde Fashola-Adeola',
    role: 'Sustainability Manager',
  },
  {
    company: 'Lagos Freight Network',
    industry: 'B2B Distribution',
    results: [
      { metric: 'On-Time Delivery', value: '99.2%' },
      { metric: 'Operating Costs', value: '-32%' },
      { metric: 'Fleet Utilization', value: '+40%' },
    ],
    quote: 'Real-time visibility and predictive analytics have made us the most reliable logistics partner on the Lagos corridor.',
    author: 'Ngozi Iweala-Obi',
    role: 'CEO',
  },
]

const sdgGoals = [
  { number: 9, title: 'Industry, Innovation & Infrastructure', description: 'Building resilient infrastructure through smart technology' },
  { number: 11, title: 'Sustainable Cities & Communities', description: 'Making urban transport safer and more efficient' },
  { number: 13, title: 'Climate Action', description: 'Reducing emissions through optimized logistics' },
]

export default function ImpactPage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Impact
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              <span className="text-foreground">Driving </span>
              <span className="text-gradient">Real Change</span>
              <span className="text-foreground"> in Transportation</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Measurable results that demonstrate our commitment to transforming 
              the transportation industry for Nigerian businesses and the planet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="pb-24 md:pb-32" ref={ref}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <metric.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-4xl font-bold text-gradient mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  {metric.label}
                </div>
                <p className="text-muted-foreground text-sm">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              <span className="text-foreground">Real Results from </span>
              <span className="text-gradient">Real Customers</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {study.company}
                  </h3>
                  <span className="text-sm text-primary">{study.industry}</span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.results.map((result) => (
                    <div key={result.metric} className="text-center">
                      <div className="text-2xl font-bold text-gradient">
                        {result.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {result.metric}
                      </div>
                    </div>
                  ))}
                </div>

                <blockquote className="text-muted-foreground text-sm italic mb-6 border-l-2 border-primary pl-4">
                  &ldquo;{study.quote}&rdquo;
                </blockquote>

                <div>
                  <div className="font-semibold text-foreground text-sm">
                    {study.author}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {study.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Global Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              <span className="text-foreground">Aligned with UN </span>
              <span className="text-gradient">Sustainable Development Goals</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our mission directly supports global sustainability objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sdgGoals.map((goal, index) => (
              <motion.div
                key={goal.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">
                    {goal.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {goal.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {goal.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              <span className="text-foreground">Ready to Make an </span>
              <span className="text-gradient">Impact?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join the businesses already transforming their operations with TransitFlow.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 rounded-full"
            >
              <Link href="/contact" className="flex items-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
