import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, X } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FeatureScreen } from "@/components/mockups/FeatureScreen";
import { FinalCta } from "@/components/sections/FinalCta";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { brand, painPoints } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

const solutions = {
  "multi-branch": {
    seoTitle: "Multi-Branch Salon Management Software India",
    seoDescription:
      "Run every salon branch from one platform: standard billing, CRM, attendance and inventory per outlet, plus branch P&L and ranking for owners.",
    painIds: ["profit", "staff", "stock"],
    eyebrow: "Solution · Multi-branch operations",
    title: "Multi-branch salon management platform — one outlet to any network",
    body: "Standardise billing, CRM, staff attendance, inventory, and branch reporting across your network — whether you operate one salon or spa outlet today or dozens. One owner view and a manager app on every floor.",
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
    seoTitle: "Salon Software for Owners — Branch P&L & Growth",
    seoDescription:
      "Salon owner dashboard: branch P&L, Market Pulse ranking, Local Spotlight, Customer voice ratings and WhatsApp win-backs in one morning view.",
    painIds: ["profit", "retention", "local"],
    eyebrow: "Solution · Owners & finance",
    title: "Salon management platform for owners: revenue, branch P&L, retention",
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
    seoTitle: "Salon Manager App — Walk-ins, Attendance & Stock",
    seoDescription:
      "Salon manager app for tablets and phones: 60-second GST walk-in billing, selfie + GPS attendance, leave approvals and stock movements per branch.",
    painIds: ["desk", "staff", "stock"],
    eyebrow: "Solution · Branch managers",
    title: "Salon & spa floor app — walk-ins, staff, and stock",
    body: "Walk-ins, verified punches, stock movements, and bookings on installable salon tablets — built for Indian desk speed and GST compliance inside a full management platform.",
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
  return pageMetadata({ title: page.seoTitle, description: page.seoDescription, path: `/solutions/${slug}/` });
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = solutions[slug as SolutionKey];
  if (!page) notFound();
  const pains = painPoints.filter((p) => (page.painIds as readonly string[]).includes(p.id));

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        body={page.body}
        crumbs={[{ name: page.eyebrow.replace("Solution · ", ""), path: `/solutions/${slug}/` }]}
      />
      <section className="section-pad bg-white">
        <div className="container-wide grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            {page.points.map((p) => (
              <div key={p.title} className="border-t border-surface-line pt-5">
                <h2 className="h-card">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-mute">{p.desc}</p>
              </div>
            ))}
            <Link href="/products" className="btn-secondary">
              Explore all modules
            </Link>
          </div>
          <FeatureScreen variant={page.screen} elevated />
        </div>
      </section>
      <section className="section-pad bg-surface">
        <div className="container-wide">
          <p className="eyebrow">Problems solved</p>
          <h2 className="h-section mt-3 !text-3xl">What {brand.name} fixes for you</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {pains.map((p) => (
              <div key={p.id} className="card flex flex-col p-6">
                <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-pain">
                  <X className="h-3.5 w-3.5" aria-hidden /> Problem
                </p>
                <p className="mt-2 font-semibold text-ink">{p.pain}</p>
                <p className="mt-4 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-win">
                  <Check className="h-3.5 w-3.5" aria-hidden /> {p.title}
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-mute">{p.solution}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.modules.map((m) => (
                    <Link key={m.label} href={m.href} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand hover:bg-brand-100">
                      {m.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TimelineSection />
      <FinalCta />
    </>
  );
}
