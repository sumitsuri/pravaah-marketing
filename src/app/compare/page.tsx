import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { EdgeSection } from "@/components/home/EdgeSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { comparePages } from "@/lib/compare-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Salon Software India Compared: AntraHQ vs Zenoti & Fresha",
  absoluteTitle: true,
  description:
    "Compare salon management software in India: AntraHQ vs Zenoti, MioSalon, Salonist and Fresha on pricing, GST billing, WhatsApp, attendance and branch P&L.",
  path: "/compare/",
});

export default function CompareIndexPage() {
  const pages = Object.values(comparePages);
  return (
    <>
      <PageHero
        eyebrow="Compare"
        title="Salon software comparisons for Indian salon & spa owners"
        body="Fair, side-by-side starting points — where each tool is strong, where AntraHQ fits, and what to check in a demo."
        crumbs={[{ name: "Compare", path: "/compare/" }]}
      />
      <section className="section-pad bg-white">
        <div className="container-wide grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pages.map((page) => (
            <Link key={page.slug} href={`/compare/${page.slug}`} className="card card-hover group flex flex-col p-6">
              <p className="eyebrow">{page.eyebrow.replace("Compare · ", "")}</p>
              <h2 className="h-card mt-2">{page.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-mute">{page.bestFor.antrahq}</p>
              <span className="link-arrow mt-5">
                Read comparison <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <EdgeSection showCompareLinks={false} />
      <FinalCta />
    </>
  );
}
