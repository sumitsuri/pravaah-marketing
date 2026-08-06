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
      "If you run three or more salon or spa branches, month-end should not be the first time you see which outlet leaked margin. This checklist is a weekly rhythm founders, ops heads, and finance leads can run in under thirty minutes — with or without software.",
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
      "Attendance disputes destroy manager time and payroll trust. For chains with 3–20 branches, the goal is verifiable punches managers can review weekly — not a surveillance programme that staff resent.",
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
};

export const resourceArticleList = Object.values(resourceArticles);
