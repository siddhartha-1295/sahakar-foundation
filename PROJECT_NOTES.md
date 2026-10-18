# Sahakar Foundation Website: Project Notes

## Decisions
- Astro static site, Decap CMS (GitHub backend) at /admin, Netlify free plan.
- English at `/`, Telugu at `/te/`. One view per page in `src/views/`; `src/pages/` holds thin wrappers only.
- All UI text lives in `src/i18n.ts` (`ui.en`, `ui.te`). Editable data lives in `src/data/*.json` and `src/content/*`.
- No `trailingSlash` setting in astro.config.mjs (default), so `/about` and `/about/` both work.
- Colours: cream #fffaf2, saffron #d9661f, maroon #7a1f2b, green #2f5d50. Fonts: Poppins, Noto Sans, Noto Sans Telugu.
- Area keys: education, necessities, cleanliness, medicine, awareness, dharma.
- The "Work" page is `/work` (the brief's table had a garbled URL there).
- Brevo API key goes in Netlify environment variables only. PAN is never emailed.
- PAN field on the receipt form appears only when `show_80g` is true in donate.json. Note: Netlify stores form submissions in its dashboard.

## Diagnosis of the 404s
- Only `src/pages/index.astro` and `src/pages/te/index.astro` existed. Every nav link pointed to a page file that had not been created yet.
- Fix: all page files now exist (see URL list below).

## URLs (each in English and under /te/)
/, /about, /work, /updates, /updates/[slug], /gallery, /gallery/[slug], /events, /get-involved, /donate,
/transparency, /contact, /thanks, /thanks-donation, /privacy, /terms, /refund. English only: /poster. Admin: /admin/index.html (local), /admin/ (live).

## Placeholders to replace
- `src/data/settings.json`: WhatsApp number, phone, email, address, site_url, team, impact numbers, whatsapp_group.
- `src/data/donate.json`: UPI id (empty = sample QR stamp), bank details, Razorpay button id.
- `astro.config.mjs` and `public/admin/config.yml`: site URL and GitHub repo.
- Telugu text is a first draft. Needs native-speaker review. Legal pages need lawyer review.
- Sample content marked "[Sample]" in `src/content/` and `public/uploads/`.

## Progress
- [x] Step 1: setup, theme, layout, Home
- [x] Step 2: full page set, content collections, admin config, sample content, poster
- [ ] Verify: `npm run build` and click-through (run locally, not yet confirmed)
- [ ] Next: Netlify Functions + Brevo confirmation emails (volunteer + receipt), Cloudflare token, deployment guide
