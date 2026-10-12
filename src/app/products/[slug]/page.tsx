import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, X } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FeatureScreen } from "@/components/mockups/FeatureScreen";
import { FinalCta } from "@/components/sections/FinalCta";
import { nav, painPoints, productPages } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

type ProductKey = keyof typeof productPages;

export function generateStaticParams() {
  return Object.keys(productPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = productPages[slug as ProductKey];
  if (!page) return { title: "Product" };
  const canonicalSlug = "canonicalSlug" in page ? page.canonicalSlug : slug;
  return pageMetadata({
    title: page.seoTitle,
    absoluteTitle: true,
    description: page.seoDescription,
    path: `/products/${canonicalSlug}/`,
  });
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = productPages[slug as ProductKey];
  if (!page) notFound();

  const href = `/products/${slug}`;
  const solves = painPoints.filter((p) => p.modules.some((m) => m.href === href));
  const related = nav.products.filter((p) => p.href !== href).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        body={page.hero}
        crumbs={[
          { name: "Products", path: "/products/" },
          { name: page.title, path: `${href}/` },
        ]}
      />

      <section className="section-pad bg-white">
        <div className="container-wide grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="h-section !text-3xl">What it does</h2>
            <p className="body-copy mt-4 !text-base">{page.body}</p>
            <ul className="mt-8 space-y-3">
              {page.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[0.9375rem] text-ink-soft">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <FeatureScreen variant={page.screen} elevated label={`${page.title} screen (demo data)`} />
        </div>
      </section>

      {solves.length > 0 && (
        <section className="section-pad bg-surface">
          <div className="container-wide">
            <p className="eyebrow">Problems it solves</p>
            <h2 className="h-section mt-3 !text-3xl">Why salon owners turn this on first</h2>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {solves.map((p) => (
                <div key={p.id} className="card p-6">
                  <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-pain">
                    <X className="h-3.5 w-3.5" aria-hidden /> The problem
                  </p>
                  <p className="mt-2 font-semibold text-ink">{p.pain}</p>
                  <p className="mt-4 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-win">
                    <Check className="h-3.5 w-3.5" aria-hidden /> The fix
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-mute">{p.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-pad-sm bg-white">
        <div className="container-wide">
          <h2 className="font-display text-xl text-ink">Works together with</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <Link key={r.href} href={r.href} className="card card-hover group p-5">
                <span className="block font-semibold text-ink">{r.title}</span>
                <span className="mt-1 block text-sm text-ink-mute">{r.desc}</span>
                <span className="link-arrow mt-3">
                  Explore <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
