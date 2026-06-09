import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/landing/hero-section'
import { ProblemsSection } from '@/components/landing/problems-section'
import { FeaturesSection } from '@/components/landing/features-section'
import { ProductVisualsSection } from '@/components/landing/product-visuals-section'
import { AITechnologySection } from '@/components/landing/ai-technology-section'
import { InfrastructureSection } from '@/components/landing/infrastructure-section'
import { WhyNowSection } from '@/components/landing/why-now-section'
import { MarketSection } from '@/components/landing/market-section'
import { TractionSection } from '@/components/landing/traction-section'
import { FoundersSection } from '@/components/landing/founders-section'
import { ImpactSection } from '@/components/landing/impact-section'
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
      {/* 4. Product Visuals — what the product looks like */}
      <ProductVisualsSection />
      {/* 5. AI Technology */}
      <AITechnologySection />
      {/* 6. Technology & Infrastructure */}
      <InfrastructureSection />
      {/* 7. Why Now */}
      <WhyNowSection />
      {/* 8. Market Opportunity */}
      <MarketSection />
      {/* 9. Traction / MVP */}
      <TractionSection />
      {/* 10. Founders */}
      <FoundersSection />
      {/* 11. Impact / Validated Targets */}
      <ImpactSection />
      {/* 12. Roadmap */}
      <RoadmapSection />
      {/* 13. CTA */}
      <CTASection />
      <Footer />
    </main>
  )
}
