import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"

// Server Components - Import normally for SSR/Fast loading
import { FeaturesSection } from "@/components/features-section"
import { RegulatoryCoverageSection } from "@/components/regulatory-coverage-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"

// Optimized Dynamic Client Components (using ssr: false via client wrapper)
import { 
    FaqSectionDeferred, 
    CtaBannerSectionDeferred 
} from "@/components/client-deferred"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <RegulatoryCoverageSection />
        <HowItWorksSection />
        <BenefitsSection />
        <TestimonialsSection />
        <FaqSectionDeferred />
        <CtaBannerSectionDeferred />
      </main>
      <Footer />
    </div>
  )
}
