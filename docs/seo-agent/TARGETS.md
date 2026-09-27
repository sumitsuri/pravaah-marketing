# SEO agent — target queries & competitor set

This file is the fixed reference the recurring SEO agent (see `docs/seo-agent/BACKLOG.md`
and the `antrahq-seo-agent` scheduled task) scores itself against. Update it when the
business's positioning changes; otherwise treat it as stable across runs.

## Goal

Get antrahq.com ranking organically in the **top 2** for buyer-intent queries a salon,
spa, or nail-studio owner in India would type when shopping for management software —
across Google's normal organic results (not just paid).

Ranking itself is not fully controllable by code changes alone — it depends on Google's
crawl/index timeline, backlink profile, and domain authority alongside on-page quality.
This file scopes what's being tracked; `BACKLOG.md` scopes what's being *done* about it.

## Primary target queries (India intent, buyer-stage)

- best salon management software India
- salon management software
- salon software India
- spa management software
- spa software India
- nail salon software
- nail studio software / nail studio management software
- best software for salon business
- salon POS software India
- salon billing software GST
- multi-branch salon software
- salon CRM software India
- beauty parlour software India
- salon appointment software India
- salon software for small business India
- best salon software 2026 (evergreen year-rolling variant — update year annually)

## Secondary / long-tail (high buyer-intent, lower volume)

- salon software with WhatsApp
- salon software with GST invoice
- salon attendance software India
- multi-branch salon P&L software
- salon software vs spa software
- how to choose salon software India
- [competitor] alternative (see below)
- [competitor] vs Antrahq

## Named competitors to track and, where it's a fair fit, build `/compare/<slug>` pages for

**India-focused (highest priority — most direct competitive overlap):**
Zenoti, MioSalon, Salonist, Salon360, Dingg, EasySalon, Zylu, Invoay, JHD, Marg ERP,
Refrens, Insta Salon

**Global tools that show up in India SERPs for salon/spa/nail queries:**
Fresha, Vagaro, Booksy, GlossGenius, Mindbody, Setmore, Salon Iris, Timely, Wellyx,
Phorest, Kitomba, Square Appointments, Rosy Salon Software, Schedulicity

Existing compare pages (as of this file's creation): `zenoti`, `miosalon`, `salonist`.
Everything else above is a backlog candidate — see `BACKLOG.md`.

## Vertical coverage to check every run

The homepage messaging covers four verticals (Hair & unisex salons, Beauty & nail
studios, Spa & wellness centres, Growing salon brands) but as of this file's creation
only spa has a dedicated deep resource guide (`spa-management-platform`). Nail studios
have no dedicated `/resources/` guide or comparison content despite being named
explicitly in the product's own positioning — this is a standing gap until closed.

## How to check standing (no paid API required)

Without Search Console/GA4/Ahrefs/Semrush/OpenRush access connected, use `WebSearch`
each run for a rotating sample (5-8) of the primary queries above, restricted to
India context where possible, and note in `LOG.md`:
- Whether antrahq.com appears at all, and at roughly what position
- Which competitors appear above it
- Whether a SERP feature (People Also Ask, featured snippet, "best X" listicle from a
  third party like G2/Capterra/SoftwareSuggest) is occupying a top slot instead

If a Search Console, GA4, or SEO-tool (OpenRush/Semrush/Ahrefs) connector becomes
available in a future run, prefer its real data over WebSearch sampling and note the
switch in `LOG.md`.
