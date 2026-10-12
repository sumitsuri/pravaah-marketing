import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { PricingCards } from "@/components/sections/PricingPreview";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { brand, pricing } from "@/lib/content";
import { faqJsonLd, pageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Salon Software Pricing India — From ₹499/Branch",
  description:
    "AntraHQ salon software pricing: Starter ₹499 and Growth ₹699 per branch per month, Enterprise on request. No booking commission. WhatsApp included on Growth.",
  path: "/pricing/",
});

const pricingFaqs = [
  {
    q: "How is AntraHQ priced?",
    a: "Per branch, per month. Starter is ₹499 and Growth is ₹699 per branch per month. Enterprise is priced for larger chains that need dedicated onboarding, an SLA, API access or custom integrations.",
  },
  {
    q: "Do you charge commission on bookings or payments?",
    a: "No. AntraHQ is a subscription. You keep 100% of your booking revenue and your guest data is never shown to other salons.",
  },
  {
    q: "Which plan should a single salon choose?",
    a: "Starter covers GST billing, bookings, basic reports and attendance for one outlet. Choose Growth if you want WhatsApp campaigns, branch P&L, Market Pulse, Local Spotlight and Customer voice — or as soon as you open a second branch.",
  },
  {
    q: "Is WhatsApp marketing an extra cost?",
    a: "Campaign tools are included on Growth. Message delivery runs through your own WhatsApp Business provider account, which bills you for messages directly at its rates.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes. Plans are per branch, so you can move a branch from Starter to Growth when you are ready — your data stays in place.",
  },
] as const;

const included = [
  "GST invoices with per-branch GSTIN",
  "WhatsApp PDF receipts",
  "Manager floor app on tablets & phones",
  "App in English + 9 Indian languages",
  "Same-day guided go-live",
  "No commission on any booking",
];

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: `${brand.name} salon & spa management software`,
            description: brand.mission,
            brand: { "@type": "Brand", name: brand.name },
            offers: pricing
              .filter((t) => t.price.startsWith("₹"))
              .map((t) => ({
                "@type": "Offer",
                name: `${t.name} plan`,
                price: t.price.replace(/[^\d]/g, ""),
                priceCurrency: "INR",
                url: `${SITE_URL}/pricing/`,
                availability: "https://schema.org/InStock",
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: t.price.replace(/[^\d]/g, ""),
                  priceCurrency: "INR",
                  unitText: "per branch per month",
                },
              })),
          },
          faqJsonLd(pricingFaqs),
        ]}
      />
      <PageHero
        eyebrow="Pricing"
        title="Simple per-branch pricing for salons and spas"
        body="Published prices, no booking commission, and WhatsApp campaigns included on Growth. Start with one branch and add more on the same plan."
        crumbs={[{ name: "Pricing", path: "/pricing/" }]}
        secondaryHref="/compare"
        secondaryLabel="Compare alternatives"
      />
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="mx-auto max-w-5xl">
            <PricingCards headingLevel="h2" />
          </div>
          <div className="mx-auto mt-12 max-w-5xl rounded-2xl border border-surface-line bg-surface p-6 sm:p-8">
            <h2 className="font-display text-xl text-ink">Included on every plan</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {included.map((i) => (
                <li key={i} className="flex gap-2 text-sm text-ink-soft">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-ink-mute">
            Enterprise suites quote privately and booking marketplaces charge per new client. {brand.name} keeps it simple: pay
            per branch, keep every booking.{" "}
            <Link href="/compare" className="font-semibold text-brand hover:underline">
              See how we compare
            </Link>
          </p>
        </div>
      </section>
      <FaqSection faqs={pricingFaqs} title="Pricing questions" />
      <FinalCta />
    </>
  );
}
