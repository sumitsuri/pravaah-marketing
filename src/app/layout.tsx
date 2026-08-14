import type { Metadata } from "next";
import { Fraunces, Sora } from "next/font/google";
import Script from "next/script";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloatingButton } from "@/components/WhatsAppConnect";
import { MarketingThemeProvider } from "@/components/theme/MarketingThemeProvider";
import { brand, faqs } from "@/lib/content";
import { MARKETING_THEME_BOOT } from "@/lib/marketing-theme";
import { MarketingAnalytics } from "@/components/analytics/MarketingAnalytics";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://antrahq.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} — ${brand.searchCategory}`,
    template: `%s · ${brand.name}`,
  },
  description:
    "Multi-branch salon management software for India. Antrahq connects billing, POS, CRM, inventory, staff attendance, WhatsApp marketing, and branch P&L for salon and spa operators — from one outlet to national chains.",
  keywords: [
    "Multi-branch salon management software India",
    "single outlet salon software India",
    "salon POS software India GST",
    "salon CRM software",
    "salon billing software GST",
    "salon inventory management",
    "salon staff attendance software",
    "WhatsApp marketing for salons",
    "salon reviews and ratings software",
    "Google Business Profile salon management",
  ],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg" }],
  },
  openGraph: {
    title: `${brand.name} — ${brand.searchCategory}`,
    description: brand.mission,
    type: "website",
    url: siteUrl,
    locale: "en_IN",
    siteName: brand.name,
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Antrahq — multi-branch salon management software for India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — ${brand.searchCategory}`,
    description: brand.mission,
    images: ["/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: brand.name,
      url: siteUrl,
      email: brand.email,
      description: brand.mission,
      logo: `${siteUrl}/favicon.svg`,
      sameAs: [siteUrl],
      contactPoint: {
        "@type": "ContactPoint",
        email: brand.email,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: brand.name,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "SoftwareApplication",
      name: brand.name,
      url: siteUrl,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: brand.mission,
      offers: {
        "@type": "Offer",
        url: `${siteUrl}/pricing/`,
        priceCurrency: "INR",
        price: "2999",
        description: "Starter plan per branch per month — see pricing page for tiers",
      },
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <Script id="marketing-theme-boot" strategy="beforeInteractive">
          {MARKETING_THEME_BOOT}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-hidden font-sans antialiased">
        <MarketingAnalytics />
        <MarketingThemeProvider>
          <SiteHeader />
          <main className="pb-20 sm:pb-24">{children}</main>
          <SiteFooter />
          <WhatsAppFloatingButton />
        </MarketingThemeProvider>
      </body>
    </html>
  );
}
