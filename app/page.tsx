import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/landing/hero-section'
import { ProblemsSection } from '@/components/landing/problems-section'
import { FeaturesSection } from '@/components/landing/features-section'
import { AITechnologySection } from '@/components/landing/ai-technology-section'
import { InfrastructureSection } from '@/components/landing/infrastructure-section'
import { WhyNowSection } from '@/components/landing/why-now-section'
import { MarketSection } from '@/components/landing/market-section'
import { ImpactSection } from '@/components/landing/impact-section'
import { TractionSection } from '@/components/landing/traction-section'
import { RoadmapSection } from '@/components/landing/roadmap-section'
import { CTASection } from '@/components/landing/cta-section'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* 1. Hero */}
      <HeroSection />
      {/* 2. Problem */}
      <ProblemsSection />
      {/* 3. Solution / Features */}
      <FeaturesSection />
      {/* 4. AI Technology */}
      <AITechnologySection />
      {/* 5. Technology & Infrastructure */}
      <InfrastructureSection />
      {/* 6. Why Now */}
      <WhyNowSection />
      {/* 7. Market Opportunity */}
      <MarketSection />
      {/* 8. Traction / MVP */}
      <TractionSection />
      {/* 9. Impact / Validated Targets */}
      <ImpactSection />
      {/* 10. Roadmap */}
      <RoadmapSection />
      {/* 11. CTA */}
      <CTASection />
      <Footer />
    </main>
  )
}
