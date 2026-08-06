import Link from "next/link";
import { notFound } from "next/navigation";
import { brand } from "@/lib/content";
import { resourceArticles } from "@/lib/resource-articles";
import { FinalCta } from "@/components/sections/FinalCta";

export function generateStaticParams() {
  return Object.keys(resourceArticles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = resourceArticles[slug];
  if (!article) return { title: "Resource" };
  return {
    title: article.seoTitle,
    description: article.seoDescription,
    alternates: { canonical: `/resources/${slug}` },
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      type: "article",
    },
  };
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = resourceArticles[slug];
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.seoDescription,
    author: { "@type": "Organization", name: brand.name },
    publisher: { "@type": "Organization", name: brand.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="bg-flow-hero pt-28">
        <header className="section-pad !pb-8 !pt-10">
          <div className="container-narrow">
            <Link href="/resources" className="text-sm font-semibold text-jade hover:underline">
              ← Resources
            </Link>
            <p className="eyebrow mt-6">{article.type}</p>
            <h1 className="display mt-3">{article.title}</h1>
            <p className="lede mt-5">{article.lede}</p>
            <p className="mt-4 text-xs text-ink-mute">{article.readMinutes} min read</p>
          </div>
        </header>

        <div className="section-pad !pt-0">
          <div className="container-narrow space-y-10">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl text-ink md:text-3xl">{section.heading}</h2>
                <p className="mt-4 text-base leading-relaxed text-ink-mute">{section.body}</p>
                {section.bullets ? (
                  <ul className="mt-4 space-y-2">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-ink-mute">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-jade" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <div className="rounded-2xl border border-jade/25 bg-jade/5 p-6 md:p-8">
              <p className="text-sm leading-relaxed text-ink-mute">{article.cta}</p>
              <Link href="/demo" className="btn-primary mt-5 inline-flex">
                {brand.cta.primary}
              </Link>
            </div>
          </div>
        </div>
      </article>
      <FinalCta />
    </>
  );
}
