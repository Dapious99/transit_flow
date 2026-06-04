const nodes = [
  {
    x: 90, label: 'Vehicle', sub: 'GPS + OBD-II',
    icon: (
      <g transform="translate(-18,-12)">
        <rect x="4" y="6" width="32" height="18" rx="3" fill="oklch(0.72 0.19 45)" />
        <rect x="0" y="9" width="10" height="15" rx="2" fill="oklch(0.62 0.16 45)" />
        <rect x="2" y="11" width="7" height="8" rx="1" fill="oklch(0.85 0.06 45 / 0.7)" />
        <circle cx="8"  cy="26" r="5" fill="oklch(0.12 0.02 240)" stroke="oklch(0.72 0.19 45)" strokeWidth="1.5" />
        <circle cx="28" cy="26" r="5" fill="oklch(0.12 0.02 240)" stroke="oklch(0.72 0.19 45)" strokeWidth="1.5" />
        <circle cx="8"  cy="26" r="2" fill="oklch(0.55 0.1 45)" />
        <circle cx="28" cy="26" r="2" fill="oklch(0.55 0.1 45)" />
      </g>
    ),
    color: 'oklch(0.72 0.19 45)',
    bg: 'oklch(0.72 0.19 45 / 0.12)',
    border: 'oklch(0.72 0.19 45 / 0.4)',
  },
  {
    x: 280, label: 'IoT Device', sub: '4G / NB-IoT',
    icon: (
      <g transform="translate(-12,-14)">
        <rect x="2" y="2" width="20" height="24" rx="3" fill="oklch(0.4 0.16 200)" />
        <rect x="6" y="6" width="12" height="8"  rx="1" fill="oklch(0.65 0.15 200 / 0.6)" />
        {[0,1,2].map(i => (
          <rect key={i} x={6+i*4} y="16" width="3" height="8" rx="1" fill="oklch(0.65 0.15 200 / 0.7)" />
        ))}
        <path d="M26,4 Q32,8 26,14" stroke="oklch(0.65 0.15 200)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M26,1 Q36,8 26,17" stroke="oklch(0.65 0.15 200 / 0.5)" strokeWidth="1" fill="none" strokeLinecap="round" />
      </g>
    ),
    color: 'oklch(0.65 0.15 200)',
    bg: 'oklch(0.65 0.15 200 / 0.1)',
    border: 'oklch(0.65 0.15 200 / 0.4)',
  },
  {
    x: 470, label: 'Cloud AI', sub: 'Edge Processing',
    icon: (
      <g transform="translate(-16,-10)">
        <path d="M8,22 Q2,22 2,16 Q2,10 8,10 Q8,4 16,4 Q22,4 24,10 Q30,10 30,16 Q30,22 24,22 Z"
          fill="oklch(0.6 0.18 280 / 0.8)" />
        <path d="M16,8 L12,16 L16,16 L14,22 L20,14 L16,14 Z" fill="white" opacity="0.9" />
      </g>
    ),
    color: 'oklch(0.6 0.18 280)',
    bg: 'oklch(0.6 0.18 280 / 0.1)',
    border: 'oklch(0.6 0.18 280 / 0.4)',
  },
  {
    x: 660, label: 'Dashboard', sub: 'Live Analytics',
    icon: (
      <g transform="translate(-16,-12)">
        <rect x="2" y="2" width="28" height="20" rx="3" fill="oklch(0.24 0.04 240)" stroke="oklch(0.72 0.19 45 / 0.5)" strokeWidth="1" />
        {[6,9,5,12,8].map((h, i) => (
          <rect key={i} x={5+i*4} y={18-h} width="3" height={h} rx="1"
            fill={i===3 ? 'oklch(0.72 0.19 45)' : 'oklch(0.72 0.19 45 / 0.4)'} />
        ))}
        <rect x="13" y="22" width="6" height="4" rx="1" fill="oklch(0.24 0.04 240)" stroke="oklch(0.72 0.19 45 / 0.3)" strokeWidth="1" />
        <rect x="10" y="26" width="12" height="2" rx="1" fill="oklch(0.72 0.19 45 / 0.4)" />
      </g>
    ),
    color: 'oklch(0.72 0.19 45)',
    bg: 'oklch(0.72 0.19 45 / 0.12)',
    border: 'oklch(0.72 0.19 45 / 0.4)',
  },
  {
    x: 850, label: 'Driver App', sub: 'iOS & Android',
    icon: (
      <g transform="translate(-10,-15)">
        <rect x="2" y="0" width="16" height="28" rx="4"
          fill="oklch(0.20 0.04 240)" stroke="oklch(0.4 0.18 140 / 0.6)" strokeWidth="1.5" />
        <rect x="4" y="3" width="12" height="20" rx="2" fill="oklch(0.14 0.03 230)" />
        <circle cx="10" cy="11" r="3" fill="oklch(0.4 0.18 140)" />
        <circle cx="10" cy="11" r="5" fill="oklch(0.4 0.18 140 / 0.2)" />
        <path d="M4,16 Q8,14 12,16 T16,14" stroke="oklch(0.4 0.18 140 / 0.6)" strokeWidth="1.5" fill="none" />
        <rect x="8" y="25" width="6" height="2" rx="1" fill="oklch(0.4 0.18 140 / 0.5)" />
      </g>
    ),
    color: 'oklch(0.4 0.18 140)',
    bg: 'oklch(0.4 0.18 140 / 0.1)',
    border: 'oklch(0.4 0.18 140 / 0.4)',
  },
]

export function HowItWorksIllustration() {
  return (
    <svg
      viewBox="0 0 940 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      role="img"
      aria-label="How TransitFlow works: Vehicle to IoT Device to Cloud AI to Dashboard to Driver App"
    >
      {/* Connecting arcs */}
      {nodes.slice(0, -1).map((node, i) => {
        const nx = nodes[i + 1].x
        const mx = (node.x + nx) / 2
        return (
          <g key={i}>
            <path d={`M${node.x + 54},80 Q${mx},50 ${nx - 54},80`}
              stroke="oklch(0.72 0.19 45 / 0.15)" strokeWidth="2" fill="none" strokeDasharray="6 4" />
            <path d={`M${nx - 60},76 L${nx - 54},80 L${nx - 60},84`}
              stroke="oklch(0.72 0.19 45 / 0.45)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx={mx} cy={54} r="5" fill="oklch(0.72 0.19 45 / 0.6)" />
            <circle cx={mx} cy={54} r="9" fill="oklch(0.72 0.19 45 / 0.12)" />
          </g>
        )
      })}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <g key={i} transform={`translate(${node.x}, 80)`}>
          <circle cx="0" cy="0" r="54" fill={node.bg} stroke={node.border} strokeWidth="1.5" />
          <circle cx="0" cy="0" r="42" fill={node.bg} />
          {node.icon}
          <circle cx="36" cy="-36" r="12" fill={node.color} />
          <text x="36" y="-32" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
            {i + 1}
          </text>
          <text x="0" y="70" textAnchor="middle" fill="white" fontSize="11" fontWeight="600" fontFamily="sans-serif">
            {node.label}
          </text>
          <text x="0" y="84" textAnchor="middle" fill="oklch(0.72 0.19 45 / 0.55)" fontSize="9" fontFamily="sans-serif">
            {node.sub}
          </text>
        </g>
      ))}
    </svg>
  )
}
