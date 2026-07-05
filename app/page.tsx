import Header from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { PlatformShowcase } from "@/components/platform-showcase"
import { CaseStudies } from "@/components/case-studies"
import { Integrations } from "@/components/integrations"
import { Security } from "@/components/security"
import { Testimonials } from "@/components/testimonials"
import { Metrics } from "@/components/metrics"
import { ProductExplainer } from "@/components/product-explainer"
import { FreeResources } from "@/components/free-resources"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      <Header />
      <Hero />
      <Features />
      <PlatformShowcase />
      <CaseStudies />
      <Integrations />
      <Security />
      <Testimonials />
      <Metrics />
      <ProductExplainer />
      <FreeResources />
      <FinalCTA />
      <Footer />
    </div>
  )
}
