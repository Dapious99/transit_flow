export function CityLogisticsIllustration() {
  return (
    <svg
      viewBox="0 0 800 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      role="img"
      aria-label="Nigerian city logistics network illustration"
    >
      <defs>
        <linearGradient id="cliSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.16 0.04 240)" />
          <stop offset="100%" stopColor="oklch(0.20 0.03 220)" />
        </linearGradient>
        <linearGradient id="cliRoad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="oklch(0.72 0.19 45 / 0)" />
          <stop offset="40%"  stopColor="oklch(0.72 0.19 45 / 0.6)" />
          <stop offset="60%"  stopColor="oklch(0.72 0.19 45 / 0.6)" />
          <stop offset="100%" stopColor="oklch(0.72 0.19 45 / 0)" />
        </linearGradient>
      </defs>

      <rect width="800" height="420" fill="url(#cliSky)" />

      {/* Grid */}
      {[100,200,300,400,500,600,700].map(x => (
        <line key={`vg${x}`} x1={x} y1="0" x2={x} y2="420" stroke="oklch(0.72 0.19 45 / 0.04)" strokeWidth="1" />
      ))}
      {[80,160,240,320,400].map(y => (
        <line key={`hg${y}`} x1="0" y1={y} x2="800" y2={y} stroke="oklch(0.72 0.19 45 / 0.04)" strokeWidth="1" />
      ))}

      {/* Horizon glow */}
      <ellipse cx="400" cy="310" rx="420" ry="80" fill="oklch(0.72 0.19 45 / 0.06)" />

      {/* Background buildings */}
      <rect x="30"  y="220" width="28" height="100" rx="2" fill="oklch(0.22 0.03 240)" />
      <rect x="65"  y="200" width="22" height="120" rx="2" fill="oklch(0.21 0.03 240)" />
      <rect x="94"  y="230" width="20" height="90"  rx="2" fill="oklch(0.22 0.03 240)" />
      <rect x="680" y="215" width="26" height="105" rx="2" fill="oklch(0.22 0.03 240)" />
      <rect x="712" y="200" width="30" height="120" rx="2" fill="oklch(0.21 0.03 240)" />
      <rect x="748" y="225" width="22" height="95"  rx="2" fill="oklch(0.22 0.03 240)" />

      {/* Mid buildings */}
      <rect x="140" y="160" width="44" height="160" rx="3" fill="oklch(0.24 0.03 240)" />
      <rect x="190" y="180" width="36" height="140" rx="3" fill="oklch(0.23 0.03 240)" />
      <rect x="232" y="140" width="52" height="180" rx="3" fill="oklch(0.25 0.04 240)" />
      {[0,1,2,3].map(row => [0,1,2].map(col => (
        <rect key={`w1${row}${col}`} x={146 + col * 12} y={170 + row * 22} width="7" height="10" rx="1"
          fill={`oklch(0.72 0.19 45 / ${(row+col) % 2 === 0 ? 0.55 : 0.12})`} />
      )))}
      {[0,1,2,3,4].map(row => [0,1,2,3].map(col => (
        <rect key={`w2${row}${col}`} x={238 + col * 11} y={150 + row * 22} width="7" height="10" rx="1"
          fill={`oklch(0.72 0.19 45 / ${(row*2+col) % 3 === 0 ? 0.5 : 0.1})`} />
      )))}

      {/* Hero tall building */}
      <rect x="310" y="100" width="70" height="220" rx="4" fill="oklch(0.26 0.05 230)" />
      <rect x="314" y="96"  width="62" height="8"   rx="2" fill="oklch(0.72 0.19 45 / 0.5)" />
      <rect x="344" y="76"  width="4"  height="24"  rx="1" fill="oklch(0.72 0.19 45 / 0.8)" />
      <circle cx="346" cy="74" r="4" fill="oklch(0.72 0.19 45)" />
      {[0,1,2,3,4,5,6].map(row => [0,1,2,3].map(col => (
        <rect key={`hw${row}${col}`} x={318 + col * 14} y={108 + row * 24} width="9" height="14" rx="1"
          fill={`oklch(0.72 0.19 45 / ${(row+col) % 2 === 0 ? 0.55 : 0.1})`} />
      )))}

      {/* Right cluster */}
      <rect x="430" y="150" width="58" height="170" rx="3" fill="oklch(0.25 0.04 235)" />
      <rect x="494" y="170" width="46" height="150" rx="3" fill="oklch(0.24 0.03 240)" />
      <rect x="546" y="130" width="64" height="190" rx="4" fill="oklch(0.26 0.05 230)" />
      <rect x="576" y="112" width="4"  height="22"  rx="1" fill="oklch(0.72 0.19 45 / 0.7)" />
      <circle cx="578" cy="110" r="3.5" fill="oklch(0.72 0.19 45)" />
      {[0,1,2,3,4].map(row => [0,1,2,3].map(col => (
        <rect key={`rw${row}${col}`} x={552 + col * 13} y={140 + row * 24} width="8" height="14" rx="1"
          fill={`oklch(0.72 0.19 45 / ${(row+col*2) % 3 === 0 ? 0.5 : 0.1})`} />
      )))}

      {/* Ground */}
      <rect x="0" y="318" width="800" height="102" fill="oklch(0.17 0.02 240)" />
      <rect x="0" y="322" width="800" height="56"  fill="oklch(0.20 0.02 240)" />
      <line x1="0" y1="350" x2="800" y2="350" stroke="url(#cliRoad)" strokeWidth="2" strokeDasharray="30 18" />
      <line x1="0" y1="324" x2="800" y2="324" stroke="oklch(0.72 0.19 45 / 0.25)" strokeWidth="1.5" />
      <line x1="0" y1="376" x2="800" y2="376" stroke="oklch(0.72 0.19 45 / 0.25)" strokeWidth="1.5" />

      {/* Truck 1 */}
      <g transform="translate(120, 330)">
        <rect x="0" y="0" width="80" height="28" rx="4" fill="oklch(0.72 0.19 45)" />
        <rect x="0" y="0" width="26" height="28" rx="4" fill="oklch(0.65 0.17 45)" />
        <rect x="3" y="4" width="18" height="14" rx="2" fill="oklch(0.85 0.08 45 / 0.7)" />
        <circle cx="18" cy="30" r="8" fill="oklch(0.15 0.02 240)" stroke="oklch(0.72 0.19 45 / 0.6)" strokeWidth="2" />
        <circle cx="60" cy="30" r="8" fill="oklch(0.15 0.02 240)" stroke="oklch(0.72 0.19 45 / 0.6)" strokeWidth="2" />
        <circle cx="18" cy="30" r="3" fill="oklch(0.5 0.1 45)" />
        <circle cx="60" cy="30" r="3" fill="oklch(0.5 0.1 45)" />
        <circle cx="55" cy="-10" r="5"  fill="oklch(0.72 0.19 45)" />
        <circle cx="55" cy="-10" r="9"  fill="oklch(0.72 0.19 45 / 0.25)" />
        <circle cx="55" cy="-10" r="14" fill="oklch(0.72 0.19 45 / 0.1)" />
      </g>

      {/* Truck 2 */}
      <g transform="translate(560, 332) scale(-1,1) translate(-80,0)">
        <rect x="0" y="0" width="80" height="26" rx="4" fill="oklch(0.55 0.14 200)" />
        <rect x="0" y="0" width="24" height="26" rx="4" fill="oklch(0.48 0.12 200)" />
        <rect x="3" y="4" width="16" height="12" rx="2" fill="oklch(0.75 0.06 200 / 0.7)" />
        <circle cx="18" cy="28" r="7" fill="oklch(0.15 0.02 240)" stroke="oklch(0.55 0.14 200 / 0.6)" strokeWidth="2" />
        <circle cx="60" cy="28" r="7" fill="oklch(0.15 0.02 240)" stroke="oklch(0.55 0.14 200 / 0.6)" strokeWidth="2" />
        <circle cx="18" cy="28" r="3" fill="oklch(0.4 0.1 200)" />
        <circle cx="60" cy="28" r="3" fill="oklch(0.4 0.1 200)" />
        <circle cx="55" cy="-10" r="5"  fill="oklch(0.55 0.14 200)" />
        <circle cx="55" cy="-10" r="9"  fill="oklch(0.55 0.14 200 / 0.25)" />
        <circle cx="55" cy="-10" r="14" fill="oklch(0.55 0.14 200 / 0.1)" />
      </g>

      {/* Truck 3 small */}
      <g transform="translate(700, 334)">
        <rect x="0" y="0" width="52" height="18" rx="3" fill="oklch(0.62 0.16 45 / 0.7)" />
        <rect x="0" y="0" width="16" height="18" rx="3" fill="oklch(0.56 0.14 45 / 0.8)" />
        <circle cx="12" cy="20" r="5" fill="oklch(0.15 0.02 240)" stroke="oklch(0.72 0.19 45 / 0.5)" strokeWidth="1.5" />
        <circle cx="40" cy="20" r="5" fill="oklch(0.15 0.02 240)" stroke="oklch(0.72 0.19 45 / 0.5)" strokeWidth="1.5" />
      </g>

      {/* Connectivity arcs */}
      <path d="M175,318 Q280,200 346,100" stroke="oklch(0.72 0.19 45 / 0.35)" strokeWidth="1.5" fill="none" strokeDasharray="6 4" />
      <path d="M605,322 Q620,200 578,120" stroke="oklch(0.55 0.14 200 / 0.35)" strokeWidth="1.5" fill="none" strokeDasharray="6 4" />
      <path d="M175,310 Q400,100 605,310" stroke="oklch(0.72 0.19 45 / 0.15)" strokeWidth="1" fill="none" strokeDasharray="4 8" />

      {/* Map pins */}
      <g transform="translate(346, 68)">
        <circle cx="0" cy="0" r="10" fill="oklch(0.72 0.19 45)" />
        <circle cx="0" cy="0" r="4"  fill="white" />
        <polygon points="0,14 -6,0 6,0" fill="oklch(0.72 0.19 45)" />
        <circle cx="0" cy="16" r="3" fill="oklch(0.72 0.19 45 / 0.3)" />
      </g>
      <g transform="translate(578, 102)">
        <circle cx="0" cy="0" r="9"   fill="oklch(0.4 0.18 140)" />
        <circle cx="0" cy="0" r="3.5" fill="white" />
        <polygon points="0,12 -5,0 5,0" fill="oklch(0.4 0.18 140)" />
        <circle cx="0" cy="14" r="2.5" fill="oklch(0.4 0.18 140 / 0.3)" />
      </g>

      {/* HUD card */}
      <rect x="14" y="14" width="170" height="88" rx="12" fill="oklch(0.20 0.04 240 / 0.9)" stroke="oklch(0.72 0.19 45 / 0.35)" strokeWidth="1" />
      <rect x="26" y="26" width="80" height="10" rx="4" fill="oklch(0.72 0.19 45 / 0.7)" />
      <rect x="26" y="42" width="56" height="7"  rx="3" fill="oklch(0.72 0.19 45 / 0.3)" />
      <rect x="26" y="56" width="130" height="1" fill="oklch(0.72 0.19 45 / 0.15)" />
      {[0,1,2].map(i => (
        <g key={i}>
          <circle cx={30 + i * 46} cy="72" r="5"   fill="oklch(0.72 0.19 45 / 0.2)" />
          <circle cx={30 + i * 46} cy="72" r="2.5" fill="oklch(0.72 0.19 45)" />
          <rect x={38 + i * 46} y="68" width="28" height="7" rx="3" fill="oklch(0.72 0.19 45 / 0.35)" />
          <rect x={38 + i * 46} y="78" width="20" height="5" rx="2" fill="oklch(0.72 0.19 45 / 0.2)" />
        </g>
      ))}
      <rect x="26" y="88" width="146" height="8" rx="4" fill="oklch(0.4 0.18 140 / 0.35)" />

      {/* Live badge */}
      <rect x="616" y="14" width="70" height="26" rx="8" fill="oklch(0.72 0.19 45 / 0.15)" stroke="oklch(0.72 0.19 45 / 0.4)" strokeWidth="1" />
      <circle cx="630" cy="27" r="4" fill="oklch(0.72 0.19 45)" />
      <rect x="638" y="23" width="38" height="8" rx="3" fill="oklch(0.72 0.19 45 / 0.7)" />

      {/* Route distance badge */}
      <rect x="330" y="260" width="140" height="40" rx="10" fill="oklch(0.20 0.04 240 / 0.9)" stroke="oklch(0.72 0.19 45 / 0.3)" strokeWidth="1" />
      <rect x="342" y="270" width="60"  height="9" rx="4" fill="oklch(0.72 0.19 45 / 0.7)" />
      <rect x="342" y="284" width="110" height="7" rx="3" fill="oklch(0.72 0.19 45 / 0.3)" />
    </svg>
  )
}
