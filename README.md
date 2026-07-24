# Pravaah Marketing Site

Public marketing website for **Pravaah** — independent multi-branch salon operations SaaS for India.

This repository is separate from any consumer salon brand marketing site.

## Run locally

```bash
npm install
npm run dev   # http://localhost:3010
```

## Production

Pushes to `main` build an ARM64 Docker image, push to ECR (`salon-platform-prod-marketing`), and deploy via SSM (`deploy.sh marketing`). Serves on the production host root path (port 3001 behind nginx).

## Site map

| Route | Purpose |
|-------|---------|
| `/` | Homepage |
| `/solutions/*` | Multi-branch · Owners · Managers |
| `/products/*` | Billing · Analytics · Attendance · Campaigns · Inventory |
| `/customers` | Stories |
| `/resources` | Guides & comparisons |
| `/roi-calculator` | Opportunity model |
| `/pricing` | Plans |
| `/demo` | Demo request |

## Stack

Next.js 16 · React 19 · Tailwind 3 · Framer Motion
