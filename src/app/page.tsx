import { HeroSection } from "@/components/sections/HeroSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { WorkflowsSection } from "@/components/sections/WorkflowsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PillarsSection />
      <WorkflowsSection />
      <FeaturesSection />
      <PricingPreview />
      <FinalCta />
    </>
  );
}
