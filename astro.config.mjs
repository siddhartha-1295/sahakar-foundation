import { defineConfig } from 'astro/config';

// No trailingSlash setting on purpose: the default ("ignore") makes /about and /about/ both work.
export default defineConfig({
  site: 'https://YOUR-SITE.netlify.app', // change after you deploy
  output: 'static',
});
