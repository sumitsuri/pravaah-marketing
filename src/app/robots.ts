import type { MetadataRoute } from "next";

export const dynamic = "force-static";

/**
 * The static export ships Next.js router payloads next to every page (`index.txt`, `__next.*.txt`) and
 * client navigation requests `?_rsc=` URLs. They are plain-text duplicates of real pages, so keep crawlers
 * on the HTML (Search Console was counting them as duplicate / alternate URLs).
 * llms.txt (AI answer engines) and the IndexNow key file must stay crawlable.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/llms.txt", "/8a70f668014d7bfa2bb597aeb4ebe82f.txt"],
      disallow: ["/*?_rsc=", "/*index.txt$", "/*__next."],
    },
    sitemap: "https://antrahq.com/sitemap.xml",
    host: "https://antrahq.com",
  };
}
