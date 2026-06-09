export function MobileAppIllustration() {
  return (
    <svg
      viewBox="0 0 320 580"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      role="img"
      aria-label="TransitFlow mobile driver app showing live fleet tracking"
    >
      <defs>
        <linearGradient id="maPhoneBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.17 0.04 240)" />
          <stop offset="100%" stopColor="oklch(0.14 0.03 240)" />
        </linearGradient>
        <linearGradient id="maMapBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.19 0.05 220)" />
          <stop offset="100%" stopColor="oklch(0.16 0.04 220)" />
        </linearGradient>
        <linearGradient id="maRoute" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF9D40" />
          <stop offset="100%" stopColor="#FF5800" />
        </linearGradient>
        <clipPath id="maScreen">
          <rect x="20" y="44" width="280" height="492" rx="4" />
        </clipPath>
      </defs>

      {/* Phone frame */}
      <rect x="8" y="8" width="304" height="564" rx="36" fill="oklch(0.12 0.03 240)" />
      <rect x="12" y="12" width="296" height="556" rx="33" fill="oklch(0.14 0.03 240)" stroke="oklch(0.28 0.04 240)" strokeWidth="1" />

      {/* Notch */}
      <rect x="110" y="14" width="100" height="20" rx="10" fill="oklch(0.10 0.02 240)" />
      <circle cx="155" cy="24" r="4" fill="oklch(0.08 0.02 240)" />
      <circle cx="175" cy="24" r="3" fill="oklch(0.18 0.03 240)" />

      {/* Screen */}
      <rect x="20" y="44" width="280" height="492" rx="4" fill="url(#maPhoneBg)" />

      {/* Status bar */}
      <text x="32" y="62" fontFamily="system-ui" fontSize="10" fill="oklch(0.72 0.19 45 / 0.9)" fontWeight="600">9:41</text>
      <rect x="255" y="54" width="20" height="10" rx="2" fill="none" stroke="oklch(0.72 0.19 45 / 0.5)" strokeWidth="1" />
      <rect x="256" y="55" width="14" height="8" rx="1.5" fill="oklch(0.4 0.18 140)" />
      <rect x="276" y="57" width="2" height="5" rx="1" fill="oklch(0.72 0.19 45 / 0.5)" />
      <rect x="238" y="55" width="14" height="10" rx="1" fill="oklch(0.72 0.19 45 / 0.3)" />
      <rect x="224" y="56" width="12" height="8" rx="1" fill="oklch(0.72 0.19 45 / 0.25)" />

      {/* App header */}
      <rect x="20" y="72" width="280" height="48" fill="oklch(0.18 0.04 240)" />
      <rect x="30" y="84" width="16" height="14" rx="3" fill="oklch(0.72 0.19 45)" />
      {/* mini logo mark */}
      <circle cx="34" cy="87" r="2" fill="white" />
      <circle cx="34" cy="91" r="2" fill="white" />
      <circle cx="34" cy="95" r="2" fill="white" />
      <path d="M36,87 Q43,87 44,91" stroke="white" strokeWidth="1" fill="none" />
      <path d="M36,91 L44,91" stroke="white" strokeWidth="1.2" fill="none" />
      <path d="M36,95 Q43,95 44,91" stroke="white" strokeWidth="1" fill="none" />
      <rect x="52" y="85" width="70" height="10" rx="3" fill="oklch(0.72 0.19 45 / 0.9)" />
      <rect x="52" y="100" width="50" height="7" rx="3" fill="oklch(0.72 0.19 45 / 0.4)" />
      {/* Live indicator */}
      <circle cx="208" cy="92" r="5" fill="oklch(0.4 0.18 140)" />
      <circle cx="208" cy="92" r="8" fill="oklch(0.4 0.18 140 / 0.25)" />
      <rect x="218" y="88" width="24" height="8" rx="3" fill="oklch(0.4 0.18 140 / 0.7)" />
      {/* Notification bell */}
      <rect x="252" y="86" width="16" height="18" rx="3" fill="oklch(0.72 0.19 45 / 0.15)" />
      <rect x="255" y="89" width="10" height="10" rx="2" fill="oklch(0.72 0.19 45 / 0.5)" />

      {/* Summary bar */}
      <rect x="20" y="120" width="280" height="36" fill="oklch(0.20 0.04 240)" />
      <circle cx="38" cy="138" r="5" fill="oklch(0.72 0.19 45)" />
      <rect x="48" y="134" width="80" height="8" rx="3" fill="oklch(0.72 0.19 45 / 0.7)" />
      <circle cx="182" cy="138" r="5" fill="oklch(0.4 0.18 140)" />
      <rect x="192" y="134" width="60" height="8" rx="3" fill="oklch(0.4 0.18 140 / 0.6)" />
      <rect x="270" y="130" width="24" height="16" rx="5" fill="oklch(0.65 0.15 200 / 0.2)" />
      <rect x="274" y="134" width="16" height="8" rx="2" fill="oklch(0.65 0.15 200 / 0.7)" />

      {/* MAP AREA */}
      <rect x="20" y="156" width="280" height="200" fill="url(#maMapBg)" clipPath="url(#maScreen)" />

      {/* Map roads */}
      <line x1="20" y1="200" x2="300" y2="200" stroke="oklch(0.25 0.04 230)" strokeWidth="6" />
      <line x1="20" y1="270" x2="300" y2="270" stroke="oklch(0.25 0.04 230)" strokeWidth="6" />
      <line x1="100" y1="156" x2="100" y2="356" stroke="oklch(0.25 0.04 230)" strokeWidth="6" />
      <line x1="210" y1="156" x2="210" y2="356" stroke="oklch(0.25 0.04 230)" strokeWidth="6" />

      {/* Road dashes */}
      <line x1="20" y1="200" x2="300" y2="200" stroke="oklch(0.35 0.04 230)" strokeWidth="1" strokeDasharray="10 8" />
      <line x1="100" y1="156" x2="100" y2="356" stroke="oklch(0.35 0.04 230)" strokeWidth="1" strokeDasharray="10 8" />

      {/* City blocks */}
      {[[22,158,70,34],[110,158,92,34],[220,158,78,34],[22,208,70,54],[22,278,70,74],[110,278,92,74],[220,278,78,74]].map(([x,y,w,h],i)=>(
        <rect key={i} x={x+2} y={y+2} width={w-4} height={h-4} rx="3" fill="oklch(0.20 0.04 230)" />
      ))}

      {/* Optimal route on map */}
      <path d="M65,340 Q65,270 100,270 L210,270 Q215,270 240,240 L240,200 L280,200"
        stroke="oklch(0.72 0.19 45 / 0.4)" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M65,340 Q65,270 100,270 L210,270 Q215,270 240,240 L240,200 L280,200"
        stroke="url(#maRoute)" strokeWidth="3.5" fill="none" strokeLinecap="round" />

      {/* Vehicle pin on map */}
      <g transform="translate(65,340)">
        <circle cx="0" cy="0" r="10" fill="oklch(0.72 0.19 45 / 0.25)" />
        <circle cx="0" cy="0" r="7" fill="oklch(0.72 0.19 45)" />
        <rect x="-4" y="-2" width="6" height="4" rx="1" fill="white" />
        <rect x="0" y="-4" width="3" height="2.5" rx="0.5" fill="white" />
        <circle cx="-2.5" cy="2" r="1.2" fill="oklch(0.4 0.04 240)" />
        <circle cx="3" cy="2" r="1.2" fill="oklch(0.4 0.04 240)" />
      </g>

      {/* Destination pin on map */}
      <g transform="translate(280,200)">
        <circle cx="0" cy="0" r="8" fill="oklch(0.4 0.18 140 / 0.25)" />
        <circle cx="0" cy="0" r="6" fill="oklch(0.4 0.18 140)" />
        <circle cx="0" cy="0" r="2" fill="white" />
        <polygon points="0,9 -3,0 3,0" fill="oklch(0.4 0.18 140)" />
      </g>

      {/* ETA badge on map */}
      <rect x="118" y="218" width="78" height="28" rx="8" fill="oklch(0.20 0.04 240 / 0.95)" stroke="oklch(0.72 0.19 45 / 0.5)" strokeWidth="1" />
      <rect x="126" y="225" width="38" height="7" rx="3" fill="oklch(0.72 0.19 45 / 0.9)" />
      <rect x="126" y="235" width="54" height="6" rx="3" fill="oklch(0.72 0.19 45 / 0.4)" />

      {/* VEHICLE STATUS CARDS */}
      {/* Card 1 */}
      <rect x="20" y="362" width="280" height="60" fill="oklch(0.19 0.04 240)" />
      <rect x="20" y="362" width="280" height="1" fill="oklch(0.72 0.19 45 / 0.1)" />
      <circle cx="44" cy="392" r="12" fill="oklch(0.72 0.19 45 / 0.15)" />
      <circle cx="44" cy="392" r="7" fill="oklch(0.72 0.19 45)" />
      <rect x="36" y="389" width="7" height="5" rx="1" fill="white" />
      <rect x="41" y="387" width="4" height="3" rx="0.5" fill="white" />
      <circle cx="38" cy="394" r="1.5" fill="oklch(0.4 0.04 240)" />
      <circle cx="45" cy="394" r="1.5" fill="oklch(0.4 0.04 240)" />
      <rect x="64" y="378" width="90" height="9" rx="3" fill="oklch(0.72 0.19 45 / 0.8)" />
      <rect x="64" y="392" width="60" height="7" rx="3" fill="oklch(0.72 0.19 45 / 0.4)" />
      <rect x="64" y="404" width="70" height="7" rx="3" fill="oklch(0.4 0.18 140 / 0.6)" />
      <rect x="230" y="378" width="60" height="18" rx="6" fill="oklch(0.4 0.18 140 / 0.2)" />
      <rect x="236" y="383" width="48" height="8" rx="3" fill="oklch(0.4 0.18 140 / 0.8)" />
      <rect x="230" y="400" width="60" height="14" rx="4" fill="oklch(0.72 0.19 45 / 0.1)" />
      <rect x="236" y="403" width="48" height="8" rx="3" fill="oklch(0.72 0.19 45 / 0.5)" />

      {/* Card 2 */}
      <rect x="20" y="422" width="280" height="60" fill="oklch(0.18 0.04 240)" />
      <rect x="20" y="422" width="280" height="1" fill="oklch(0.72 0.19 45 / 0.07)" />
      <circle cx="44" cy="452" r="12" fill="oklch(0.65 0.15 200 / 0.15)" />
      <circle cx="44" cy="452" r="7" fill="oklch(0.65 0.15 200)" />
      <rect x="36" y="449" width="7" height="5" rx="1" fill="white" />
      <rect x="41" y="447" width="4" height="3" rx="0.5" fill="white" />
      <circle cx="38" cy="454" r="1.5" fill="oklch(0.4 0.04 240)" />
      <circle cx="45" cy="454" r="1.5" fill="oklch(0.4 0.04 240)" />
      <rect x="64" y="438" width="80" height="9" rx="3" fill="oklch(0.72 0.19 45 / 0.7)" />
      <rect x="64" y="452" width="65" height="7" rx="3" fill="oklch(0.72 0.19 45 / 0.35)" />
      <rect x="64" y="464" width="55" height="7" rx="3" fill="oklch(0.65 0.15 200 / 0.6)" />
      <rect x="230" y="438" width="60" height="18" rx="6" fill="oklch(0.6 0.18 280 / 0.2)" />
      <rect x="236" y="443" width="48" height="8" rx="3" fill="oklch(0.6 0.18 280 / 0.8)" />
      <rect x="230" y="460" width="60" height="14" rx="4" fill="oklch(0.72 0.19 45 / 0.1)" />
      <rect x="236" y="463" width="48" height="8" rx="3" fill="oklch(0.72 0.19 45 / 0.45)" />

      {/* Bottom navigation */}
      <rect x="20" y="488" width="280" height="48" fill="oklch(0.16 0.03 240)" />
      <line x1="20" y1="488" x2="300" y2="488" stroke="oklch(0.72 0.19 45 / 0.12)" strokeWidth="1" />
      {[
        { x: 50,  icon: 'home' },
        { x: 120, icon: 'map' },
        { x: 200, icon: 'fleet' },
        { x: 270, icon: 'person' },
      ].map((nav, i) => (
        <g key={i}>
          <circle cx={nav.x} cy="512" r="14"
            fill={i === 1 ? 'oklch(0.72 0.19 45 / 0.15)' : 'transparent'} />
          <rect x={nav.x - 8} y="505" width="16" height="12" rx="3"
            fill={i === 1 ? 'oklch(0.72 0.19 45)' : 'oklch(0.72 0.19 45 / 0.3)'} />
          <rect x={nav.x - 5} y="519" width="10" height="6" rx="2"
            fill={i === 1 ? 'oklch(0.72 0.19 45 / 0.9)' : 'oklch(0.72 0.19 45 / 0.25)'} />
        </g>
      ))}

      {/* Home button */}
      <rect x="138" y="548" width="44" height="5" rx="2.5" fill="oklch(0.40 0.04 240)" />
    </svg>
  )
}
