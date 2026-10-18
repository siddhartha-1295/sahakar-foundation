# Sahakar Foundation Website

Bilingual (English + Telugu) website for Sahakar Foundation, an NGO in Hyderabad.
Six areas of work: Education, Basic Necessities, Cleanliness, Health & Medicine, Social Awareness, Dharma.

Built with [Astro](https://astro.build) (static site), [Decap CMS](https://decapcms.org) at `/admin`, hosted on Netlify.
Decisions and progress are tracked in `PROJECT_NOTES.md`.

## Requirements

- **Node.js 22.22 or newer** (check with `node -v`). Astro 7 does not run on Node 20.
  Install with [nvm](https://github.com/nvm-sh/nvm): `nvm install 22 && nvm use 22`
- npm (comes with Node) and Git

## Run it on your laptop

```bash
git clone https://github.com/siddhartha-1295/sahakar-foundation.git
cd sahakar-foundation
nvm use 22
npm install
npm run dev
```

Open:

| Page | URL |
| --- | --- |
| English site | http://localhost:4321/ |
| Telugu site | http://localhost:4321/te/ |
| Printable poster (English) | http://localhost:4321/poster |
| Admin panel | http://localhost:4321/admin/index.html |

Other commands:

```bash
npm run build     # builds the site into dist/ (this is what Netlify runs)
npm run preview   # serves the built dist/ folder locally
```

Run `nvm use 22` in every new terminal window.

## Edit content with the admin panel locally

In a **second terminal** in the project folder:

```bash
nvm use 22
npx decap-server
```

Keep it running next to `npm run dev`, then open http://localhost:4321/admin/index.html.
Saving in the panel writes straight into `src/content/` and `src/data/`. Nothing goes live until you commit and push.
Use this only on your own computer, never on the live site.

## Project structure

```
src/
  i18n.ts            all UI text (ui.en / ui.te), the six areas, helpers (href, pick, formatDate...)
  content.config.ts  content collections: updates, events, albums, legal
  content/           markdown content (editable in /admin)
  data/              settings.json, donate.json, transparency.json (editable in /admin)
  layouts/Base.astro header, footer, WhatsApp button, lightbox
  views/             one file per page, all page content lives here (takes a `lang` prop)
  components/        UpdateCard, EventCard, PhotoGrid
  lib/content.ts     content helpers (sorting, upcoming vs past events, photo list)
  pages/             thin wrappers only: English in pages/, Telugu in pages/te/
  styles/global.css  colours and layout
public/
  admin/             Decap CMS (index.html + config.yml)
  uploads/           images uploaded through the CMS
netlify.toml         build settings for Netlify
```

### Rules to keep things working

- **Every page exists twice:** `src/pages/about.astro` and `src/pages/te/about.astro`. Both just import the same view from `src/views/`. Put page content in the view, not the wrapper.
- **New UI text** goes in both `ui.en` and `ui.te` in `src/i18n.ts`.
- **Links** use `href(lang, '/path')` so Telugu pages stay under `/te/`.
- **Area keys** are fixed: `education`, `necessities`, `cleanliness`, `medicine`, `awareness`, `dharma`.
- After adding new page files, stop and restart `npm run dev`.

## Placeholders to replace before going live

- `src/data/settings.json`: WhatsApp number, phone, email, address, `site_url`, team, impact numbers, `whatsapp_group`
- `src/data/donate.json`: UPI ID (empty means a "Sample QR – not payable" stamp), bank details, Razorpay button ID
- `astro.config.mjs` and `public/admin/config.yml`: site URL (`site`, `site_url`) and GitHub repo
- Content marked `[Sample]` in `src/content/` and `public/uploads/`
- Telugu text is a first draft and needs a native-speaker review
- Privacy, Terms and Refund pages are drafts and need a lawyer's review

## Deploy (Netlify, free plan)

This site needs Netlify (forms, functions and admin login). **GitHub Pages will not work.**

1. Netlify: Add new site, Import an existing project, GitHub, choose this repo.
2. `netlify.toml` already sets the build command (`npm run build`), publish folder (`dist`) and Node 22. Click Deploy.
3. Update `site` in `astro.config.mjs`, `site_url` in `src/data/settings.json` and `public/admin/config.yml` with the Netlify address, then push.
4. Admin login on the live site: in Netlify go to Site configuration, Access & security, OAuth, and add a GitHub provider (Client ID and Secret from a GitHub OAuth App). Editors need write access to this repo.

## Forms and emails

- Netlify Forms: `volunteer` and `donation-receipt`. On localhost the submit button skips straight to the thank-you page. Real submissions only work after deploying to Netlify.
- Confirmation emails (Netlify Functions + Brevo) are planned but not built yet. The Brevo API key must only ever be set in Netlify environment variables, never committed. PAN must never appear in any email.

## Troubleshooting

| Problem | Fix |
| --- | --- |
| `Node.js ... is not supported by Astro` | Run `nvm use 22` |
| `Cannot find native binding` | `rm -rf node_modules package-lock.json && npm install` |
| `Missing script: build` | You are in the wrong folder. Run `pwd` and `ls` and `cd` to the project folder |
| A page shows 404 | Check the page file exists in `src/pages/` (and `src/pages/te/`), then restart `npm run dev` |
| Admin says "Repo not found" | Set the real `repo:` in `public/admin/config.yml`, or run `npx decap-server` for local editing |
| `git push` rejected | `git pull origin main --rebase`, then push again |