import type { Metadata } from "next";

export const SITE_URL = "https://antrahq.com";
export const SITE_NAME = "AntraHQ";
export const OG_IMAGE = "/og-default.png";

/** Date content on the site was last materially revised — drives sitemap lastmod and Article dateModified. */
export const CONTENT_UPDATED = "2026-10-12";

/** Normalises a path to the trailing-slash form the static export serves. */
export function canonicalPath(path: string): string {
  if (!path || path === "/") return "/";
  const withLead = path.startsWith("/") ? path : `/${path}`;
  return withLead.endsWith("/") ? withLead : `${withLead}/`;
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${canonicalPath(path)}`;
}

/**
 * Per-page metadata with canonical, Open Graph and Twitter set together.
 * Without this, Next.js reuses the root layout's openGraph block and every shared inner page
 * previews with the homepage title.
 *
 * `title` is rendered through the root template (`%s · AntraHQ`) unless `absoluteTitle` is set.
 * Keep titles ≤ 60 chars and descriptions ≤ 158 chars so Google does not truncate them.
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  type = "website",
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  type?: "website" | "article";
  noindex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const socialTitle = absoluteTitle ? title : `${title} · ${SITE_NAME}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: canonicalPath(path) },
    openGraph: {
      title: socialTitle,
      description,
      url,
      type,
      siteName: SITE_NAME,
      locale: "en_IN",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: socialTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [OG_IMAGE],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function itemListJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, url: absoluteUrl(it.path) })),
  };
}

export function faqJsonLd(faqs: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
