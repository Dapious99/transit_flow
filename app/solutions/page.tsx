'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Route, 
  Radar, 
  BarChart3, 
  Smartphone, 
  Shield, 
  Leaf,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

const solutions = [
  {
    icon: Radar,
    title: 'Fleet Tracking & Monitoring',
    description: 'Get complete visibility into your entire fleet with precision GPS tracking, live location updates, and comprehensive trip history. Monitor vehicle status, fuel levels, and driver behavior in real-time.',
    features: [
      'Real-time GPS tracking with 10-second updates',
      'Geofencing and route deviation alerts',
      'Historical route playback and analysis',
      'Vehicle health monitoring',
    ],
  },
  {
    icon: Route,
    title: 'AI-Powered Route Optimization',
    description: 'Leverage cutting-edge machine learning algorithms to calculate the most efficient routes, considering Lagos traffic patterns, weather conditions, delivery windows, and vehicle capacity.',
    features: [
      'Dynamic route recalculation',
      'Multi-stop optimization',
      'Traffic and weather integration',
      'Delivery time predictions',
    ],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Business Intelligence',
    description: 'Transform your fleet data into actionable insights with comprehensive dashboards, custom reports, and predictive analytics that help you make data-driven decisions.',
    features: [
      'Customizable KPI dashboards',
      'Automated report generation',
      'Predictive maintenance alerts',
      'Cost analysis and optimization',
    ],
  },
  {
    icon: Smartphone,
    title: 'Driver Management Platform',
    description: 'Empower your drivers with intuitive mobile tools while maintaining full visibility into performance, compliance, and safety metrics across your organization.',
    features: [
      'Mobile app for iOS and Android',
      'Digital document management',
      'Driver scorecards and feedback',
      'Hours of service compliance',
    ],
  },
  {
    icon: Shield,
    title: 'Safety & Compliance',
    description: 'Proactively manage safety risks and ensure regulatory compliance with automated monitoring, incident reporting, and comprehensive audit trails suited to Nigerian transport regulations.',
    features: [
      'Driver behavior monitoring',
      'Automated compliance reporting',
      'Incident management system',
      'Safety training integration',
    ],
  },
  {
    icon: Leaf,
    title: 'Sustainability Solutions',
    description: 'Track, measure, and reduce your environmental impact with detailed emissions reporting, eco-driving recommendations, and carbon offset integration aligned with Nigeria\'s climate commitments.',
    features: [
      'Carbon footprint tracking',
      'Eco-driving score and tips',
      'Emissions reporting (Scope 1, 2, 3)',
      'Sustainability goal setting',
    ],
  },
]

// High-fidelity SVG illustrations for each solution
const SolutionIllustrations = [
  // 1. Fleet Tracking & Monitoring — map pins + pulsing dots
  () => (
    <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="480" height="360" fill="oklch(0.18 0.02 240)" />
      {/* Grid lines */}
      {[60,120,180,240,300,360,420].map(x => (
        <line key={x} x1={x} y1="0" x2={x} y2="360" stroke="oklch(0.72 0.19 45 / 0.08)" strokeWidth="1" />
      ))}
      {[60,120,180,240,300].map(y => (
        <line key={y} x1="0" y1={y} x2="480" y2={y} stroke="oklch(0.72 0.19 45 / 0.08)" strokeWidth="1" />
      ))}
      {/* Road network */}
      <path d="M0,200 Q120,160 240,180 T480,160" stroke="oklch(0.72 0.19 45 / 0.25)" strokeWidth="12" strokeLinecap="round" fill="none" />
      <path d="M0,200 Q120,160 240,180 T480,160" stroke="oklch(0.72 0.19 45 / 0.12)" strokeWidth="14" strokeLinecap="round" fill="none" />
      <path d="M80,0 Q140,120 160,200 T200,360" stroke="oklch(0.72 0.19 45 / 0.2)" strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M320,0 Q310,100 340,200 T360,360" stroke="oklch(0.72 0.19 45 / 0.2)" strokeWidth="10" strokeLinecap="round" fill="none" />
      {/* Vehicle dots on roads */}
      <circle cx="140" cy="174" r="8" fill="oklch(0.72 0.19 45)" />
      <circle cx="140" cy="174" r="14" fill="oklch(0.72 0.19 45 / 0.2)" />
      <circle cx="140" cy="174" r="20" fill="oklch(0.72 0.19 45 / 0.08)" />
      <circle cx="300" cy="168" r="8" fill="oklch(0.72 0.19 45)" />
      <circle cx="300" cy="168" r="14" fill="oklch(0.72 0.19 45 / 0.2)" />
      <circle cx="300" cy="168" r="20" fill="oklch(0.72 0.19 45 / 0.08)" />
      <circle cx="160" cy="260" r="7" fill="oklch(0.72 0.19 45 / 0.8)" />
      <circle cx="160" cy="260" r="13" fill="oklch(0.72 0.19 45 / 0.15)" />
      {/* Map pin destination */}
      <g transform="translate(380, 80)">
        <circle cx="0" cy="0" r="16" fill="oklch(0.72 0.19 45)" />
        <circle cx="0" cy="0" r="7" fill="white" />
        <circle cx="0" cy="24" r="4" fill="oklch(0.72 0.19 45 / 0.4)" />
        <polygon points="0,20 -8,0 8,0" fill="oklch(0.72 0.19 45)" />
      </g>
      {/* Info card */}
      <rect x="20" y="20" width="160" height="80" rx="12" fill="oklch(0.22 0.02 240)" stroke="oklch(0.72 0.19 45 / 0.3)" strokeWidth="1" />
      <circle cx="44" cy="44" r="10" fill="oklch(0.72 0.19 45 / 0.2)" />
      <circle cx="44" cy="44" r="5" fill="oklch(0.72 0.19 45)" />
      <rect x="62" y="38" width="80" height="8" rx="4" fill="oklch(0.72 0.19 45 / 0.6)" />
      <rect x="62" y="52" width="55" height="6" rx="3" fill="oklch(0.72 0.19 45 / 0.3)" />
      <rect x="28" y="72" width="136" height="18" rx="6" fill="oklch(0.72 0.19 45 / 0.15)" />
      <rect x="36" y="76" width="60" height="10" rx="4" fill="oklch(0.72 0.19 45 / 0.5)" />
      <rect x="104" y="76" width="40" height="10" rx="4" fill="oklch(0.4 0.18 140 / 0.7)" />
      {/* Signal arcs */}
      <circle cx="140" cy="174" r="30" stroke="oklch(0.72 0.19 45 / 0.15)" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
      <circle cx="140" cy="174" r="44" stroke="oklch(0.72 0.19 45 / 0.08)" strokeWidth="1" fill="none" strokeDasharray="3 6" />
    </svg>
  ),
  // 2. AI Route Optimization — branching path comparison
  () => (
    <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="480" height="360" fill="oklch(0.18 0.02 240)" />
      {/* Background glow */}
      <ellipse cx="240" cy="180" rx="200" ry="140" fill="oklch(0.72 0.19 45 / 0.04)" />
      {/* Slow route (red, wavy) */}
      <path d="M60,180 Q100,120 140,180 Q180,240 220,180 Q260,120 300,180 Q340,240 380,180 L420,180"
        stroke="oklch(0.6 0.22 25 / 0.5)" strokeWidth="3" fill="none" strokeDasharray="8 4" strokeLinecap="round" />
      {/* Optimized route (orange, smooth) */}
      <path d="M60,180 Q180,100 300,180 T420,180"
        stroke="oklch(0.72 0.19 45)" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M60,180 Q180,100 300,180 T420,180"
        stroke="oklch(0.72 0.19 45 / 0.2)" strokeWidth="12" fill="none" strokeLinecap="round" />
      {/* Start node */}
      <circle cx="60" cy="180" r="16" fill="oklch(0.72 0.19 45)" />
      <circle cx="60" cy="180" r="8" fill="white" />
      {/* End node */}
      <circle cx="420" cy="180" r="16" fill="oklch(0.4 0.18 140)" />
      <circle cx="420" cy="180" r="8" fill="white" />
      {/* Waypoints on optimized route */}
      <circle cx="180" cy="130" r="10" fill="oklch(0.22 0.02 240)" stroke="oklch(0.72 0.19 45)" strokeWidth="2.5" />
      <circle cx="300" cy="180" r="10" fill="oklch(0.22 0.02 240)" stroke="oklch(0.72 0.19 45)" strokeWidth="2.5" />
      {/* Moving truck on optimized route */}
      <g transform="translate(220, 115)">
        <rect x="-18" y="-12" width="36" height="24" rx="5" fill="oklch(0.72 0.19 45)" />
        <rect x="-14" y="-8" width="12" height="16" rx="2" fill="oklch(0.9 0.05 45)" />
        <circle cx="-10" cy="14" r="6" fill="oklch(0.22 0.02 240)" stroke="oklch(0.72 0.19 45)" strokeWidth="2" />
        <circle cx="10" cy="14" r="6" fill="oklch(0.22 0.02 240)" stroke="oklch(0.72 0.19 45)" strokeWidth="2" />
      </g>
      {/* Labels */}
      <rect x="140" y="260" width="200" height="72" rx="12" fill="oklch(0.22 0.02 240)" stroke="oklch(0.72 0.19 45 / 0.25)" strokeWidth="1" />
      <rect x="156" y="274" width="80" height="10" rx="4" fill="oklch(0.72 0.19 45 / 0.6)" />
      <rect x="156" y="290" width="120" height="8" rx="4" fill="oklch(0.72 0.19 45 / 0.25)" />
      <rect x="156" y="306" width="100" height="8" rx="4" fill="oklch(0.4 0.18 140 / 0.6)" />
      {/* AI badge */}
      <rect x="310" y="20" width="100" height="36" rx="10" fill="oklch(0.72 0.19 45 / 0.15)" stroke="oklch(0.72 0.19 45 / 0.4)" strokeWidth="1" />
      <rect x="320" y="30" width="40" height="8" rx="3" fill="oklch(0.72 0.19 45 / 0.7)" />
      <rect x="368" y="30" width="30" height="8" rx="3" fill="oklch(0.72 0.19 45 / 0.4)" />
    </svg>
  ),
  // 3. Analytics & BI — bar chart + line chart
  () => (
    <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="480" height="360" fill="oklch(0.18 0.02 240)" />
      {/* Dashboard frame */}
      <rect x="20" y="20" width="440" height="320" rx="16" fill="oklch(0.21 0.02 240)" stroke="oklch(0.72 0.19 45 / 0.2)" strokeWidth="1" />
      {/* Header */}
      <rect x="20" y="20" width="440" height="48" rx="16" fill="oklch(0.72 0.19 45 / 0.12)" />
      <rect x="36" y="34" width="120" height="12" rx="5" fill="oklch(0.72 0.19 45 / 0.7)" />
      <circle cx="428" cy="44" r="10" fill="oklch(0.72 0.19 45 / 0.3)" />
      <circle cx="402" cy="44" r="10" fill="oklch(0.72 0.19 45 / 0.2)" />
      {/* Metric cards */}
      {[
        { x: 36, label: '40%', sub: 'Cost Down', color: 'oklch(0.4 0.18 140)' },
        { x: 146, label: '₦2.4B', sub: 'Saved', color: 'oklch(0.72 0.19 45)' },
        { x: 256, label: '99.9%', sub: 'Uptime', color: 'oklch(0.65 0.15 200)' },
        { x: 366, label: '25K', sub: 'Vehicles', color: 'oklch(0.6 0.18 280)' },
      ].map((m, i) => (
        <g key={i}>
          <rect x={m.x} y="84" width="94" height="56" rx="10" fill="oklch(0.24 0.02 240)" stroke={`${m.color.replace(')', ' / 0.3)')}`} strokeWidth="1" />
          <rect x={m.x + 10} y="96" width="50" height="14" rx="5" fill={m.color.replace(')', ' / 0.9)')} />
          <rect x={m.x + 10} y="116" width="70" height="8" rx="3" fill={m.color.replace(')', ' / 0.35)')} />
        </g>
      ))}
      {/* Bar chart */}
      <g>
        {[80, 120, 60, 150, 110, 90, 140].map((h, i) => (
          <g key={i}>
            <rect x={46 + i * 40} y={310 - h} width="24" height={h} rx="4"
              fill={i === 3 ? 'oklch(0.72 0.19 45)' : 'oklch(0.72 0.19 45 / 0.35)'}
            />
          </g>
        ))}
        <line x1="36" y1="310" x2="320" y2="310" stroke="oklch(0.72 0.19 45 / 0.2)" strokeWidth="1" />
      </g>
      {/* Line chart overlay */}
      <polyline
        points="46,260 86,220 126,240 166,190 206,210 246,200 286,180"
        stroke="oklch(0.65 0.15 200)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
      />
      {[46,86,126,166,206,246,286].map((x, i) => {
        const ys = [260,220,240,190,210,200,180]
        return <circle key={i} cx={x} cy={ys[i]} r="4" fill="oklch(0.65 0.15 200)" />
      })}
      {/* Right side mini donut */}
      <circle cx="400" cy="230" r="50" stroke="oklch(0.72 0.19 45 / 0.15)" strokeWidth="18" fill="none" />
      <circle cx="400" cy="230" r="50" stroke="oklch(0.72 0.19 45)" strokeWidth="18" fill="none"
        strokeDasharray="196 314" strokeDashoffset="78" strokeLinecap="round" />
      <circle cx="400" cy="230" r="50" stroke="oklch(0.4 0.18 140)" strokeWidth="18" fill="none"
        strokeDasharray="94 314" strokeDashoffset="-118" strokeLinecap="round" />
      <text x="400" y="226" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">62%</text>
      <text x="400" y="242" textAnchor="middle" fill="oklch(0.72 0.19 45 / 0.6)" fontSize="9">Efficiency</text>
    </svg>
  ),
  // 4. Driver Management — mobile app mockup
  () => (
    <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="480" height="360" fill="oklch(0.18 0.02 240)" />
      {/* Phone frame */}
      <rect x="160" y="20" width="160" height="320" rx="28" fill="oklch(0.12 0.02 240)" stroke="oklch(0.72 0.19 45 / 0.4)" strokeWidth="2" />
      <rect x="168" y="36" width="144" height="288" rx="16" fill="oklch(0.16 0.02 240)" />
      {/* Notch */}
      <rect x="200" y="30" width="80" height="14" rx="7" fill="oklch(0.12 0.02 240)" />
      {/* Status bar */}
      <rect x="176" y="44" width="30" height="6" rx="3" fill="oklch(0.72 0.19 45 / 0.4)" />
      <rect x="280" y="44" width="24" height="6" rx="3" fill="oklch(0.72 0.19 45 / 0.4)" />
      {/* App header */}
      <rect x="168" y="60" width="144" height="44" rx="0" fill="oklch(0.72 0.19 45 / 0.15)" />
      <rect x="180" y="72" width="80" height="10" rx="4" fill="oklch(0.72 0.19 45 / 0.8)" />
      <circle cx="288" cy="77" r="12" fill="oklch(0.72 0.19 45 / 0.25)" />
      {/* Map mini view */}
      <rect x="176" y="110" width="128" height="72" rx="8" fill="oklch(0.22 0.04 200 / 0.5)" />
      <path d="M176,150 Q220,130 260,150 T304,140" stroke="oklch(0.72 0.19 45 / 0.6)" strokeWidth="3" fill="none" />
      <circle cx="230" cy="140" r="6" fill="oklch(0.72 0.19 45)" />
      <circle cx="230" cy="140" r="11" fill="oklch(0.72 0.19 45 / 0.25)" />
      {/* Stats row */}
      {[180, 222, 264].map((x, i) => (
        <g key={i}>
          <rect x={x} y="196" width="34" height="38" rx="8" fill="oklch(0.24 0.02 240)" />
          <rect x={x + 6} y="204" width="22" height="10" rx="4" fill="oklch(0.72 0.19 45 / 0.7)" />
          <rect x={x + 6} y="220" width="18" height="6" rx="3" fill="oklch(0.72 0.19 45 / 0.3)" />
        </g>
      ))}
      {/* Task list */}
      {[248, 270, 292].map((y, i) => (
        <g key={i}>
          <rect x="176" y={y} width="128" height="18" rx="6" fill={i === 0 ? 'oklch(0.72 0.19 45 / 0.2)' : 'oklch(0.22 0.02 240)'} />
          <circle cx="188" cy={y + 9} r="5" fill={i === 0 ? 'oklch(0.72 0.19 45)' : 'oklch(0.72 0.19 45 / 0.3)'} />
          <rect x="200" y={y + 5} width="60" height="8" rx="3" fill="oklch(0.72 0.19 45 / 0.5)" />
          <rect x="268" y={y + 5} width="28" height="8" rx="3" fill="oklch(0.4 0.18 140 / 0.5)" />
        </g>
      ))}
      {/* Bottom nav */}
      <rect x="168" y="306" width="144" height="18" rx="0" fill="oklch(0.72 0.19 45 / 0.1)" />
      {[196, 228, 260, 292].map((x, i) => (
        <circle key={i} cx={x} cy="315" r={i === 0 ? 6 : 5} fill={i === 0 ? 'oklch(0.72 0.19 45)' : 'oklch(0.72 0.19 45 / 0.3)'} />
      ))}
      {/* Glow */}
      <ellipse cx="240" cy="190" rx="80" ry="100" fill="oklch(0.72 0.19 45 / 0.04)" />
    </svg>
  ),
  // 5. Safety & Compliance — shield + monitoring gauges
  () => (
    <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="480" height="360" fill="oklch(0.18 0.02 240)" />
      {/* Central shield */}
      <path d="M240,40 L320,80 L320,180 Q320,240 240,280 Q160,240 160,180 L160,80 Z"
        fill="oklch(0.72 0.19 45 / 0.12)" stroke="oklch(0.72 0.19 45 / 0.5)" strokeWidth="2.5" />
      <path d="M240,60 L308,94 L308,178 Q308,228 240,262 Q172,228 172,178 L172,94 Z"
        fill="oklch(0.72 0.19 45 / 0.08)" />
      {/* Checkmark in shield */}
      <polyline points="210,160 230,182 272,138" stroke="oklch(0.72 0.19 45)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Gauges */}
      {[
        { cx: 80, cy: 200, pct: 0.82, color: 'oklch(0.4 0.18 140)', label: 'Safety' },
        { cx: 400, cy: 200, pct: 0.91, color: 'oklch(0.72 0.19 45)', label: 'Compliance' },
        { cx: 80, cy: 300, pct: 0.65, color: 'oklch(0.65 0.15 200)', label: 'Alerts' },
        { cx: 400, cy: 300, pct: 0.78, color: 'oklch(0.6 0.18 280)', label: 'Score' },
      ].map((g, i) => {
        const r = 34
        const circ = 2 * Math.PI * r
        const dash = g.pct * circ
        return (
          <g key={i}>
            <circle cx={g.cx} cy={g.cy} r={r} stroke="oklch(0.72 0.19 45 / 0.1)" strokeWidth="8" fill="none" />
            <circle cx={g.cx} cy={g.cy} r={r} stroke={g.color} strokeWidth="8" fill="none"
              strokeDasharray={`${dash} ${circ}`} strokeDashoffset={circ * 0.25} strokeLinecap="round" />
            <text x={g.cx} y={g.cy - 4} textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">
              {Math.round(g.pct * 100)}%
            </text>
            <text x={g.cx} y={g.cy + 10} textAnchor="middle" fill="oklch(0.72 0.19 45 / 0.6)" fontSize="8">
              {g.label}
            </text>
          </g>
        )
      })}
      {/* Alert badges */}
      <rect x="130" y="50" width="90" height="28" rx="10" fill="oklch(0.4 0.18 140 / 0.2)" stroke="oklch(0.4 0.18 140 / 0.5)" strokeWidth="1" />
      <circle cx="148" cy="64" r="6" fill="oklch(0.4 0.18 140)" />
      <rect x="160" y="58" width="50" height="8" rx="3" fill="oklch(0.4 0.18 140 / 0.7)" />
      <rect x="260" y="50" width="90" height="28" rx="10" fill="oklch(0.72 0.19 45 / 0.2)" stroke="oklch(0.72 0.19 45 / 0.5)" strokeWidth="1" />
      <circle cx="278" cy="64" r="6" fill="oklch(0.72 0.19 45)" />
      <rect x="290" y="58" width="50" height="8" rx="3" fill="oklch(0.72 0.19 45 / 0.7)" />
      {/* Glow */}
      <ellipse cx="240" cy="160" rx="100" ry="80" fill="oklch(0.72 0.19 45 / 0.05)" />
    </svg>
  ),
  // 6. Sustainability — leaf + carbon chart
  () => (
    <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="480" height="360" fill="oklch(0.18 0.02 240)" />
      {/* Background leaf shape */}
      <path d="M240,40 Q360,40 360,160 Q360,280 240,320 Q240,320 240,320 Q240,40 240,40 Z"
        fill="oklch(0.4 0.18 140 / 0.08)" />
      <path d="M240,40 Q120,40 120,160 Q120,280 240,320 Q240,320 240,320 Q240,40 240,40 Z"
        fill="oklch(0.4 0.18 140 / 0.05)" />
      {/* Leaf icon */}
      <path d="M240,80 Q300,80 300,140 Q300,200 240,220 Q240,220 240,80 Z" fill="oklch(0.4 0.18 140 / 0.3)" />
      <path d="M240,80 Q180,80 180,140 Q180,200 240,220 Q240,220 240,80 Z" fill="oklch(0.4 0.18 140 / 0.2)" />
      <line x1="240" y1="80" x2="240" y2="220" stroke="oklch(0.4 0.18 140 / 0.6)" strokeWidth="2" />
      <path d="M240,150 Q260,140 280,120" stroke="oklch(0.4 0.18 140 / 0.5)" strokeWidth="1.5" fill="none" />
      <path d="M240,170 Q255,162 270,148" stroke="oklch(0.4 0.18 140 / 0.4)" strokeWidth="1.5" fill="none" />
      {/* Carbon reduction chart */}
      <rect x="30" y="240" width="180" height="100" rx="12" fill="oklch(0.22 0.02 240)" stroke="oklch(0.4 0.18 140 / 0.3)" strokeWidth="1" />
      <rect x="44" y="252" width="90" height="10" rx="4" fill="oklch(0.4 0.18 140 / 0.6)" />
      {/* Downward trend bars */}
      {[90, 74, 58, 44, 32, 22].map((h, i) => (
        <rect key={i} x={44 + i * 24} y={330 - h} width="16" height={h} rx="3"
          fill={`oklch(0.4 0.18 140 / ${0.3 + i * 0.12})`} />
      ))}
      <line x1="44" y1="330" x2="188" y2="330" stroke="oklch(0.4 0.18 140 / 0.3)" strokeWidth="1" />
      {/* Eco score panel */}
      <rect x="270" y="240" width="180" height="100" rx="12" fill="oklch(0.22 0.02 240)" stroke="oklch(0.4 0.18 140 / 0.3)" strokeWidth="1" />
      <circle cx="360" cy="286" r="36" stroke="oklch(0.4 0.18 140 / 0.15)" strokeWidth="10" fill="none" />
      <circle cx="360" cy="286" r="36" stroke="oklch(0.4 0.18 140)" strokeWidth="10" fill="none"
        strokeDasharray="161 226" strokeDashoffset="56" strokeLinecap="round" />
      <text x="360" y="282" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">A+</text>
      <text x="360" y="297" textAnchor="middle" fill="oklch(0.4 0.18 140 / 0.7)" fontSize="9">Eco Score</text>
      {/* Stats */}
      <rect x="30" y="50" width="140" height="60" rx="12" fill="oklch(0.22 0.02 240)" stroke="oklch(0.4 0.18 140 / 0.3)" strokeWidth="1" />
      <rect x="44" y="64" width="60" height="14" rx="5" fill="oklch(0.4 0.18 140 / 0.8)" />
      <rect x="44" y="84" width="100" height="8" rx="3" fill="oklch(0.4 0.18 140 / 0.3)" />
      <rect x="310" y="50" width="140" height="60" rx="12" fill="oklch(0.22 0.02 240)" stroke="oklch(0.72 0.19 45 / 0.3)" strokeWidth="1" />
      <rect x="324" y="64" width="60" height="14" rx="5" fill="oklch(0.72 0.19 45 / 0.8)" />
      <rect x="324" y="84" width="100" height="8" rx="3" fill="oklch(0.72 0.19 45 / 0.3)" />
    </svg>
  ),
]

const containerVariants = {  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              <span className="text-foreground">Smart Transport Solutions Built for </span>
              <span className="text-gradient">Security, Efficiency & Sustainability</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive fleet management solutions designed for the Nigerian market — 
              built to handle Lagos traffic, Abuja corridors, and everything in between.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions List */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-20 md:space-y-32"
          >
            {solutions.map((solution, index) => {
              const Illustration = SolutionIllustrations[index]
              return (
                <motion.div
                  key={solution.title}
                  variants={itemVariants}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-12 lg:gap-16 items-center`}
                >
                  {/* Illustration */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-border">
                      <Illustration />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <solution.icon className="w-7 h-7 text-primary" />
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {solution.title}
                    </h2>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {solution.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full"
                    >
                      <Link href="/contact" className="flex items-center">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
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
              <span className="text-foreground">Ready to </span>
              <span className="text-gradient">Transform Your Fleet?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a personalized demo and see how TransitFlow can revolutionize your operations across Nigeria.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 rounded-full"
            >
              <Link href="/contact" className="flex items-center">
                Request a Demo
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
