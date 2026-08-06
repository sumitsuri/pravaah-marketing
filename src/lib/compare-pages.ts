/** Fair, buyer-oriented competitor comparisons — factual framing, not attack ads. */

export type ComparePage = {
  slug: string;
  competitor: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  title: string;
  lede: string;
  competitorStrengths: string[];
  antrahqStrengths: string[];
  rows: { topic: string; competitor: string; antrahq: string }[];
  bestFor: { competitor: string; antrahq: string };
  disclaimer: string;
};

export const comparePages: Record<string, ComparePage> = {
  zenoti: {
    slug: "zenoti",
    competitor: "Zenoti",
    seoTitle: "Antrahq vs Zenoti for multi-branch salon chains in India",
    seoDescription:
      "Compare Antrahq and Zenoti for multi-location salons: implementation time, pricing transparency, branch P&L, GST billing, and mid-market fit for 3–20 outlet chains in India.",
    eyebrow: "Compare · Enterprise vs mid-market",
    title: "Antrahq vs Zenoti",
    lede:
      "Zenoti is a proven enterprise platform for large salon and spa chains worldwide. Antrahq focuses on mid-market Indian chains that want connected billing, CRM, staff, inventory, and branch profitability without a long enterprise rollout.",
    competitorStrengths: [
      "Deep enterprise feature set for large chains and franchises",
      "Mature multi-location reporting, marketing automation, and integrations",
      "Strong brand recognition with thousands of global deployments",
    ],
    antrahqStrengths: [
      "Transparent ₹/branch pricing published on the website",
      "Go-live in days for 3–20 branch networks — not quarters",
      "India desk reality: GST billing, WhatsApp receipts, geofenced attendance",
      "Branch P&L and Market Pulse built for owner coaching, not just dashboards",
      "Local Spotlight: Google visibility score, rivals, and GBP action plans",
      "Customer voice: desk QR reviews with Google routing and private recovery",
    ],
    rows: [
      {
        topic: "Typical chain size",
        competitor: "Large multi-location brands, franchises, med-spa groups",
        antrahq: "Growing salon & spa chains with 3–20 branches",
      },
      {
        topic: "Pricing",
        competitor: "Custom enterprise quotes — typically premium",
        antrahq: "Public ₹2,999–₹4,999 per branch / month",
      },
      {
        topic: "Implementation",
        competitor: "Structured rollout — often weeks to months",
        antrahq: "Tenant live day 1; floor billing within the first week",
      },
      {
        topic: "India GST billing",
        competitor: "Supported with configuration",
        antrahq: "Branch GSTIN, CGST/SGST PDF, WhatsApp receipt flow",
      },
      {
        topic: "Branch profitability",
        competitor: "Advanced analytics at enterprise tiers",
        antrahq: "Live branch P&L with salary, rent, and product cost",
      },
      {
        topic: "Booking marketplace commission",
        competitor: "Software subscription — no marketplace tax on your brand",
        antrahq: "Subscription only — you keep booking revenue",
      },
    ],
    bestFor: {
      competitor:
        "Operators planning 20+ locations who need enterprise integrations, dedicated account teams, and a globally proven stack.",
      antrahq:
        "Founders and ops heads at 3–20 branch Indian salon chains who want one connected platform with clear pricing and fast rollout.",
    },
    disclaimer:
      "Capabilities vary by plan and region. Validate your shortlist with live demos and reference checks — this page is a starting point, not a definitive scorecard.",
  },
  miosalon: {
    slug: "miosalon",
    competitor: "MioSalon",
    seoTitle: "Antrahq vs MioSalon — multi-branch salon software India",
    seoDescription:
      "Compare Antrahq and MioSalon for Indian salon chains: POS, CRM, WhatsApp, multi-branch P&L, attendance, and which platform fits 3–20 outlet operators.",
    eyebrow: "Compare · All-in-one platforms",
    title: "Antrahq vs MioSalon",
    lede:
      "MioSalon is a widely used cloud salon platform with strong automation for appointments, billing, and client management. Antrahq adds a growth-decision layer — branch P&L, Market Pulse, and connected profitability signals for multi-branch operators.",
    competitorStrengths: [
      "Established salon automation: bookings, billing, feedback, and marketing",
      "Outlet-based pricing that scales with location count",
      "Familiar choice for single-location and growing salon brands",
    ],
    antrahqStrengths: [
      "Branch P&L and Market Pulse for coaching weak outlets",
      "Verified geofenced attendance with photo evidence",
      "WhatsApp campaigns included on Growth tier — not a separate upsell",
      "Built specifically for 3–20 branch decision-making, not just desk ops",
    ],
    rows: [
      {
        topic: "Core focus",
        competitor: "Salon operations automation — appointments to billing",
        antrahq: "Connected ops + owner profitability decisions",
      },
      {
        topic: "Multi-branch P&L",
        competitor: "Reporting available; depth varies by setup",
        antrahq: "Live branch P&L with cost categories owners act on",
      },
      {
        topic: "Guest CRM",
        competitor: "Client profiles, history, and marketing tools",
        antrahq: "Phone-first profiles tied to billing, campaigns, and leads",
      },
      {
        topic: "WhatsApp",
        competitor: "Messaging and reminders supported",
        antrahq: "Receipts + win-back campaigns in the same guest graph",
      },
      {
        topic: "Attendance",
        competitor: "Staff tracking features",
        antrahq: "Selfie + GPS geofence with exception review",
      },
      {
        topic: "Pricing transparency",
        competitor: "Plan-based — confirm current rates with vendor",
        antrahq: "Public ₹/branch pricing on antrahq.com/pricing",
      },
    ],
    bestFor: {
      competitor:
        "Salon owners prioritising appointment automation and a proven all-in-one desk tool across one or a few outlets.",
      antrahq:
        "Multi-branch chains where the owner needs branch rank, profit leaks, and retention decisions — not just front-desk speed.",
    },
    disclaimer:
      "Feature sets evolve. Use a side-by-side demo with your actual branch count, GST setup, and reporting needs before deciding.",
  },
  salonist: {
    slug: "salonist",
    competitor: "Salonist",
    seoTitle: "Antrahq vs Salonist for growing salon chains in India",
    seoDescription:
      "Compare Antrahq and Salonist: POS, CRM, inventory, multi-branch management, GST billing, and which fits mid-market salon chains with 3–20 branches.",
    eyebrow: "Compare · Growing chains",
    title: "Antrahq vs Salonist",
    lede:
      "Salonist is a popular, approachable salon management tool for growing businesses. Antrahq targets a narrower segment: multi-branch salon and spa chains in India that need connected profitability intelligence, not just POS and bookings.",
    competitorStrengths: [
      "Easy to adopt for smaller teams getting off spreadsheets",
      "Core POS, booking, inventory, and client management in one place",
      "Accessible entry point for budget-conscious salon owners",
    ],
    antrahqStrengths: [
      "Network view: compare branches, coach weak outlets, act same-day",
      "Branch-level GSTIN and India-specific billing workflow",
      "Manager PWA for floor teams — walk-ins, stock, attendance together",
      "Transparent mid-market pricing designed for 3–20 outlets",
    ],
    rows: [
      {
        topic: "Primary buyer",
        competitor: "Single-location and small growing salons",
        antrahq: "Multi-branch founders, ops heads, finance leaders",
      },
      {
        topic: "Branch comparison",
        competitor: "Multi-branch support available",
        antrahq: "Market Pulse ranking + peer context + playbooks",
      },
      {
        topic: "Owner finance view",
        competitor: "Reports and summaries",
        antrahq: "Branch P&L with salary, rent, product, misc costs",
      },
      {
        topic: "GST walk-in billing",
        competitor: "Billing and invoicing supported",
        antrahq: "60-second wizard, CGST/SGST PDF, WhatsApp receipt",
      },
      {
        topic: "Marketing",
        competitor: "Client engagement tools",
        antrahq: "WhatsApp win-backs from visit & spend segments",
      },
      {
        topic: "Onboarding scope",
        competitor: "Quick start for smaller operations",
        antrahq: "Structured go-live across branches in days",
      },
    ],
    bestFor: {
      competitor:
        "Owners digitising a salon for the first time or running a small team that needs simple POS and bookings.",
      antrahq:
        "Operators already running 3+ branches who outgrew disconnected tools and need one truth from desk to dashboard.",
    },
    disclaimer:
      "Your branch count, city mix, and finance workflow matter more than feature checklists. Book audits with both vendors if you are shortlisting.",
  },
};

export const compareNav = Object.values(comparePages).map((p) => ({
  href: `/compare/${p.slug}`,
  title: `vs ${p.competitor}`,
  desc: p.seoDescription.slice(0, 80) + "…",
}));
