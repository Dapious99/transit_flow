import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TransitFlow | AI-Powered Smart Mobility Platform for Nigeria',
  description: 'Revolutionizing Nigerian urban transport with AI-driven fleet management, real-time tracking, and sustainable mobility solutions. Join the future of smart transportation in Nigeria.',
  keywords: ['smart mobility Nigeria', 'AI transport Nigeria', 'fleet management Lagos', 'urban logistics Nigeria', 'sustainable transport Africa', 'IoT', 'real-time tracking'],
  authors: [{ name: 'TransitFlow' }],
  openGraph: {
    title: 'TransitFlow | AI-Powered Smart Mobility Platform for Nigeria',
    description: 'Revolutionizing Nigerian urban transport with AI-driven fleet management and sustainable mobility solutions.',
    type: 'website',
    locale: 'en_NG',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TransitFlow | AI-Powered Smart Mobility Platform for Nigeria',
    description: 'Revolutionizing Nigerian urban transport with AI-driven fleet management and sustainable mobility solutions.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${spaceGrotesk.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
