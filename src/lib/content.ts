export const brand = {
  name: "Antrahq",
  productLabel: "Growth Decision Platform",
  /** Brand category — how we want to be remembered */
  tagline: "Every aspect connected. Every decision sharper.",
  /** Search category — how buyers find us on Google */
  searchCategory: "Salon & spa management platform for India",
  short: "Run every branch. See every signal. Make the next growth decision.",
  mission:
    "Antrahq is a salon and spa management platform for India — connecting billing, guest CRM, inventory, staff attendance, WhatsApp marketing, branch profitability, Local Spotlight, and guest reviews for multi-location chains so founders, ops heads, and finance leaders work from one shared view.",
  footer: "Built in India · Salon & spa · 1 branch to any scale",
  email: "antrahq@gmail.com",
  cta: {
    primary: "Book a growth audit",
    primaryShort: "Growth audit",
    secondary: "Watch product film",
  },
  whatsapp: {
    /** E.164 without + for wa.me links — never rendered in UI */
    phoneE164: "918095679454",
    defaultMessage:
      "Hi Antrahq team — I'd like to book a multi-branch growth audit for our salon chain. Can we find a time?",
    ctaLabel: "Talk to us",
  },
} as const;

/** Homepage hero — keyword-led H1 for search, brand lines underneath */
export const heroHeadline = {
  lines: [
    "Salon & spa management platform for India.",
    "Run every branch.",
    "Make the next growth decision.",
  ] as const,
  subtitle:
    "One multi-branch platform for POS, GST billing, CRM, attendance, WhatsApp, and branch P&L",
} as const;

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
    eyebrow: "One connected platform",
    title: "Billing, CRM, inventory, staff, and profitability — wired together.",
    lede: "Most salon software handles the front desk well. Antrahq connects desk work to branch P&L, guest retention, and network coaching — so owners see where to act, not just what happened.",
  },
  growthLevers: {
    eyebrow: "What you can run on Antrahq",
    title: "Eight modules salon operators use — from one outlet to full networks.",
    lede: "Desk ops, owner intelligence, local Google visibility, and guest reputation — each module maps to a job your team already does.",
  },
  intelligence: {
    eyebrow: "Owner intelligence",
    title: "Branch economics, local search, and guest voice — in one morning view.",
    lede: "Market Pulse, branch P&L, Local Spotlight, and Customer voice surface coaching moments while there is still time to change the week.",
  },
  film: {
    eyebrow: "Product film",
    title: "See billing, attendance, and P&L in one flow.",
  },
  results: {
    eyebrow: "Operator scenarios",
    title: "Outcomes multi-branch teams aim for.",
    disclaimer:
      "Illustrative scenarios from early deployments — your results depend on branch count, offer mix, and how consistently managers use the platform.",
  },
  finalCta: {
    title: "See where your chain can grow next.",
    lede: "Book a 30-minute multi-branch growth audit. We map billing, CRM, staff, inventory, branch economics, Local Spotlight, and guest reviews — then show the product on your terms.",
  },
  localReputation: {
    eyebrow: "Local visibility & reputation",
    title: "Show up on Google. Hear guests before bad reviews go public.",
    lede: "Local Spotlight tracks how each branch ranks in local search vs nearby salons. Customer voice collects ratings at the desk, routes happy guests to Google, and gives owners a recovery queue for detractors.",
  },
  aiAgents: {
    eyebrow: "Connected signals",
    title: "When one branch slips, the whole story shows up together.",
    lede: "Footfall, margin, staff attendance, and guest retention feed one morning view — so owners and branch leads know what to fix first.",
    useCaseTitle: "Example: one outlet dips vs peer branches",
    useCaseLede: "See how connected signals turn into three floor actions — illustrated with demo data.",
    storyEyebrow: "Connected scenario",
    graphStart: "Signals detected",
    graphEnd: "Actions ready",
    detailEyebrow: "What an owner sees",
  },
} as const;

/** Hero capability highlights — honest framing, not unattributed performance claims */
export const heroStats = [
  {
    label: "Built for",
    before: "Tools you outgrow",
    after: "1 branch → any scale",
    delta: "Same platform",
    improved: true,
  },
  {
    label: "Connected modules",
    before: "Separate apps",
    after: "Billing · CRM · Staff · Stock",
    delta: "One view",
    improved: true,
  },
  {
    label: "India desk workflow",
    before: "Generic POS",
    after: "GST + WhatsApp receipts",
    delta: "Local",
    improved: true,
  },
  {
    label: "Owner economics",
    before: "Month-end Excel",
    after: "Live branch P&L",
    delta: "Actionable",
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
      title: "Salon billing & GST",
      desc: "Walk-in wizard, invoices, WhatsApp receipts.",
    },
    {
      href: "/products/pos",
      title: "Salon POS software",
      desc: "Cash, UPI, card — GST-ready at the desk.",
    },
    {
      href: "/products/crm",
      title: "Salon CRM & guest profiles",
      desc: "Phone-first profiles, leads, visit history.",
    },
    {
      href: "/products/analytics",
      title: "Branch P&L & analytics",
      desc: "Profit by outlet and Market Pulse ranking.",
    },
    {
      href: "/products/local-spotlight",
      title: "Local Spotlight",
      desc: "Google visibility score, rivals, and action plan.",
    },
    {
      href: "/products/reviews",
      title: "Reviews & Customer voice",
      desc: "QR ratings, Google routing, recovery queue.",
    },
    {
      href: "/products/staff",
      title: "Staff & attendance",
      desc: "Geofenced punches, leave, payroll signals.",
    },
    {
      href: "/products/campaigns",
      title: "WhatsApp marketing",
      desc: "Win-back campaigns from your guest CRM.",
    },
    {
      href: "/products/inventory",
      title: "Salon inventory",
      desc: "Stock, usage, wastage, and retail tracking.",
    },
  ],
  links: [
    { href: "/customers", label: "Customers" },
    { href: "/resources", label: "Resources" },
    { href: "/compare", label: "Compare" },
    { href: "/pricing", label: "Pricing" },
  ],
} as const;


export const reviewBadges = [
  { name: "India GST-ready", detail: "CGST · SGST · branch GSTIN" },
  { name: "Local Spotlight", detail: "Google visibility & rivals" },
  { name: "Customer voice", detail: "Ratings · recovery · Google" },
  { name: "WhatsApp-native", detail: "Receipts + campaigns" },
] as const;

/** Desk → Google reputation loop */
export const localReputationLoop = [
  {
    step: "01",
    title: "Collect at the desk",
    desc: "After payment, managers show a QR — guests rate in ~10 seconds on their phone.",
  },
  {
    step: "02",
    title: "Route with intent",
    desc: "4★ and 5★ guests can go straight to your Google review page. 1–3★ stays private for recovery.",
  },
  {
    step: "03",
    title: "Coach the network",
    desc: "Customer voice summarises themes. Local Spotlight shows search rank, GBP gaps, and rival benchmarks.",
  },
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
  {
    id: "reputation",
    title: "Reputation signal",
    caption: "QR rating at the desk → Google for promoters → recovery for detractors",
    screen: "guestVoice" as const,
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
  {
    id: "spotlight",
    problemLabel: "THE INVISIBLE BRANCH",
    problemStat: "Guests search Google — but you don't know your local rank",
    title: "Local Spotlight",
    promise: "See local search & rivals",
    desc: "Local Visibility Score, estimated keyword rank, Google Business Profile completeness, and auto-discovered rivals within 1–5 km — with prioritised playbooks to close gaps.",
    bullets: [
      "LVS score per branch",
      "Search visibility & keyword gaps",
      "GBP completeness checklist",
      "Local rival benchmarks",
      "Action plan: reviews, profile, SEO",
    ],
    screen: "localSpotlight" as const,
    href: "/products/local-spotlight",
  },
  {
    id: "reviews",
    problemLabel: "THE SILENT DETRACTOR",
    problemStat: "Unhappy guests leave quietly — or blast Google without warning",
    title: "Reviews & Customer voice",
    promise: "Hear guests. Grow Google stars.",
    desc: "Post-payment QR invites a quick rating. Promoters route to Google; detractors land in a recovery queue owners see in Customer voice — with category scores and feedback themes.",
    bullets: [
      "QR invite after walk-in payment",
      "5 category ratings + tags",
      "Auto-route 4★+ to Google",
      "Private recovery for 1–3★",
      "Owner dashboard: themes & trends",
    ],
    screen: "guestVoice" as const,
    href: "/products/reviews",
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
      before: "Paper / honour",
      after: "Selfie + geofence",
      delta: "Verifiable",
      improved: true,
    },
    screen: "attendance" as const,
  },
  {
    title: "Local Spotlight",
    blurb: "Local Visibility Score, Google profile gaps, search rank, and nearby rival salons — with playbooks owners can act on this week.",
    metric: {
      label: "Local discovery",
      before: "Guesswork",
      after: "LVS + rivals",
      delta: "Measured",
      improved: true,
    },
    screen: "localSpotlight" as const,
  },
  {
    title: "Customer voice",
    blurb: "Ratings from the desk, Google routing for promoters, and a recovery queue for detractors — category themes in one owner view.",
    metric: {
      label: "Review routing",
      before: "Public surprises",
      after: "Private first",
      delta: "Controlled",
      improved: true,
    },
    screen: "guestVoice" as const,
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
    desc: "Add your next branch — GSTIN, geofence, seats, and decision views follow without a rebuild.",
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
    stat: "Connected",
    statLabel: "billing · CRM · P&L · staff",
  },
] as const;

export const trustLogos = [
  "Salon & spa chains",
  "Local Spotlight",
  "Customer voice",
  "India GST billing",
  "Branch P&L",
  "Market Pulse",
] as const;

/** Illustrative operator scenarios — not attributed customer quotes until case studies ship */
export const results = [
  {
    quote:
      "Replace three Sunday Excels with one branch P&L view — so ops and finance agree on numbers before the week starts.",
    name: "Scenario · Network ops",
    role: "6-branch salon chain · Tier 1 city",
    focus: "Unified reporting",
    metric: {
      label: "Reporting rhythm",
      before: "Weekly reconcile",
      after: "Daily branch view",
      delta: "Aligned",
      improved: true,
    },
  },
  {
    quote:
      "Give managers a punch flow with photo and location evidence — so attendance review happens before payroll, not after disputes.",
    name: "Scenario · People ops",
    role: "Multi-branch beauty chain",
    focus: "Attendance integrity",
    metric: {
      label: "Punch evidence",
      before: "Paper / honour",
      after: "Selfie + geofence",
      delta: "Verifiable",
      improved: true,
    },
  },
  {
    quote:
      "See Local Visibility Score and rival salons on Google before spending on ads — fix profile gaps and review rhythm branch by branch.",
    name: "Scenario · Local growth",
    role: "Multi-branch salon chain · Tier 1 city",
    focus: "Google visibility",
    metric: {
      label: "Local discovery",
      before: "Unknown rank",
      after: "LVS + rivals",
      delta: "Actionable",
      improved: true,
    },
  },
  {
    quote:
      "Route happy guests to Google after the bill — handle unhappy feedback in private before it becomes a one-star surprise.",
    name: "Scenario · Guest reputation",
    role: "Mid-market beauty chain",
    focus: "Reviews & recovery",
    metric: {
      label: "Review flow",
      before: "Random Google",
      after: "QR → route",
      delta: "Controlled",
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
    desc: "Longer treatments, therapist schedules, and owner P&L across rooms and outlets — see our spa management platform guide.",
    href: "/resources/spa-management-platform",
  },
  {
    title: "Growing salon brands",
    desc: "Add the next location without rebuilding your ops stack — multi-branch salon platform checklist included.",
    href: "/resources/multi-branch-salon-platform",
  },
] as const;

export const platformTaxonomy = [
  {
    title: "Delight your guests",
    items: [
      { label: "Walk-in & appointment billing", href: "/products/billing" },
      { label: "GST invoice PDF", href: "/products/billing" },
      { label: "WhatsApp receipts", href: "/products/campaigns" },
      { label: "Phone-first guest profiles", href: "/products/crm" },
      { label: "Leads from public enquiries", href: "/products/crm" },
    ],
  },
  {
    title: "Grow the chain",
    items: [
      { label: "WhatsApp win-back campaigns", href: "/products/campaigns" },
      { label: "Local Spotlight & Google visibility", href: "/products/local-spotlight" },
      { label: "Customer voice & review QR", href: "/products/reviews" },
      { label: "Market Pulse playbooks", href: "/products/analytics" },
      { label: "Service contribution insights", href: "/products/analytics" },
      { label: "Multi-branch KPIs", href: "/solutions/multi-branch" },
    ],
  },
  {
    title: "Productive teams",
    items: [
      { label: "Manager floor PWA", href: "/solutions/managers" },
      { label: "Geofenced attendance", href: "/products/attendance" },
      { label: "Leave workflows", href: "/products/staff" },
      { label: "Staff targets & incentives", href: "/products/staff" },
      { label: "Stylist on every line item", href: "/products/pos" },
    ],
  },
  {
    title: "Unify operations",
    items: [
      { label: "Branch P&L", href: "/products/analytics" },
      { label: "Inventory movements", href: "/products/inventory" },
      { label: "Audit logs", href: "/products/analytics" },
      { label: "Brand admin & RBAC", href: "/solutions/owners" },
      { label: "India locales", href: "/solutions/multi-branch" },
    ],
  },
] as const;

export const comparisonRows = [
  {
    capability: "India GST billing (branch GSTIN, CGST/SGST PDF)",
    antrahq: true,
    enterprise: "Yes — often heavier setup",
    marketplace: "Varies",
    smb: "Common",
  },
  {
    capability: "WhatsApp receipts & campaigns",
    antrahq: "Campaigns on Growth tier",
    enterprise: "Often add-on modules",
    marketplace: "Platform-dependent",
    smb: "Often extra",
  },
  {
    capability: "Multi-branch P&L by outlet",
    antrahq: true,
    enterprise: true,
    marketplace: "Rare",
    smb: "Basic summaries",
  },
  {
    capability: "Geofenced selfie attendance",
    antrahq: true,
    enterprise: "Varies — hardware options",
    marketplace: "Rare",
    smb: "Varies",
  },
  {
    capability: "Branch ranking / coaching signals",
    antrahq: "Market Pulse",
    enterprise: "Advanced analytics tiers",
    marketplace: "Rare",
    smb: "Rare",
  },
  {
    capability: "Subscription vs marketplace commission",
    antrahq: "Subscription — no booking cut",
    enterprise: "Subscription",
    marketplace: "Often commission-based",
    smb: "Usually subscription",
  },
  {
    capability: "Typical rollout timeline",
    antrahq: "Days — from first branch onward",
    enterprise: "Weeks to months",
    marketplace: "Days",
    smb: "Days",
  },
  {
    capability: "Local Google visibility (LVS, rivals, GBP gaps)",
    antrahq: "Local Spotlight",
    enterprise: "Varies by module",
    marketplace: "Discovery-focused",
    smb: "Rare",
  },
  {
    capability: "Post-visit reviews with Google routing",
    antrahq: "QR + Customer voice",
    enterprise: "Varies",
    marketplace: "Platform reviews",
    smb: "Rare",
  },
  {
    capability: "Public ₹/branch pricing",
    antrahq: true,
    enterprise: "Custom quote",
    marketplace: "Mixed",
    smb: "Often quote-based",
  },
] as const;

export const faqs = [
  {
    q: "Who is Antrahq built for?",
    a: "Salon and spa operators in India — from a single outlet to large multi-branch networks. Buyers are usually founders, operations heads, or finance leaders who need GST billing, guest CRM, staff attendance, inventory, WhatsApp marketing, and branch profitability in one platform that scales as they grow.",
  },
  {
    q: "Is Antrahq salon POS software or something else?",
    a: "Antrahq is a salon and spa management platform — not only POS. It includes GST billing at the desk, plus multi-branch P&L, CRM, inventory, staff attendance, and WhatsApp campaigns. Owners use it to decide which branch to coach — not only to print a bill.",
  },
  {
    q: "How does Antrahq compare to Zenoti, MioSalon, or Salonist?",
    a: "Zenoti suits large enterprise chains with custom rollouts. MioSalon and Salonist are strong operational tools for many Indian salons. Antrahq fits operators who want connected branch economics and public ₹/branch pricing — whether you run one location today or dozens tomorrow. See our compare pages for an honest side-by-side starting point.",
  },
  {
    q: "Do you take a cut of bookings?",
    a: "No. Antrahq is subscription software for your brand. You keep booking revenue; we charge per branch per month.",
  },
  {
    q: "Is WhatsApp marketing included?",
    a: "WhatsApp campaign tools are on the Growth plan. Message delivery connects to your MSG91 (or equivalent) account — audience preview and segmentation are in the product.",
  },
  {
    q: "Can managers use it on tablets?",
    a: "Yes. The manager app is an installable PWA for walk-ins, attendance, inventory, and bookings on salon tablets.",
  },
  {
    q: "What is Local Spotlight?",
    a: "Local Spotlight is an owner dashboard for Google digital presence: Local Visibility Score, estimated local search rank, Google Business Profile completeness, nearby rival salons, and prioritised playbooks (profile fixes, review growth, keyword gaps). It complements Market Pulse, which ranks branches inside your network.",
  },
  {
    q: "How do reviews and ratings work?",
    a: "After a walk-in payment, managers can show a QR code. Guests submit a quick rating and category scores. Four- and five-star guests can be routed to your Google review page; lower scores stay private and appear in Customer voice for recovery. Owners see averages, themes, and open follow-ups.",
  },
  {
    q: "What happens in a growth audit?",
    a: "In 30 minutes we map your branch count, billing flow, reporting gaps, and retention rhythm — then walk the relevant product screens. It is tailored to your chain, not a generic slide deck.",
  },
] as const;

export const resources = [
  {
    type: "Guide",
    title: "What is a salon management platform? (India buyer guide)",
    desc: "POS vs platform, must-have modules, and how mid-market chains should shortlist.",
    href: "/resources/salon-management-platform-india",
  },
  {
    type: "Guide",
    title: "Spa management platform guide for multi-location wellness",
    desc: "Therapist schedules, longer treatments, and owner P&L across spa rooms and outlets.",
    href: "/resources/spa-management-platform",
  },
  {
    type: "Guide",
    title: "How to choose salon management software for Indian chains",
    desc: "Evaluation checklist: GST, WhatsApp, multi-branch P&L, attendance, and rollout time.",
    href: "/resources/choose-salon-software-india",
  },
  {
    type: "Guide",
    title: "Multi-branch salon platform checklist",
    desc: "What must be standardised before you open branch three through twenty.",
    href: "/resources/multi-branch-salon-platform",
  },
  {
    type: "Guide",
    title: "Salon vs spa software — what actually differs",
    desc: "Where salon and spa ops diverge — and when one platform can cover both.",
    href: "/resources/salon-vs-spa-software",
  },
  {
    type: "Guide",
    title: "Multi-branch P&L checklist for Indian salon owners",
    desc: "What to track weekly so leaks show up before month-end.",
    href: "/resources/multi-branch-pnl-checklist",
  },
  {
    type: "Playbook",
    title: "WhatsApp win-back sequences that respect opt-in",
    desc: "Audience cuts by visit gap and spend — without spamming.",
    href: "/resources/whatsapp-winback-playbook",
  },
  {
    type: "Guide",
    title: "Salon staff attendance guide for multi-branch chains",
    desc: "Geofencing, selfie punches, and weekly review before payroll.",
    href: "/resources/salon-attendance-guide",
  },
  {
    type: "Tool",
    title: "Revenue opportunity calculator",
    desc: "Estimate desk-time and win-back upside for your chain size.",
    href: "/roi-calculator",
  },
  {
    type: "Tool",
    title: "Branch health score",
    desc: "Score reporting, attendance, and retention readiness across outlets.",
    href: "/branch-health-score",
  },
  {
    type: "Compare",
    title: "Antrahq vs Zenoti, MioSalon & Salonist",
    desc: "Honest starting points for your shortlist — validate in live demos.",
    href: "/compare/zenoti",
  },
] as const;

export const productPages = {
  billing: {
    title: "Salon billing & GST invoicing software",
    seoTitle: "Salon billing & GST software — salon management platform · Antrahq",
    seoDescription:
      "GST-ready salon billing inside a salon management platform for Indian chains: walk-in wizard, branch GSTIN, CGST/SGST invoices, UPI/card/cash, and WhatsApp PDF receipts.",
    eyebrow: "Product · Billing",
    hero: "From guest phone number to GST invoice and WhatsApp receipt — at the desk.",
    body: "Built for Indian walk-in culture: find the guest, assign stylists on every line, preview GST, collect Cash/UPI/Card, and queue a WhatsApp PDF. Discounts leave an audit trail managers and owners can review.",
    bullets: [
      "3-step wizard on manager PWA",
      "Per-branch GSTIN with CGST/SGST split",
      "Sequential invoice numbers + public PDF link",
      "Mandatory stylist per line for fair commissions",
      "Split payments supported in the API layer",
    ],
    screen: "walkin" as const,
  },
  pos: {
    title: "Salon POS software for India",
    seoTitle: "Salon POS software India — GST, UPI & multi-branch platform · Antrahq",
    seoDescription:
      "Salon POS inside a multi-branch salon management platform for India: walk-in billing, UPI and card, GST invoices, stylist assignment, and WhatsApp receipts from one floor app.",
    eyebrow: "Product · POS",
    hero: "Salon POS that matches how Indian desks actually work — walk-ins, UPI, and GST.",
    body: "Antrahq POS is phone-first: lookup the guest, add services with stylist accountability, preview tax, and close the bill in one flow. Every sale feeds guest CRM, branch revenue, and owner P&L — no export step.",
    bullets: [
      "Cash, UPI, and card in one walk-in flow",
      "GST preview before payment collection",
      "Stylist on every line item for commissions",
      "WhatsApp PDF receipt after payment",
      "Works on installable manager tablets",
    ],
    screen: "walkin" as const,
  },
  crm: {
    title: "Salon CRM & guest management",
    seoTitle: "Salon CRM software for multi-branch salon management platforms · Antrahq",
    seoDescription:
      "Salon CRM in a salon management platform: phone-first guest profiles, visit history, spend segments, public enquiry leads, and WhatsApp win-back audiences for Indian chains.",
    eyebrow: "Product · CRM",
    hero: "Guest profiles that start at the phone number — and stay connected to every visit.",
    body: "Antrahq CRM is not a separate database. Profiles grow from walk-ins, bookings, and public enquiries. Owners segment by visit gap and spend for WhatsApp win-backs; managers see history at the desk before the service starts.",
    bullets: [
      "Phone-first guest lookup at billing",
      "Visit and spend history on every profile",
      "Public enquiry leads in one queue",
      "Audience preview for WhatsApp campaigns",
      "Same graph powers receipts and retention",
    ],
    screen: "campaign" as const,
  },
  analytics: {
    title: "Salon analytics, branch P&L & Market Pulse",
    seoTitle: "Multi-branch salon analytics & branch P&L platform · Antrahq",
    seoDescription:
      "Branch P&L and salon analytics in a salon management platform for India: revenue vs salary, rent, product cost, Market Pulse ranking, and coaching signals across every outlet.",
    eyebrow: "Product · Analytics",
    hero: "Know which outlet is winning — and why — before the week slips away.",
    body: "Owner dashboards combine live chain KPIs, expenditure-aware P&L, and Market Pulse rankings with anonymised peer context. Finance and ops can agree on one branch scoreboard.",
    bullets: [
      "Revenue vs salary, rent, product, misc",
      "Payroll and product-cost sync into P&L",
      "In-brand leaderboard + peer cohorts",
      "Service contribution and recommendations",
      "Branch filters across the entire brand",
    ],
    screen: "pulse" as const,
  },
  staff: {
    title: "Salon staff management & attendance",
    seoTitle: "Salon staff attendance software India · Antrahq",
    seoDescription:
      "Salon staff attendance with selfie and GPS geofence, leave workflows, late and missing-exit flags, and payroll signals for multi-branch chains.",
    eyebrow: "Product · Staff",
    hero: "Staff attendance your managers can verify — before payroll runs.",
    body: "Managers and staff punch on the branch device. Antrahq stores photo evidence, distance from location, and inside/outside status — then surfaces late arrivals and missing exits for review. Targets and incentives stay CEO-gated where needed.",
    bullets: [
      "Front-camera selfie capture",
      "Accuracy-aware GPS with distance-to-branch",
      "Configurable geofence radius",
      "Leave request / approve / reject",
      "Daily and period exception logs",
    ],
    screen: "attendance" as const,
  },
  attendance: {
    title: "Verified salon attendance",
    seoTitle: "Geofenced salon attendance · Antrahq",
    seoDescription:
      "Geofenced selfie attendance for salon staff: GPS verification, leave workflows, and exception review for multi-branch chains in India.",
    eyebrow: "Product · Attendance",
    hero: "Selfie. GPS. Geofence. Review before payroll.",
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
    title: "Salon WhatsApp marketing",
    seoTitle: "Salon WhatsApp marketing & win-back campaigns · Antrahq",
    seoDescription:
      "WhatsApp marketing for salon chains: audience preview by visit and spend, opt-in aware win-backs, and campaigns included on Growth tier.",
    eyebrow: "Product · WhatsApp marketing",
    hero: "Win-backs from the same CRM graph as your billing.",
    body: "Preview audiences by visit history and spend, respect opt-in, and launch campaigns from brand admin. Growth includes the capability so messaging is part of the platform — not a surprise line item.",
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
    title: "Salon inventory management",
    seoTitle: "Multi-branch salon inventory software · Antrahq",
    seoDescription:
      "Salon inventory for chains: branch stock, restock, usage, wastage, retail sales, and product cost in branch P&L.",
    eyebrow: "Product · Inventory",
    hero: "Every unit has a movement — restock, usage, wastage, or sale.",
    body: "Branch managers log stock events on the floor PWA while owners watch inventory analytics across the chain. Product cost flows into branch economics for clearer P&L.",
    bullets: [
      "Branch-level stock views",
      "Restock / usage / wastage / retail / adjust",
      "Feeds product cost into branch economics",
      "CEO inventory overview",
      "Works alongside service billing",
    ],
    screen: "inventory" as const,
  },
  "local-spotlight": {
    title: "Local Spotlight for salon chains",
    seoTitle: "Local Spotlight — salon Google visibility & local SEO · Antrahq",
    seoDescription:
      "Local Spotlight for multi-branch salons: Local Visibility Score, Google Business Profile completeness, search rank, local rivals, and owner action plans in India.",
    eyebrow: "Product · Local Spotlight",
    hero: "Know how each branch shows up on Google — vs salons nearby.",
    body: "Local Spotlight connects your branch Google presence to a Local Visibility Score (LVS), estimated search rank for salon keywords, profile completeness checks, and auto-discovered rivals within 1–5 km. Owners get prioritised playbooks: fix GBP gaps, grow reviews, close keyword gaps, and recover reputation — linked to Customer voice when review growth is the lever.",
    bullets: [
      "Local Visibility Score (LVS) per branch",
      "Google rating, review count & profile completeness",
      "Estimated local search rank & keyword gaps",
      "Nearby rival salons from Google Places",
      "Action plan: profile, reviews, SEO, recovery",
      "Refresh from Google when you update listings",
    ],
    screen: "localSpotlight" as const,
  },
  reviews: {
    title: "Salon reviews, ratings & Customer voice",
    seoTitle: "Salon reviews & ratings software — QR to Google · Antrahq",
    seoDescription:
      "Collect salon reviews after walk-in payment: QR rating invite, 5 category scores, route 4★+ to Google, private recovery for detractors, and Customer voice owner dashboard.",
    eyebrow: "Product · Reviews & ratings",
    hero: "Turn happy guests into Google reviews — catch unhappy ones in private first.",
    body: "After a walk-in bill, managers share a QR code. Guests rate overall and across Service, Ambience, Staff, Cleanliness, and Value in about ten seconds. Four- and five-star guests can be sent to your branch Google review URL. One- to three-star feedback stays private and opens a recovery case your team follows up on. Owners see averages, themes, and open recoveries in Customer voice — connected to Local Spotlight playbooks.",
    bullets: [
      "Post-payment QR review invite at the desk",
      "Overall + 5 category star ratings",
      "Improvement tags and optional comment",
      "Auto-route 4★+ to Google (per branch setting)",
      "Private recovery queue for 1–3★",
      "Customer voice dashboard: themes & trends",
    ],
    screen: "guestVoice" as const,
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
        name: "Local Spotlight",
        desc: "Local Visibility Score, Google profile completeness, search rank, and nearby rival benchmarks — with action plans per branch.",
      },
      {
        name: "Customer voice",
        desc: "Ratings and feedback themes from the desk; recovery queue for detractors; Google routing for promoters.",
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
        desc: "Three steps: guest → services + stylist → pay. GST preview before you collect — then optional review QR.",
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
        name: "Post-visit review QR",
        desc: "After payment, share a QR so guests rate in seconds — promoters nudged to Google, detractors handled privately.",
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
    blurb: "Core platform for one focused outlet — upgrade paths when you add branches.",
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
    blurb: "Full growth platform — built for operators who run one branch or many.",
    features: [
      "Everything in Starter",
      "Brand admin & multi-branch P&L",
      "WhatsApp campaigns included",
      "Market Pulse, Local Spotlight & Customer voice",
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
