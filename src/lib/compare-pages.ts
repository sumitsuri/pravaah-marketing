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
    seoTitle: "AntraHQ vs Zenoti — Zenoti Alternative for India",
    seoDescription:
      "Zenoti alternative for India: AntraHQ vs Zenoti on pricing transparency, GST billing, WhatsApp, multi-branch P&L and rollout speed for salon chains.",
    eyebrow: "Compare · Enterprise vs mid-market",
    title: "AntraHQ vs Zenoti",
    lede:
      "Zenoti is a proven enterprise platform for large salon and spa chains worldwide. AntraHQ focuses on mid-market Indian chains that want connected billing, CRM, staff, inventory, and branch profitability without a long enterprise rollout.",
    competitorStrengths: [
      "Deep enterprise feature set for large chains and franchises",
      "Mature multi-location reporting, marketing automation, and integrations",
      "Strong brand recognition with thousands of global deployments",
    ],
    antrahqStrengths: [
      "Transparent ₹/branch pricing published on the website",
      "Live the same day — first GST bill within hours, not after a months-long rollout",
      "India desk reality: GST billing, WhatsApp receipts, geofenced attendance",
      "Branch P&L and Market Pulse built for owner coaching, not just dashboards",
      "Local Spotlight: Google visibility score, rivals, and GBP action plans",
      "Customer voice: desk QR reviews with Google routing and private recovery",
    ],
    rows: [
      {
        topic: "Typical chain size",
        competitor: "Large multi-location brands, franchises, med-spa groups",
        antrahq: "Indian salon & spa operators — 1 branch to large networks",
      },
      {
        topic: "Pricing",
        competitor: "Custom enterprise quotes — typically premium",
        antrahq: "Public ₹499–₹699 per branch / month",
      },
      {
        topic: "Implementation",
        competitor: "Structured rollout — often weeks to months",
        antrahq: "Same day — set up on a call, first GST bill within about two hours",
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
        "Founders and ops heads at Indian salon chains — single outlet or multi-branch — who want one connected platform with clear pricing and fast rollout.",
    },
    disclaimer:
      "Capabilities vary by plan and region. Validate your shortlist with live demos and reference checks — this page is a starting point, not a definitive scorecard.",
  },
  miosalon: {
    slug: "miosalon",
    competitor: "MioSalon",
    seoTitle: "AntraHQ vs MioSalon — MioSalon Alternative India",
    seoDescription:
      "MioSalon alternative for Indian chains: compare AntraHQ vs MioSalon on multi-branch P&L, GST POS, WhatsApp, attendance, and growth-decision fit.",
    eyebrow: "Compare · All-in-one platforms",
    title: "AntraHQ vs MioSalon",
    lede:
      "MioSalon is a widely used cloud salon platform with strong automation for appointments, billing, and client management. AntraHQ adds a growth-decision layer — branch P&L, Market Pulse, and connected profitability signals for multi-branch operators.",
    competitorStrengths: [
      "Established salon automation: bookings, billing, feedback, and marketing",
      "Outlet-based pricing that scales with location count",
      "Familiar choice for single-location and growing salon brands",
    ],
    antrahqStrengths: [
      "Branch P&L and Market Pulse for coaching weak outlets",
      "Verified geofenced attendance with photo evidence",
      "WhatsApp campaigns included on Growth tier — not a separate upsell",
      "Built for branch-level decision-making at any scale — not just desk ops",
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
    seoTitle: "AntraHQ vs Salonist — Salonist Alternative India",
    seoDescription:
      "Salonist alternative for growing Indian salons: AntraHQ vs Salonist on GST billing, multi-branch P&L, WhatsApp, attendance and scaling past one outlet.",
    eyebrow: "Compare · Growing chains",
    title: "AntraHQ vs Salonist",
    lede:
      "Salonist is a popular, approachable salon management tool for growing businesses. AntraHQ targets operators in India who need connected profitability intelligence and room to scale — from a single outlet to a full network — not just POS and bookings.",
    competitorStrengths: [
      "Easy to adopt for smaller teams getting off spreadsheets",
      "Core POS, booking, inventory, and client management in one place",
      "Accessible entry point for budget-conscious salon owners",
    ],
    antrahqStrengths: [
      "Network view: compare branches, coach weak outlets, act same-day",
      "Branch-level GSTIN and India-specific billing workflow",
      "Manager PWA for floor teams — walk-ins, stock, attendance together",
      "Transparent per-branch pricing that scales from outlet one",
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
        antrahq: "Same-day go-live, then add each new branch in minutes",
      },
    ],
    bestFor: {
      competitor:
        "Owners digitising a salon for the first time or running a small team that needs simple POS and bookings.",
      antrahq:
        "Operators who outgrew disconnected tools and need one truth from desk to dashboard — whether they are on branch one or branch fifty.",
    },
    disclaimer:
      "Your branch count, city mix, and finance workflow matter more than feature checklists. Book demos with both vendors if you are shortlisting.",
  },
  fresha: {
    slug: "fresha",
    competitor: "Fresha",
    seoTitle: "AntraHQ vs Fresha — Fresha Alternative for India",
    seoDescription:
      "Fresha alternative for Indian salons: AntraHQ vs Fresha on total cost (marketplace fees vs subscription), GST billing, WhatsApp and branch P&L.",
    eyebrow: "Compare · Marketplace vs owner platform",
    title: "AntraHQ vs Fresha",
    lede:
      "Fresha is a global booking platform and consumer marketplace that is free to start in many markets and earns through new-client marketplace fees, payments and paid add-ons. AntraHQ is a subscription platform for Indian operators who want GST billing, verified attendance and branch profitability — with no fee on any booking.",
    competitorStrengths: [
      "Consumer marketplace that can bring new clients to a listed salon",
      "Polished online booking and client app experience",
      "Free core plan in many regions — low barrier for a single stylist or studio",
    ],
    antrahqStrengths: [
      "No commission or new-client fee — every booking and guest stays yours",
      "India desk workflow: per-branch GSTIN, CGST/SGST invoices, UPI, WhatsApp receipts",
      "Branch P&L, targets and Market Pulse ranking for multi-outlet owners",
      "Selfie + GPS geofenced attendance and a staff app in 10 Indian languages",
      "WhatsApp win-back campaigns included on Growth — not metered add-ons",
    ],
    rows: [
      {
        topic: "Business model",
        competitor: "Free core plan in many regions; earns via marketplace, payments and add-ons",
        antrahq: "Per-branch subscription — ₹499 to ₹699 / month, published",
      },
      {
        topic: "Fees on bookings",
        competitor: "One-time fee on new clients who book via the Fresha marketplace",
        antrahq: "None",
      },
      {
        topic: "Who owns the guest relationship",
        competitor: "Shared with a consumer marketplace that lists nearby salons",
        antrahq: "Your brand only — guest CRM is never shown to other salons",
      },
      {
        topic: "India GST billing",
        competitor: "Check invoice format and per-branch GSTIN support in a trial",
        antrahq: "Per-branch GSTIN, CGST/SGST split, sequential invoices, WhatsApp PDF",
      },
      {
        topic: "Messaging",
        competitor: "Limited free messages, then paid per SMS/WhatsApp",
        antrahq: "WhatsApp receipts with billing; campaigns included on Growth",
      },
      {
        topic: "Multi-branch owner view",
        competitor: "Location reporting; advanced insights as a paid add-on",
        antrahq: "Branch P&L with salary, rent and product cost + branch ranking",
      },
      {
        topic: "Staff attendance",
        competitor: "Scheduling and timesheets",
        antrahq: "Selfie + GPS geofence with late and missing-exit review",
      },
    ],
    bestFor: {
      competitor:
        "Independent stylists and small studios that want free booking software and new clients from a marketplace, and are comfortable with per-client fees.",
      antrahq:
        "Indian salon and spa operators who want to own every guest, bill GST correctly at each branch, and run branches on profit — at a fixed monthly cost.",
    },
    disclaimer:
      "Fresha's plans and fees differ by country and change over time — confirm current pricing on fresha.com for India before deciding. Run the same walk-in GST bill and month-end report in both trials.",
  },
};

export const compareNav = Object.values(comparePages).map((p) => ({
  href: `/compare/${p.slug}`,
  title: `AntraHQ vs ${p.competitor}`,
  competitor: p.competitor,
  desc: p.bestFor.competitor,
}));
