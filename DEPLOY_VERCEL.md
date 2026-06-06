# Deploying to Vercel

This is a **TanStack Start** app (SSR + Nitro). It is configured to build into a Vercel-compatible output via the Nitro `vercel` preset.

## One-time setup

1. Push the repo to GitHub and import it in Vercel.
2. Vercel reads `vercel.json` at the repo root and auto-detects the build:
   - `buildCommand`: `npm run build`
   - `installCommand`: `npm install --no-audit --no-fund --loglevel=error`
   - `outputDirectory`: `.vercel/output`
3. In **Project Settings → Environment Variables**, add (for **Production**, and optionally Preview):
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. (Optional) Set **Node.js Version** to 20.x in Project Settings → General.
5. Click **Deploy**.

## How it works

- `vite.config.ts` sets `nitro.preset = "vercel"`, which causes `npm run build` to produce `.vercel/output/` containing:
  - `functions/` — SSR + server-route lambdas
  - `static/` — pre-rendered and client assets
- `vercel.json` includes a catch-all rewrite so client routes (`/case-studies`, etc.) are served by the SSR function instead of 404ing on the static edge.

## Local sanity check

```bash
npm run build
ls .vercel/output
```

You should see `functions/` and `static/` after a successful build.

## Troubleshooting

- **`Cannot find module 'nitro/vite'`** — run `npm install` (Nitro is a devDependency).
- **Build succeeds locally but Vercel 404s on a route** — confirm the rewrite in `vercel.json` is present; Vercel otherwise serves the static `index.html` for unknown paths.
- **Emails not sending in production** — the EmailJS keys must be set in the Vercel dashboard (not just `.env`), prefixed with `VITE_` so Vite exposes them at build time.
