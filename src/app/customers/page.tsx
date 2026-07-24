import { PageHero } from "@/components/PageHero";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { VideoStoriesSection } from "@/components/sections/VideoStoriesSection";
import { StatsBand } from "@/components/sections/StatsBand";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata = {
  title: "Customers",
  description: "Stories and outcomes from multi-branch salon operators using Pravaah.",
};

export default function CustomersPage() {
  return (
    <>
      <PageHero
        eyebrow="Customers"
        title="Operators who chose flow over fragmentation."
        body="Named outcomes from mid-market salon brands — finance clarity, attendance integrity, and WhatsApp win-backs that actually ship."
      />
      <StatsBand />
      <ResultsSection />
      <VideoStoriesSection />
      <FinalCta />
    </>
  );
}
