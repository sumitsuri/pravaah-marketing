import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { FeatureScreen } from "@/components/mockups/FeatureScreen";
import { productPages, nav } from "@/lib/content";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata = {
  title: "Products",
  description: "Pravaah product suite — billing, analytics, attendance, campaigns, inventory.",
};

export default function ProductsHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Every module your chain touches in a day — in one flow."
        body="Explore the product surfaces managers and owners use daily. Each page shows the workflow, UI, and outcomes we demo live."
      />
      <section className="section-pad bg-white">
        <div className="container-wide grid gap-8 md:grid-cols-2">
          {nav.products.map((p) => {
            const key = p.href.split("/").pop() as keyof typeof productPages;
            const detail = productPages[key];
            return (
              <Link
                key={p.href}
                href={p.href}
                className="group rounded-3xl border border-ink/10 bg-mist-soft/40 p-6 transition hover:border-jade/40 hover:bg-mist-soft md:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-jade">
                  {detail.eyebrow}
                </p>
                <h2 className="mt-2 font-display text-3xl text-ink group-hover:text-jade">
                  {detail.title}
                </h2>
                <p className="mt-3 text-sm text-ink-mute">{detail.hero}</p>
                <div className="mt-6">
                  <FeatureScreen variant={detail.screen} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
