'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Cpu,
  Globe,
  Zap,
  Cloud,
  Lock,
  Smartphone,
  ArrowRight,
  Server,
  Wifi,
  Database,
  Brain,
  BarChart3,
  Shield,
  Eye
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

const technologies = [
  {
    icon: Cpu,
    title: 'Edge AI Processing',
    description: 'Intelligent offline processing for real-time alerts with minimal latency and reduced data costs. Our edge computing nodes process data locally for instant decision-making.',
  },
  {
    icon: Globe,
    title: 'Global IoT Network',
    description: 'Utilizes LoRaWAN, NB-IoT, and 5G for reliable network coverage across urban and rural areas. Seamless connectivity wherever your fleet operates.',
  },
  {
    icon: Zap,
    title: 'Real-time Data Pipeline',
    description: 'Sub-second data ingestion and processing pipeline capable of handling millions of events per second with guaranteed delivery and ordering.',
  },
  {
    icon: Cloud,
    title: 'Cloud-Native Architecture',
    description: 'Built on Kubernetes with auto-scaling capabilities. Multi-region deployment ensures 99.99% uptime and low-latency access worldwide.',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'End-to-end encryption, SOC 2 Type II compliance, and role-based access control. Your data is protected with bank-grade security measures.',
  },
  {
    icon: Smartphone,
    title: 'Cross-Platform SDKs',
    description: 'Native SDKs for iOS, Android, and web platforms. Easy integration with existing systems through RESTful APIs and webhooks.',
  },
]

const architectureLayers = [
  {
    icon: Wifi,
    title: 'Device Layer',
    items: ['GPS Trackers', 'OBD-II Devices', 'IoT Sensors', 'Mobile Apps'],
  },
  {
    icon: Server,
    title: 'Processing Layer',
    items: ['Edge Computing', 'Stream Processing', 'AI/ML Models', 'Event Processing'],
  },
  {
    icon: Database,
    title: 'Data Layer',
    items: ['Time-Series DB', 'Graph Database', 'Data Lake', 'Real-time Cache'],
  },
  {
    icon: Cloud,
    title: 'Application Layer',
    items: ['Web Dashboard', 'Mobile Apps', 'APIs', 'Integrations'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function TechnologyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Technology
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              <span className="text-foreground">Cutting-Edge </span>
              <span className="text-gradient">IoT, AI & Edge Computing</span>
              <span className="text-foreground"> at Your Fingertips</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Built on a foundation of advanced technology, our platform delivers 
              real-time intelligence, unmatched reliability, and seamless scalability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Cards */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                variants={itemVariants}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <tech.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {tech.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Architecture Section */}
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
              Platform Architecture
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              <span className="text-foreground">Built for </span>
              <span className="text-gradient">Scale & Reliability</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our multi-layered architecture ensures seamless data flow from device to dashboard, 
              with built-in redundancy and fault tolerance at every level.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {architectureLayers.map((layer, index) => (
              <motion.div
                key={layer.title}
                variants={itemVariants}
                className="relative"
              >
                {/* Connection line */}
                {index < architectureLayers.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />
                )}
                
                <div className="bg-card rounded-2xl p-6 border border-border h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <layer.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {layer.title}
                  </h3>
                  <ul className="space-y-2">
                    {layer.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Technology Section */}
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
              AI Technology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              <span className="text-foreground">The Intelligence </span>
              <span className="text-gradient">Inside TransitFlow</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AI is not a feature — it is the core of the platform. Every route, alert, and
              prediction is generated by machine learning models trained on African logistics data.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: Database,
                title: 'Data Sources',
                items: [
                  'Real-time GPS telemetry (10-second intervals)',
                  'OBD-II vehicle diagnostics & engine sensors',
                  'Historical route and fuel consumption data',
                  'Live traffic feeds: Lagos, Abuja, Port Harcourt',
                  'Driver behaviour logs (speed, braking, idling)',
                  'Weather and road condition APIs',
                ],
              },
              {
                icon: Brain,
                title: 'AI Capabilities',
                items: [
                  'Optimal multi-stop route generation (RL models)',
                  'Predictive vehicle maintenance (LSTM networks)',
                  'Driver anomaly & fatigue detection (CV)',
                  'Fuel theft and idling waste detection',
                  'Demand surge forecasting for fleet staging',
                  'Real-time ETA prediction with traffic awareness',
                ],
              },
              {
                icon: Eye,
                title: 'Models & Techniques',
                items: [
                  'Reinforcement learning for adaptive routing',
                  'LSTM neural networks for predictive maintenance',
                  'Computer vision for dashcam-based monitoring',
                  'Graph Neural Networks for traffic modelling',
                  'Time-series forecasting for demand prediction',
                  'Anomaly detection for fraud prevention',
                ],
              },
              {
                icon: Cpu,
                title: 'Why GPU Compute Is Required',
                items: [
                  'Real-time inference across thousands of vehicles',
                  'Training CV models on dashcam video footage',
                  'Parallel route optimisation for large fleets',
                  'Processing millions of sensor events per second',
                  'On-device edge AI in vehicle-mounted units',
                  'Accelerated retraining as new trip data arrives',
                ],
              },
            ].map((block) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <block.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4">{block.title}</h3>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AWS & NVIDIA Infrastructure */}
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
              Cloud & GPU Infrastructure
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              <span className="text-foreground">Powered by AWS & </span>
              <span className="text-gradient">NVIDIA Technologies</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our infrastructure plan uses AWS for cloud backbone and NVIDIA for GPU-accelerated
              AI — enabling us to scale from a handful of beta vehicles to tens of thousands
              across West Africa without rebuilding.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AWS */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 border border-[#FF9900]/30"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#FF9900]/15 flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-[#FF9900]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Amazon Web Services (AWS)</h3>
                  <p className="text-sm text-muted-foreground">Cloud backbone for the entire platform</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { service: 'Amazon S3', use: 'Telemetry data storage, dashcam recordings, and backups at scale' },
                  { service: 'Amazon RDS', use: 'Managed database for fleet profiles, routes, and delivery records' },
                  { service: 'AWS Lambda / ECS', use: 'Serverless APIs and containerised microservices for real-time processing' },
                  { service: 'Amazon CloudFront', use: 'Fast content delivery for dashboards across Nigeria and West Africa' },
                  { service: 'Amazon Bedrock', use: 'AI dispatching assistant and natural-language fleet query interface' },
                  { service: 'AWS IoT Core', use: 'Secure connectivity for thousands of in-vehicle GPS and sensor devices' },
                  { service: 'Amazon CloudWatch', use: 'Real-time monitoring, performance alerts, and platform observability' },
                ].map((item) => (
                  <div key={item.service} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FF9900] mt-2 shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-foreground">{item.service}: </span>
                      <span className="text-sm text-muted-foreground">{item.use}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* NVIDIA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 border border-[#76B900]/30"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#76B900]/15 flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-[#76B900]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">NVIDIA Technologies</h3>
                  <p className="text-sm text-muted-foreground">GPU acceleration for AI workloads</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { tech: 'CUDA', use: 'GPU-parallel route optimisation and machine learning model training' },
                  { tech: 'TensorRT', use: 'Optimising AI inference latency for real-time anomaly detection and driver scoring' },
                  { tech: 'NVIDIA Jetson', use: 'Edge AI modules deployed inside vehicles for on-device computer vision and offline alerting' },
                  { tech: 'Triton Inference Server', use: 'Serving multiple AI models at scale with consistent SLA and throughput' },
                  { tech: 'RAPIDS', use: 'GPU-accelerated data science for fleet analytics and batch processing pipelines' },
                  { tech: 'DeepStream', use: 'Video analytics pipeline for processing dashcam streams and driver behaviour detection' },
                ].map((item) => (
                  <div key={item.tech} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#76B900] mt-2 shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-foreground">{item.tech}: </span>
                      <span className="text-sm text-muted-foreground">{item.use}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '99.99%', label: 'Uptime SLA (target)' },
              { value: '<100ms', label: 'API Latency (target)' },
              { value: '10M+', label: 'Events/Second capacity' },
              { value: '50+', label: 'Integrations planned' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
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
              <span className="text-foreground">Want to Learn More About </span>
              <span className="text-gradient">Our Technology?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a technical deep-dive with our engineering team.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 rounded-full"
            >
              <Link href="/contact" className="flex items-center">
                Talk to Engineering
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
