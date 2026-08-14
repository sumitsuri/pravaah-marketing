import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { FeatureScreen } from "@/components/mockups/FeatureScreen";
import { ProductFilm } from "@/components/ProductFilm";
import { FinalCta } from "@/components/sections/FinalCta";
import { TimelineSection } from "@/components/sections/TimelineSection";

import { brand } from "@/lib/content";

const solutions = {
  "multi-branch": {
    eyebrow: "Solution · Multi-branch operations",
    title: "Salon management that scales — one branch to any network",
    body: "Standardise billing, CRM, staff attendance, inventory, and branch reporting across your network — whether you operate one outlet today or dozens. One owner view and a manager app on every floor.",
    points: [
      {
        title: "One brand admin",
        desc: "Branches, managers, GSTINs, and geofences configured once — then every outlet runs the same playbook.",
      },
      {
        title: "Comparable branch P&L",
        desc: "Same cost categories and revenue truth so finance and ops coach outlets on one scoreboard.",
      },
      {
        title: "Floor app on every tablet",
        desc: "Managers bill walk-ins, punch attendance, and log stock from the same installable PWA.",
      },
    ],
    screen: "pulse" as const,
  },
  owners: {
    eyebrow: "Solution · Owners & finance",
    title: "Owner dashboard: revenue, branch P&L, and retention",
    body: `${brand.name} gives founders and finance leaders a morning routine — network KPIs, branch profitability, Market Pulse ranking, Local Spotlight local search signals, Customer voice ratings, and WhatsApp win-back previews from one CRM graph.`,
    points: [
      {
        title: "Market Pulse",
        desc: "Rank outlets inside your brand with anonymised peer context and suggested coaching actions.",
      },
      {
        title: "Local Spotlight",
        desc: "Local Visibility Score, Google profile gaps, and nearby rival salons with weekly action plans.",
      },
      {
        title: "Customer voice",
        desc: "Ratings from desk QR, category themes, Google publish status, and open recovery cases.",
      },
      {
        title: "People economics",
        desc: "Salaries, targets, and attendance exceptions visible before payroll closes.",
      },
    ],
    screen: "pnl" as const,
  },
  managers: {
    eyebrow: "Solution · Branch managers",
    title: "Salon floor app for walk-ins, staff, and stock",
    body: "Walk-ins, verified punches, stock movements, and bookings on installable salon tablets — built for Indian desk speed and GST compliance.",
    points: [
      {
        title: "Walk-in billing",
        desc: "Guest → services + stylist → pay, with GST preview before collection.",
      },
      {
        title: "Verified attendance",
        desc: "Selfie + GPS geofence with leave workflows managers review weekly.",
      },
      {
        title: "Stock accountability",
        desc: "Log usage and wastage as it happens — product cost feeds branch P&L.",
      },
    ],
    screen: "walkin" as const,
  },
} as const;

type SolutionKey = keyof typeof solutions;

export function generateStaticParams() {
  return Object.keys(solutions).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = solutions[slug as SolutionKey];
  if (!page) return { title: "Solutions" };
  return {
    title: page.title,
    description: page.body,
    alternates: { canonical: `/solutions/${slug}/` },
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = solutions[slug as SolutionKey];
  if (!page) notFound();

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} body={page.body} />
      <section className="section-pad bg-white">
        <div className="container-wide grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            {page.points.map((p) => (
              <div key={p.title} className="border-t border-ink/10 pt-5">
                <h2 className="font-display text-2xl text-ink">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-mute">{p.desc}</p>
              </div>
            ))}
            <Link href="/products" className="btn-secondary inline-flex">
              Explore products
            </Link>
          </div>
          <FeatureScreen variant={page.screen} />
        </div>
      </section>
      <section className="section-pad bg-mist-soft">
        <div className="container-wide">
          <h2 className="font-display text-3xl text-ink">See the product film</h2>
          <div className="mt-8">
            <ProductFilm autoPlay={false} />
          </div>
        </div>
      </section>
      <TimelineSection />
      <FinalCta />
    </>
  );
}
