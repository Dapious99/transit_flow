import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/landing/hero-section'
import { ProblemsSection } from '@/components/landing/problems-section'
import { FeaturesSection } from '@/components/landing/features-section'
import { ImpactSection } from '@/components/landing/impact-section'
// import { PartnersSection } from '@/components/landing/partners-section'
import { CTASection } from '@/components/landing/cta-section'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemsSection />
      <FeaturesSection />
      <ImpactSection />
      {/* <PartnersSection /> */}
      <CTASection />
      <Footer />
    </main>
  )
}
