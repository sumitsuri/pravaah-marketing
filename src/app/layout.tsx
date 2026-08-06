import type { Metadata } from "next";
import { Fraunces, Sora } from "next/font/google";
import Script from "next/script";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloatingButton } from "@/components/WhatsAppConnect";
import { MarketingThemeProvider } from "@/components/theme/MarketingThemeProvider";
import { brand } from "@/lib/content";
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
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s · ${brand.name}`,
  },
  description:
    "Multi-branch salon management software for India. Antrahq connects billing, POS, CRM, inventory, staff attendance, WhatsApp marketing, and branch P&L for 3–20 outlet salon and spa chains.",
  keywords: [
    "multi branch salon management software India",
    "salon POS software India GST",
    "salon CRM software",
    "salon billing software GST",
    "salon inventory management",
    "salon staff attendance software",
    "WhatsApp marketing for salons",
    "branch P&L salon chain",
  ],
  openGraph: {
    title: `${brand.name} — ${brand.short}`,
    description: brand.mission,
    type: "website",
    url: siteUrl,
    locale: "en_IN",
    siteName: brand.name,
  },
  alternates: {
    canonical: "/",
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
      name: brand.name,
      url: siteUrl,
      email: brand.email,
      description: brand.mission,
    },
    {
      "@type": "SoftwareApplication",
      name: brand.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: brand.mission,
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "2999",
        description: "Starter plan per branch per month — see pricing page for tiers",
      },
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
