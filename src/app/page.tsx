import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsBand } from "@/components/sections/StatsBand";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { DecisionPlatformSection } from "@/components/sections/DecisionPlatformSection";
import { AgentFlowSection } from "@/components/sections/AgentFlowSection";
import { LeakSolutionsSection } from "@/components/sections/LeakSolutionsSection";
import { VideoStoriesSection } from "@/components/sections/VideoStoriesSection";
import { PredictiveSection } from "@/components/sections/PredictiveSection";
import { LocalReputationSection } from "@/components/sections/LocalReputationSection";
import { VerticalsSection } from "@/components/sections/VerticalsSection";
import { OsSection } from "@/components/sections/OsSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: {
    absolute: `${brand.name} — ${brand.searchCategory}`,
  },
  description:
    "Best salon and spa management platform for India. Antrahq connects GST billing, POS, CRM, attendance, WhatsApp, and multi-branch P&L — salon software built for chains from one outlet to national networks.",
  alternates: { canonical: "/" },
};

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
      <LocalReputationSection />
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
