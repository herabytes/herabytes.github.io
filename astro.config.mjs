// @ts-check
import { defineConfig } from 'astro/config';

// If you host at https://<username>.github.io (a "user site" repo named
// <username>.github.io), keep base: '/'. Just update `site` to your username.
//
// If instead you use a PROJECT repo (e.g. github.com/<username>/personal-website),
// set base: '/personal-website/' and site to 'https://<username>.github.io'.
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',
  base: '/',
});
