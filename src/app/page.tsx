import { HomeHero } from "@/components/home/HomeHero";
import { ProofBar } from "@/components/home/ProofBar";
import { ProblemsSection } from "@/components/home/ProblemsSection";
import { RolesSection } from "@/components/home/RolesSection";
import { AutopilotSection } from "@/components/home/AutopilotSection";
import { EdgeSection } from "@/components/home/EdgeSection";
import { FitSection } from "@/components/home/FitSection";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { brand, faqs, pricing } from "@/lib/content";
import { faqJsonLd, pageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Salon & Spa Management Software India | AntraHQ",
  absoluteTitle: true,
  description:
    "Salon & spa management software for India: GST billing, POS, CRM, memberships, staff attendance, WhatsApp marketing and branch P&L. From ₹499/branch.",
  path: "/",
});

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#software`,
  name: brand.name,
  url: SITE_URL,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Salon and spa management software",
  operatingSystem: "Web, Android",
  description: brand.mission,
  inLanguage: ["en-IN", "hi-IN", "bn-IN", "gu-IN", "mr-IN", "pa-IN", "kn-IN", "te-IN", "ta-IN", "ml-IN"],
  featureList: [
    "GST salon billing with per-branch GSTIN",
    "Salon POS with UPI, card and cash",
    "Guest CRM and WhatsApp marketing",
    "Memberships and service packages",
    "Geofenced selfie staff attendance",
    "Salon inventory management",
    "Multi-branch P&L and branch ranking",
    "Local Google visibility tracking",
    "QR review collection with Google routing",
  ],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    lowPrice: "499",
    highPrice: "699",
    offerCount: pricing.filter((p) => p.price.startsWith("₹")).length,
    url: `${SITE_URL}/pricing/`,
  },
  publisher: { "@id": `${SITE_URL}/#organization` },
};

/**
 * Homepage narrative — each section answers one buyer question, in order:
 * What is it? → Is it credible? → Does it solve MY problem? → What runs for me 24×7? → Who uses it? →
 * Why not a competitor? → Does it fit my business / how fast? → What does it cost? → Objections → Act.
 */
export default function HomePage() {
  return (
    <>
      <JsonLd data={[softwareJsonLd, faqJsonLd(faqs)]} />
      <HomeHero />
      <ProofBar />
      <ProblemsSection />
      <AutopilotSection />
      <RolesSection />
      <EdgeSection />
      <FitSection />
      <PricingPreview />
      <FaqSection />
      <FinalCta />
    </>
  );
}
