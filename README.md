# Personal website

A small [Astro](https://astro.build) site — an animated landing page, an About page,
and a Markdown blog with tags. Deploys to GitHub Pages.

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321
```

## Make it yours

1. **`src/config.ts`** — set your name, bio, GitHub username, and social links.
   Your GitHub avatar is pulled automatically from `github.com/<username>.png`.
2. **`astro.config.mjs`** — set `site` to `https://<username>.github.io`.
   - Hosting at a **user site** (`<username>.github.io` repo): keep `base: '/'`.
   - Hosting at a **project repo**: set `base: '/<repo-name>/'`.

## Writing a blog post

1. Copy `src/content/blog/_template.md` to a new file, e.g. `my-post.md`
   (the filename becomes the URL: `/blog/my-post`).
2. Fill in the frontmatter (`title`, `date`, `description`, `tags`) and write.
3. `tags` are just strings — a new tag automatically gets its own `/tags/<tag>` page.
   Set `draft: true` to keep a post hidden on the live site while you write.

Files starting with `_` (like the template) are never published.

## Deploy

Push to the `main` branch. In the repo: **Settings → Pages → Source: GitHub Actions**.
The workflow in `.github/workflows/deploy.yml` builds and publishes on every push.

## The landing animation

`src/components/TransformerZoom.astro` is a self-contained placeholder — a subtle zoom
toward a glowing "latent cloud". It's designed to be swapped for the full
"zoom into a Transformer → J-space" animation later without touching anything else.

## Commands

| Command           | Action                          |
| ----------------- | ------------------------------- |
| `npm run dev`     | Start dev server                |
| `npm run build`   | Build to `./dist/`              |
| `npm run preview` | Preview the production build    |
