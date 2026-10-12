/**
 * Depth content for /products/[slug] — who it's for, how it works, FAQs and related guides.
 * Keeps product pages substantive for search (and answer engines) without bloating content.ts.
 * Facts must match the product (see salon-platform PRODUCT_CONTEXT.md); no invented stats.
 */
export type ProductSeo = {
  forWho: string;
  steps: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  guides: string[]; // resource slugs
};

export const productSeo: Record<string, ProductSeo> = {
  billing: {
    forWho:
      "Salon, spa and beauty parlour front desks in India that bill walk-ins all day and need correct GST invoices without slowing the queue — from a single outlet to a multi-branch chain with a GSTIN per branch.",
    steps: [
      { title: "Find the guest", desc: "Type a phone number; returning guests appear with their visit history." },
      { title: "Add services and stylist", desc: "Pick services, assign the stylist on every line and apply any allowed discount." },
      { title: "Collect and send", desc: "Take cash, UPI or card. The GST invoice is generated and a PDF receipt goes to the guest on WhatsApp." },
    ],
    faqs: [
      { q: "Does AntraHQ salon billing generate GST invoices?", a: "Yes. Each branch has its own GSTIN, invoices split CGST and SGST, and invoice numbers are sequential per branch." },
      { q: "Can I send the bill to the customer on WhatsApp?", a: "Yes. After payment the guest receives a PDF invoice on WhatsApp, so you don't need to print or hand-write receipts." },
      { q: "Can discounts be controlled?", a: "Discounts and payment changes leave an audit trail that managers and owners can review, so unapproved discounts are visible." },
    ],
    guides: ["salon-billing-gst-software-india", "beauty-parlour-software-india", "salon-software-small-business-india"],
  },
  pos: {
    forWho:
      "Indian salons and spas that want a simple point-of-sale on a tablet or phone — UPI, card and cash in one flow — without buying separate POS hardware.",
    steps: [
      { title: "Open the floor app", desc: "Managers use the installable app on a salon tablet or phone at the desk." },
      { title: "Build the ticket", desc: "Add services, products and the stylist for each line; GST is previewed before payment." },
      { title: "Close the sale", desc: "Collect by UPI, card or cash; the sale updates guest history, branch revenue and the owner's P&L." },
    ],
    faqs: [
      { q: "Do I need special POS hardware?", a: "No. AntraHQ runs on the tablets and phones you already have; there's no proprietary terminal to buy." },
      { q: "Which payment modes are supported at the desk?", a: "Cash, UPI and card are recorded in the same walk-in flow." },
      { q: "Does the POS work for multiple branches?", a: "Yes. Every branch bills under its own GSTIN while the owner sees sales across all branches in one dashboard." },
    ],
    guides: ["salon-billing-gst-software-india", "best-salon-software-india-2026", "choose-salon-software-india"],
  },
  crm: {
    forWho:
      "Salon owners who want to know their guests — who visits, how often, what they spend — and use that to bring them back, without maintaining a separate spreadsheet or CRM tool.",
    steps: [
      { title: "Profiles build themselves", desc: "Every bill and booking adds to the guest's profile, keyed on their phone number." },
      { title: "See history at the desk", desc: "Managers see past services and spend before the service starts." },
      { title: "Act on segments", desc: "Filter guests by last visit and spend, then send a WhatsApp win-back from the same data." },
    ],
    faqs: [
      { q: "Is the salon CRM a separate product?", a: "No. Guest profiles are created from billing and bookings in AntraHQ, so there's no double entry." },
      { q: "Can I see guests who haven't visited recently?", a: "Yes. Filter by days since last visit and spend to find guests to win back." },
      { q: "Are enquiries captured?", a: "Public enquiries land in a leads queue your team can follow up the same day." },
    ],
    guides: ["whatsapp-winback-playbook", "salon-management-platform-india", "best-salon-software-india-2026"],
  },
  memberships: {
    forWho:
      "Salons and spas that sell memberships or service packages to lock in repeat visits — and want every sale credited to the staff member who closed it.",
    steps: [
      { title: "Set up plans", desc: "Create the memberships and service packages your branches sell." },
      { title: "Sell at the desk", desc: "Managers sell plans from the floor app; the selling staff member is credited for incentives." },
      { title: "Bring guests back", desc: "Optional visit scratch-card rewards at billing give guests another reason to return." },
    ],
    faqs: [
      { q: "Can staff earn incentives on memberships and packages?", a: "Yes. Every membership or package sale records the staff member who sold it, so incentives are fair and visible." },
      { q: "Are memberships linked to the guest profile?", a: "Yes. Plans sit on the same guest profile as bills and WhatsApp campaigns." },
      { q: "What are visit scratch cards?", a: "An optional reward a branch can switch on at billing — guests scratch a card for a prize, encouraging a repeat visit." },
    ],
    guides: ["whatsapp-winback-playbook", "nail-salon-software-india", "spa-management-platform", "salon-vs-spa-software"],
  },
  analytics: {
    forWho:
      "Owners, finance and operations heads of multi-branch salon and spa chains who need profit by branch — not just sales — to decide which outlet to coach this week.",
    steps: [
      { title: "Costs flow in", desc: "Salary, rent, product cost and daily branch expenses are recorded against each branch." },
      { title: "See branch P&L", desc: "Revenue minus costs per branch, with monthly targets and pace." },
      { title: "Rank and act", desc: "Market Pulse ranks branches and suggests where to focus." },
    ],
    faqs: [
      { q: "What does branch P&L include?", a: "Revenue against salary, rent, product cost and miscellaneous daily expenses for each branch." },
      { q: "Can managers see salaries?", a: "No. Salary views are restricted to owners; managers record daily branch expenses only." },
      { q: "Does it work for a single salon?", a: "Yes — but it's most valuable from two branches onward, when comparing outlets matters." },
    ],
    guides: ["multi-branch-pnl-checklist", "multi-branch-salon-platform", "salon-management-platform-india"],
  },
  staff: {
    forWho:
      "Salons and spas that pay staff on attendance and incentives and want punches they can verify — instead of paper registers or broken biometric devices.",
    steps: [
      { title: "Punch with selfie + GPS", desc: "Staff punch in on the branch device or their phone; the location is checked against the branch geofence." },
      { title: "Review exceptions", desc: "Late, outside-geofence and missing-exit punches are flagged for the manager." },
      { title: "Approve leave and track goals", desc: "Leave requests, sales, targets and incentives sit in the staff app." },
    ],
    faqs: [
      { q: "How does geofenced attendance work?", a: "Each punch records a selfie and GPS location, and AntraHQ checks whether it was inside the branch's configured radius." },
      { q: "Is there an app for staff?", a: "Yes. Staff have their own app for punches, leave, sales, goals and incentives, available in English and nine Indian languages." },
      { q: "Can managers approve leave?", a: "Yes. Leave requests are approved or rejected by the branch manager in the app." },
    ],
    guides: ["salon-attendance-guide", "multi-branch-salon-platform", "salon-software-hindi-regional-languages"],
  },
  attendance: {
    forWho:
      "Salons and spas that want verified selfie + GPS attendance before payroll.",
    steps: [
      { title: "Punch", desc: "Selfie + GPS punch checked against the branch geofence." },
      { title: "Flag", desc: "Late, outside and missing-exit punches are flagged." },
      { title: "Review", desc: "Managers review exceptions and leave before payroll." },
    ],
    faqs: [
      { q: "Is this the same as Staff & attendance?", a: "Yes — see the Staff & attendance page for the full module." },
    ],
    guides: ["salon-attendance-guide"],
  },
  campaigns: {
    forWho:
      "Salons that want regulars to come back more often and to fill quiet weekdays — using WhatsApp, where Indian guests actually read messages.",
    steps: [
      { title: "Pick an audience", desc: "Filter guests by days since last visit and spend." },
      { title: "Preview", desc: "See exactly how many opted-in guests will receive the message." },
      { title: "Send on WhatsApp", desc: "Campaigns go out through your WhatsApp Business provider account." },
    ],
    faqs: [
      { q: "Is WhatsApp marketing included in the price?", a: "Campaign tools are included on the Growth plan. Message delivery is billed by your WhatsApp Business provider at its rates." },
      { q: "Does it respect customer opt-in?", a: "Yes. Audiences include only guests who have opted in to WhatsApp messages." },
      { q: "What should a win-back message say?", a: "Keep it personal and timely — see our WhatsApp win-back playbook for audiences and examples." },
    ],
    guides: ["whatsapp-winback-playbook", "salon-software-small-business-india", "beauty-parlour-software-india"],
  },
  inventory: {
    forWho:
      "Salons and spas that lose money to untracked product — colour, keratin, retail stock — and want product cost to show up in branch profit.",
    steps: [
      { title: "Log movements", desc: "Managers record restock, usage, wastage and retail sales on the floor app." },
      { title: "Watch stock levels", desc: "Products below their minimum are flagged." },
      { title: "See the cost", desc: "Product cost flows into each branch's P&L automatically." },
    ],
    faqs: [
      { q: "Can I track product usage per service?", a: "Managers log usage, wastage and retail sales as they happen, so each branch has a movement trail." },
      { q: "Does inventory affect branch profit?", a: "Yes. Product cost feeds the branch P&L so owners see real margins." },
      { q: "Will I know when stock is low?", a: "Products below their minimum level are flagged for the branch." },
    ],
    guides: ["multi-branch-pnl-checklist", "nail-salon-software-india", "spa-management-platform"],
  },
  "local-spotlight": {
    forWho:
      "Salon brands that win most new guests from Google Maps and want to know how each branch ranks against salons nearby — and what to fix.",
    steps: [
      { title: "Connect your branches", desc: "Local Spotlight reads each branch's Google presence." },
      { title: "Benchmark", desc: "See a Local Visibility Score, estimated rank and rival salons within 1–5 km." },
      { title: "Follow the plan", desc: "Fix profile gaps, grow reviews and close keyword gaps branch by branch." },
    ],
    faqs: [
      { q: "What is a Local Visibility Score?", a: "A per-branch score combining Google rating, review count, profile completeness and estimated local search rank." },
      { q: "Does it find competitor salons?", a: "Yes. It discovers nearby rival salons from Google Places and compares your branch with them." },
      { q: "How do I improve my local rank?", a: "Complete your Google Business Profile, grow genuine reviews with Customer voice and close the keyword gaps it highlights." },
    ],
    guides: ["best-salon-software-india-2026", "multi-branch-salon-platform", "salon-management-platform-india"],
  },
  reviews: {
    forWho:
      "Salons that want more Google reviews from happy guests — and a chance to fix things privately before an unhappy guest posts publicly.",
    steps: [
      { title: "QR after payment", desc: "The guest scans a QR at the desk and rates the visit in about ten seconds." },
      { title: "Route the rating", desc: "4★ and 5★ guests can go to your Google review page; 1–3★ stays private." },
      { title: "Recover and learn", desc: "Owners see themes and open recovery cases in Customer voice." },
    ],
    faqs: [
      { q: "How do I get more Google reviews for my salon?", a: "Ask at the right moment — right after payment — with a QR that takes happy guests straight to your Google review page." },
      { q: "What happens to low ratings?", a: "1–3★ ratings stay private and open a recovery case so the team can follow up." },
      { q: "Which categories do guests rate?", a: "Overall, plus service, ambience, staff, cleanliness and value." },
    ],
    guides: ["best-salon-software-india-2026", "salon-management-platform-india", "beauty-parlour-software-india"],
  },
  "online-booking": {
    forWho:
      "Salons and spas that want guests to book any time — including after closing — from a link they can share on WhatsApp, Instagram and Google.",
    steps: [
      { title: "Share your booking link", desc: "Each brand and branch gets an online booking page." },
      { title: "Guests pick service and time", desc: "Guests choose the branch, services and a slot." },
      { title: "Confirmed automatically", desc: "The booking lands in the branch's bookings list and the guest gets a WhatsApp confirmation if they've opted in." },
    ],
    faqs: [
      { q: "Can customers book salon appointments online?", a: "Yes. Guests book from your AntraHQ booking page, any time of day." },
      { q: "Where do online bookings show up?", a: "In the branch's bookings list in the manager app, alongside walk-ins." },
      { q: "Do guests get a confirmation?", a: "Yes — a WhatsApp confirmation is sent for guests who have opted in to WhatsApp messages." },
    ],
    guides: ["best-salon-software-india-2026", "salon-vs-spa-software", "salon-software-small-business-india", "choose-salon-software-india"],
  },
};
