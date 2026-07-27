import { HeroSection } from "@/components/sections/HeroSection";
import { StatsBand } from "@/components/sections/StatsBand";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { DecisionPlatformSection } from "@/components/sections/DecisionPlatformSection";
import { AgentFlowSection } from "@/components/sections/AgentFlowSection";
import { LeakSolutionsSection } from "@/components/sections/LeakSolutionsSection";
import { VideoStoriesSection } from "@/components/sections/VideoStoriesSection";
import { PredictiveSection } from "@/components/sections/PredictiveSection";
import { VerticalsSection } from "@/components/sections/VerticalsSection";
import { OsSection } from "@/components/sections/OsSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";

/** Conversion funnel: hook → trust → platform story → proof → compare → price → close */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBand />
      <TrustStrip />
      <DecisionPlatformSection />
      <AgentFlowSection />
      <LeakSolutionsSection />
      <PredictiveSection />
      <VideoStoriesSection />
      <ResultsSection />
      <VerticalsSection />
      <OsSection />
      <TimelineSection />
      <ComparisonSection />
      <PricingPreview />
      <FaqSection />
      <FinalCta />
    </>
  );
}
