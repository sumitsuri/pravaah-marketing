import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { LeakSolutionsSection } from "@/components/sections/LeakSolutionsSection";
import { PredictiveSection } from "@/components/sections/PredictiveSection";
import { OsSection } from "@/components/sections/OsSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <LeakSolutionsSection />
      <PredictiveSection />
      <OsSection />
      <TimelineSection />
      <ResultsSection />
      <FeaturesSection />
      <PricingPreview />
      <FinalCta />
    </>
  );
}
