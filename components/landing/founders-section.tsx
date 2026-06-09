'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
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
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
      <defs>
        <radialGradient id="ceoBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF9D40" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#FF5800" stopOpacity="0.08" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="100" fill="url(#ceoBg)" />
      {/* Shoulders / suit */}
      <path d="M30,200 Q30,135 100,132 Q170,135 170,200" fill="oklch(0.18 0.05 240)" />
      {/* Jacket lapels */}
      <path d="M82,132 L100,152 L118,132" fill="white" opacity="0.12" />
      {/* Tie */}
      <path d="M100,148 L97,165 L100,182 L103,165 Z" fill="#FF8833" opacity="0.9" />
      {/* Collar */}
      <path d="M88,132 Q100,148 112,132" fill="white" opacity="0.08" />
      {/* Neck */}
      <rect x="90" y="116" width="20" height="20" rx="6" fill="#A0714F" />
      {/* Head */}
      <circle cx="100" cy="90" r="34" fill="#A0714F" />
      {/* Ears */}
      <ellipse cx="66" cy="90" rx="6" ry="9" fill="#A0714F" />
      <ellipse cx="134" cy="90" rx="6" ry="9" fill="#A0714F" />
      <ellipse cx="66" cy="90" rx="3" ry="5" fill="#8B5E3C" />
      <ellipse cx="134" cy="90" rx="3" ry="5" fill="#8B5E3C" />
      {/* Eyes */}
      <ellipse cx="89" cy="87" rx="5.5" ry="6" fill="#6B4226" />
      <ellipse cx="111" cy="87" rx="5.5" ry="6" fill="#6B4226" />
      <circle cx="89" cy="87" r="3" fill="#1A0800" />
      <circle cx="111" cy="87" r="3" fill="#1A0800" />
      <circle cx="91" cy="85" r="1" fill="white" opacity="0.6" />
      <circle cx="113" cy="85" r="1" fill="white" opacity="0.6" />
      {/* Eyebrows */}
      <path d="M83,80 Q89,77 95,79" stroke="#4A2800" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M105,79 Q111,77 117,80" stroke="#4A2800" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Nose */}
      <path d="M97,95 Q100,100 103,95" stroke="#7A4A28" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Mouth */}
      <path d="M89,103 Q100,111 111,103" stroke="#7A4A28" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Hair */}
      <path d="M66,80 Q68,55 100,52 Q132,55 134,80 Q128,62 100,60 Q72,62 66,80 Z" fill="#0D0500" />
      {/* Short beard */}
      <path d="M83,108 Q100,116 117,108 Q115,118 100,120 Q85,118 83,108 Z" fill="#4A2800" opacity="0.5" />
    </svg>
  )
}

function CTOAvatar() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
      <defs>
        <radialGradient id="ctoBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.08" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="100" fill="url(#ctoBg)" />
      {/* Shoulders / blazer */}
      <path d="M25,200 Q25,130 100,128 Q175,130 175,200" fill="oklch(0.18 0.05 240)" />
      {/* Blouse detail */}
      <path d="M84,128 Q100,144 116,128" fill="#0EA5E9" opacity="0.4" />
      {/* Neck */}
      <rect x="91" y="114" width="18" height="18" rx="5" fill="#7B4A2A" />
      {/* Head */}
      <circle cx="100" cy="88" r="34" fill="#7B4A2A" />
      {/* Ears */}
      <ellipse cx="66" cy="88" rx="6" ry="9" fill="#7B4A2A" />
      <ellipse cx="134" cy="88" rx="6" ry="9" fill="#7B4A2A" />
      {/* Earrings */}
      <circle cx="66" cy="98" r="4" fill="#0EA5E9" opacity="0.9" />
      <circle cx="134" cy="98" r="4" fill="#0EA5E9" opacity="0.9" />
      {/* Eyes */}
      <ellipse cx="88" cy="85" rx="5.5" ry="6" fill="#4A2800" />
      <ellipse cx="112" cy="85" rx="5.5" ry="6" fill="#4A2800" />
      <circle cx="88" cy="85" r="3" fill="#0D0500" />
      <circle cx="112" cy="85" r="3" fill="#0D0500" />
      <circle cx="90" cy="83" r="1" fill="white" opacity="0.6" />
      <circle cx="114" cy="83" r="1" fill="white" opacity="0.6" />
      {/* Glasses */}
      <rect x="79" y="80" width="18" height="13" rx="6" fill="none" stroke="#334155" strokeWidth="2" />
      <rect x="103" y="80" width="18" height="13" rx="6" fill="none" stroke="#334155" strokeWidth="2" />
      <line x1="97" y1="87" x2="103" y2="87" stroke="#334155" strokeWidth="2" />
      <line x1="67" y1="85" x2="79" y2="85" stroke="#334155" strokeWidth="1.5" />
      <line x1="121" y1="85" x2="133" y2="85" stroke="#334155" strokeWidth="1.5" />
      {/* Eyebrows (above glasses) */}
      <path d="M80,78 Q88,75 96,77" stroke="#2D1500" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M104,77 Q112,75 120,78" stroke="#2D1500" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      {/* Nose */}
      <path d="M97,95 Q100,100 103,95" stroke="#5A3210" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Mouth */}
      <path d="M88,103 Q100,111 112,103" stroke="#5A3210" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Natural hair - full afro */}
      <ellipse cx="100" cy="64" rx="42" ry="32" fill="#0D0500" />
      <ellipse cx="100" cy="60" rx="36" ry="26" fill="#0D0500" />
      {/* Hair volume bumps */}
      <circle cx="68" cy="72" r="14" fill="#0D0500" />
      <circle cx="132" cy="72" r="14" fill="#0D0500" />
      <circle cx="100" cy="52" r="18" fill="#0D0500" />
    </svg>
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
    name: 'Dr. Amaka Nwosu',
    role: 'CTO & Co-Founder',
    bio: 'AI/ML researcher from the University of Lagos with deep expertise in reinforcement learning, computer vision, and real-world mobility data science. Author of published work on urban traffic pattern prediction in sub-Saharan cities.',
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
