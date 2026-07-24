import { HeroSection } from "@/components/sections/HeroSection";
import { StatsBand } from "@/components/sections/StatsBand";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { LeakSolutionsSection } from "@/components/sections/LeakSolutionsSection";
import { VideoStoriesSection } from "@/components/sections/VideoStoriesSection";
import { PredictiveSection } from "@/components/sections/PredictiveSection";
import { VerticalsSection } from "@/components/sections/VerticalsSection";
import { OsSection } from "@/components/sections/OsSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBand />
      <TrustStrip />
      <LeakSolutionsSection />
      <VideoStoriesSection />
      <PredictiveSection />
      <VerticalsSection />
      <OsSection />
      <TimelineSection />
      <ResultsSection />
      <FeaturesSection />
      <ComparisonSection />
      <PricingPreview />
      <FaqSection />
      <FinalCta />
    </>
  );
}
