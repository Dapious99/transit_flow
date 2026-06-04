export function HeroCityIllustration() {
  return (
    <svg
      viewBox="0 0 1100 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      role="img"
      aria-label="Three smart TransitFlow trucks driving on a Nigerian city road at night, connected by live GPS signals to a mobile dashboard"
    >
      <defs>
        <linearGradient id="nightSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.10 0.04 250)" />
          <stop offset="100%" stopColor="oklch(0.16 0.04 230)" />
        </linearGradient>
        <linearGradient id="roadSurface" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.22 0.03 240)" />
          <stop offset="100%" stopColor="oklch(0.18 0.02 240)" />
        </linearGradient>
        <radialGradient id="ambientGlow" cx="50%" cy="70%" r="55%">
          <stop offset="0%" stopColor="oklch(0.72 0.19 45 / 0.14)" />
          <stop offset="100%" stopColor="oklch(0.72 0.19 45 / 0)" />
        </radialGradient>
        <radialGradient id="groundReflect" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.72 0.19 45 / 0.08)" />
          <stop offset="100%" stopColor="oklch(0.72 0.19 45 / 0)" />
        </radialGradient>
        <filter id="hciGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="hciSoftBlur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* SKY */}
      <rect width="1100" height="460" fill="url(#nightSky)" />
      <ellipse cx="550" cy="380" rx="560" ry="120" fill="url(#ambientGlow)" />

      {/* Stars */}
      {[
        [60,40],[140,25],[240,55],[380,30],[480,18],[600,42],[720,28],[850,50],[960,35],[1040,20],
        [100,80],[300,70],[520,85],[750,65],[1000,75],[180,100],[640,95],[900,88],
      ].map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 1.5 : 1} fill="white" opacity={0.3 + (i % 4) * 0.1} />
      ))}

      {/* Moon */}
      <circle cx="980" cy="60" r="28" fill="oklch(0.88 0.04 80 / 0.9)" />
      <circle cx="992" cy="52" r="22" fill="oklch(0.12 0.04 250)" opacity="0.5" />

      {/* SKYLINE — background buildings */}
      <rect x="0"    y="180" width="40"  height="200" fill="oklch(0.14 0.03 240)" />
      <rect x="46"   y="155" width="30"  height="225" fill="oklch(0.13 0.03 240)" />
      <rect x="82"   y="190" width="22"  height="190" fill="oklch(0.14 0.03 240)" />
      <rect x="110"  y="160" width="35"  height="220" fill="oklch(0.13 0.03 240)" />
      <rect x="880"  y="170" width="38"  height="210" fill="oklch(0.14 0.03 240)" />
      <rect x="924"  y="148" width="28"  height="232" fill="oklch(0.13 0.03 240)" />
      <rect x="958"  y="182" width="44"  height="198" fill="oklch(0.14 0.03 240)" />
      <rect x="1008" y="158" width="36"  height="222" fill="oklch(0.13 0.03 240)" />
      <rect x="1050" y="192" width="50"  height="188" fill="oklch(0.14 0.03 240)" />

      {/* Mid buildings with lit windows */}
      <rect x="155" y="130" width="52"  height="250" fill="oklch(0.17 0.04 240)" />
      <rect x="213" y="110" width="44"  height="270" fill="oklch(0.18 0.04 240)" />
      <rect x="263" y="145" width="38"  height="235" fill="oklch(0.17 0.03 240)" />
      <rect x="760" y="135" width="50"  height="245" fill="oklch(0.17 0.04 240)" />
      <rect x="816" y="118" width="56"  height="262" fill="oklch(0.18 0.04 240)" />

      {[0,1,2,3,4].map(row => [0,1,2].map(col => (
        <rect key={`mw${row}${col}`} x={161 + col*14} y={140 + row*28} width="8" height="12" rx="1"
          fill={`oklch(0.72 0.19 45 / ${(row+col) % 3 === 0 ? 0.55 : 0.1})`} />
      )))}
      {[0,1,2,3,4,5].map(row => [0,1,2].map(col => (
        <rect key={`mw2${row}${col}`} x={219 + col*12} y={120 + row*28} width="8" height="12" rx="1"
          fill={`oklch(0.65 0.15 200 / ${(row*col) % 2 === 0 ? 0.5 : 0.08})`} />
      )))}
      {[0,1,2,3,4,5].map(row => [0,1,2].map(col => (
        <rect key={`mw3${row}${col}`} x={766 + col*14} y={145 + row*28} width="8" height="12" rx="1"
          fill={`oklch(0.72 0.19 45 / ${(row+col*2) % 3 === 0 ? 0.6 : 0.1})`} />
      )))}

      {/* Hero tall buildings */}
      <rect x="320" y="80"  width="70"  height="300" fill="oklch(0.20 0.05 235)" />
      <rect x="396" y="98"  width="58"  height="282" fill="oklch(0.19 0.04 235)" />
      <rect x="353" y="60"  width="5"   height="24"  rx="2" fill="oklch(0.72 0.19 45 / 0.9)" />
      <circle cx="355" cy="58" r="5" fill="oklch(0.72 0.19 45)" filter="url(#hciGlow)" />
      {[0,1,2,3,4,5,6].map(row => [0,1,2,3].map(col => (
        <rect key={`hw${row}${col}`} x={326 + col*14} y={92 + row*26} width="9" height="14" rx="1"
          fill={`oklch(0.72 0.19 45 / ${(row+col) % 2 === 0 ? 0.6 : 0.12})`} />
      )))}
      {[0,1,2,3,4,5,6].map(row => [0,1,2,3].map(col => (
        <rect key={`hw2${row}${col}`} x={402 + col*12} y={108 + row*26} width="8" height="14" rx="1"
          fill={`oklch(0.65 0.15 200 / ${(row*2+col) % 3 === 0 ? 0.55 : 0.08})`} />
      )))}

      {/* Right hero cluster */}
      <rect x="620" y="90"  width="66"  height="290" fill="oklch(0.20 0.05 235)" />
      <rect x="692" y="105" width="58"  height="275" fill="oklch(0.19 0.04 235)" />
      <rect x="696" y="72"  width="5"   height="22"  rx="2" fill="oklch(0.72 0.19 45 / 0.8)" />
      <circle cx="698" cy="70" r="4.5" fill="oklch(0.72 0.19 45)" filter="url(#hciGlow)" />
      {[0,1,2,3,4,5,6].map(row => [0,1,2,3].map(col => (
        <rect key={`rw${row}${col}`} x={626 + col*14} y={100 + row*26} width="9" height="14" rx="1"
          fill={`oklch(0.72 0.19 45 / ${(row+col*3) % 3 === 0 ? 0.58 : 0.1})`} />
      )))}

      {/* ELEVATED EXPRESSWAY */}
      {[150,350,550,750,950].map((x, i) => (
        <rect key={`p${i}`} x={x} y="360" width="18" height="100" rx="3" fill="oklch(0.20 0.03 240)" />
      ))}
      <rect x="0" y="330" width="1100" height="20" fill="oklch(0.20 0.03 240)" />
      <rect x="0" y="280" width="1100" height="55" fill="url(#roadSurface)" />
      <rect x="0" y="280" width="1100" height="3"  fill="oklch(0.72 0.19 45 / 0.35)" />
      <rect x="0" y="332" width="1100" height="2"  fill="oklch(0.72 0.19 45 / 0.2)" />
      {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].map(i => (
        <rect key={`lane${i}`} x={i * 60 + 10} y="305" width="34" height="4" rx="2"
          fill="oklch(0.72 0.19 45 / 0.28)" />
      ))}
      <ellipse cx="200" cy="340" rx="80" ry="8" fill="url(#groundReflect)" />
      <ellipse cx="550" cy="340" rx="80" ry="8" fill="url(#groundReflect)" />
      <ellipse cx="880" cy="340" rx="80" ry="8" fill="url(#groundReflect)" />

      {/* TRUCK 1 */}
      <g transform="translate(120, 272)">
        <rect x="42"  y="0" width="130" height="44" rx="4" fill="oklch(0.24 0.04 240)" stroke="oklch(0.72 0.19 45 / 0.4)" strokeWidth="1" />
        <rect x="0"   y="4" width="46"  height="40" rx="5" fill="oklch(0.72 0.19 45)" />
        <rect x="4"   y="8" width="28"  height="20" rx="3" fill="oklch(0.85 0.06 45 / 0.7)" />
        <rect x="0"   y="10" width="4"  height="8"  rx="1" fill="oklch(0.95 0.05 80)" filter="url(#hciGlow)" />
        <rect x="0"   y="26" width="4"  height="6"  rx="1" fill="oklch(0.95 0.05 80)" filter="url(#hciGlow)" />
        <path d="M0,14 L-80,5 L-80,25 Z" fill="oklch(0.95 0.05 80 / 0.08)" />
        <circle cx="22"  cy="48" r="11" fill="oklch(0.12 0.02 240)" stroke="oklch(0.72 0.19 45 / 0.5)" strokeWidth="2" />
        <circle cx="22"  cy="48" r="5"  fill="oklch(0.50 0.08 45)" />
        <circle cx="100" cy="48" r="11" fill="oklch(0.12 0.02 240)" stroke="oklch(0.72 0.19 45 / 0.5)" strokeWidth="2" />
        <circle cx="100" cy="48" r="5"  fill="oklch(0.50 0.08 45)" />
        <circle cx="152" cy="48" r="11" fill="oklch(0.12 0.02 240)" stroke="oklch(0.72 0.19 45 / 0.5)" strokeWidth="2" />
        <circle cx="152" cy="48" r="5"  fill="oklch(0.50 0.08 45)" />
        <rect x="72" y="10" width="70" height="22" rx="4" fill="oklch(0.72 0.19 45 / 0.15)" stroke="oklch(0.72 0.19 45 / 0.4)" strokeWidth="1" />
        <rect x="78" y="16" width="38" height="10" rx="3" fill="oklch(0.72 0.19 45 / 0.8)" />
        <rect x="12" y="-6" width="18" height="6" rx="2" fill="oklch(0.30 0.04 240)" />
        <rect x="18" y="-10" width="6" height="6" rx="1" fill="oklch(0.72 0.19 45)" />
      </g>
      <circle cx="196" cy="258" r="18" fill="oklch(0.72 0.19 45 / 0.25)" filter="url(#hciSoftBlur)" />
      <circle cx="196" cy="258" r="30" fill="oklch(0.72 0.19 45 / 0.12)" filter="url(#hciSoftBlur)" />
      <circle cx="196" cy="258" r="44" fill="oklch(0.72 0.19 45 / 0.05)" filter="url(#hciSoftBlur)" />
      <circle cx="196" cy="258" r="8"  fill="oklch(0.72 0.19 45)" />

      {/* TRUCK 2 */}
      <g transform="translate(430, 276)">
        <rect x="36"  y="0" width="118" height="40" rx="4" fill="oklch(0.22 0.04 240)" stroke="oklch(0.65 0.15 200 / 0.35)" strokeWidth="1" />
        <rect x="0"   y="3" width="40"  height="37" rx="5" fill="oklch(0.55 0.14 200)" />
        <rect x="4"   y="7" width="24"  height="18" rx="3" fill="oklch(0.78 0.06 200 / 0.65)" />
        <rect x="0"   y="9"  width="4"  height="7"  rx="1" fill="oklch(0.92 0.04 80)" filter="url(#hciGlow)" />
        <rect x="0"   y="22" width="4"  height="5"  rx="1" fill="oklch(0.92 0.04 80)" filter="url(#hciGlow)" />
        <path d="M0,12 L-70,4 L-70,22 Z" fill="oklch(0.92 0.04 80 / 0.07)" />
        <circle cx="18"  cy="44" r="10" fill="oklch(0.12 0.02 240)" stroke="oklch(0.65 0.15 200 / 0.5)" strokeWidth="2" />
        <circle cx="18"  cy="44" r="4"  fill="oklch(0.40 0.10 200)" />
        <circle cx="88"  cy="44" r="10" fill="oklch(0.12 0.02 240)" stroke="oklch(0.65 0.15 200 / 0.5)" strokeWidth="2" />
        <circle cx="88"  cy="44" r="4"  fill="oklch(0.40 0.10 200)" />
        <circle cx="135" cy="44" r="10" fill="oklch(0.12 0.02 240)" stroke="oklch(0.65 0.15 200 / 0.5)" strokeWidth="2" />
        <circle cx="135" cy="44" r="4"  fill="oklch(0.40 0.10 200)" />
        <rect x="10" y="-5" width="16" height="5" rx="2" fill="oklch(0.28 0.04 240)" />
        <rect x="15" y="-9" width="6"  height="5" rx="1" fill="oklch(0.65 0.15 200)" />
      </g>
      <circle cx="480" cy="273" r="16" fill="oklch(0.65 0.15 200 / 0.22)" filter="url(#hciSoftBlur)" />
      <circle cx="480" cy="273" r="26" fill="oklch(0.65 0.15 200 / 0.1)"  filter="url(#hciSoftBlur)" />
      <circle cx="480" cy="273" r="7"  fill="oklch(0.65 0.15 200)" />

      {/* TRUCK 3 */}
      <g transform="translate(760, 280)">
        <rect x="28"  y="0" width="96"  height="34" rx="3" fill="oklch(0.21 0.03 240)" stroke="oklch(0.4 0.18 140 / 0.3)" strokeWidth="1" />
        <rect x="0"   y="2" width="32"  height="32" rx="4" fill="oklch(0.40 0.16 140)" />
        <rect x="4"   y="6" width="20"  height="15" rx="2" fill="oklch(0.70 0.06 140 / 0.6)" />
        <rect x="0"   y="8"  width="3"  height="5"  rx="1" fill="oklch(0.92 0.04 80)" filter="url(#hciGlow)" />
        <rect x="0"   y="18" width="3"  height="4"  rx="1" fill="oklch(0.92 0.04 80)" filter="url(#hciGlow)" />
        <circle cx="14"  cy="38" r="8" fill="oklch(0.12 0.02 240)" stroke="oklch(0.4 0.18 140 / 0.4)" strokeWidth="1.5" />
        <circle cx="14"  cy="38" r="3" fill="oklch(0.32 0.12 140)" />
        <circle cx="70"  cy="38" r="8" fill="oklch(0.12 0.02 240)" stroke="oklch(0.4 0.18 140 / 0.4)" strokeWidth="1.5" />
        <circle cx="70"  cy="38" r="3" fill="oklch(0.32 0.12 140)" />
        <circle cx="108" cy="38" r="8" fill="oklch(0.12 0.02 240)" stroke="oklch(0.4 0.18 140 / 0.4)" strokeWidth="1.5" />
        <circle cx="108" cy="38" r="3" fill="oklch(0.32 0.12 140)" />
        <rect x="8" y="-5" width="14" height="5" rx="2" fill="oklch(0.26 0.03 240)" />
        <rect x="13" y="-8" width="5"  height="4" rx="1" fill="oklch(0.4 0.18 140)" />
      </g>
      <circle cx="796" cy="277" r="14" fill="oklch(0.4 0.18 140 / 0.2)"  filter="url(#hciSoftBlur)" />
      <circle cx="796" cy="277" r="22" fill="oklch(0.4 0.18 140 / 0.08)" filter="url(#hciSoftBlur)" />
      <circle cx="796" cy="277" r="6"  fill="oklch(0.4 0.18 140)" />

      {/* MOBILE HUD */}
      <g transform="translate(860, 80)">
        <rect x="0" y="0" width="160" height="280" rx="22" fill="oklch(0.18 0.04 240)" stroke="oklch(0.72 0.19 45 / 0.5)" strokeWidth="1.5" />
        <rect x="8" y="24" width="144" height="232" rx="14" fill="oklch(0.13 0.03 230)" />
        <rect x="52" y="8" width="56" height="12" rx="6" fill="oklch(0.14 0.03 240)" />
        <rect x="8" y="24" width="144" height="36" rx="14" fill="oklch(0.72 0.19 45 / 0.15)" />
        <rect x="8" y="44" width="144" height="16" fill="oklch(0.72 0.19 45 / 0.15)" />
        <rect x="18" y="33" width="60" height="9"  rx="4" fill="oklch(0.72 0.19 45 / 0.8)" />
        <circle cx="136" cy="37" r="9" fill="oklch(0.72 0.19 45 / 0.2)" />
        <circle cx="136" cy="37" r="4" fill="oklch(0.72 0.19 45 / 0.7)" />
        <rect x="16" y="68" width="128" height="76" rx="8" fill="oklch(0.16 0.04 220)" />
        <path d="M16,106 Q50,94 80,100 Q110,106 144,98" stroke="oklch(0.72 0.19 45 / 0.5)" strokeWidth="5" strokeLinecap="round" fill="none" />
        <circle cx="68"  cy="99"  r="6"  fill="oklch(0.72 0.19 45)" />
        <circle cx="68"  cy="99"  r="11" fill="oklch(0.72 0.19 45 / 0.2)" />
        <circle cx="110" cy="101" r="5"  fill="oklch(0.65 0.15 200)" />
        <circle cx="136" cy="95" r="7" fill="oklch(0.72 0.19 45)" />
        <circle cx="136" cy="95" r="3" fill="white" />
        <polygon points="136,104 130,95 142,95" fill="oklch(0.72 0.19 45)" />
        {[0,1,2].map(i => (
          <g key={i}>
            <circle cx="22" cy={156 + i * 26} r="5"
              fill={['oklch(0.72 0.19 45)','oklch(0.4 0.18 140)','oklch(0.65 0.15 200)'][i]} />
            <rect x="32" y={151 + i * 26} width={[70,55,80][i]} height="9" rx="4"
              fill={['oklch(0.72 0.19 45 / 0.5)','oklch(0.4 0.18 140 / 0.5)','oklch(0.65 0.15 200 / 0.5)'][i]} />
            <rect x="108" y={151 + i * 26} width="28" height="9" rx="4"
              fill={['oklch(0.72 0.19 45 / 0.25)','oklch(0.4 0.18 140 / 0.25)','oklch(0.65 0.15 200 / 0.25)'][i]} />
          </g>
        ))}
        <rect x="16" y="236" width="128" height="11" rx="5" fill="oklch(0.22 0.03 240)" />
        <rect x="16" y="236" width="88"  height="11" rx="5" fill="oklch(0.72 0.19 45 / 0.7)" />
        <rect x="16" y="252" width="60"  height="7"  rx="3" fill="oklch(0.72 0.19 45 / 0.3)" />
        <rect x="88" y="252" width="56"  height="7"  rx="3" fill="oklch(0.72 0.19 45 / 0.15)" />
        <rect x="55" y="244" width="50" height="4" rx="2" fill="oklch(0.72 0.19 45 / 0.3)" />
      </g>

      {/* DATA ARCS */}
      <path d="M196,258 Q520,180 860,170" stroke="oklch(0.72 0.19 45 / 0.45)" strokeWidth="1.5" fill="none" strokeDasharray="8 5" />
      <circle cx="528" cy="207" r="3.5" fill="oklch(0.72 0.19 45 / 0.7)" />
      <path d="M480,273 Q660,200 860,200" stroke="oklch(0.65 0.15 200 / 0.4)" strokeWidth="1.5" fill="none" strokeDasharray="8 5" />
      <circle cx="660" cy="233" r="3" fill="oklch(0.65 0.15 200 / 0.7)" />
      <path d="M796,277 Q820,240 860,220" stroke="oklch(0.4 0.18 140 / 0.45)" strokeWidth="1.5" fill="none" strokeDasharray="6 4" />

      {/* STATUS BADGES */}
      <rect x="80"  y="220" width="120" height="32" rx="10" fill="oklch(0.18 0.04 240 / 0.95)" stroke="oklch(0.72 0.19 45 / 0.5)" strokeWidth="1" />
      <circle cx="97" cy="236" r="5" fill="oklch(0.4 0.18 140)" />
      <rect x="108" y="230" width="50" height="8"  rx="3" fill="oklch(0.72 0.19 45 / 0.7)" />
      <rect x="108" y="242" width="70" height="6"  rx="3" fill="oklch(0.72 0.19 45 / 0.3)" />

      <rect x="395" y="230" width="110" height="32" rx="10" fill="oklch(0.18 0.04 240 / 0.95)" stroke="oklch(0.65 0.15 200 / 0.5)" strokeWidth="1" />
      <circle cx="410" cy="246" r="5" fill="oklch(0.72 0.19 45)" />
      <rect x="421" y="240" width="44" height="8"  rx="3" fill="oklch(0.65 0.15 200 / 0.7)" />
      <rect x="421" y="252" width="66" height="6"  rx="3" fill="oklch(0.65 0.15 200 / 0.3)" />

      <rect x="730" y="234" width="104" height="32" rx="10" fill="oklch(0.18 0.04 240 / 0.95)" stroke="oklch(0.4 0.18 140 / 0.5)" strokeWidth="1" />
      <circle cx="746" cy="250" r="5" fill="oklch(0.65 0.15 200)" />
      <rect x="757" y="244" width="40" height="8"  rx="3" fill="oklch(0.4 0.18 140 / 0.7)" />
      <rect x="757" y="256" width="62" height="6"  rx="3" fill="oklch(0.4 0.18 140 / 0.3)" />

      {/* STREET LIGHTS */}
      {[200,430,670,900].map((x, i) => (
        <g key={`sl${i}`} transform={`translate(${x}, 230)`}>
          <rect x="-2" y="0" width="4" height="52" rx="2" fill="oklch(0.25 0.03 240)" />
          <rect x="-16" y="-2" width="30" height="6" rx="2" fill="oklch(0.25 0.03 240)" />
          <ellipse cx="14" cy="1" rx="8" ry="4" fill="oklch(0.88 0.12 80 / 0.9)" filter="url(#hciGlow)" />
          <ellipse cx="14" cy="18" rx="28" ry="8" fill="oklch(0.88 0.12 80 / 0.06)" />
        </g>
      ))}

      {/* GROUND */}
      <rect x="0" y="380" width="1100" height="80" fill="oklch(0.13 0.02 230)" />
      <rect x="0" y="378" width="1100" height="4"  fill="oklch(0.18 0.03 240)" />
      {[80,220,400,580,740,920].map((x, i) => (
        <ellipse key={`car${i}`} cx={x} cy="410" rx={i%2===0?18:12} ry="4"
          fill={i%3===0 ? 'oklch(0.88 0.12 80 / 0.5)' : 'oklch(0.6 0.22 20 / 0.45)'}
          filter="url(#hciSoftBlur)" />
      ))}
    </svg>
  )
}
