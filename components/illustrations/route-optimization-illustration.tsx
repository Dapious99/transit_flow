export function RouteOptimizationIllustration() {
  return (
    <svg
      viewBox="0 0 720 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      role="img"
      aria-label="AI route optimization map showing optimal fleet paths"
    >
      <defs>
        <linearGradient id="roMapGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.16 0.04 230)" />
          <stop offset="100%" stopColor="oklch(0.14 0.03 230)" />
        </linearGradient>
        <linearGradient id="roOptRoute" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FF9D40" />
          <stop offset="100%" stopColor="#FF5800" />
        </linearGradient>
        <filter id="roGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="720" height="400" fill="url(#roMapGrad)" />

      {/* ── SIDEBAR PANEL (left) ── */}
      <rect x="0" y="0" width="200" height="400" fill="oklch(0.18 0.04 230)" />
      <rect x="0" y="0" width="200" height="1" fill="oklch(0.72 0.19 45 / 0.3)" />

      {/* Sidebar header */}
      <rect x="16" y="16" width="120" height="10" rx="4" fill="oklch(0.72 0.19 45 / 0.9)" />
      <rect x="16" y="32" width="80" height="7" rx="3" fill="oklch(0.72 0.19 45 / 0.4)" />

      {/* Divider */}
      <line x1="16" y1="52" x2="184" y2="52" stroke="oklch(0.72 0.19 45 / 0.15)" strokeWidth="1" />

      {/* Stat cards */}
      {[
        { y: 62, label: 'Distance Saved', value: '2.4 km', color: 'oklch(0.4 0.18 140)' },
        { y: 118, label: 'Time Saved', value: '18 min', color: 'oklch(0.72 0.19 45)' },
        { y: 174, label: 'Fuel Saved', value: '1.8 L', color: 'oklch(0.65 0.15 200)' },
        { y: 230, label: 'CO₂ Avoided', value: '4.2 kg', color: 'oklch(0.55 0.15 160)' },
      ].map((s, i) => (
        <g key={i}>
          <rect x="12" y={s.y} width="176" height="48" rx="8"
            fill="oklch(0.21 0.04 230)" stroke={s.color} strokeOpacity="0.3" strokeWidth="1" />
          <rect x="12" y={s.y} width="4" height="48" rx="2" fill={s.color} />
          <rect x="24" y={s.y + 10} width="80" height="7" rx="3" fill="oklch(0.72 0.19 45 / 0.5)" />
          <rect x="24" y={s.y + 24} width="60" height="12" rx="4" fill={`${s.color}`} opacity="0.9" />
          <rect x="88" y={s.y + 24} width="40" height="12" rx="3" fill="oklch(0.72 0.19 45 / 0.15)" />
        </g>
      ))}

      {/* Vehicle list */}
      <rect x="16" y="294" width="120" height="8" rx="3" fill="oklch(0.72 0.19 45 / 0.6)" />
      {[314, 334, 354].map((y, i) => (
        <g key={y}>
          <circle cx="26" cy={y + 4} r="5"
            fill={['oklch(0.72 0.19 45)', 'oklch(0.4 0.18 140)', 'oklch(0.65 0.15 200)'][i]} />
          <rect x="38" y={y} width="70" height="7" rx="3" fill="oklch(0.72 0.19 45 / 0.4)" />
          <rect x="116" y={y} width="50" height="7" rx="3" fill="oklch(0.72 0.19 45 / 0.2)" />
        </g>
      ))}

      {/* Recalculate button */}
      <rect x="12" y="375" width="176" height="16" rx="8" fill="oklch(0.72 0.19 45)" />
      <rect x="40" y="379" width="100" height="8" rx="3" fill="white" opacity="0.8" />

      {/* ── MAP AREA (right) ── */}

      {/* Map grid (roads) */}
      {[280, 370, 460, 550, 640].map(x => (
        <line key={`vr${x}`} x1={x} y1="0" x2={x} y2="400"
          stroke="oklch(0.72 0.19 45 / 0.06)" strokeWidth="1" />
      ))}
      {[80, 160, 240, 320].map(y => (
        <line key={`hr${y}`} x1="200" y1={y} x2="720" y2={y}
          stroke="oklch(0.72 0.19 45 / 0.06)" strokeWidth="1" />
      ))}

      {/* Major road grid - thicker streets */}
      <line x1="200" y1="160" x2="720" y2="160" stroke="oklch(0.25 0.04 230)" strokeWidth="8" />
      <line x1="200" y1="280" x2="720" y2="280" stroke="oklch(0.25 0.04 230)" strokeWidth="8" />
      <line x1="370" y1="0" x2="370" y2="400" stroke="oklch(0.25 0.04 230)" strokeWidth="8" />
      <line x1="550" y1="0" x2="550" y2="400" stroke="oklch(0.25 0.04 230)" strokeWidth="8" />

      {/* Road center lines */}
      <line x1="200" y1="160" x2="720" y2="160" stroke="oklch(0.35 0.04 230)" strokeWidth="1" strokeDasharray="12 8" />
      <line x1="200" y1="280" x2="720" y2="280" stroke="oklch(0.35 0.04 230)" strokeWidth="1" strokeDasharray="12 8" />

      {/* City blocks */}
      {[
        [210, 10, 150, 140],
        [370, 10, 170, 140],
        [550, 10, 160, 140],
        [210, 170, 150, 100],
        [370, 170, 170, 100],
        [550, 170, 160, 100],
        [210, 290, 150, 100],
        [370, 290, 170, 100],
        [550, 290, 160, 100],
      ].map(([x, y, w, h], i) => (
        <rect key={i} x={x + 4} y={y + 4} width={w - 8} height={h - 8} rx="4"
          fill="oklch(0.20 0.04 230)" />
      ))}

      {/* Avoided routes (gray dashed) */}
      <path d="M 280,280 L 280,160 L 460,160"
        stroke="oklch(0.45 0.04 230)" strokeWidth="3" fill="none" strokeDasharray="8 5" strokeLinecap="round" />
      <path d="M 280,280 L 460,280 L 460,160"
        stroke="oklch(0.40 0.04 230)" strokeWidth="2.5" fill="none" strokeDasharray="6 5" strokeLinecap="round" />

      {/* Optimal route (orange glowing) */}
      <path d="M 280,320 Q 310,280 370,280 L 550,280 Q 580,280 600,240 L 600,160 L 640,160"
        stroke="oklch(0.72 0.19 45 / 0.3)" strokeWidth="14" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 280,320 Q 310,280 370,280 L 550,280 Q 580,280 600,240 L 600,160 L 640,160"
        stroke="url(#roOptRoute)" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"
        filter="url(#roGlow)" />

      {/* Route dots at key intersections */}
      {[
        { cx: 370, cy: 280 },
        { cx: 550, cy: 280 },
        { cx: 600, cy: 160 },
      ].map((pt, i) => (
        <g key={i}>
          <circle cx={pt.cx} cy={pt.cy} r="6" fill="#FF9D40" />
          <circle cx={pt.cx} cy={pt.cy} r="10" fill="oklch(0.72 0.19 45 / 0.25)" />
        </g>
      ))}

      {/* Origin pin (vehicle start) */}
      <g transform="translate(280, 320)">
        <circle cx="0" cy="0" r="14" fill="oklch(0.72 0.19 45 / 0.2)" />
        <circle cx="0" cy="0" r="9" fill="oklch(0.72 0.19 45)" />
        {/* Truck icon simplified */}
        <rect x="-5" y="-3" width="8" height="5" rx="1" fill="white" />
        <rect x="1" y="-5" width="4" height="3" rx="0.5" fill="white" />
        <circle cx="-3" cy="2" r="1.5" fill="oklch(0.72 0.19 45 / 0.7)" />
        <circle cx="4" cy="2" r="1.5" fill="oklch(0.72 0.19 45 / 0.7)" />
      </g>

      {/* Destination pin */}
      <g transform="translate(640, 160)">
        <circle cx="0" cy="0" r="12" fill="oklch(0.4 0.18 140 / 0.25)" />
        <circle cx="0" cy="0" r="8" fill="oklch(0.4 0.18 140)" />
        <circle cx="0" cy="0" r="3" fill="white" />
        <polygon points="0,12 -5,0 5,0" fill="oklch(0.4 0.18 140)" />
      </g>

      {/* Second vehicle */}
      <g transform="translate(450, 80)">
        <circle cx="0" cy="0" r="12" fill="oklch(0.65 0.15 200 / 0.2)" />
        <circle cx="0" cy="0" r="8" fill="oklch(0.65 0.15 200)" />
        <rect x="-5" y="-3" width="8" height="5" rx="1" fill="white" />
        <rect x="1" y="-5" width="4" height="3" rx="0.5" fill="white" />
        <circle cx="-3" cy="2" r="1.5" fill="oklch(0.65 0.15 200 / 0.6)" />
        <circle cx="4" cy="2" r="1.5" fill="oklch(0.65 0.15 200 / 0.6)" />
      </g>

      {/* Info tooltip on route */}
      <rect x="430" y="250" width="130" height="36" rx="8" fill="oklch(0.22 0.04 230)" stroke="oklch(0.72 0.19 45 / 0.5)" strokeWidth="1" />
      <rect x="440" y="259" width="60" height="7" rx="3" fill="oklch(0.72 0.19 45 / 0.7)" />
      <rect x="440" y="271" width="80" height="7" rx="3" fill="oklch(0.72 0.19 45 / 0.35)" />
      <rect x="530" y="259" width="22" height="18" rx="4" fill="oklch(0.4 0.18 140 / 0.25)" />
      <rect x="534" y="263" width="14" height="9" rx="2" fill="oklch(0.4 0.18 140)" />

      {/* Top bar */}
      <rect x="200" y="0" width="520" height="36" fill="oklch(0.19 0.04 230 / 0.95)" />
      <rect x="216" y="12" width="80" height="9" rx="4" fill="oklch(0.72 0.19 45 / 0.8)" />
      <rect x="310" y="12" width="60" height="9" rx="4" fill="oklch(0.72 0.19 45 / 0.3)" />
      <rect x="386" y="12" width="60" height="9" rx="4" fill="oklch(0.72 0.19 45 / 0.3)" />
      <rect x="600" y="8" width="80" height="18" rx="6" fill="oklch(0.72 0.19 45)" />
      <rect x="614" y="13" width="52" height="8" rx="3" fill="white" opacity="0.85" />
    </svg>
  )
}
