import { cn } from '@/lib/utils'

interface LogoMarkProps {
  size?: number
  className?: string
  /** Unique ID suffix to prevent gradient-id collisions when multiple marks appear on one page */
  id?: string
}

export function LogoMark({ size = 40, className, id = 'a' }: LogoMarkProps) {
  const gradId = `tf-bg-${id}`
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF9D40" />
          <stop offset="1" stopColor="#FF5800" />
        </linearGradient>
      </defs>
      {/* Container */}
      <rect width="44" height="44" rx="10" fill={`url(#${gradId})`} />
      {/* Origin waypoints — three fleet origins on the left */}
      <circle cx="6" cy="9"  r="2.5" fill="white" />
      <circle cx="6" cy="22" r="3"   fill="white" />
      <circle cx="6" cy="35" r="2.5" fill="white" />
      {/* Three converging routes */}
      <path d="M 8.5,9  Q 26,9  29,22" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M 9,22   L 29,22"       stroke="white" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M 8.5,35 Q 26,35 29,22" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Forward arrow — one optimised direction */}
      <polygon points="29,15 39,22 29,29" fill="white" />
    </svg>
  )
}

interface LogoProps {
  className?: string
  markSize?: number
  /** Pass 'footer' or any string to disambiguate gradient IDs */
  id?: string
  textSize?: string
}

export function Logo({ className, markSize = 40, id = 'a', textSize = 'text-xl' }: LogoProps) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <LogoMark size={markSize} id={id} />
      <span className={cn('font-bold tracking-tight', textSize)}>
        <span className="text-foreground">Transit</span>
        <span className="text-gradient">Flow</span>
      </span>
    </span>
  )
}
