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
  { href: "/#pillars", label: "Why Pravaah" },
  { href: "/#workflows", label: "Workflows" },
  { href: "/#features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
] as const;

export const pillars = [
  {
    title: "Every branch in sync",
    desc: "Walk-ins, bookings, staff, and stock — one live view across your entire chain.",
  },
  {
    title: "Data that drives action",
    desc: "Market Pulse, branch P&L, and clear tips turn numbers into decisions your team acts on today.",
  },
  {
    title: "Delight at every touchpoint",
    desc: "From the front-desk PWA to the CEO dashboard — experiences that keep teams and customers coming back.",
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

export const differentiators = [
  {
    title: "Multi-branch truth, not a booking widget",
    desc: "Zenoti-class control for 3–20 outlet chains — without a six-month enterprise rollout.",
  },
  {
    title: "India desk reality",
    desc: "GST, UPI, and WhatsApp are first-class — not afterthoughts bolted onto a US marketplace tool.",
  },
  {
    title: "Owner dashboard + manager floor app",
    desc: "CEO sees P&L and Market Pulse. Managers punch attendance and bill walk-ins on the same source of truth.",
  },
  {
    title: "Keep 100% of your bookings",
    desc: "No marketplace tax. Grow from your catchment and keep the brand experience yours.",
  },
] as const;
