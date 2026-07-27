# Antrahq Marketing Site

Public marketing website for **Antrahq** — independent multi-location ops platform for India (salon chains today; clinics, pharmacies, and more tomorrow).

Repo folder name remains `pravaah-marketing` for deployment continuity; all user-facing copy uses **Antrahq**.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Brand

- **Site:** `antrahq.com` (primary)
- **Email:** `hello@antrahq.com`
- **Tagline:** Every location in sync. Every day clearer.

## Deploy

See `.github/workflows/deploy.yml` — builds Docker image and triggers EC2 deploy via SSM.
