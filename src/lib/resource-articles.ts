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
  faqs?: { q: string; a: string }[];
};

export const resourceArticles: Record<string, ResourceArticle> = {
  "best-salon-software-india-2026": {
    slug: "best-salon-software-india-2026",
    type: "Guide",
    title: "Best salon management software in India (2026)",
    seoTitle: "Best salon management software in India 2026 — buyer ranking",
    seoDescription:
      "Best salon software in India 2026: how to rank Zenoti, MioSalon, Salonist, Antrahq and others for GST billing, WhatsApp, multi-branch P&L, and rollout speed.",
    readMinutes: 12,
    lede:
      "Searching for the best salon management software in India usually means you need GST-ready billing, WhatsApp, and either a simple desk app or a true multi-branch platform. This 2026 guide ranks options by buyer type — not a paid #1 badge — so founders and ops heads can shortlist honestly.",
    sections: [
      {
        heading: "How we ranked salon software for India in 2026",
        body: "We scored platforms on criteria Indian salon and spa operators actually buy on:",
        bullets: [
          "GST walk-in billing with UPI/cash/card and PDF invoices",
          "WhatsApp receipts and opt-in retention (not SMS-only)",
          "Multi-branch P&L / comparable outlet reporting",
          "Attendance integrity before payroll",
          "Published or clear ₹ pricing and days-to-go-live",
          "Fit for single outlet vs growing chains",
        ],
      },
      {
        heading: "Quick picks — best salon software by buyer type",
        body: "Use this table-of-intent before deep-diving vendors:",
        bullets: [
          "Best for multi-branch mid-market India chains: Antrahq — public ₹/branch pricing, GST desk, WhatsApp, geofenced attendance, branch P&L",
          "Best for large enterprise / franchise complexity: Zenoti — deepest global suite; longer rollout and higher cost band",
          "Best for established mid-market cloud suites: MioSalon or Salonist — strong India presence; validate multi-branch P&L depth in a live demo",
          "Best for budget single-outlet experiments: lighter POS/booking tools — upgrade when branch two is real",
        ],
      },
      {
        heading: "1. Antrahq — best salon & spa management platform for growing Indian chains",
        body:
          "Antrahq is built as a salon and spa management platform for India: walk-in GST billing, POS, CRM, inventory, staff attendance, WhatsApp campaigns, Local Spotlight, guest reviews, and owner branch P&L in one product. Ideal when you run — or plan — more than one outlet and want coaching views without an enterprise programme. See pricing on antrahq.com/pricing and validate in a growth audit.",
      },
      {
        heading: "2. Zenoti — best enterprise salon management software",
        body:
          "Zenoti leads for large multi-country chains that need deep franchise workflows, mature marketing automation, and a long-term platform budget. For mid-market Indian brands that need go-live in days and transparent per-branch pricing, compare carefully — see Antrahq vs Zenoti.",
      },
      {
        heading: "3. MioSalon — strong all-in-one for Indian salons",
        body:
          "MioSalon is a well-known India cloud suite for appointments, billing, and operations. Shortlist it when you want a proven mid-market brand. Pressure-test GSTIN-per-branch, WhatsApp depth, and comparable multi-outlet P&L in a demo — then contrast with Antrahq vs MioSalon.",
      },
      {
        heading: "4. Salonist — popular salon software for growing studios",
        body:
          "Salonist serves many Indian salons with booking, billing, and CRM-style flows. Good evaluation candidate for single to few outlets. Confirm multi-branch economics and attendance evidence before you standardise a chain — see Antrahq vs Salonist.",
      },
      {
        heading: "5. Other India options worth a glance",
        body:
          "Salon360, JHD, Dingg, EasySalon, Zylu, and Invoay appear often in Indian “best salon software” SERPs. Treat them as segment-specific: some win on price, some on longevity, some on WhatsApp automation. Always run the same GST walk-in + multi-branch scorecard.",
      },
      {
        heading: "Salon software vs salon management platform",
        body:
          "“Salon software” on Google often means booking + billing. A salon management platform connects the desk to CRM, attendance, inventory, WhatsApp, and branch P&L. If you only need appointments for one parlour, a lighter tool may suffice. If you compare outlets weekly, buy a platform.",
      },
      {
        heading: "Must-have checklist before you buy",
        body: "Print this for every demo:",
        bullets: [
          "Live walk-in: guest → services → GST preview → UPI → WhatsApp PDF",
          "Branch GSTIN support (not brand-only) if you have multiple outlets",
          "Comparable P&L by outlet without Excel merges",
          "Attendance evidence managers can review before payroll",
          "Clear ₹/month or ₹/branch price and written go-live timeline",
        ],
      },
      {
        heading: "How to choose in one week",
        body:
          "Day 1–2: score vendors on the checklist. Day 3: watch two live demos with your real service menu. Day 4: call two reference customers in your city tier. Day 5: book a growth audit or pilot on your hardest branch. Avoid six-month “transformation” decks for a mid-market chain.",
      },
    ],
    cta: "Shortlisting the best salon management software in India for your chain? Book a 30-minute Antrahq growth audit with your branch count and GST setup.",
    faqs: [
      {
        q: "What is the best salon management software in India in 2026?",
        a: "It depends on scale. Multi-branch mid-market chains often fit Antrahq; large enterprise franchises may need Zenoti; single outlets can start with lighter India suites. Rank vendors on GST, WhatsApp, multi-branch P&L, and go-live time.",
      },
      {
        q: "What is the difference between salon software and a salon management platform?",
        a: "Salon software often means booking and billing. A salon management platform also connects CRM, attendance, inventory, WhatsApp retention, and branch profitability so owners coach outlets from one view.",
      },
      {
        q: "How much does salon software cost in India?",
        a: "Expect a wide band: lighter tools from a few hundred rupees per month, mid-market platforms typically priced per branch, and enterprise suites significantly higher with implementation. Prefer published ₹/branch pricing where available.",
      },
      {
        q: "Does salon software in India need GST billing?",
        a: "Yes for most registered salons and spas. Insist on CGST/SGST invoices, branch GSTIN where relevant, and PDF/WhatsApp delivery from the same desk flow.",
      },
    ],
  },
  "salon-billing-gst-software-india": {
    slug: "salon-billing-gst-software-india",
    type: "Guide",
    title: "Salon billing & GST software in India — buyer guide",
    seoTitle: "Salon billing & GST software India — POS invoicing guide",
    seoDescription:
      "Salon billing software India with GST: walk-in POS, CGST/SGST invoices, UPI/cash/card, WhatsApp PDF receipts, and multi-branch GSTIN tips for chains.",
    readMinutes: 8,
    lede:
      "Salon billing software in India is not just “print a receipt.” Buyers need GST-correct invoices, fast UPI collection, and a desk flow stylists will actually use on Saturday peaks — ideally inside a broader salon management platform.",
    sections: [
      {
        heading: "What salon billing / POS software must do in India",
        body: "Non-negotiables for Indian salon and spa desks:",
        bullets: [
          "GST invoice with taxable value, CGST/SGST (or IGST), and invoice number series",
          "Branch-level GSTIN when outlets are separately registered",
          "Cash + UPI + card on one bill with clear tender split",
          "Stylist assignment on service lines for commission truth",
          "WhatsApp or PDF receipt the guest can keep",
          "Discount/void audit trail for managers",
        ],
      },
      {
        heading: "Billing-only tools vs salon management platform",
        body:
          "A pure billing app closes the sale. A salon management platform ties that sale to guest CRM, inventory deduction, attendance, and branch P&L. If you only need invoices for one parlour, billing-first tools can work. If you run a chain, billing without P&L recreates Sunday Excel.",
      },
      {
        heading: "Walk-in billing flow that survives Saturday rush",
        body:
          "Find guest by phone → add services with stylists → preview GST → collect tenders → send WhatsApp PDF. Train managers to finish a bill in under two minutes. Anything slower gets bypassed with handwritten notes.",
      },
      {
        heading: "Multi-branch GST pitfalls",
        body:
          "Brand-level GSTIN with outlet-level cash collection creates audit pain. Confirm how software maps invoice series per branch, how credit notes work, and whether reports reconcile collections to GST liability without a CA spreadsheet every month.",
      },
      {
        heading: "How Antrahq handles salon billing & GST",
        body:
          "Antrahq billing is built for Indian walk-ins inside the full platform: GST preview, tenders, WhatsApp receipts, and owner-visible discounts — then the same bill feeds CRM and branch economics. Explore the billing product page and book a growth audit to watch a live walk-in.",
      },
    ],
    cta: "Need GST-ready salon billing inside a multi-branch platform? Book an Antrahq growth audit.",
    faqs: [
      {
        q: "What is the best salon billing software in India?",
        a: "The best fit includes GST invoices, UPI/cash/card, stylist lines, and WhatsApp receipts. For chains, prefer billing inside a salon management platform so P&L and CRM stay connected.",
      },
      {
        q: "Does salon POS software need GST?",
        a: "Registered salons and spas generally need GST-compliant tax invoices. Verify CGST/SGST breakdown and invoice series in a live demo before you buy.",
      },
    ],
  },
  "beauty-parlour-software-india": {
    slug: "beauty-parlour-software-india",
    type: "Guide",
    title: "Beauty parlour software in India — what to buy in 2026",
    seoTitle: "Beauty parlour software India — management & billing guide 2026",
    seoDescription:
      "Beauty parlour software in India: GST billing, appointments, staff, WhatsApp, and when parlour owners should upgrade to a salon management platform.",
    readMinutes: 7,
    lede:
      "“Beauty parlour software” is how many Indian owners search for salon management tools. The job is the same: bill correctly, remember guests, and know which services and staff make money — whether you say parlour or salon.",
    sections: [
      {
        heading: "What beauty parlour software usually includes",
        body: "Typical modules parlour owners evaluate:",
        bullets: [
          "Appointment book + walk-in billing",
          "GST invoices and digital payments",
          "Customer history (phone-first)",
          "Staff / beautician assignment",
          "Simple inventory for colour and retail",
          "SMS or WhatsApp reminders",
        ],
      },
      {
        heading: "Parlour vs chain — when software requirements jump",
        body:
          "A single beauty parlour can run on a light app. The moment you open a second outlet — or want weekly profit by chair — you need multi-branch reporting, attendance trust, and standardised menus. That is the jump from parlour software to a salon management platform.",
      },
      {
        heading: "India-specific buying tips",
        body:
          "Prefer WhatsApp over SMS-only, UPI at the desk, Hindi/English staff training materials, and local support hours. Ask for a live GST walk-in demo with your actual service menu (facials, cleanup, hair colour, bridal packages).",
      },
      {
        heading: "Where Antrahq fits parlour brands that are scaling",
        body:
          "Antrahq serves hair, beauty, and spa formats on one India stack. Solo parlours evaluating first software can still learn from the checklist — growing brands with multiple parlours should book a growth audit to see branch P&L and desk billing together.",
      },
    ],
    cta: "Running one or more beauty parlours? See if Antrahq fits — book a growth audit.",
    faqs: [
      {
        q: "What is the best beauty parlour software in India?",
        a: "Look for GST billing, WhatsApp, guest history, and staff assignment. Single parlours can use lighter tools; multi-outlet brands should shortlist a salon management platform with branch P&L.",
      },
      {
        q: "Is beauty parlour software the same as salon software?",
        a: "Yes in practice — Google shows overlapping results. “Parlour” is common India vernacular; “salon management software” is the broader category term.",
      },
    ],
  },
  "salon-software-small-business-india": {
    slug: "salon-software-small-business-india",
    type: "Guide",
    title: "Salon software for small business in India",
    seoTitle: "Salon software for small business & small salons in India",
    seoDescription:
      "Best salon software for small business in India: what single-outlet salons need vs when to upgrade to a multi-branch salon management platform.",
    readMinutes: 7,
    lede:
      "Owners searching for salon software for small business in India usually want something staff can learn in a day: bookings or walk-ins, GST bills, and guest phone numbers. This guide separates “small salon now” needs from “branch two soon” needs.",
    sections: [
      {
        heading: "Must-haves for a small salon or studio",
        bullets: [
          "Fast billing with GST",
          "Guest phone book with last visit",
          "Basic appointment or token queue",
          "Simple staff sales view",
          "Affordable monthly price without hidden seats",
        ],
        body: "Keep the first stack thin so the desk adopts it.",
      },
      {
        heading: "When small-business software becomes a trap",
        body:
          "If you plan a second outlet in 12 months, buying a dead-end single-store tool forces a painful migration later. Prefer vendors that sell a clear upgrade path to multi-branch P&L, attendance, and campaigns — even if you start on one branch.",
      },
      {
        heading: "Small salon vs multi-branch platform",
        body:
          "Small salon software optimises the desk. A multi-branch salon management platform optimises the network. Antrahq is aimed at operators who care about outlet comparison — including ambitious single-branch owners who already think like a chain.",
      },
      {
        heading: "Practical next step",
        body:
          "Run the branch health score and the choose-salon-software checklist. If multi-branch signals matter, book an Antrahq growth audit; if you are truly one chair forever, a lighter India POS may be enough.",
      },
    ],
    cta: "Small today, chain tomorrow? Map your path in an Antrahq growth audit.",
    faqs: [
      {
        q: "What is the best salon software for a small salon in India?",
        a: "Prioritise easy GST billing, guest CRM by phone, and price clarity. If you expect a second branch, shortlist platforms with multi-outlet reporting from day one.",
      },
      {
        q: "Is free salon software in India good enough?",
        a: "Free tools help you learn habits, but GST depth, WhatsApp, and support are often limited. Budget for a paid plan before Saturday peak season.",
      },
    ],
  },
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
