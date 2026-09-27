# SEO agent — action backlog

Prioritized queue for the recurring SEO agent. Each scheduled run should:

1. Read this file plus `TARGETS.md` and `LOG.md`.
2. Pick the **top 1-3 undone items** it can complete well in one run (don't half-finish
   an item to hit a count — a fully shipped item beats three started ones).
3. Do the work in `pravaah-marketing` following existing patterns (`src/lib/content.ts`,
   `src/lib/resource-articles.ts`, `src/lib/compare-pages.ts`) and existing tone/honesty
   conventions (factual comparisons, disclaimers on illustrative numbers, no fabricated
   reviews or stats).
4. Run `npm run build` (and `npm run lint`) before committing. If either fails, fix it or
   revert the change and log why — never leave `main` in a broken build state.
5. Commit and push to `main` (this repo auto-deploys `main` to production).
6. Mark the item `[x]` here with the date and commit hash, and add a `LOG.md` entry.
7. Append newly discovered gaps to this file instead of just fixing them ad hoc.

Items are ordered by expected impact for the "top 2 for salon/spa/nail-studio software"
goal, not by ease. Re-prioritize if a run's SERP check (see `TARGETS.md`) shows a
different query is more winnable.

## Content gaps (highest priority — nail studios are explicitly in scope and currently unaddressed)

- [ ] Add `/resources/nail-salon-software-india` guide (mirror the depth and structure of
      `spa-management-platform` and `best-salon-software-india-2026`) targeting "nail
      salon software", "nail studio software", "nail studio management software India".
- [ ] Add a nail-studio-specific angle to `VerticalsSection.tsx`'s "Beauty & nail studios"
      card linking to the new guide once it exists (mirrors how the spa card already
      links to `spa-management-platform`).
- [ ] Check whether `/solutions/[slug]` should gain a vertical-specific page for nail
      studios / spas (currently solutions are role-based: multi-branch, owners,
      managers — not vertical-based). Only add if it wouldn't cannibalize the resource
      guide's target query.

## Competitor comparison gaps

- [ ] Add `/compare/fresha` — Fresha is free/commission-based and shows up often in
      India studio searches; a fair comparison on total cost of ownership (commission
      vs subscription) and India-specific needs (GST, WhatsApp) is a clear opportunity.
- [ ] Add `/compare/vagaro` — similar rationale, global tool with India visibility.
- [ ] Evaluate `/compare/salon360`, `/compare/dingg`, `/compare/easysalon` — India-native
      competitors; only build if there's enough real differentiation to say something
      factual and non-generic (don't pad the compare-pages list with thin content).

## Technical / on-page SEO

- [ ] Audit every page's title + meta description length (Google truncates ~60 char
      titles / ~155-160 char descriptions) — fix any that are truncated or duplicated.
- [ ] Confirm every `/compare/*` and `/resources/*` page has unique, complete JSON-LD
      (the homepage has rich `@graph` schema per `src/app/layout.tsx`-equivalent for this
      repo — verify comparison/resource pages carry their own `Article`/`FAQPage`/
      `SoftwareApplication` schema, not just inherited site-wide schema).
- [ ] Check internal linking: does every resource guide and compare page link to at
      least 2-3 other relevant resource/compare/product pages? Orphaned pages rank worse.
- [ ] Verify `sitemap.ts` `lastModified` dates reflect actual last-changed dates per page
      (currently a single hardcoded date for everything — low priority but easy fix once
      other items are done).
- [ ] Run a Core Web Vitals / Lighthouse-style check on the homepage and top 3 landing
      pages (largest contentful paint, layout shift) — heavy motion/3D components
      (`Scene3DWrapper`, `Floating3DCards`) are worth checking for mobile performance
      impact since mobile-first indexing is what Google actually scores.

## Off-page / manual actions (agent cannot do these autonomously — surface, don't attempt)

These require account creation, business verification, or payment — out of scope for
autonomous action per the agent's operating rules. Log them here as standing
recommendations for the human owner, and don't repeat the same recommendation every run
once it's been surfaced twice — check `LOG.md` first.

- [ ] Google Business Profile listing(s) for Antrahq itself (not just the demo salon
      brands) if applicable — improves brand SERP presence.
- [ ] Listings on B2B software review/discovery sites that rank heavily for "best X
      software" queries: G2, Capterra, GetApp, SoftwareSuggest, TrustRadius, Crozdesk.
      These sites frequently occupy the exact SERP slots antrahq.com is competing for —
      being listed (and collecting a handful of genuine reviews) is often higher-leverage
      than another on-page change.
- [ ] Backlinks from legitimate, relevant sources (salon industry blogs, Indian SaaS
      directories, press coverage of funding/launches) — domain authority is a real
      ranking factor no amount of on-page work substitutes for.
- [ ] Connect a Search Console / GA4 service account, or an SEO-tool connector
      (OpenRush / Semrush / Ahrefs), so future runs work from real query and rank data
      instead of WebSearch sampling. See `TARGETS.md` for what changes once available.

## Completed

(Move finished items here with date + commit hash as they land, oldest first removed
if the list gets long — keep the last ~20 for history.)
