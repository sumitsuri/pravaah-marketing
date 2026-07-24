import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { FeatureScreen } from "@/components/mockups/FeatureScreen";
import { ProductFilm } from "@/components/ProductFilm";
import { FinalCta } from "@/components/sections/FinalCta";
import { TimelineSection } from "@/components/sections/TimelineSection";

const solutions = {
  "multi-branch": {
    eyebrow: "Solution · Multi-branch",
    title: "Run every outlet like your best one.",
    body: "Standardise walk-in GST, attendance, inventory, and reporting across 3–20 branches — without an enterprise programme or marketplace tax.",
    points: [
      {
        title: "One brand admin",
        desc: "Branches, managers, GSTINs, and geofences configured once — then every outlet inherits the flow.",
      },
      {
        title: "Comparable P&Ls",
        desc: "Same cost categories and revenue truth so you can coach every outlet with the same scoreboard.",
      },
      {
        title: "Floor app that travels",
        desc: "Managers get the same PWA playbook whether they open a new branch or cover a shift.",
      },
    ],
    screen: "pulse" as const,
  },
  owners: {
    eyebrow: "Solution · Owners & CEOs",
    title: "Morning command: revenue, leaks, and win-backs.",
    body: "Pravaah gives owners a five-minute ritual — chain KPIs, branch P&L, Market Pulse, then a WhatsApp campaign to fill quiet chairs.",
    points: [
      {
        title: "Market Pulse",
        desc: "Rank outlets inside your brand and against anonymised peers with playbooks attached.",
      },
      {
        title: "Campaigns included",
        desc: "Growth includes WhatsApp audience tools so retention isn’t a surprise invoice.",
      },
      {
        title: "People economics",
        desc: "CEO-gated salaries, targets, and incentives — aligned with attendance integrity.",
      },
    ],
    screen: "pnl" as const,
  },
  managers: {
    eyebrow: "Solution · Branch managers",
    title: "The floor app your desk actually uses.",
    body: "Walk-ins, verified punches, stock movements, and today’s bookings — installable on salon tablets without waiting on an App Store release.",
    points: [
      {
        title: "60-second billing",
        desc: "Guest → services + stylist → pay. GST preview before collection.",
      },
      {
        title: "Trusted attendance",
        desc: "Selfie + GPS geofence with leave workflows built in.",
      },
      {
        title: "Stock accountability",
        desc: "Log usage and wastage as it happens — not at month-end panic.",
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
  return { title: page.title, description: page.body };
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
