export const brand = {
  name: "Antrahq",
  productLabel: "Growth Decision Platform",
  tagline: "Decisions that compound. Growth that follows.",
  short: "See clearly. Act faster. Grow together.",
  mission:
    "Antrahq turns every signal from your locations — revenue, staff, stock, and guests — into decisions that accelerate growth. Built for operators who refuse to guess.",
  footer: "Built in India · Multi-location · Decision intelligence",
  email: "hello@antrahq.com",
  whatsapp: {
    /** E.164 without + for wa.me links — never rendered in UI */
    phoneE164: "918095679454",
    defaultMessage:
      "Hi Antrahq team — I visited your website and would like to connect about growing my business. Can we chat?",
    ctaLabel: "Talk to us",
  },
} as const;

/** Hero kinetic headline — “Transform your {word}” / “into growth decisions.” */
export const heroHeadline = {
  prefix: "Transform your",
  suffix: "into growth decisions.",
  words: ["locations", "branches", "signals", "teams"] as const,
} as const;

/** @deprecated Use heroHeadline.words */
export const heroWords = heroHeadline.words;

/** The decision loop — core platform narrative. */
export const decisionLoop = [
  {
    step: "01",
    title: "Capture",
    desc: "Every walk-in, punch, stock move, and campaign — logged at the moment of work.",
  },
  {
    step: "02",
    title: "Connect",
    desc: "Signals flow into one network view. No Excel bridges. No app hopping.",
  },
  {
    step: "03",
    title: "Decide",
    desc: "Market Pulse, branch P&L, and playbooks tell you what to fix today — not next month.",
  },
  {
    step: "04",
    title: "Accelerate",
    desc: "Coach the weak outlet, fill empty chairs, protect margin — growth compounds.",
  },
] as const;

/** 3D hero floating metric cards */
export const heroFloatingCards = [
  {
    label: "Branch rank",
    value: "#2 → #1",
    sub: "Market Pulse · this week",
    tilt: -8,
    delay: 0,
  },
  {
    label: "Revenue signal",
    value: "+18%",
    sub: "Top outlet vs last month",
    tilt: 6,
    delay: 0.15,
  },
  {
    label: "Growth actions",
    value: "3 ready",
    sub: "Playbooks queued for managers",
    tilt: -4,
    delay: 0.3,
  },
] as const;

export const sectionCopy = {
  decisionPlatform: {
    eyebrow: "Why Antrahq",
    title: "Not another ops tool. A decision platform for growth.",
    lede: "Enterprise suites bury you in dashboards. Marketplaces tax your bookings. Antrahq connects floor reality to owner decisions — so every location gets sharper, and the network grows faster.",
  },
  growthLevers: {
    eyebrow: "Growth levers",
    title: "Six decisions that unlock revenue you're already leaving on the table.",
    lede: "Each lever ties a real leak to a clear decision — with the product screen that makes action obvious.",
  },
  intelligence: {
    eyebrow: "Decision intelligence",
    title: "Live signals that tell you where to focus — before month-end.",
    lede: "Market Pulse, branch P&L, and attendance integrity surface coaching moments while there's still time to act.",
  },
  film: {
    eyebrow: "Product film",
    title: "See decisions happen in real time.",
  },
  results: {
    eyebrow: "Proof",
    title: "Operators who stopped guessing — and started growing.",
  },
  finalCta: {
    title: "Ready to make every location a growth engine?",
    lede: "Book a walkthrough tailored to your chain. See decisions, not dashboards.",
  },
  aiAgents: {
    eyebrow: "Always working for you",
    title: "While you sleep, your growth team never clocks out.",
    lede: "Antrahq quietly watches every branch — visits, margins, staff, and guest retention — then connects the dots into clear actions for the morning.",
    useCaseTitle: "Example: Koramangala outlet starts slipping",
    useCaseLede: "See how five insights connect overnight into one playbook you can act on.",
    storyEyebrow: "Live growth story",
    graphStart: "Overnight",
    graphEnd: "Your morning",
    detailEyebrow: "What this means for you",
  },
} as const;

/** Hero + site-wide growth metrics with before/after/delta */
export const heroStats = [
  {
    label: "Decision speed vs spreadsheets",
    before: "1×",
    after: "2.4×",
    delta: "+140%",
    improved: true,
  },
  {
    label: "Owner admin time per week",
    before: "12 hrs",
    after: "7 hrs",
    delta: "−42%",
    improved: true,
  },
  {
    label: "Marketplace booking tax",
    before: "15–30%",
    after: "0%",
    delta: "Keep all",
    improved: true,
  },
  {
    label: "Verified attendance punch",
    before: "4 min",
    after: "15 sec",
    delta: "−94%",
    improved: true,
  },
] as const;

export const heroVisualMetrics = [
  {
    label: "Branch revenue",
    before: "₹14.2L",
    after: "₹16.8L",
    delta: "+18%",
    improved: true,
  },
  {
    label: "Network rank",
    before: "#4",
    after: "#2",
    delta: "+2",
    improved: true,
  },
  {
    label: "Growth actions",
    before: "0 queued",
    after: "3 ready",
    delta: "Live",
    improved: true,
  },
] as const;

/** AI agent roster — works round the clock */
export const aiAgentRoster = [
  { id: "signal", name: "Signal Agent", role: "Watches footfall, bookings & visit gaps across every branch" },
  { id: "finance", name: "Finance Agent", role: "Correlates P&L leaks with product cost and discount drift" },
  { id: "people", name: "People Agent", role: "Flags attendance anomalies before payroll surprises" },
  { id: "growth", name: "Growth Agent", role: "Builds win-back audiences and campaign previews" },
  { id: "coach", name: "Coach Agent", role: "Packages playbooks managers can act on today" },
] as const;

/** Graph node layout — positions in 0–100 coordinate space */
export const agentFlowGraphLayout = [
  { id: "signal", x: 8, y: 52, shortLabel: "Footfall" },
  { id: "finance", x: 26, y: 28, shortLabel: "Margin" },
  { id: "people", x: 44, y: 52, shortLabel: "Staff" },
  { id: "growth", x: 62, y: 28, shortLabel: "Retention" },
  { id: "coach", x: 80, y: 52, shortLabel: "Playbook" },
  { id: "owner", x: 94, y: 52, shortLabel: "You" },
] as const;

/** End-to-end agent flow — Koramangala use case */
export const agentFlowSteps = [
  {
    id: "signal",
    time: "Overnight",
    agent: "Footfall watch",
    title: "Visits dipped at Koramangala",
    detail:
      "This outlet is down 22% compared to similar branches — the same pattern you saw during last month's slow week.",
    insight: "Needs attention today",
    agentId: "signal" as const,
  },
  {
    id: "finance",
    time: "Connected",
    agent: "Margin check",
    title: "Profit leak found on colour services",
    detail:
      "Product costs rose and walk-in discounts are higher than your network average — together costing roughly ₹1.1L per month.",
    insight: "Fixable this week",
    agentId: "finance" as const,
  },
  {
    id: "people",
    time: "Connected",
    agent: "Staff check",
    title: "Weekend attendance needs a look",
    detail:
      "Three late punches and one punch outside the salon boundary on the weekend shift — worth a quick conversation before payroll.",
    insight: "3 items to review",
    agentId: "people" as const,
  },
  {
    id: "growth",
    time: "Connected",
    agent: "Guest win-back",
    title: "148 guests ready to hear from you",
    detail:
      "Guests who haven't visited in 45+ days but spent ₹2K+ before — a WhatsApp win-back preview is ready to send.",
    insight: "Fill empty chairs",
    agentId: "growth" as const,
  },
  {
    id: "coach",
    time: "Connected",
    agent: "Manager playbook",
    title: "Three actions queued for your branch lead",
    detail:
      "Tighten discounts, restock colour products, and send the win-back — all assigned in the manager app, one tap to start.",
    insight: "Ready on the floor",
    agentId: "coach" as const,
  },
  {
    id: "owner",
    time: "Morning",
    agent: "Your dashboard",
    title: "Everything connected — rank moving up",
    detail:
      "Branch rank improved from #4 to #2. Revenue on track for +18%. Every insight links back to what happened overnight.",
    insight: "Clear next steps",
    agentId: "coach" as const,
  },
] as const;

export const agentFlowOutcome = [
  {
    label: "Branch rank (network)",
    before: "#4",
    after: "#2",
    delta: "+2 places",
    improved: true,
  },
  {
    label: "Monthly revenue",
    before: "₹14.2L",
    after: "₹16.8L",
    delta: "+18%",
    improved: true,
  },
  {
    label: "Empty-chair days",
    before: "11/mo",
    after: "6/mo",
    delta: "−45%",
    improved: true,
  },
] as const;

export const nav = {
  solutions: [
    {
      href: "/solutions/multi-branch",
      title: "Multi-branch chains",
      desc: "One decision view across every outlet — P&L, stock, and staff in sync.",
    },
    {
      href: "/solutions/owners",
      title: "Owners & CEOs",
      desc: "Market Pulse, campaigns, and finance truth — decisions before noon.",
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


export const reviewBadges = [
  { name: "India GST-ready", detail: "CGST · SGST · branch GSTIN" },
  { name: "WhatsApp-native", detail: "Receipts + campaigns" },
  { name: "Manager PWA", detail: "Install on salon tablets" },
  { name: "Audit trail", detail: "Discounts & payments logged" },
] as const;

export const filmScenes = [
  {
    id: "desk",
    title: "Guest signal",
    caption: "Walk-in → stylist → UPI → WhatsApp receipt — growth starts at the desk",
    screen: "walkin" as const,
  },
  {
    id: "floor",
    title: "People signal",
    caption: "Selfie + GPS inside the geofence — trust every punch, protect payroll",
    screen: "attendance" as const,
  },
  {
    id: "network",
    title: "Profit signal",
    caption: "Branch P&L and Market Pulse — decide which outlet to coach today",
    screen: "pnl" as const,
  },
  {
    id: "growth",
    title: "Retention signal",
    caption: "Audience preview → WhatsApp win-back — fill chairs on purpose",
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
    desc: "In-brand branch rank plus anonymised peer cohorts and playbooks — so owners coach the outlet that needs it today.",
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
    blurb: "Ranks every outlet and surfaces the coaching decision — today, not month-end.",
    metric: {
      label: "Coaching signal latency",
      before: "Month-end",
      after: "Same-day",
      delta: "Live",
      improved: true,
    },
    screen: "pulse" as const,
  },
  {
    title: "Branch P&L",
    blurb: "Turns salary, rent, and product cost into a live profit picture you can act on.",
    metric: {
      label: "P&L reconciliation",
      before: "3 Excels",
      after: "1 truth",
      delta: "Unified",
      improved: true,
    },
    screen: "pnl" as const,
  },
  {
    title: "Attendance integrity",
    blurb: "Flags late, geo-outside, and missing exits before they become payroll leaks.",
    metric: {
      label: "Verified punch time",
      before: "4 min",
      after: "15 sec",
      delta: "−94%",
      improved: true,
    },
    screen: "attendance" as const,
  },
] as const;

export const osPillars = [
  {
    title: "Every signal captured",
    desc: "Walk-ins, invoices, punches, stock moves, campaigns, and leads — data at the moment of work.",
  },
  {
    title: "Signals become decisions",
    desc: "Branch P&L, Market Pulse, and service contribution turn noise into clear next steps.",
  },
  {
    title: "Decisions drive growth",
    desc: "Managers act on the floor. CEOs coach the network. Same intelligence, same moment.",
  },
  {
    title: "Growth scales with you",
    desc: "Add a branch — GSTIN, geofence, seats, and decision views follow without a rebuild.",
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
    title: "Owner workspace live",
    detail: "P&L, Market Pulse, campaigns, and leads configured for how you run the network.",
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
      "We stopped reconciling three Excels every Sunday. Branch P&L and Market Pulse gave us growth decisions every morning — not month-end surprises.",
    name: "Ops lead",
    role: "6-outlet salon brand · Bangalore",
    focus: "Faster decisions",
    metric: {
      label: "Admin time per week",
      before: "12 hrs",
      after: "7 hrs",
      delta: "−42%",
      improved: true,
    },
  },
  {
    quote:
      "Attendance used to be a trust exercise. Verified punches gave us integrity signals before payroll — and managers finally had clarity to coach.",
    name: "Brand admin",
    role: "Multi-branch beauty chain",
    focus: "People signals",
    metric: {
      label: "Verified punch time",
      before: "4 min",
      after: "15 sec",
      delta: "−94%",
      improved: true,
    },
  },
  {
    quote:
      "WhatsApp win-backs inside Growth meant we actually filled chairs on purpose. Retention became a decision, not a hope.",
    name: "Owner",
    role: "Mid-market salon group",
    focus: "Revenue growth",
    metric: {
      label: "Empty-chair days / month",
      before: "11",
      after: "6",
      delta: "−45%",
      improved: true,
    },
  },
] as const;

export const videoStories = [
  {
    id: "pnl-story",
    title: "How a 6-branch brand found Sunday P&L in five minutes",
    runtime: "3:12",
    persona: "Owner story",
    takeaway: "One truth from desk to dashboard",
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
    antrahq: true,
    enterprise: "Heavy config",
    marketplace: "Limited",
    smb: true,
  },
  {
    capability: "WhatsApp campaigns included in mid tier",
    antrahq: true,
    enterprise: "Often add-on",
    marketplace: "Messaging fees",
    smb: "Often extra",
  },
  {
    capability: "Branch P&L for mid-market chains",
    antrahq: true,
    enterprise: true,
    marketplace: false,
    smb: "Basic",
  },
  {
    capability: "Geofenced selfie attendance",
    antrahq: true,
    enterprise: "Hardware partners",
    marketplace: false,
    smb: false,
  },
  {
    capability: "Market Pulse peer ranking",
    antrahq: true,
    enterprise: "Enterprise-only",
    marketplace: false,
    smb: false,
  },
  {
    capability: "No marketplace commission on bookings",
    antrahq: true,
    enterprise: true,
    marketplace: false,
    smb: true,
  },
  {
    capability: "Go-live in days for 3–20 branches",
    antrahq: true,
    enterprise: "Weeks–months",
    marketplace: true,
    smb: true,
  },
  {
    capability: "Transparent ₹/branch public pricing",
    antrahq: true,
    enterprise: false,
    marketplace: "Seat + fees",
    smb: "Soft-hidden",
  },
] as const;

export const faqs = [
  {
    q: "Who is Antrahq built for?",
    a: "Multi-location operators in India who want growth decisions — not more dashboards. Salon chains today, clinics and pharmacies tomorrow — typically 3 to 20 outlets that need GST, WhatsApp, branch P&L, and floor intelligence without enterprise bloat or marketplace tax.",
  },
  {
    q: "How is Antrahq different from enterprise suites?",
    a: "Enterprise suites are powerful but often opaque on price and slow to roll out. Antrahq is a growth decision platform for mid-market chains: faster go-live, India desk reality (GST + WhatsApp), transparent ₹/branch pricing, and Market Pulse for coaching outlets.",
  },
  {
    q: "Do you take a cut of bookings?",
    a: "No. Antrahq is brand-owned software. You keep 100% of booking revenue. We monetise via subscription, not marketplace commission.",
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
    type: "Compare",
    title: "How Antrahq compares by category",
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
    body: "Managers and staff punch on the branch device. Antrahq stores photo evidence, distance from location, and inside/outside status — then surfaces late arrivals and missing exits for review.",
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
        name: "Network overview",
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
        desc: "Branch-level tips and service contribution so managers act without waiting for head office.",
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
    blurb: "Core decisions for a focused outlet.",
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
    blurb: "The growth decision platform most mid-market brands need.",
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
