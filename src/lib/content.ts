export const brand = {
  name: "Pravaah",
  sanskrit: "प्रवाह",
  tagline: "The flow of salon success",
  short: "Flow smarter. Grow faster.",
  mission:
    "We help salon chains run smoother, grow faster, and delight customers at every visit.",
  footer: "Built for Indian salon chains · Multi-branch · Real-time intelligence",
} as const;

export const nav = {
  solutions: [
    {
      href: "/solutions/multi-branch",
      title: "Multi-branch chains",
      desc: "One OS across every outlet — P&L, stock, and staff in sync.",
    },
    {
      href: "/solutions/owners",
      title: "Owners & CEOs",
      desc: "Market Pulse, campaigns, and finance truth before noon.",
    },
    {
      href: "/solutions/managers",
      title: "Branch managers",
      desc: "Floor PWA for walk-ins, attendance, and inventory.",
    },
  ],
  products: [
    {
      href: "/products/billing",
      title: "Walk-in & GST billing",
      desc: "60-second desk flow with WhatsApp receipts.",
    },
    {
      href: "/products/analytics",
      title: "P&L & Market Pulse",
      desc: "Branch profit and peer ranking in one view.",
    },
    {
      href: "/products/attendance",
      title: "Verified attendance",
      desc: "Selfie + GPS geofenced punches and leave.",
    },
    {
      href: "/products/campaigns",
      title: "WhatsApp campaigns",
      desc: "Win-backs included — not a bolt-on fee.",
    },
    {
      href: "/products/inventory",
      title: "Inventory control",
      desc: "Restock, usage, wastage, retail — every unit.",
    },
  ],
  links: [
    { href: "/customers", label: "Customers" },
    { href: "/resources", label: "Resources" },
    { href: "/pricing", label: "Pricing" },
  ],
} as const;

export const heroStats = [
  { value: "60s", label: "Avg. walk-in to GST bill" },
  { value: "15s", label: "Verified attendance punch" },
  { value: "0%", label: "Marketplace booking tax" },
  { value: "10", label: "India locales in product" },
] as const;

export const reviewBadges = [
  { name: "India GST-ready", detail: "CGST · SGST · branch GSTIN" },
  { name: "WhatsApp-native", detail: "Receipts + campaigns" },
  { name: "Manager PWA", detail: "Install on salon tablets" },
  { name: "Audit trail", detail: "Discounts & payments logged" },
] as const;

export const filmScenes = [
  {
    id: "desk",
    title: "Front desk",
    caption: "Walk-in → stylist → UPI → WhatsApp receipt",
    screen: "walkin" as const,
  },
  {
    id: "floor",
    title: "Floor attendance",
    caption: "Selfie + GPS inside the salon geofence",
    screen: "attendance" as const,
  },
  {
    id: "hq",
    title: "CEO command",
    caption: "Branch P&L and Market Pulse before noon",
    screen: "pnl" as const,
  },
  {
    id: "growth",
    title: "Win-back flow",
    caption: "Audience preview → WhatsApp campaign send",
    screen: "campaign" as const,
  },
] as const;

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
    href: "/products/billing",
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
    href: "/products/analytics",
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
    href: "/products/campaigns",
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
    href: "/products/attendance",
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
    href: "/products/analytics",
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
    href: "/products/inventory",
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
    focus: "Finance clarity",
  },
  {
    quote:
      "Attendance used to be a trust exercise. Selfie + GPS punches gave us a review trail without buying a biometric vendor.",
    name: "Brand admin",
    role: "Multi-branch beauty chain",
    metric: "Punch time",
    metricValue: "~15s",
    focus: "Staff integrity",
  },
  {
    quote:
      "WhatsApp campaigns sitting inside Growth — not as a surprise add-on — meant we actually ran win-backs every week.",
    name: "Owner",
    role: "Mid-market salon group",
    metric: "Campaigns",
    metricValue: "Included",
    focus: "Retention",
  },
] as const;

export const videoStories = [
  {
    id: "pnl-story",
    title: "How a 6-branch brand found Sunday P&L in five minutes",
    runtime: "3:12",
    persona: "Owner story",
    takeaway: "One truth from desk to HQ",
    screen: "pnl" as const,
  },
  {
    id: "desk-story",
    title: "Front desk: walk-in to WhatsApp receipt under a minute",
    runtime: "2:48",
    persona: "Manager story",
    takeaway: "GST without the scramble",
    screen: "walkin" as const,
  },
  {
    id: "attendance-story",
    title: "Geofenced punches that managers actually trust",
    runtime: "2:05",
    persona: "HR ops story",
    takeaway: "15-second verified punch",
    screen: "attendance" as const,
  },
] as const;

export const verticals = [
  {
    title: "Hair & unisex salons",
    desc: "Walk-in heavy desks, stylist accountability, colour inventory, and weekend peaks.",
    href: "/solutions/multi-branch",
  },
  {
    title: "Beauty & nail studios",
    desc: "Service mix reporting, package-friendly billing, and staff targets that stick.",
    href: "/solutions/managers",
  },
  {
    title: "Spa & wellness centres",
    desc: "Longer treatments, therapist schedules, and owner P&L across rooms and outlets.",
    href: "/solutions/owners",
  },
  {
    title: "Growing salon brands",
    desc: "Add branch three through twenty without rebuilding your ops stack each time.",
    href: "/solutions/multi-branch",
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

export const comparisonRows = [
  {
    capability: "India GST depth (branch GSTIN, CGST/SGST PDF)",
    pravaah: true,
    zenoti: "Enterprise config",
    fresha: "Limited",
    miosalon: true,
  },
  {
    capability: "WhatsApp campaigns included in mid tier",
    pravaah: true,
    zenoti: "Add-on / suite",
    fresha: "Messaging fees",
    miosalon: "Often extra",
  },
  {
    capability: "Branch P&L for mid-market chains",
    pravaah: true,
    zenoti: true,
    fresha: false,
    miosalon: "Basic",
  },
  {
    capability: "Geofenced selfie attendance",
    pravaah: true,
    zenoti: "Biometric partners",
    fresha: false,
    miosalon: false,
  },
  {
    capability: "Market Pulse peer ranking",
    pravaah: true,
    zenoti: "Benchmarks (enterprise)",
    fresha: false,
    miosalon: false,
  },
  {
    capability: "No marketplace commission on bookings",
    pravaah: true,
    zenoti: true,
    fresha: false,
    miosalon: true,
  },
  {
    capability: "Go-live in days for 3–20 branches",
    pravaah: true,
    zenoti: "Weeks–months",
    fresha: true,
    miosalon: true,
  },
  {
    capability: "Transparent ₹/branch public pricing",
    pravaah: true,
    zenoti: false,
    fresha: "Seat + fees",
    miosalon: "Soft-hidden",
  },
] as const;

export const faqs = [
  {
    q: "Who is Pravaah built for?",
    a: "Multi-branch salon and beauty brands in India — typically 3 to 20 outlets — that need GST, WhatsApp, branch P&L, and a manager floor app without enterprise bloat or marketplace tax.",
  },
  {
    q: "How is this different from Zenoti?",
    a: "Zenoti is a powerful enterprise suite with AI workforce positioning and opaque pricing. Pravaah focuses on mid-market chain ops: faster go-live, India desk reality (GST + WhatsApp), transparent ₹/branch pricing, and Market Pulse for coaching outlets.",
  },
  {
    q: "Do you take a cut of bookings like Fresha?",
    a: "No. Pravaah is brand-owned software. You keep 100% of booking revenue. We monetise via subscription, not marketplace commission.",
  },
  {
    q: "Is WhatsApp really included?",
    a: "WhatsApp campaign tools are part of Growth. Message delivery uses your MSG91 (or equivalent) configuration — no surprise “marketing suite” upsell just to preview an audience.",
  },
  {
    q: "Can managers use it on tablets?",
    a: "Yes. The manager experience is an installable PWA — walk-ins, attendance, inventory, and today’s bookings on salon devices.",
  },
  {
    q: "What about attendance hardware?",
    a: "Verified punches use the device camera + GPS against your branch geofence. No separate biometric vendor required for the baseline flow.",
  },
] as const;

export const resources = [
  {
    type: "Guide",
    title: "Multi-branch P&L checklist for Indian salon owners",
    desc: "What to track weekly so leaks show up before month-end.",
    href: "/resources#pnl-guide",
  },
  {
    type: "Playbook",
    title: "WhatsApp win-back sequences that respect opt-in",
    desc: "Audience cuts by visit gap and spend — without spamming.",
    href: "/resources#whatsapp-playbook",
  },
  {
    type: "Tool",
    title: "Branch revenue opportunity calculator",
    desc: "Estimate hours saved and win-back upside for your chain size.",
    href: "/roi-calculator",
  },
  {
    type: " compar",
    title: "Pravaah vs marketplace tools vs enterprise suites",
    desc: "A practical buyer matrix for India mid-market chains.",
    href: "/resources#compare",
  },
] as const;

export const productPages = {
  billing: {
    title: "Walk-in & GST billing",
    eyebrow: "Product · Front desk",
    hero: "From guest phone number to WhatsApp receipt — under a minute.",
    body: "Built for Indian walk-in culture: find the guest, assign stylists on every line, preview GST, collect Cash/UPI/Card, and queue a WhatsApp PDF. Discounts leave an audit trail.",
    bullets: [
      "3-step wizard on manager PWA",
      "Per-branch GSTIN with CGST/SGST split",
      "Sequential invoice numbers + public PDF link",
      "Mandatory stylist per line for fair commissions",
      "Split payments supported in the API layer",
    ],
    screen: "walkin" as const,
  },
  analytics: {
    title: "Branch P&L & Market Pulse",
    eyebrow: "Product · Owner intelligence",
    hero: "Know which outlet is winning — and why — before the week slips away.",
    body: "CEO dashboards combine live chain KPIs, expenditure-aware P&L, and Market Pulse rankings with anonymised peer context and playbooks your managers can act on.",
    bullets: [
      "Revenue vs salary, rent, product, misc",
      "Payroll and product-cost sync into P&L",
      "In-brand leaderboard + peer cohorts",
      "Service contribution and recommendations",
      "Branch filters across the entire brand",
    ],
    screen: "pulse" as const,
  },
  attendance: {
    title: "Verified attendance",
    eyebrow: "Product · People ops",
    hero: "Selfie. GPS. Geofence. Trust.",
    body: "Managers and staff punch on the salon device. Pravaah stores photo evidence, distance from branch, and inside/outside status — then surfaces late arrivals and missing exits for review.",
    bullets: [
      "Front-camera selfie capture",
      "Accuracy-aware GPS with distance-to-branch",
      "Configurable geofence radius",
      "Leave request / approve / reject",
      "Daily and period exception logs",
    ],
    screen: "attendance" as const,
  },
  campaigns: {
    title: "WhatsApp campaigns",
    eyebrow: "Product · Growth",
    hero: "Win-backs that actually get sent — because they’re in the product.",
    body: "Preview audiences by visit history and spend, respect opt-in, and launch campaigns from brand admin. Growth includes the capability so messaging isn’t a surprise line item.",
    bullets: [
      "Audience preview before send",
      "Filters by visits and spend",
      "Opt-in aware sending",
      "Tied to the same guest profiles as billing",
      "Included on Growth tier",
    ],
    screen: "campaign" as const,
  },
  inventory: {
    title: "Inventory control",
    eyebrow: "Product · Stock",
    hero: "Every unit has a movement — restock, usage, wastage, or sale.",
    body: "Branch managers log stock events on the floor PWA while owners watch inventory analytics across the chain. Less “mystery shrink,” more accountable product cost in P&L.",
    bullets: [
      "Branch-level stock views",
      "Restock / usage / wastage / retail / adjust",
      "Feeds product cost into branch economics",
      "CEO inventory overview",
      "Works alongside service billing",
    ],
    screen: "inventory" as const,
  },
} as const;

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
