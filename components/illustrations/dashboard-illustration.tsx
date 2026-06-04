export function DashboardIllustration() {
  return (
    <svg
      viewBox="0 0 960 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      role="img"
      aria-label="TransitFlow real-time fleet command dashboard illustration"
    >
      <defs>
        <linearGradient id="diDbGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.17 0.03 240)" />
          <stop offset="100%" stopColor="oklch(0.15 0.02 240)" />
        </linearGradient>
        <linearGradient id="diBarGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.72 0.19 45)" />
          <stop offset="100%" stopColor="oklch(0.72 0.19 45 / 0.3)" />
        </linearGradient>
      </defs>

      <rect width="960" height="380" fill="url(#diDbGrad)" />

      {/* TOP BAR */}
      <rect x="0" y="0" width="960" height="44" fill="oklch(0.20 0.04 240)" />
      <rect x="16" y="14" width="110" height="14" rx="5" fill="oklch(0.72 0.19 45 / 0.8)" />
      <rect x="16" y="14" width="16"  height="14" rx="3" fill="oklch(0.72 0.19 45)" />
      {[180,260,340,420].map(x => (
        <rect key={x} x={x} y="17" width="60" height="9" rx="4" fill="oklch(0.72 0.19 45 / 0.25)" />
      ))}
      <circle cx="900" cy="22" r="10" fill="oklch(0.72 0.19 45 / 0.15)" />
      <circle cx="928" cy="22" r="10" fill="oklch(0.72 0.19 45 / 0.15)" />
      <circle cx="900" cy="22" r="4"  fill="oklch(0.72 0.19 45 / 0.6)" />
      <circle cx="928" cy="22" r="4"  fill="oklch(0.72 0.19 45 / 0.6)" />

      {/* LEFT PANEL */}
      <rect x="12" y="56" width="200" height="312" rx="12" fill="oklch(0.20 0.03 240)" stroke="oklch(0.72 0.19 45 / 0.15)" strokeWidth="1" />
      <rect x="22" y="66" width="180" height="64" rx="8" fill="oklch(0.72 0.19 45 / 0.1)" stroke="oklch(0.72 0.19 45 / 0.3)" strokeWidth="1" />
      <rect x="32" y="76" width="70" height="14" rx="5" fill="oklch(0.72 0.19 45 / 0.8)" />
      <rect x="32" y="96" width="50" height="10" rx="4" fill="oklch(0.72 0.19 45 / 0.35)" />
      <rect x="148" y="78" width="42" height="24" rx="6" fill="oklch(0.4 0.18 140 / 0.2)" />
      <rect x="154" y="84" width="30" height="10" rx="3" fill="oklch(0.4 0.18 140 / 0.8)" />

      <rect x="22" y="140" width="180" height="64" rx="8" fill="oklch(0.65 0.15 200 / 0.08)" stroke="oklch(0.65 0.15 200 / 0.25)" strokeWidth="1" />
      <rect x="32" y="150" width="80" height="14" rx="5" fill="oklch(0.65 0.15 200 / 0.7)" />
      <rect x="32" y="170" width="55" height="10" rx="4" fill="oklch(0.65 0.15 200 / 0.3)" />
      <rect x="150" y="152" width="38" height="22" rx="6" fill="oklch(0.65 0.15 200 / 0.2)" />
      <rect x="156" y="158" width="26" height="10" rx="3" fill="oklch(0.65 0.15 200 / 0.8)" />

      <rect x="22" y="214" width="180" height="64" rx="8" fill="oklch(0.6 0.18 280 / 0.08)" stroke="oklch(0.6 0.18 280 / 0.25)" strokeWidth="1" />
      <rect x="32" y="224" width="65" height="14" rx="5" fill="oklch(0.6 0.18 280 / 0.7)" />
      <rect x="32" y="244" width="48" height="10" rx="4" fill="oklch(0.6 0.18 280 / 0.3)" />
      <rect x="150" y="226" width="38" height="22" rx="6" fill="oklch(0.6 0.18 280 / 0.2)" />
      <rect x="156" y="232" width="26" height="10" rx="3" fill="oklch(0.6 0.18 280 / 0.8)" />

      <rect x="22" y="288" width="180" height="70" rx="8" fill="oklch(0.22 0.03 240)" />
      <rect x="32" y="296" width="70" height="8"  rx="3" fill="oklch(0.72 0.19 45 / 0.5)" />
      {[36,28,44,38,52,34,48].map((h, i) => (
        <rect key={i} x={36 + i * 22} y={350 - h} width="14" height={h} rx="3"
          fill={i === 4 ? 'url(#diBarGrad)' : 'oklch(0.72 0.19 45 / 0.3)'} />
      ))}
      <line x1="32" y1="350" x2="192" y2="350" stroke="oklch(0.72 0.19 45 / 0.15)" strokeWidth="1" />

      {/* CENTRE MAP PANEL */}
      <rect x="224" y="56" width="480" height="312" rx="12" fill="oklch(0.19 0.04 220)" stroke="oklch(0.72 0.19 45 / 0.15)" strokeWidth="1" />
      {[280,340,400,460,520,580,640].map(x => (
        <line key={`mx${x}`} x1={x} y1="56" x2={x} y2="368" stroke="oklch(0.72 0.19 45 / 0.05)" strokeWidth="1" />
      ))}
      {[110,165,220,275,330].map(y => (
        <line key={`my${y}`} x1="224" y1={y} x2="704" y2={y} stroke="oklch(0.72 0.19 45 / 0.05)" strokeWidth="1" />
      ))}
      <path d="M224,212 Q360,180 464,212 T704,200" stroke="oklch(0.72 0.19 45 / 0.3)"  strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M224,212 Q360,180 464,212 T704,200" stroke="oklch(0.72 0.19 45 / 0.15)" strokeWidth="12" strokeLinecap="round" fill="none" />
      <path d="M380,56 Q400,150 420,212 T450,368"  stroke="oklch(0.72 0.19 45 / 0.2)"  strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M560,56 Q570,150 590,212 T600,368"  stroke="oklch(0.72 0.19 45 / 0.18)" strokeWidth="6" strokeLinecap="round" fill="none" />

      <circle cx="330" cy="198" r="7"  fill="oklch(0.72 0.19 45)" />
      <circle cx="330" cy="198" r="13" fill="oklch(0.72 0.19 45 / 0.2)" />
      <circle cx="330" cy="198" r="20" fill="oklch(0.72 0.19 45 / 0.07)" />
      <circle cx="500" cy="206" r="7"  fill="oklch(0.72 0.19 45)" />
      <circle cx="500" cy="206" r="13" fill="oklch(0.72 0.19 45 / 0.2)" />
      <circle cx="636" cy="198" r="6"  fill="oklch(0.55 0.14 200)" />
      <circle cx="636" cy="198" r="11" fill="oklch(0.55 0.14 200 / 0.2)" />
      <circle cx="418" cy="290" r="5"  fill="oklch(0.4 0.18 140)" />
      <circle cx="418" cy="290" r="10" fill="oklch(0.4 0.18 140 / 0.2)" />

      <path d="M330,198 Q414,130 500,206" stroke="oklch(0.72 0.19 45 / 0.6)" strokeWidth="2" fill="none" strokeDasharray="6 3" />

      <g transform="translate(580, 110)">
        <circle cx="0" cy="0" r="10" fill="oklch(0.72 0.19 45)" />
        <circle cx="0" cy="0" r="4"  fill="white" />
        <polygon points="0,14 -6,0 6,0" fill="oklch(0.72 0.19 45)" />
      </g>
      <g transform="translate(670, 160)">
        <circle cx="0" cy="0" r="8" fill="oklch(0.4 0.18 140)" />
        <circle cx="0" cy="0" r="3" fill="white" />
        <polygon points="0,11 -5,0 5,0" fill="oklch(0.4 0.18 140)" />
      </g>

      <rect x="232" y="64" width="130" height="30" rx="8" fill="oklch(0.20 0.04 240 / 0.9)" stroke="oklch(0.72 0.19 45 / 0.3)" strokeWidth="1" />
      <circle cx="248" cy="79" r="5" fill="oklch(0.72 0.19 45)" />
      <rect x="260" y="73" width="90" height="10" rx="4" fill="oklch(0.72 0.19 45 / 0.6)" />

      <rect x="586" y="64" width="110" height="30" rx="8" fill="oklch(0.20 0.04 240 / 0.9)" stroke="oklch(0.72 0.19 45 / 0.3)" strokeWidth="1" />
      <rect x="598" y="73" width="40" height="10" rx="4" fill="oklch(0.72 0.19 45 / 0.8)" />
      <rect x="646" y="73" width="40" height="10" rx="4" fill="oklch(0.72 0.19 45 / 0.3)" />

      {/* RIGHT PANEL */}
      <rect x="716" y="56" width="232" height="312" rx="12" fill="oklch(0.20 0.03 240)" stroke="oklch(0.72 0.19 45 / 0.15)" strokeWidth="1" />
      <rect x="726" y="66" width="212" height="110" rx="8" fill="oklch(0.18 0.03 240)" />
      <rect x="736" y="74" width="80" height="9" rx="4" fill="oklch(0.72 0.19 45 / 0.6)" />
      <path d="M726,160 L750,140 L780,148 L810,120 L840,132 L870,115 L900,108 L928,118 L928,176 L726,176 Z"
        fill="oklch(0.72 0.19 45 / 0.08)" />
      <polyline points="726,160 750,140 780,148 810,120 840,132 870,115 900,108 928,118"
        stroke="oklch(0.72 0.19 45)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {[726,750,780,810,840,870,900,928].map((x, i) => {
        const ys = [160,140,148,120,132,115,108,118]
        return <circle key={i} cx={x} cy={ys[i]} r="3.5" fill="oklch(0.72 0.19 45)" />
      })}
      <line x1="726" y1="176" x2="928" y2="176" stroke="oklch(0.72 0.19 45 / 0.15)" strokeWidth="1" />

      <rect x="726" y="186" width="212" height="8" rx="3" fill="oklch(0.72 0.19 45 / 0.2)" />
      <rect x="736" y="196" width="80" height="8" rx="3" fill="oklch(0.72 0.19 45 / 0.5)" />
      {[210,228,246,264,282,300,318,336].map((y, i) => (
        <g key={y}>
          <circle cx="730" cy={y + 4} r="4"
            fill={i % 3 === 0 ? 'oklch(0.72 0.19 45)' : i % 3 === 1 ? 'oklch(0.4 0.18 140)' : 'oklch(0.65 0.15 200)'} />
          <rect x="742" y={y} width={100 + (i % 4) * 18} height="8" rx="3" fill="oklch(0.72 0.19 45 / 0.25)" />
          <rect x="852" y={y} width="50" height="8" rx="3" fill="oklch(0.72 0.19 45 / 0.12)" />
        </g>
      ))}

      <rect x="726" y="348" width="212" height="14" rx="4" fill="oklch(0.22 0.03 240)" />
      {[726,796,866].map((x, i) => (
        <g key={i}>
          <circle cx={x + 8} cy="355" r="3"
            fill={['oklch(0.72 0.19 45)','oklch(0.4 0.18 140)','oklch(0.65 0.15 200)'][i]} />
          <rect x={x + 14} y="351" width="50" height="7" rx="3" fill="oklch(0.72 0.19 45 / 0.25)" />
        </g>
      ))}
    </svg>
  )
}
