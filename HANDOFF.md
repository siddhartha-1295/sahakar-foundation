# Developer Handoff: Sahakar Foundation Website

## 1. What this is

Bilingual (English + Telugu) NGO website. Astro static site, Decap CMS admin at `/admin`, hosted on Netlify (free plan).
Repo: https://github.com/siddhartha-1295/sahakar-foundation
Read `README.md` (setup) and `PROJECT_NOTES.md` (decisions) first.

## 2. Current status

**Built:** all pages in English and Telugu (Home, About, Work, Activities + detail, Gallery + albums, Events, Volunteer, Donate, Transparency, Contact, Thanks pages, Privacy/Terms/Refund), English-only `/poster`, Decap admin config, sample content, floating WhatsApp button, lightbox, optional Cloudflare analytics hook.

**Not built yet:**
- Netlify Functions + Brevo confirmation emails (volunteer and receipt). `netlify/functions/` is empty.
- Outgoing-webhook wiring from Netlify Forms to those functions.
- Custom 404 page, `robots.txt`, sitemap.

**Not verified yet (check these first):**
- `npm run build` has not been confirmed passing by the person who wrote the code. Run it before anything else and fix what it reports.
- Netlify deploy, GitHub OAuth login for `/admin/`, and real form submissions have not been tested.
- Telugu text is a first draft. Privacy/Terms/Refund are drafts and need legal review.

## 3. Get set up (30 minutes)

1. Install Node 22.22 or newer (`nvm install 22 && nvm use 22`).
2. `git clone` the repo, then `npm install` and `npm run dev`.
3. Open http://localhost:4321/ and http://localhost:4321/te/.
4. For admin edits locally: `npx decap-server` in a second terminal, then open http://localhost:4321/admin/index.html.
5. Run `npm run build` and confirm it passes before every push.

## 4. Accounts and access needed

| Need | Who sets it up | Notes |
| --- | --- | --- |
| GitHub repo write access | Repo owner | Required for devs and for content editors using `/admin` |
| Netlify site | Owner or lead dev | Imports the GitHub repo, free plan is enough |
| GitHub OAuth App | Owner | Client ID and Secret go in Netlify, Access & security, OAuth |
| Brevo account + verified sender email | Lead dev | Needed for confirmation emails |
| Razorpay account | Foundation | Gives the Payment Button ID for `donate.json` |
| Cloudflare account (optional) | Foundation | Web Analytics token for Site settings |

## 5. Secrets: strict rules

- The **Brevo API key lives only in Netlify environment variables** (Site configuration, Environment variables). Never commit it, never paste it in chat, never put it in `settings.json` or any file in the repo.
- **PAN must never appear in any email**, log message or function output. The PAN field on the receipt form only shows when `show_80g` is true in `donate.json`. Netlify stores form submissions in its dashboard, so limit who has Netlify access.
- Keep `.env` out of git (it is in `.gitignore`).

## 6. How the code is organised

- `src/views/*.astro` hold the page content. `src/pages/` has thin wrappers: English in `pages/`, Telugu in `pages/te/`. Both import the same view.
- All UI text is in `src/i18n.ts` under `ui.en` and `ui.te`. Add every new string to **both**.
- Use `href(lang, '/path')` for links so Telugu stays under `/te/`.
- Editable content: `src/content/*` (activities, events, albums, legal) and `src/data/*.json` (settings, donate, transparency). The admin panel edits these files, so keep field names in `public/admin/config.yml` in sync with `src/content.config.ts` and the JSON files. Changing one without the others breaks either the build or the admin.
- Area keys are fixed: `education`, `necessities`, `cleanliness`, `medicine`, `awareness`, `dharma`.
- After adding page files, restart `npm run dev`.

## 7. Working with git

- Content editors using `/admin` on the live site commit **directly to `main`**. Run `git pull` before you start work and before you push.
- Create a branch for each change, open a pull request, and let Netlify build a deploy preview before merging.
- Commit messages: start with a verb, describe one change, for example "Add Brevo function for volunteer email".
- Do not use `git push --force` on `main`.

## 8. Next tasks, in order

1. Run `npm run build` and fix anything it reports.
2. Deploy to Netlify and confirm every page loads in English and Telugu.
3. Replace `site` in `astro.config.mjs` and `site_url` in `settings.json` and `public/admin/config.yml` with the live address. The poster QR code reads `site_url`.
4. Set up the GitHub OAuth App and test the `/admin/` login on the live site.
5. Build the two Netlify Functions (`volunteer-email.js`, `receipt-email.js`) using the Brevo API and add the form webhooks. Test with a real submission. Check that no email contains PAN.
6. Replace placeholders (see README) and delete the `[Sample]` content.
7. Get the Telugu text and legal pages reviewed.
8. Test on a real phone, including the form submissions, the menu, the language switch and the UPI buttons.
9. Print `/poster` from the live site and scan the QR code to confirm it works.

## 9. Known gotchas

- GitHub Pages cannot host this site (it runs Jekyll and ignores `npm run build`). Use Netlify only. Keep Pages turned off.
- On localhost, the form submit button skips straight to the thank-you page. Real submissions only work on Netlify.
- Event "upcoming vs past" is decided at build time in India time, and a small script moves passed events to Past in the browser. Events do not need a rebuild to move, but a rebuild keeps the Home page list fresh.
- If `astro/zod` fails to import on your Astro version, use `import { z } from 'astro:content'` in `src/content.config.ts`.

## 10. Troubleshooting

| Problem | Fix |
| --- | --- |
| `Node.js ... is not supported by Astro` | `nvm use 22` |
| `Cannot find native binding` | `rm -rf node_modules package-lock.json && npm install` |
| `Missing script: build` | Wrong folder. Run `pwd` and `ls`, then `cd` to the project |
| Page shows 404 | Check the file exists in `src/pages/` and `src/pages/te/`, then restart dev |
| Admin says "Repo not found" | Set `repo:` in `public/admin/config.yml`, or use `npx decap-server` locally |
| `git push` rejected | `git pull --rebase`, then push |