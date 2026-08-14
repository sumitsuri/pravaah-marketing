export type ResourceArticle = {
  slug: string;
  type: "Guide" | "Playbook";
  title: string;
  seoTitle: string;
  seoDescription: string;
  readMinutes: number;
  lede: string;
  sections: { heading: string; body: string; bullets?: string[] }[];
  cta: string;
};

export const resourceArticles: Record<string, ResourceArticle> = {
  "multi-branch-pnl-checklist": {
    slug: "multi-branch-pnl-checklist",
    type: "Guide",
    title: "Multi-branch P&L checklist for Indian salon owners",
    seoTitle: "Multi-branch salon P&L checklist for owners in India",
    seoDescription:
      "Weekly branch P&L checklist for salon chains: revenue, discounts, salary %, product cost, and coaching priorities before month-end surprises.",
    readMinutes: 8,
    lede:
      "Whether you run one salon branch or many, month-end should not be the first time you see which outlet leaked margin. This checklist is a weekly rhythm founders, ops heads, and finance leads can run in under thirty minutes — with or without software.",
    sections: [
      {
        heading: "Why weekly beats monthly for salon chains",
        body:
          "Single-outlet salons can sometimes survive on gut feel. Multi-branch networks cannot — a weak branch hides inside network averages until rent, salary, and product cost have already compounded. Weekly P&L discipline catches discount drift, idle chair patterns, and product shrink while managers still remember the week.",
      },
      {
        heading: "Step 1 — Revenue truth by branch",
        body: "Pull gross revenue per outlet for the last seven days and compare to the same week last month (not last week — salons are seasonal).",
        bullets: [
          "Separate walk-in vs appointment revenue if your desk mixes both",
          "Flag branches below 85% of their four-week rolling average",
          "Note public holidays or local events before calling a branch “slow”",
        ],
      },
      {
        heading: "Step 2 — Discount and void audit",
        body:
          "Unexplained discounts are the fastest silent leak in Indian salon chains. Every void or discount should tie to a guest, stylist, and manager approval.",
        bullets: [
          "List top 10 discounted bills by value — review with branch lead",
          "Compare discount % to network average; investigate outliers above +2 pts",
          "Confirm GST invoices match collected amounts (Cash/UPI/card splits)",
        ],
      },
      {
        heading: "Step 3 — Cost bands that matter",
        body:
          "Salon branch economics usually break into four buckets owners can act on: salaries, rent, product/consumables, and misc (marketing, repairs, utilities).",
        bullets: [
          "Salaries: target 35–45% of revenue depending on service mix",
          "Rent: know your per-chair breakeven — slow weeks hurt fixed rent hardest",
          "Product cost: tie usage and retail to billing where possible",
          "Misc: cap discretionary spend per branch monthly",
        ],
      },
      {
        heading: "Step 4 — Compare branches on one scoreboard",
        body:
          "Rank outlets on revenue per chair, discount rate, and product cost %. The bottom quartile is your coaching list for the coming week — not a blame exercise, a prioritisation exercise.",
      },
      {
        heading: "Step 5 — One retention action",
        body:
          "P&L without guest flow is incomplete. Each week, queue one WhatsApp win-back or call list for guests who have not visited in 45–90 days but spent above your median ticket. Opt-in only; segment by last service category.",
      },
      {
        heading: "Downloadable weekly template",
        body: "Track these five rows per branch every Sunday morning:",
        bullets: [
          "Revenue (₹) vs 4-week avg (%)",
          "Discount rate (%) vs network avg",
          "Salary + product cost (%) vs target band",
          "Rank vs other branches (1–N)",
          "One coaching action + one retention action",
        ],
      },
    ],
    cta: "Want branch P&L and Market Pulse in one owner view? Book a growth audit.",
  },
  "salon-attendance-guide": {
    slug: "salon-attendance-guide",
    type: "Guide",
    title: "Salon staff attendance guide for multi-branch chains",
    seoTitle: "Salon staff attendance & geofencing guide for chains in India",
    seoDescription:
      "How multi-branch salon operators reduce buddy punching, review late arrivals before payroll, and build attendance trust without expensive biometric hardware.",
    readMinutes: 7,
    lede:
      "Attendance disputes destroy manager time and payroll trust. Whether you run one branch or many, the goal is verifiable punches managers can review weekly — not a surveillance programme that staff resent.",
    sections: [
      {
        heading: "What goes wrong with paper and honour systems",
        body:
          "Paper registers and WhatsApp “I’m in” messages work until you scale past two branches. Buddy punches, late arrivals smoothed at month-end, and missing exit punches show up as salary leakage and unfair stylist commissions.",
      },
      {
        heading: "Minimum viable attendance integrity",
        body:
          "You do not need enterprise biometric gates on day one. A practical baseline for Indian salons includes:",
        bullets: [
          "Selfie capture at punch-in (front camera on branch tablet)",
          "GPS distance to branch with a configurable geofence radius",
          "Inside / outside flag managers review in a daily exception log",
          "Leave request → approve / reject workflow tied to the same app",
        ],
      },
      {
        heading: "Geofence radius — practical defaults",
        body:
          "Mall and high-street salons differ. Start with 80–150 metres in dense urban areas; test with managers for a week before payroll goes live. Document exceptions (supplier deliveries, bank runs) instead of disabling the fence.",
      },
      {
        heading: "Weekly review rhythm (15 minutes per branch)",
        body: "Branch leads should scan three lists every Monday:",
        bullets: [
          "Late arrivals beyond your grace period (e.g. 10 minutes)",
          "Punches flagged outside geofence",
          "Missing exit punches on closing shifts",
        ],
      },
      {
        heading: "Connect attendance to economics",
        body:
          "Attendance integrity matters because salary is often 40%+ of branch revenue. When punches connect to payroll signals and stylist line items on bills, commissions stay fair and owners see people cost in branch P&L — not a separate HR mystery.",
      },
      {
        heading: "What to tell staff on day one",
        body:
          "Transparency beats stealth. Explain that photo + location evidence protects honest stylists, speeds leave approvals, and replaces Sunday arguments. Managers punch on shared branch devices — not personal surveillance apps.",
      },
    ],
    cta: "See geofenced selfie attendance on salon tablets — book a growth audit.",
  },
  "whatsapp-winback-playbook": {
    slug: "whatsapp-winback-playbook",
    type: "Playbook",
    title: "WhatsApp win-back playbook for salon chains",
    seoTitle: "WhatsApp win-back marketing playbook for Indian salon chains",
    seoDescription:
      "Opt-in WhatsApp win-back sequences for salon chains: segment by visit gap and spend, respect TRAI/DPDP consent, and fill empty chairs without spamming.",
    readMinutes: 6,
    lede:
      "WhatsApp is where your guests already are. Win-backs work when they come from the same CRM graph as billing — visit history, spend, last service — and when opt-in is explicit. This playbook is for multi-branch salon operators in India.",
    sections: [
      {
        heading: "Start with consent, not CSV uploads",
        body:
          "Only message guests who opted in at billing or booking. Store consent timestamp and channel. If you migrate from spreadsheets, run a one-time opt-in campaign before promotional sequences.",
      },
      {
        heading: "Segmentation that actually fills chairs",
        body: "Build audiences on two axes — recency and value:",
        bullets: [
          "45–60 days since last visit, spend above median ticket (high intent)",
          "90+ days quiet, previously monthly regulars (win-back priority)",
          "Last service category match (colour, keratin, nail) for offer relevance",
          "Exclude guests with open complaints or active bookings",
        ],
      },
      {
        heading: "Three-touch sequence (14 days)",
        body: "Keep copy short. Local language is fine; clarity beats cleverness.",
        bullets: [
          "Day 0 — Soft check-in: “We miss you at {branch}. Reply YES for this month’s slots.”",
          "Day 4 — Value tie-in: offer linked to last service (not a generic 50% off)",
          "Day 10 — Scarcity with respect: weekday slots only; protect weekend capacity",
        ],
      },
      {
        heading: "Branch vs brand sends",
        body:
          "Chains with strong local managers perform better with branch sender names guests recognise. Brand-level sends work for network-wide launches. Either way, deep-link to booking or reply-to-desk workflows — not a dead landing page.",
      },
      {
        heading: "Measure what owners care about",
        body: "Track per campaign:",
        bullets: [
          "Delivered / read (where WhatsApp Business API exposes it)",
          "Replies and bookings attributed within 7 days",
          "Revenue per win-back visit vs discount cost",
          "Opt-out rate — if >2%, tighten targeting",
        ],
      },
      {
        heading: "Common mistakes",
        body:
          "Blasting entire databases, discounting premium services blindly, and sending on Sunday mornings. Run campaigns Tuesday–Thursday 10am–1pm in the guest’s city; cap frequency to one sequence per 60 days unless they re-engage.",
      },
    ],
    cta: "WhatsApp campaigns from your guest CRM are included on Antrahq Growth — book a growth audit to see audience preview live.",
  },
  "salon-management-platform-india": {
    slug: "salon-management-platform-india",
    type: "Guide",
    title: "What is a salon management platform? India buyer guide",
    seoTitle: "Salon management platform India — buyer guide for chains",
    seoDescription:
      "What a salon management platform includes vs basic POS: GST billing, CRM, attendance, multi-branch P&L, and WhatsApp — how Indian chains should shortlist.",
    readMinutes: 9,
    lede:
      "Buyers searching for a salon management platform in India are usually past pure appointment apps. They need one system that runs the desk and gives owners branch economics — without enterprise bloat or marketplace commissions.",
    sections: [
      {
        heading: "Salon POS vs salon management platform",
        body:
          "POS closes a bill. A salon management platform connects that bill to guest CRM, stylist accountability, inventory, attendance, WhatsApp retention, and branch P&L. If you only need appointments for one outlet, a lighter tool may be enough. If you are comparing outlets — or plan to — you need a platform.",
      },
      {
        heading: "Must-have modules for Indian salon chains",
        body: "When shortlisting a salon management platform, insist on these India-specific capabilities:",
        bullets: [
          "Walk-in GST billing with branch GSTIN, CGST/SGST, and PDF invoices",
          "UPI + card + cash in one desk flow",
          "Phone-first guest CRM tied to every visit",
          "Verified attendance (selfie + geofence) before payroll",
          "WhatsApp receipts and opt-in win-back campaigns",
          "Multi-branch P&L and ranking — not only store-level reports",
        ],
      },
      {
        heading: "Who should buy a platform (not a single-outlet app)",
        body:
          "Founders and ops heads running — or planning — more than one location; finance leaders tired of Sunday Excel merges; brands that want Local Google visibility and review recovery next to desk ops. Single-chair studios can start lighter and upgrade when branch two is real.",
      },
      {
        heading: "How Antrahq fits",
        body:
          "Antrahq is built as a salon and spa management platform for India: desk POS and GST, owner P&L, Market Pulse, Local Spotlight, and Customer voice in one product with public ₹/branch pricing. Validate against your shortlist in a live growth audit — not a slide deck.",
      },
      {
        heading: "Next steps for buyers",
        body: "Map your must-haves, then compare pages (Zenoti / MioSalon / Salonist), run the branch health score, and book a 30-minute audit with your branch count and GST setup.",
      },
    ],
    cta: "See Antrahq as your salon management platform — book a growth audit.",
  },
  "spa-management-platform": {
    slug: "spa-management-platform",
    type: "Guide",
    title: "Spa management platform guide for multi-location wellness",
    seoTitle: "Spa management platform for multi-location wellness centres in India",
    seoDescription:
      "What spa operators need from a spa management platform: longer treatments, therapist schedules, room utilisation, GST billing, and owner P&L across outlets.",
    readMinutes: 8,
    lede:
      "A spa management platform must respect longer treatments, therapist schedules, and room economics — while still delivering India GST billing and multi-outlet P&L. This guide is for wellness centres and spa chains evaluating software in India.",
    sections: [
      {
        heading: "How spa ops differ from hair salons",
        body:
          "Spa visits run longer, therapists rotate rooms, and packages matter more than walk-in colour tickets. Your platform should still bill GST cleanly — but scheduling, attendance, and contribution by treatment type become the real coaching levers.",
      },
      {
        heading: "Core capabilities of a spa management platform",
        body:
          "Shortlist platforms that cover the spa floor and the India desk in one system — not a booking widget bolted onto spreadsheets.",
        bullets: [
          "Treatment menus with therapist assignment on every line",
          "GST invoices and WhatsApp receipts guests expect",
          "Attendance integrity for therapists across shifts",
          "Inventory of oils, linens, and retail without Excel",
          "Branch / centre P&L so owners see which outlet earns",
          "Guest CRM for package renewals and win-backs",
        ],
      },
      {
        heading: "Multi-location spa chains — what breaks first",
        body:
          "Centre-level spreadsheets hide therapist overtime, product shrink, and empty rooms. A spa management platform should rank centres the way salon platforms rank branches — with the same morning owner view across the network.",
      },
      {
        heading: "Where Antrahq helps spa operators",
        body:
          "Antrahq covers spa and wellness formats with the same India desk stack (GST, WhatsApp, geofenced attendance) and owner intelligence (branch P&L, Market Pulse, reviews). Longer treatment workflows still map to services + therapist line items managers already understand.",
      },
    ],
    cta: "Evaluate Antrahq as your spa management platform — book a growth audit.",
  },
  "choose-salon-software-india": {
    slug: "choose-salon-software-india",
    type: "Guide",
    title: "How to choose salon management software for Indian chains",
    seoTitle: "How to choose salon management software / platform in India",
    seoDescription:
      "Evaluation checklist for salon management software in India: GST depth, WhatsApp, multi-branch P&L, attendance, pricing transparency, and rollout time for chains.",
    readMinutes: 10,
    lede:
      "Choosing salon management software in India is less about feature checklists and more about desk reality + owner truth. Use this scorecard when you compare platforms for one branch or many.",
    sections: [
      {
        heading: "1. GST and payments — non-negotiable",
        body:
          "Ask for a live walk-in: guest → services → GST preview → UPI/cash/card → WhatsApp PDF. If GSTIN is brand-only and not per branch, mid-market chains will struggle at audit time.",
      },
      {
        heading: "2. Multi-branch economics",
        body:
          "Demand comparable P&L by outlet (salary, rent, product). “Reports” that export to Excel are not the same as a morning coaching view. Rank branches; do not drown in charts.",
      },
      {
        heading: "3. People and payroll trust",
        body:
          "Buddy punching and late exits leak salary. Prefer selfie + geofence attendance managers can review weekly — without forcing biometric hardware on day one.",
      },
      {
        heading: "4. Retention without spam",
        body:
          "WhatsApp win-backs should use visit gap and spend from the same CRM as billing, with explicit opt-in. Metered messaging add-ons are fine; dark-pattern blasts are not.",
      },
      {
        heading: "5. Pricing and rollout honesty",
        body:
          "Prefer published ₹/branch pricing and days-to-first-bill rollouts for mid-market chains. Enterprise suites can win for complex franchises — but only if you truly need that weight.",
      },
      {
        heading: "Scorecard template",
        body: "Score each vendor Y/N (or 1–5) before demos end — and insist on written answers for anything marked No:",
        bullets: [
          "GST walk-in demo passed (Y/N)",
          "Branch P&L live without Excel (Y/N)",
          "Attendance evidence before payroll (Y/N)",
          "WhatsApp from CRM opt-in (Y/N)",
          "Public or clear per-branch price (Y/N)",
          "Go-live timeline in writing (days/weeks)",
        ],
      },
    ],
    cta: "Use this checklist in an Antrahq growth audit — bring your branch count and GST setup.",
  },
  "multi-branch-salon-platform": {
    slug: "multi-branch-salon-platform",
    type: "Guide",
    title: "Multi-branch salon platform checklist",
    seoTitle: "Multi-branch salon management platform checklist for India",
    seoDescription:
      "Checklist for choosing a multi-branch salon management platform: brand admin, GSTINs, geofences, manager PWAs, comparable P&L, and coaching signals.",
    readMinutes: 7,
    lede:
      "Opening branch three through twenty fails when each outlet invents its own Excel. A multi-branch salon platform standardises the desk and gives owners one scoreboard.",
    sections: [
      {
        heading: "Before you buy — operations prerequisites",
        body:
          "Software cannot invent shared catalogues or GSTINs. Align these operations prerequisites before you sign:",
        bullets: [
          "Shared service catalog and pricing rules",
          "Named managers per outlet with clear RBAC",
          "Branch GSTINs and geofence addresses ready",
          "Agreement on salary and product cost categories for P&L",
        ],
      },
      {
        heading: "Platform capabilities that unlock scale",
        body:
          "Once prerequisites are ready, demand these multi-branch capabilities in the product — not as custom projects:",
        bullets: [
          "Brand admin that configures outlets once",
          "Identical walk-in and attendance apps on every tablet",
          "Comparable branch P&L and Market Pulse ranking",
          "Local Spotlight / reviews so Google presence scales with outlets",
          "Campaigns that segment guests across the network",
        ],
      },
      {
        heading: "Rollout sequence that works",
        body:
          "Day 1 tenant + GSTINs → Days 2–3 floor PWA training → Days 4–5 owner P&L and campaigns. Measure first-week bills, punch compliance, and one Sunday owner review — not a six-month transformation programme.",
      },
      {
        heading: "How Antrahq approaches multi-branch",
        body:
          "Antrahq is designed as a multi-branch salon and spa management platform with public Growth-tier pricing, geofenced attendance, and owner coaching views. Compare against enterprise suites if you need deep franchise complexity; otherwise validate speed-to-desk in a live audit.",
      },
    ],
    cta: "Walk a multi-branch rollout plan in an Antrahq growth audit.",
  },
  "salon-vs-spa-software": {
    slug: "salon-vs-spa-software",
    type: "Guide",
    title: "Salon vs spa software — what actually differs",
    seoTitle: "Salon vs spa management software / platform — India guide",
    seoDescription:
      "Salon vs spa management platform needs: walk-in colour desks vs longer treatments, therapist rooms, packages — and when one India platform covers both.",
    readMinutes: 6,
    lede:
      "Salon management software and spa management platforms share GST, CRM, and multi-outlet P&L — but the floor rhythm differs. Know what must change before you force one tool on both formats.",
    sections: [
      {
        heading: "What stays the same",
        body:
          "India GST invoicing, UPI collections, WhatsApp receipts, guest CRM, attendance integrity, inventory movements, and owner branch/centre P&L. These should be one platform language across salon and spa brands.",
      },
      {
        heading: "What differs on the floor",
        body:
          "Scheduling, utilisation, and package economics diverge even when billing and CRM stay the same:",
        bullets: [
          "Salons: walk-in heavy, stylist colour tickets, weekend peaks",
          "Spas: longer treatments, therapist + room utilisation, packages",
          "Salons optimise empty chairs; spas optimise room blocks and therapist load",
        ],
      },
      {
        heading: "When one platform is enough",
        body:
          "If both formats are under one brand admin, shared GST rules, and the same owner coaching cadence, a single salon & spa management platform reduces tool sprawl. Split systems only when clinical/medical spa workflows demand specialised compliance.",
      },
      {
        heading: "Antrahq positioning",
        body:
          "Antrahq markets to hair, beauty, spa, and growing brands on one India-ready stack. Use product pages for billing/POS/CRM and the spa guide for wellness-specific buyer questions — then confirm fit in a growth audit.",
      },
    ],
    cta: "Tell us your mix of salon vs spa outlets — book a growth audit.",
  },
};

export const resourceArticleList = Object.values(resourceArticles);
