/**
 * Marketing copy — single source for every page.
 *
 * Honesty rules (also in docs/seo-agent/BACKLOG.md): no fabricated customers, logos, reviews,
 * ratings or performance stats. Competitor rows are directional and say so. Illustrative numbers
 * in product mockups are demo data.
 */

export const brand = {
  name: "AntraHQ",
  productLabel: "Salon & spa management software",
  tagline: "Every branch in sync. Every decision clearer.",
  /** Primary search category — matches the homepage <title> and H1 */
  searchCategory: "Salon & spa management software for India",
  mission:
    "AntraHQ is salon and spa management software for India — GST billing, POS, guest CRM, memberships, staff attendance, inventory, WhatsApp marketing and branch P&L in one platform, from a single outlet to a multi-city chain.",
  footer: "Built in India for salon, spa & beauty businesses · 1 branch to any scale",
  email: "contact@antrahq.com",
  cta: {
    primary: "Book a free demo",
    primaryShort: "Free demo",
    secondary: "See how it works",
  },
  whatsapp: {
    /** E.164 without + for wa.me links — never rendered in UI */
    phoneE164: "918095679454",
    defaultMessage:
      "Hi AntraHQ team — I'd like a demo of AntraHQ for our salon. Can we find a time?",
    ctaLabel: "Chat on WhatsApp",
  },
} as const;

/** Homepage hero. H1 leads with the head keyword; subtitle speaks to the pain. */
export const hero = {
  eyebrow: "Salon & spa management software for India",
  h1Lead: "Salon & spa management software",
  h1Accent: "that stops profit leaking from every branch",
  subtitle:
    "Billing, staff, stock, guests and branch profit in one app — with AntraHQ Autopilot confirming bookings, sending GST receipts and flagging leaks 24×7. Built for India: GST, UPI, WhatsApp and 10 Indian languages.",
  /** Pain chips under the hero — each jumps to its solution tab */
  painPrompt: "What's slowing your salon down?",
} as const;

/** Honest, checkable proof points — no invented customer counts or ratings. */
export const proofPoints = [
  { label: "GST-ready billing", detail: "Per-branch GSTIN · CGST/SGST" },
  { label: "WhatsApp built in", detail: "Receipts + win-back campaigns" },
  { label: "10 Indian languages", detail: "English, Hindi, Tamil, Telugu +6" },
  { label: "From ₹499 / month", detail: "Per branch · public pricing" },
  { label: "0% booking commission", detail: "Your guests, your revenue" },
] as const;

export type ScreenKey =
  | "walkin"
  | "pnl"
  | "attendance"
  | "campaign"
  | "pulse"
  | "inventory"
  | "localSpotlight"
  | "guestVoice";

/**
 * The homepage spine: each customer pain → the AntraHQ fix → the modules that deliver it.
 * Ordered by how often owners raise them in demos.
 */
export const painPoints = [
  {
    id: "profit",
    chip: "Branch losses found too late",
    pain: "“I only find out a branch lost money at month-end.”",
    painDetail:
      "Sales sit in the POS, salaries in Excel, rent in a ledger and product cost nowhere — so a struggling outlet hides for weeks.",
    title: "See profit by branch, every day",
    solution:
      "AntraHQ pulls billing, payroll, rent and product cost into one branch P&L, then ranks every outlet with Market Pulse so you know which branch to coach today — not after the month closes.",
    bullets: [
      "Revenue vs salary, rent, product and daily expenses per branch",
      "Branch leaderboard with monthly targets and pace",
      "Owner-only salary views; managers log daily costs",
    ],
    modules: [
      { label: "Branch P&L", href: "/products/analytics" },
      { label: "Market Pulse", href: "/products/analytics" },
    ],
    outcome: "Month-end surprises → same-day branch view",
    screen: "pnl" as ScreenKey,
  },
  {
    id: "desk",
    chip: "Slow front desk",
    pain: "“Walk-ins wait while my desk juggles a register, Excel and WhatsApp.”",
    painDetail:
      "Manual bills, wrong GST, no stylist on the line and paper receipts — the queue grows and commissions get disputed.",
    title: "Bill a walk-in in under a minute",
    solution:
      "A 3-step walk-in flow: find the guest by phone, add services with the stylist on every line, collect Cash/UPI/Card. The GST invoice and WhatsApp PDF receipt go out automatically.",
    bullets: [
      "Phone-first guest lookup with visit history",
      "Per-branch GSTIN with CGST/SGST split",
      "Stylist on every line for fair commissions",
    ],
    modules: [
      { label: "Billing & GST", href: "/products/billing" },
      { label: "Salon POS", href: "/products/pos" },
    ],
    outcome: "Paper & Excel → one-tap GST bill + WhatsApp receipt",
    screen: "walkin" as ScreenKey,
  },
  {
    id: "retention",
    chip: "Guests not coming back",
    pain: "“Regulars drift away and we only notice when the chairs are empty.”",
    painDetail:
      "Guest data is scattered across phones and registers, so nobody knows who hasn't visited in 60 days — or what they spent.",
    title: "Win back guests before they're gone",
    solution:
      "Every bill builds the guest profile. Filter by visit gap and spend, preview the audience, and send a WhatsApp win-back. Sell memberships and packages at the desk to lock in repeat visits.",
    bullets: [
      "Audience preview by last visit and spend",
      "WhatsApp campaigns included on Growth — no add-on",
      "Memberships & service packages with staff credit",
    ],
    modules: [
      { label: "Salon CRM", href: "/products/crm" },
      { label: "WhatsApp marketing", href: "/products/campaigns" },
      { label: "Memberships & packages", href: "/products/memberships" },
    ],
    outcome: "Silent churn → targeted win-backs from your own CRM",
    screen: "campaign" as ScreenKey,
  },
  {
    id: "staff",
    chip: "Attendance & payroll disputes",
    pain: "“Late and proxy punches slip straight into payroll.”",
    painDetail:
      "Paper registers and biometric devices that break mean you pay for hours nobody can prove — and argue about it every month.",
    title: "Attendance you can verify",
    solution:
      "Staff punch in with a selfie and GPS, checked against the salon's geofence. Late arrivals and missing exits are flagged for review before payroll — and staff see their own sales, targets and incentives in their app.",
    bullets: [
      "Selfie + GPS punch inside the branch geofence",
      "Late, outside and missing-exit flags",
      "Leave requests, targets and incentives in the staff app",
    ],
    modules: [
      { label: "Staff & attendance", href: "/products/staff" },
    ],
    outcome: "Honour system → photo + location evidence",
    screen: "attendance" as ScreenKey,
  },
  {
    id: "stock",
    chip: "Stock leakage",
    pain: "“Product walks out of the store-room and nobody can trace it.”",
    painDetail:
      "Colour, keratin and retail stock get used, wasted or sold without a record — and never reach the P&L.",
    title: "Every unit accounted for",
    solution:
      "Managers log restock, usage, wastage and retail sales on the floor app. Low stock is flagged early, and product cost flows straight into branch profit.",
    bullets: [
      "Branch-level stock with low-stock flags",
      "Usage, wastage and retail sale tracking",
      "Product cost feeds branch P&L automatically",
    ],
    modules: [{ label: "Salon inventory", href: "/products/inventory" }],
    outcome: "Untracked stock → every movement logged",
    screen: "inventory" as ScreenKey,
  },
  {
    id: "local",
    chip: "Losing to salons nearby on Google",
    pain: "“The salon down the road has more Google reviews — and we don't know our local rank.”",
    painDetail:
      "Most new guests find you on Google Maps. Without reviews and a complete profile, nearby rivals take them first.",
    title: "Win your neighbourhood on Google",
    solution:
      "Local Spotlight scores each branch's Google visibility against nearby salons. After every bill, a QR invites a 10-second rating: happy guests go to Google, unhappy ones reach you privately first.",
    bullets: [
      "Local Visibility Score and rival salons within 1–5 km",
      "Google profile gaps with a weekly action plan",
      "QR reviews: 4★+ to Google, 1–3★ to a recovery queue",
    ],
    modules: [
      { label: "Local Spotlight", href: "/products/local-spotlight" },
      { label: "Reviews & Customer voice", href: "/products/reviews" },
    ],
    outcome: "Unknown local rank → measured, with a plan",
    screen: "localSpotlight" as ScreenKey,
  },
] as const;

/**
 * AntraHQ Autopilot — each routine is a real automation in the product that fires the moment its event
 * happens, at any hour. Keep descriptions to what the automation actually does (no AI claims,
 * no autonomous sends the owner didn't set up).
 */
export const autopilot = {
  eyebrow: "AntraHQ Autopilot",
  title: "Put your salon on autopilot — 24×7, even after closing",
  lede: "Bookings, bills, punches, stock and reviews are handled the moment they happen — at 2 PM or 2 AM. Leaks get flagged before they cost you, and your team spends its time on guests, not paperwork.",
  outcomes: [
    { value: "24×7", label: "online booking, even after closing" },
    { value: "Instant", label: "GST invoice on WhatsApp for every bill" },
    { value: "Before payroll", label: "attendance issues flagged" },
  ],
  list: [
    {
      id: "booking",
      name: "Booking Autopilot",
      does: "Takes bookings from your branch booking page round the clock and sends the guest a WhatsApp confirmation.",
      event: "New booking · Hair spa · Sat 11:30 AM",
      plan: "All plans",
    },
    {
      id: "receipt",
      name: "Billing Autopilot",
      does: "The second a bill is paid, it issues the GST invoice and sends the PDF receipt on WhatsApp.",
      event: "₹2,450 paid · GST invoice sent on WhatsApp",
      plan: "All plans",
    },
    {
      id: "attendance",
      name: "Attendance Guard",
      does: "Checks every punch against the salon geofence and flags late, outside and missing-exit punches before payroll.",
      event: "Flag · Punch 1.2 km outside Koramangala",
      plan: "All plans",
    },
    {
      id: "stock",
      name: "Stock Guard",
      does: "Flags products below their minimum as usage is logged, so colour never runs out mid-service.",
      event: "Low stock · Developer 20 vol · 1 left",
      plan: "All plans",
    },
    {
      id: "reputation",
      name: "Review Guard",
      does: "Sends happy guests to your Google review page and routes 1–3★ ratings to a private recovery queue instantly.",
      event: "5★ from Priya → Google review page",
      plan: "Growth",
    },
    {
      id: "profit",
      name: "Profit Coach",
      does: "Ranks your branches on live sales and costs and lines up the next fixes on your dashboard.",
      event: "HSR Layout slipped to #4 · 3 fixes ready",
      plan: "Growth",
    },
  ],
} as const;

/** One platform, four people — what each role gets. */
export const roles = [
  {
    role: "Owners & CEOs",
    headline: "Run the whole chain from one screen",
    items: ["Branch P&L and targets", "Market Pulse branch ranking", "Local Spotlight & reviews", "WhatsApp campaigns"],
    href: "/solutions/owners",
  },
  {
    role: "Branch managers",
    headline: "A floor app built for the busy hour",
    items: ["Walk-in billing & bookings", "Attendance & leave approvals", "Stock movements", "Daily target pace"],
    href: "/solutions/managers",
  },
  {
    role: "Front desk",
    headline: "Faster bills, fewer mistakes",
    items: ["Phone-first guest lookup", "GST invoice + WhatsApp receipt", "Memberships & packages", "Review QR after payment"],
    href: "/products/billing",
  },
  {
    role: "Stylists & staff",
    headline: "Their own app, in their language",
    items: ["Selfie + GPS punch", "Own sales, goals & incentives", "Leave requests", "10 Indian languages"],
    href: "/products/staff",
  },
] as const;

/** Why buyers switch — the four differentiators, each backed by a row in `edgeRows`. */
export const differentiators = [
  {
    title: "Built for chains, great for one branch",
    desc: "Branch P&L, ranking and targets that most salon apps leave to Excel — on a plan that still makes sense for a single outlet.",
  },
  {
    title: "India-native, not localised later",
    desc: "GST per branch GSTIN, UPI, WhatsApp receipts and campaigns, and a staff app in 10 Indian languages.",
  },
  {
    title: "From ₹499 a month, zero commission",
    desc: "₹499–₹699 per branch per month, published. No booking cut, no WhatsApp add-on on Growth.",
  },
  {
    title: "Live the same day, not next quarter",
    desc: "Set up with you on a call in about an hour. Your desk sends its first GST bill on WhatsApp the same day.",
  },
] as const;

export type EdgeValue = "yes" | "partial" | "no" | string;

/**
 * Category comparison — directional, by category of tool rather than named vendor.
 * Named, sourced comparisons live on /compare/[slug].
 */
export const edgeColumns = [
  { key: "antrahq", label: "AntraHQ" },
  { key: "enterprise", label: "Enterprise suites", examples: "e.g. Zenoti" },
  { key: "india", label: "India salon apps", examples: "e.g. MioSalon, Salonist" },
  { key: "marketplace", label: "Booking marketplaces", examples: "e.g. Fresha" },
] as const;

export const edgeRows: {
  capability: string;
  antrahq: EdgeValue;
  enterprise: EdgeValue;
  india: EdgeValue;
  marketplace: EdgeValue;
}[] = [
  {
    capability: "Published ₹ pricing per branch",
    antrahq: "yes",
    enterprise: "Custom quote",
    india: "partial",
    marketplace: "Fees / commission",
  },
  {
    capability: "Branch P&L (salary, rent, product cost)",
    antrahq: "yes",
    enterprise: "yes",
    india: "Sales reports",
    marketplace: "no",
  },
  {
    capability: "Branch ranking & coaching signals",
    antrahq: "yes",
    enterprise: "Higher tiers",
    india: "Rare",
    marketplace: "no",
  },
  {
    capability: "GST invoices with per-branch GSTIN",
    antrahq: "yes",
    enterprise: "With setup",
    india: "yes",
    marketplace: "Varies",
  },
  {
    capability: "Geofenced selfie attendance",
    antrahq: "yes",
    enterprise: "Varies",
    india: "Varies",
    marketplace: "no",
  },
  {
    capability: "WhatsApp campaigns without add-on fees",
    antrahq: "Included on Growth",
    enterprise: "Often add-on",
    india: "Often credits",
    marketplace: "Platform-led",
  },
  {
    capability: "Staff app in 10 Indian languages",
    antrahq: "yes",
    enterprise: "Limited",
    india: "Varies",
    marketplace: "Limited",
  },
  {
    capability: "Google visibility vs nearby rivals",
    antrahq: "yes",
    enterprise: "Varies",
    india: "Rare",
    marketplace: "Listing only",
  },
  {
    capability: "Commission on your bookings",
    antrahq: "None",
    enterprise: "None",
    india: "None",
    marketplace: "Often on new clients",
  },
  {
    capability: "Typical time to go live",
    antrahq: "Same day",
    enterprise: "Weeks–months",
    india: "Days",
    marketplace: "Same day",
  },
];

export const nav = {
  solutions: [
    {
      href: "/solutions/multi-branch",
      title: "Multi-branch chains",
      desc: "One view of P&L, staff and stock across every outlet.",
    },
    {
      href: "/solutions/owners",
      title: "Owners & CEOs",
      desc: "Branch profit, ranking and growth levers before noon.",
    },
    {
      href: "/solutions/managers",
      title: "Branch managers",
      desc: "Floor app for walk-ins, attendance and inventory.",
    },
  ],
  products: [
    {
      href: "/products/billing",
      title: "Billing & GST",
      desc: "Walk-in wizard, GST invoices, WhatsApp receipts.",
    },
    {
      href: "/products/pos",
      title: "Salon POS",
      desc: "Cash, UPI and card — GST-ready at the desk.",
    },
    {
      href: "/products/crm",
      title: "Salon CRM",
      desc: "Phone-first guest profiles and visit history.",
    },
    {
      href: "/products/memberships",
      title: "Memberships & packages",
      desc: "Sell plans at the desk with staff credit.",
    },
    {
      href: "/products/analytics",
      title: "Branch P&L & analytics",
      desc: "Profit by outlet and Market Pulse ranking.",
    },
    {
      href: "/products/staff",
      title: "Staff & attendance",
      desc: "Geofenced punches, leave, targets.",
    },
    {
      href: "/products/inventory",
      title: "Inventory",
      desc: "Stock, usage, wastage and retail.",
    },
    {
      href: "/products/campaigns",
      title: "WhatsApp marketing",
      desc: "Win-back campaigns from your guest CRM.",
    },
    {
      href: "/products/local-spotlight",
      title: "Local Spotlight",
      desc: "Google visibility vs nearby rivals.",
    },
    {
      href: "/products/reviews",
      title: "Reviews & Customer voice",
      desc: "QR ratings, Google routing, recovery.",
    },
  ],
  links: [
    { href: "/compare", label: "Compare" },
    { href: "/resources", label: "Resources" },
    { href: "/pricing", label: "Pricing" },
  ],
} as const;

export const verticals = [
  {
    title: "Hair & unisex salons",
    desc: "Walk-in heavy desks, stylist commissions, colour stock and weekend peaks.",
    href: "/resources/best-salon-software-india-2026",
  },
  {
    title: "Beauty parlours & nail studios",
    desc: "Service-mix reporting, packages, memberships and staff targets.",
    href: "/resources/nail-salon-software-india",
  },
  {
    title: "Spas & wellness centres",
    desc: "Longer treatments, therapist schedules and P&L across rooms and outlets.",
    href: "/resources/spa-management-platform",
  },
  {
    title: "Multi-city chains & franchises",
    desc: "Standardise every new branch — GSTIN, geofence, targets — without a rebuild.",
    href: "/solutions/multi-branch",
  },
] as const;

/** Go-live plan — a new salon's first day, in hours. */
export const goLive = {
  stat: "2 hrs",
  statLabel: "from sign-up to your first GST bill on WhatsApp",
  perks: ["No hardware to buy", "Uses the tablets & phones you already have", "We set it up with you on a call"],
} as const;

export const timeline = [
  {
    when: "First 30 min",
    title: "Your salon, set up",
    detail: "Outlets, GSTIN, service menu and staff added with you on a call.",
  },
  {
    when: "Hour 1",
    title: "App on your front-desk tablet",
    detail: "Managers sign in on the tablets and phones you already own — nothing to install from a store.",
  },
  {
    when: "Within 2 hours",
    title: "First GST bill sent on WhatsApp",
    detail: "Your desk bills a real walk-in and the guest gets the invoice on WhatsApp.",
  },
  {
    when: "Same evening",
    title: "Owner dashboard live",
    detail: "Today's sales, staff punches and branch numbers on your phone before closing time.",
  },
] as const;

/** Illustrative operator scenarios — not attributed customer quotes until case studies ship */
export const results = [
  {
    quote:
      "Replace three Sunday Excels with one branch P&L view — so ops and finance agree on numbers before the week starts.",
    name: "Scenario · Network ops",
    role: "6-branch salon chain · Tier 1 city",
    before: "Weekly reconcile",
    after: "Daily branch view",
  },
  {
    quote:
      "Give managers a punch flow with photo and location evidence — so attendance review happens before payroll, not after disputes.",
    name: "Scenario · People ops",
    role: "Multi-branch beauty chain",
    before: "Paper / honour",
    after: "Selfie + geofence",
  },
  {
    quote:
      "See Local Visibility Score and rival salons on Google before spending on ads — fix profile gaps and review rhythm branch by branch.",
    name: "Scenario · Local growth",
    role: "Multi-branch salon chain · Tier 1 city",
    before: "Unknown rank",
    after: "LVS + rivals",
  },
] as const;

export const faqs = [
  {
    q: "What is the best salon management software in India?",
    a: "It depends on your size. Single-outlet parlours can start with a simple billing and booking app. If you run — or plan to run — more than one branch, look for GST billing per branch GSTIN, WhatsApp, verified staff attendance and branch-level P&L in one platform. AntraHQ is built for that: it works for one salon and scales to multi-city chains on the same plan structure.",
  },
  {
    q: "How much does salon software cost in India?",
    a: "Salon software in India ranges from under ₹1,000 to around ₹5,000 per outlet per month depending on features; enterprise suites are quoted separately. AntraHQ publishes its pricing: Starter is ₹499 and Growth is ₹699 per branch per month, with Enterprise on a custom plan. There is no commission on your bookings.",
  },
  {
    q: "Is AntraHQ suitable for a single salon or beauty parlour?",
    a: "Yes. Starter covers GST walk-in billing, bookings, basic reports and attendance for one outlet. When you open a second branch you move to Growth for brand admin, branch P&L and WhatsApp campaigns — no data migration.",
  },
  {
    q: "Is the billing GST compliant?",
    a: "Yes. Each branch has its own GSTIN, invoices split CGST and SGST, invoice numbers are sequential, and every bill can go to the guest as a WhatsApp PDF.",
  },
  {
    q: "Does AntraHQ work for spas and nail studios?",
    a: "Yes. Spas use it for longer treatments, therapist attendance and multi-outlet P&L; nail studios and beauty parlours use service-mix reports, packages and memberships. The same platform covers hair, beauty, nail and spa formats.",
  },
  {
    q: "Can my staff use it in Hindi or other Indian languages?",
    a: "Yes. The manager and staff apps are available in English plus nine Indian languages — Hindi, Bengali, Gujarati, Marathi, Punjabi, Kannada, Telugu, Tamil and Malayalam.",
  },
  {
    q: "What is AntraHQ Autopilot?",
    a: "Autopilot is a set of always-on routines built into AntraHQ that act the moment something happens, any time of day: Booking Autopilot confirms online bookings, Billing Autopilot sends GST invoices on WhatsApp, Attendance Guard and Stock Guard flag problems as they are logged, Review Guard routes ratings, and Profit Coach ranks branches and suggests fixes. They run on their own — you only step in when something is flagged.",
  },
  {
    q: "Is WhatsApp marketing included?",
    a: "WhatsApp receipts come with billing. Win-back campaigns — audience preview by visit gap and spend, then send — are included on the Growth plan rather than sold as an add-on. Message delivery uses your WhatsApp Business provider account.",
  },
  {
    q: "How long does it take to go live?",
    a: "The same day. We set up your outlets, GSTIN, services and staff with you on a call, managers sign in on the tablets or phones you already have, and your desk can bill its first walk-in — with a GST invoice on WhatsApp — within about two hours. The owner dashboard fills in from that first bill.",
  },
  {
    q: "How does AntraHQ compare with Zenoti, MioSalon, Salonist or Fresha?",
    a: "Zenoti suits large global chains with a long rollout budget. MioSalon and Salonist are established Indian salon apps. Fresha is a free-to-start booking marketplace that earns through fees. AntraHQ is for Indian operators who want branch profitability, verified attendance and transparent ₹ pricing in one product. See the side-by-side pages under Compare.",
  },
  {
    q: "Does it work on tablets and phones?",
    a: "Yes. The manager app installs on salon tablets and phones as an app, and staff have their own mobile app for punches, leave, sales and incentives. Owners use the web dashboard on any laptop.",
  },
] as const;

export const resources = [
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
] as const;

export const productPages = {
  billing: {
    title: "Salon billing & GST invoicing software",
    seoTitle: "Salon Billing & GST Invoice Software India | AntraHQ",
    seoDescription:
      "GST salon billing software for India: 3-step walk-in billing, per-branch GSTIN, CGST/SGST invoices, UPI/card/cash and WhatsApp PDF receipts.",
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
    seoTitle: "Salon POS Software India — GST, UPI & Card | AntraHQ",
    seoDescription:
      "Salon POS for Indian desks: walk-in billing, UPI, card and cash, GST preview, stylist on every line and WhatsApp receipts on a tablet app.",
    eyebrow: "Product · POS",
    hero: "Salon POS that matches how Indian desks actually work — walk-ins, UPI, and GST.",
    body: "AntraHQ POS is phone-first: lookup the guest, add services with stylist accountability, preview tax, and close the bill in one flow. Every sale feeds guest CRM, branch revenue, and owner P&L — no export step.",
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
    seoTitle: "Salon CRM Software India — Guest Profiles | AntraHQ",
    seoDescription:
      "Salon CRM with phone-first guest profiles, visit and spend history, enquiry leads and WhatsApp win-back audiences for Indian salons and spas.",
    eyebrow: "Product · CRM",
    hero: "Guest profiles that start at the phone number — and stay connected to every visit.",
    body: "AntraHQ CRM is not a separate database. Profiles grow from walk-ins, bookings, and public enquiries. Owners segment by visit gap and spend for WhatsApp win-backs; managers see history at the desk before the service starts.",
    bullets: [
      "Phone-first guest lookup at billing",
      "Visit and spend history on every profile",
      "Public enquiry leads in one queue",
      "Audience preview for WhatsApp campaigns",
      "Same graph powers receipts and retention",
    ],
    screen: "campaign" as const,
  },
  memberships: {
    title: "Salon membership & package software",
    seoTitle: "Salon Membership & Package Software India | AntraHQ",
    seoDescription:
      "Sell salon memberships and service packages at the desk, credit the selling staff member, and add visit scratch-card rewards to bring guests back.",
    eyebrow: "Product · Memberships & packages",
    hero: "Turn one-time guests into regulars with memberships and packages sold at the desk.",
    body: "Managers sell memberships and service packages from the same floor app they bill on. Every sale credits the staff member who closed it, so incentives are fair and visible. Branches can also switch on visit scratch-card rewards at billing to give guests a reason to return — all tied to the same guest profile as their bills and campaigns.",
    bullets: [
      "Sell memberships and service packages on the floor app",
      "Selling staff credited on every sale for incentives",
      "Optional visit scratch-card rewards per branch",
      "Same guest profile as billing and WhatsApp campaigns",
      "Package and membership sales visible in owner reports",
    ],
    screen: "campaign" as const,
  },
  analytics: {
    title: "Salon analytics, branch P&L & Market Pulse",
    seoTitle: "Multi-Branch Salon Analytics & Branch P&L | AntraHQ",
    seoDescription:
      "Branch P&L for salon chains: revenue vs salary, rent and product cost per outlet, Market Pulse branch ranking and monthly target tracking.",
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
    seoTitle: "Salon Staff Attendance & Payroll App India | AntraHQ",
    seoDescription:
      "Salon staff attendance with selfie + GPS geofence, late and missing-exit flags, leave approvals, targets and incentives for salon chains in India.",
    eyebrow: "Product · Staff",
    hero: "Staff attendance your managers can verify — before payroll runs.",
    body: "Managers and staff punch on the branch device. AntraHQ stores photo evidence, distance from location, and inside/outside status — then surfaces late arrivals and missing exits for review. Targets and incentives stay CEO-gated where needed.",
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
    /** Overlaps /products/staff — canonicalised there and kept out of the sitemap. */
    canonicalSlug: "staff",
    title: "Verified salon attendance",
    seoTitle: "Geofenced Salon Attendance App | AntraHQ",
    seoDescription:
      "Geofenced selfie attendance for salon staff: GPS verification, leave workflows and exception review for multi-branch salons in India.",
    eyebrow: "Product · Attendance",
    hero: "Selfie. GPS. Geofence. Review before payroll.",
    body: "Managers and staff punch on the branch device. AntraHQ stores photo evidence, distance from location, and inside/outside status — then surfaces late arrivals and missing exits for review.",
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
    seoTitle: "WhatsApp Marketing for Salons — Win-Back Campaigns | AntraHQ",
    seoDescription:
      "WhatsApp marketing for salons: audience preview by visit gap and spend, opt-in aware win-back campaigns, included on the AntraHQ Growth plan.",
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
    seoTitle: "Salon Inventory Management Software | AntraHQ",
    seoDescription:
      "Salon inventory software: branch stock, restock, usage, wastage and retail sales, with product cost flowing into branch P&L for salon chains.",
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
    seoTitle: "Local SEO for Salons — Google Visibility Score | AntraHQ",
    seoDescription:
      "Local Spotlight scores each salon branch on Google: visibility score, profile gaps, estimated local rank and nearby rival salons, with an action plan.",
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
    seoTitle: "Salon Review Software — QR Ratings to Google | AntraHQ",
    seoDescription:
      "Collect salon reviews after every bill: QR rating, category scores, 4★+ routed to Google and 1–3★ to a private recovery queue for owners.",
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

export const pricing = [
  {
    name: "Starter",
    price: "₹499",
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
    price: "₹699",
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
