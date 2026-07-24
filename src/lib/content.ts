export const brand = {
  name: "Pravaah",
  sanskrit: "प्रवाह",
  tagline: "The flow of salon success",
  short: "Flow smarter. Grow faster.",
  mission:
    "We help salon chains run smoother, grow faster, and delight customers at every visit.",
  footer: "Built for Indian salon chains · Multi-branch · Real-time intelligence",
} as const;

export const navLinks = [
  { href: "/#leaks", label: "Solutions" },
  { href: "/#os", label: "Pravaah OS" },
  { href: "/#features", label: "Platform" },
  { href: "/#results", label: "Results" },
  { href: "/pricing", label: "Pricing" },
] as const;

/** Zenoti-style "plug every revenue leak" — mapped to shipped Pravaah capabilities */
export const leakSolutions = [
  {
    id: "billing",
    problemLabel: "THE SLOW DESK",
    problemStat: "Walk-ins wait while staff juggle Excel + WhatsApp",
    title: "Walk-in GST billing",
    promise: "Bill in under 60 seconds",
    desc: "Phone-first guest lookup, services + stylist, Cash/UPI/Card — GST invoice PDF and WhatsApp receipt queued automatically.",
    bullets: ["3-step walk-in wizard", "Per-branch GSTIN · CGST/SGST", "WhatsApp PDF receipt", "Audit-ready discounts"],
    screen: "walkin" as const,
  },
  {
    id: "pnl",
    problemLabel: "THE HIDDEN LEAK",
    problemStat: "Owners discover branch losses after month-end",
    title: "Branch P&L",
    promise: "See leaks before month-end",
    desc: "Revenue vs salary, rent, product, and misc — payroll and inventory sync into one owner truth across every outlet.",
    bullets: ["Multi-branch filter", "Payroll & product cost sync", "Trend lines", "CEO-gated salary views"],
    screen: "pnl" as const,
  },
  {
    id: "campaigns",
    problemLabel: "THE SILENT CHAIR",
    problemStat: "Guests go quiet — and calendars go empty",
    title: "WhatsApp campaigns",
    promise: "Fill chairs with win-backs",
    desc: "Preview audiences by visit history and spend, then send. Campaigns included on Growth — not a ₹2–3.5K bolt-on.",
    bullets: ["Audience preview", "Visit & spend filters", "Opt-in respect", "Included in Growth"],
    screen: "campaign" as const,
  },
  {
    id: "attendance",
    problemLabel: "THE PAPER TIMESHEET",
    problemStat: "Late arrivals and buddy punches slip through",
    title: "Verified attendance",
    promise: "Trust every punch",
    desc: "Selfie + GPS on the manager PWA, geofence-checked against the salon, with leave and exception review built in.",
    bullets: ["Selfie + GPS punch", "Geofence inside/outside", "Late & missing-exit flags", "Leave approve/reject"],
    screen: "attendance" as const,
  },
  {
    id: "pulse",
    problemLabel: "THE BLIND RANKING",
    problemStat: "No idea which branch is actually winning",
    title: "Market Pulse",
    promise: "Rank. Compare. Act.",
    desc: "In-brand branch rank plus anonymised peer cohorts and playbooks — so HQ coaches the outlet that needs it today.",
    bullets: ["In-brand leaderboard", "Peer cohort scores", "Local rival context", "Action playbooks"],
    screen: "pulse" as const,
  },
  {
    id: "inventory",
    problemLabel: "THE VANISHING STOCK",
    problemStat: "Product walks out without a trail",
    title: "Inventory movements",
    promise: "Every unit accounted for",
    desc: "Restock, usage, wastage, retail, and adjustments at branch level — visible to managers and owners alike.",
    bullets: ["Branch stock view", "Usage & wastage", "Retail sale tracking", "CEO inventory analytics"],
    screen: "inventory" as const,
  },
] as const;

export const predictiveAgents = [
  {
    title: "Market Pulse",
    blurb: "Spots which outlet is slipping — and what to do next.",
    metric: "Same-day",
    metricLabel: "coaching signal for underperforming branches",
    screen: "pulse" as const,
  },
  {
    title: "Branch P&L",
    blurb: "Turns salary, rent, and product cost into a live profit picture.",
    metric: "1 truth",
    metricLabel: "across every branch — no reconciling Excel",
    screen: "pnl" as const,
  },
  {
    title: "Attendance integrity",
    blurb: "Flags late, geo-outside, and missing exits before payroll.",
    metric: "15 sec",
    metricLabel: "verified punch on the floor PWA",
    screen: "attendance" as const,
  },
] as const;

export const osPillars = [
  {
    title: "Everything is data",
    desc: "Walk-ins, invoices, punches, stock moves, campaigns, and leads — captured at the moment of work.",
  },
  {
    title: "Data becomes clarity",
    desc: "Branch P&L, Market Pulse, and service contribution turn noise into decisions.",
  },
  {
    title: "Clarity drives action",
    desc: "Managers bill and punch. CEOs campaign and coach. Same source of truth.",
  },
  {
    title: "Action scales with the chain",
    desc: "Add a branch — GSTIN, geofence, seats, and reporting follow without a rebuild.",
  },
] as const;

export const timeline = [
  {
    week: "Day 1",
    title: "Tenant & branches live",
    detail: "Brand admin, outlets with GSTIN, managers invited — demo data or your catalog.",
    stat: "Hours",
    statLabel: "to first walk-in bill",
  },
  {
    week: "Day 2–3",
    title: "Floor PWA on tablets",
    detail: "Walk-in wizard, attendance geofence, and inventory movements trained with your team.",
    stat: "1 app",
    statLabel: "installable manager PWA",
  },
  {
    week: "Day 4–5",
    title: "CEO command centre",
    detail: "P&L, Market Pulse, campaigns, and leads configured for how you run the chain.",
    stat: "1 view",
    statLabel: "across every outlet",
  },
  {
    week: "Week 2+",
    title: "Steady flow",
    detail: "WhatsApp receipts humming, attendance reviews weekly, campaigns on a rhythm.",
    stat: "No tax",
    statLabel: "marketplace commission on bookings",
  },
] as const;

export const trustLogos = [
  "Multi-branch demo chains",
  "India GST-ready",
  "WhatsApp-native",
  "Manager PWA",
  "CEO P&L",
  "Market Pulse",
] as const;

export const results = [
  {
    quote:
      "We stopped reconciling three Excels every Sunday. Walk-in GST and branch P&L are finally the same number the managers see on the floor.",
    name: "Ops lead",
    role: "6-outlet salon brand · Bangalore",
    metric: "Admin time",
    metricValue: "↓ ~40%",
  },
  {
    quote:
      "Attendance used to be a trust exercise. Selfie + GPS punches gave us a review trail without buying a biometric vendor.",
    name: "Brand admin",
    role: "Multi-branch beauty chain",
    metric: "Punch time",
    metricValue: "~15s",
  },
  {
    quote:
      "WhatsApp campaigns sitting inside Growth — not as a surprise add-on — meant we actually ran win-backs every week.",
    name: "Owner",
    role: "Mid-market salon group",
    metric: "Campaigns",
    metricValue: "Included",
  },
] as const;

export const platformTaxonomy = [
  {
    title: "Delight your guests",
    items: [
      "Walk-in & appointment billing",
      "GST invoice PDF",
      "WhatsApp receipts",
      "Phone-first guest profiles",
      "Leads from public enquiries",
    ],
  },
  {
    title: "Grow the chain",
    items: [
      "WhatsApp win-back campaigns",
      "Audience by visit & spend",
      "Market Pulse playbooks",
      "Service contribution insights",
      "Multi-branch KPIs",
    ],
  },
  {
    title: "Productive teams",
    items: [
      "Manager floor PWA",
      "Geofenced attendance",
      "Leave workflows",
      "Staff targets & incentives",
      "Stylist on every line item",
    ],
  },
  {
    title: "Unify operations",
    items: [
      "Branch P&L",
      "Inventory movements",
      "Audit logs",
      "Brand admin & RBAC",
      "India locales",
    ],
  },
] as const;

export const workflows = [
  {
    id: "walk-in",
    title: "Walk-in to WhatsApp receipt",
    time: "Under 60 seconds",
    steps: [
      "Find or create the guest by phone",
      "Add services and assign stylists",
      "Collect Cash / UPI / Card",
      "GST invoice PDF + WhatsApp receipt",
    ],
    outcome: "Front desk bills faster. Guests leave with a clean receipt.",
  },
  {
    id: "ceo",
    title: "CEO morning command",
    time: "5 minutes",
    steps: [
      "Scan chain revenue and utilisation",
      "Open branch P&L for leaks",
      "Check Market Pulse ranking",
      "Launch a WhatsApp campaign to win-backs",
    ],
    outcome: "Owners see which outlet is winning — and which is leaking — before noon.",
  },
  {
    id: "attendance",
    title: "Verified staff attendance",
    time: "15 seconds punch",
    steps: [
      "Staff opens manager PWA at the salon",
      "Selfie + GPS captured on punch",
      "Geofence validates they are on-site",
      "Late / missing exit flags for review",
    ],
    outcome: "Trustworthy timesheets without Excel drama.",
  },
] as const;

export const featureGroups = [
  {
    buyer: "Owner / CEO",
    items: [
      {
        name: "Multi-branch command centre",
        desc: "Live KPIs across every outlet — revenue, discounts, footfall, and staff presence.",
      },
      {
        name: "Branch P&L",
        desc: "Revenue vs salary, rent, product cost, and misc — payroll and inventory sync into the same truth.",
      },
      {
        name: "Market Pulse",
        desc: "See how each branch ranks inside your brand and against anonymised peer cohorts, with playbooks to close the gap.",
      },
      {
        name: "WhatsApp campaigns",
        desc: "Audience preview by visit history and spend, then send — campaigns included, not bolted on.",
      },
      {
        name: "Leads CRM",
        desc: "Public enquiries land in one queue your managers can work the same day.",
      },
      {
        name: "Employee & incentive control",
        desc: "Salaries, ID proof, targets, and incentive percent — CEO-gated where it matters.",
      },
    ],
  },
  {
    buyer: "Branch manager",
    items: [
      {
        name: "Installable floor PWA",
        desc: "Tablet-ready manager app for walk-ins, bookings, stock, and attendance — no App Store delay.",
      },
      {
        name: "Walk-in billing wizard",
        desc: "Three steps: guest → services + stylist → pay. GST preview before you collect.",
      },
      {
        name: "India-ready GST invoices",
        desc: "Per-branch GSTIN, CGST/SGST split, sequential invoices, public PDF link.",
      },
      {
        name: "Geofenced attendance",
        desc: "Selfie + GPS punch with branch radius checks, leave requests, and exception logs.",
      },
      {
        name: "Inventory movements",
        desc: "Restock, usage, wastage, retail sale, and adjustments tracked at branch level.",
      },
      {
        name: "Local insights",
        desc: "Branch-level tips and service contribution so managers act without waiting for HQ.",
      },
    ],
  },
  {
    buyer: "Front desk",
    items: [
      {
        name: "Phone-first guest lookup",
        desc: "Find returning guests instantly and keep profiles clean for the next visit.",
      },
      {
        name: "Staff on every line",
        desc: "Mandatory stylist assignment so commissions and accountability stay fair.",
      },
      {
        name: "WhatsApp bill receipt",
        desc: "Paid invoices queue a WhatsApp PDF so guests leave with proof, not paper clutter.",
      },
      {
        name: "Audit-ready discounts",
        desc: "Discount and payment changes leave a trail managers and owners can trust.",
      },
    ],
  },
] as const;

export const pricing = [
  {
    name: "Starter",
    price: "₹2,999",
    unit: "per branch / month",
    blurb: "Core ops for a focused outlet.",
    features: [
      "Walk-in billing & GST invoices",
      "1 manager seat",
      "Bookings & basic reports",
      "Attendance essentials",
    ],
    cta: "Start with Starter",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "₹4,999",
    unit: "per branch / month",
    blurb: "The chain OS most mid-market brands need.",
    features: [
      "Everything in Starter",
      "Brand admin & multi-branch P&L",
      "WhatsApp campaigns included",
      "Market Pulse & audit logs",
      "Verified geofenced attendance",
    ],
    cta: "Choose Growth",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "tailored rollout",
    blurb: "For larger chains that need white-glove onboarding.",
    features: [
      "Everything in Growth",
      "API access & vanity domain",
      "Dedicated onboarding & SLA",
      "Custom integrations",
    ],
    cta: "Talk to us",
    highlighted: false,
  },
] as const;
