'use client'

import { motion } from 'framer-motion'
import { Cloud, Cpu, Database, Globe, Shield, Zap, Server, BarChart3 } from 'lucide-react'

const awsServices = [
  {
    icon: Database,
    name: 'Amazon S3',
    use: 'Secure storage for vehicle telemetry data, trip recordings, and dashcam footage at scale',
  },
  {
    icon: Server,
    name: 'Amazon RDS',
    use: 'Managed relational database for fleet profiles, driver records, and delivery history',
  },
  {
    icon: Zap,
    name: 'AWS Lambda / ECS',
    use: 'Serverless API execution and containerised microservices for real-time event processing',
  },
  {
    icon: Globe,
    name: 'Amazon CloudFront',
    use: 'Global CDN ensuring fast dashboard and mobile app delivery across Nigeria and West Africa',
  },
  {
    icon: Cpu,
    name: 'Amazon Bedrock',
    use: 'Powering our AI dispatching assistant and natural-language fleet query interface',
  },
  {
    icon: BarChart3,
    name: 'Amazon CloudWatch',
    use: 'Real-time monitoring, alerting, and observability across all platform services',
  },
  {
    icon: Shield,
    name: 'AWS IoT Core',
    use: 'Secure device management for thousands of GPS trackers and OBD-II sensors in vehicles',
  },
  {
    icon: Cloud,
    name: 'AWS Auto Scaling',
    use: 'Dynamically scale compute capacity during peak delivery hours and city-wide fleet surges',
  },
]

const nvidiaUses = [
  {
    icon: Cpu,
    name: 'CUDA Acceleration',
    use: 'GPU-accelerated route optimisation and ML model training using NVIDIA CUDA parallel computing',
  },
  {
    icon: Zap,
    name: 'TensorRT',
    use: 'Optimising AI model inference for low-latency anomaly detection and real-time driver scoring',
  },
  {
    icon: Server,
    name: 'NVIDIA Jetson',
    use: 'Edge AI modules deployed in vehicles for on-device computer vision and offline alerting',
  },
  {
    icon: BarChart3,
    name: 'Triton Inference Server',
    use: 'Serving multiple AI models simultaneously at scale with consistent throughput and SLA guarantees',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export function InfrastructureSection() {
  return (
    <section className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
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
            Technology & Infrastructure
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="text-foreground">Built on World-Class </span>
            <span className="text-gradient">Cloud & GPU Infrastructure</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            TransitFlow is architected on AWS and NVIDIA technologies — giving us the
            compute power, security, and global scale to support fleet operations
            from a single vehicle to tens of thousands across West Africa.
          </p>
        </motion.div>

        {/* AWS Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-12 rounded-xl bg-[#FF9900]/15 flex items-center justify-center shrink-0">
              <Cloud className="w-6 h-6 text-[#FF9900]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">How We Use AWS</h3>
              <p className="text-muted-foreground text-sm mt-1">
                Amazon Web Services provides the cloud backbone for secure storage, API hosting,
                AI model inference, real-time alerts, analytics, and user management.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {awsServices.map((service) => (
              <motion.div
                key={service.name}
                variants={itemVariants}
                className="bg-card rounded-xl p-5 border border-border hover:border-[#FF9900]/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FF9900]/10 flex items-center justify-center mb-4 group-hover:bg-[#FF9900]/20 transition-colors">
                  <service.icon className="w-5 h-5 text-[#FF9900]" />
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-2">{service.name}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{service.use}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* NVIDIA Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-12 rounded-xl bg-[#76B900]/15 flex items-center justify-center shrink-0">
              <Cpu className="w-6 h-6 text-[#76B900]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">How We Use NVIDIA</h3>
              <p className="text-muted-foreground text-sm mt-1">
                NVIDIA technologies accelerate our AI model development, optimise inference,
                and power computer vision and real-time data workloads as the platform scales.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {nvidiaUses.map((item) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                className="bg-card rounded-xl p-5 border border-border hover:border-[#76B900]/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#76B900]/10 flex items-center justify-center mb-4 group-hover:bg-[#76B900]/20 transition-colors">
                  <item.icon className="w-5 h-5 text-[#76B900]" />
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-2">{item.name}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.use}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Architecture summary callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 bg-card rounded-2xl border border-primary/20 p-6 md:p-8"
        >
          <p className="text-muted-foreground text-sm leading-relaxed text-center max-w-4xl mx-auto">
            <span className="text-foreground font-semibold">Our architecture plan: </span>
            AWS hosts our backend APIs, stores vehicle data securely, runs AI workflows, manages
            authentication, serves frontend assets via CloudFront, monitors performance via CloudWatch,
            and supports ML features through Amazon Bedrock. NVIDIA CUDA and TensorRT accelerate
            model training and real-time inference. NVIDIA Jetson modules process AI at the vehicle
            edge, reducing cloud latency for time-critical alerts.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
