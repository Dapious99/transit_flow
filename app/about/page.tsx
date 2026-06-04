'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  ArrowRight,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { CityLogisticsIllustration } from '@/components/illustrations/city-logistics-illustration'
import { DashboardIllustration } from '@/components/illustrations/dashboard-illustration'

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Every decision we make is guided by our mission to make transportation more efficient, sustainable, and accessible across Nigeria.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'We believe in open communication with our customers, partners, and team members. No hidden fees, no surprises.',
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: "Our customers' success is our success. We go above and beyond to ensure they achieve their operational goals.",
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We continuously push boundaries, exploring new technologies and approaches to solve the unique logistics challenges of Nigeria.',
  },
]

const team = [
  {
    name: 'Emeka Okafor',
    role: 'CEO & Co-Founder',
    bio: 'Logistics professional with 5+ years shaping supply chain operations across West Africa.',
    linkedin: '#',
  },
  {
    name: 'Dr. Amaka Nwosu',
    role: 'CTO & Co-Founder',
    bio: 'AI/ML researcher from University of Lagos with a passion for applying data science to real-world mobility challenges.',
    linkedin: '#',
  },
]

const teamAvatars: Record<string, React.ReactNode> = {
  'Emeka Okafor': (
    <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 rounded-full">
      <circle cx="48" cy="48" r="48" fill="oklch(0.72 0.19 45 / 0.15)" />
      <circle cx="48" cy="38" r="14" fill="oklch(0.72 0.19 45 / 0.4)" />
      <ellipse cx="48" cy="72" rx="22" ry="14" fill="oklch(0.72 0.19 45 / 0.3)" />
      <circle cx="48" cy="38" r="10" fill="oklch(0.72 0.19 45 / 0.7)" />
      <ellipse cx="48" cy="70" rx="17" ry="11" fill="oklch(0.72 0.19 45 / 0.5)" />
    </svg>
  ),
  'Dr. Amaka Nwosu': (
    <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 rounded-full">
      <circle cx="48" cy="48" r="48" fill="oklch(0.65 0.15 200 / 0.15)" />
      <circle cx="48" cy="38" r="14" fill="oklch(0.65 0.15 200 / 0.4)" />
      <ellipse cx="48" cy="72" rx="22" ry="14" fill="oklch(0.65 0.15 200 / 0.3)" />
      <circle cx="48" cy="38" r="10" fill="oklch(0.65 0.15 200 / 0.7)" />
      <ellipse cx="48" cy="70" rx="17" ry="11" fill="oklch(0.65 0.15 200 / 0.5)" />
    </svg>
  ),
}

const milestones = [
  { year: '2024', title: 'Founded in Lagos', description: "TransitFlow was born from a vision to solve Nigeria's urban logistics crisis, starting with Lagos." },
  { year: '2024', title: 'Platform Development', description: 'Built and tested our core fleet management platform with early-access partners across Lagos.' },
  { year: '2025', title: 'Product Launch', description: 'Officially launched to market, onboarding our first customers across Lagos and Abuja.' },
  { year: '2025', title: 'Expanding Cities', description: 'Growing our presence into Port Harcourt, Kano, and Ibadan, with more cities on the horizon.' },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              <span className="text-foreground">Building the Future of </span>
              <span className="text-gradient">Nigerian Mobility</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We&apos;re on a mission to transform how Nigeria moves goods and people,
              making transportation smarter, greener, and more efficient for every city.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story + City illustration */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              <div className="bg-card rounded-2xl p-8 md:p-10 border border-border h-full">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    TransitFlow was founded in 2024 in Lagos by a team of logistics professionals and
                    AI researchers who experienced firsthand the chaos plaguing Nigerian transportation —
                    from gridlocked routes on the Lagos-Ibadan expressway to the lack of visibility in
                    inter-state freight movement.
                  </p>
                  <p>
                    We believed there had to be a better way. By combining cutting-edge AI, IoT technology,
                    and a deep understanding of the Nigerian logistics landscape, we built a platform that
                    gives businesses complete control over their fleet operations — from real-time tracking in
                    dense urban traffic to predictive maintenance in remote corridors.
                  </p>
                  <p>
                    Today, TransitFlow is growing fast, powering fleet operations for businesses across
                    Nigeria&apos;s major commercial hubs and helping them move smarter while reducing their
                    environmental footprint. We&apos;re just getting started.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full lg:w-1/2"
            >
              <div className="rounded-2xl overflow-hidden border border-border aspect-[16/9] bg-card">
                <CityLogisticsIllustration />
              </div>
              <p className="text-xs text-muted-foreground text-center mt-3">
                AI-connected trucks navigating Nigeria&apos;s urban corridors in real time
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              <span className="text-foreground">What </span>
              <span className="text-gradient">Drives Us</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              <span className="text-foreground">Key </span>
              <span className="text-gradient">Milestones</span>
            </h2>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={`${milestone.year}-${milestone.title}`}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-20"
                  >
                    <div className="absolute left-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-4 border-background">
                      <span className="text-sm font-bold text-primary">{milestone.year}</span>
                    </div>
                    <div className="bg-card rounded-xl p-6 border border-border">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground text-sm">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard illustration — visual break before Team */}
      <section className="pb-0 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 pb-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-6">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                The Platform in Action
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-1 text-balance">
                <span className="text-foreground">Every fleet. </span>
                <span className="text-gradient">One command centre.</span>
              </h2>
              <p className="text-muted-foreground text-sm max-w-xl mx-auto">
                A live view of everything happening across your vehicles — routes,
                performance, alerts, and sustainability metrics — all in one place.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border aspect-[960/380] bg-card">
              <DashboardIllustration />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
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
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              <span className="text-foreground">Meet Our </span>
              <span className="text-gradient">Team</span>
            </h2>
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border text-center group flex-1"
              >
                <div className="mx-auto mb-4 w-24 h-24">
                  {teamAvatars[member.name]}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                <div className="flex items-center justify-center">
                  <a
                    href={member.linkedin}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <LinkedInIcon className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              <span className="text-foreground">Join Us on Our </span>
              <span className="text-gradient">Mission</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you&apos;re looking to partner with us or join our team, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 rounded-full"
              >
                <Link href="/contact" className="flex items-center">
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:bg-secondary text-foreground font-semibold px-8 rounded-full"
              >
                <Link href="#">View Careers</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
