import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FeatureScreen } from "@/components/mockups/FeatureScreen";
import { FinalCta } from "@/components/sections/FinalCta";
import { nav, productPages } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Salon Management Software Features & Modules",
  description:
    "Every AntraHQ module: GST billing, salon POS, CRM, memberships, staff attendance, inventory, WhatsApp marketing, branch P&L, Local Spotlight and reviews.",
  path: "/products/",
});

export default function ProductsHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Every module your salon touches in a day — connected"
        body="Billing, guests, staff, stock, marketing and branch profit share one database, so nothing is re-typed and every report agrees."
        crumbs={[{ name: "Products", path: "/products/" }]}
      />
      <section className="section-pad bg-white">
        <div className="container-wide grid gap-6 md:grid-cols-2">
          {nav.products.map((p) => {
            const key = p.href.split("/").pop() as keyof typeof productPages;
            const detail = productPages[key];
            return (
              <Link key={p.href} href={p.href} className="card card-hover group flex min-w-0 flex-col p-6 sm:p-8">
                <p className="eyebrow">{detail.eyebrow.replace("Product · ", "")}</p>
                <h2 className="h-card mt-2 !text-2xl group-hover:text-brand">{detail.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-mute">{detail.hero}</p>
                <div className="mt-6 overflow-hidden rounded-xl bg-surface p-3 sm:p-4">
                  <FeatureScreen variant={detail.screen} label={`${detail.title} screen (demo data)`} />
                </div>
                <span className="link-arrow mt-5">
                  Learn more <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
