'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function CEOAvatar() {
  return (
    <Image src="/ceo.jpg" alt="CEO" width={96} height={96} className="w-full h-full object-cover rounded-full" />
  )
}

function CTOAvatar() {
  return (
    <Image src="/cto.jpg" alt="CTO" width={96} height={96} className="w-full h-full object-cover rounded-full" />
  )
}

const founders = [
  {
    name: 'Emeka Okafor',
    role: 'CEO & Co-Founder',
    bio: 'Logistics professional with 5+ years shaping supply chain operations across West Africa. Previously led fleet operations for a major Lagos-based freight company, managing 200+ vehicles and cross-border distribution networks.',
    quote: "We built TransitFlow because we lived the problem. Nigerian logistics operators deserve world-class tools built specifically for African roads, traffic, and business realities.",
    linkedin: '#',
    avatar: 'ceo' as const,
    badge: 'CEO',
    gradientFrom: 'from-primary/20',
    gradientTo: 'to-primary/5',
    badgeClass: 'bg-primary/15 text-primary border border-primary/30',
    roleClass: 'text-primary',
    quoteAccent: 'border-primary/40',
  },
  {
    name: 'Amaka Nwosu',
    role: 'CTO & Co-Founder',
    bio: 'AI/ML researcher with deep expertise in reinforcement learning, computer vision, and real-world mobility data science. Author of published work on urban traffic pattern prediction in sub-Saharan cities.',
    quote: "The AI we've built isn't a generic product pasted onto African roads. It was trained on Nigerian traffic data, Nigerian road conditions, and Nigerian logistics patterns. That specificity is our edge.",
    linkedin: '#',
    avatar: 'cto' as const,
    badge: 'CTO',
    gradientFrom: 'from-sky-500/20',
    gradientTo: 'to-sky-500/5',
    badgeClass: 'bg-sky-500/15 text-sky-400 border border-sky-500/30',
    roleClass: 'text-sky-400',
    quoteAccent: 'border-sky-400/40',
  },
]

export function FoundersSection() {
  return (
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
            Founders
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            <span className="text-foreground">Built by People Who </span>
            <span className="text-gradient">Lived the Problem</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-base max-w-2xl mx-auto">
            TransitFlow was founded by logistics and AI experts with firsthand experience of Nigeria&apos;s transportation challenges — not consultants who read about it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <motion.article
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Avatar section */}
              <div className={`h-52 flex items-center justify-center relative bg-gradient-to-br ${founder.gradientFrom} ${founder.gradientTo}`}>
                <div className="w-44 h-44 drop-shadow-xl">
                  {founder.avatar === 'ceo' ? <CEOAvatar /> : <CTOAvatar />}
                </div>
                <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${founder.badgeClass}`}>
                  {founder.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground leading-tight">{founder.name}</h3>
                    <p className={`text-sm font-medium mt-1 ${founder.roleClass}`}>{founder.role}</p>
                  </div>
                  <a
                    href={founder.linkedin}
                    className="text-muted-foreground hover:text-primary transition-colors mt-0.5 ml-4 flex-shrink-0"
                    aria-label={`${founder.name} on LinkedIn`}
                  >
                    <LinkedInIcon className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {founder.bio}
                </p>

                <blockquote className={`border-l-2 pl-4 ${founder.quoteAccent}`}>
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" className="mb-2 opacity-50" aria-hidden="true">
                    <path d="M0 12V7.2C0 3.2 2.4 0.8 7.2 0L8 1.6C5.6 2.4 4.4 3.6 4.4 5.2H7.2V12H0ZM8.8 12V7.2C8.8 3.2 11.2 0.8 16 0L16.8 1.6C14.4 2.4 13.2 3.6 13.2 5.2H16V12H8.8Z" fill="currentColor" className="text-primary" />
                  </svg>
                  <p className="text-foreground/75 text-sm italic leading-relaxed">
                    &ldquo;{founder.quote}&rdquo;
                  </p>
                </blockquote>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors"
          >
            Meet the full team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
