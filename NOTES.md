# Notes

Working notes for the site — open threads, and decisions worth not re-litigating.
Edit freely; this is for you, not the build.

## Open threads

- **Intro / abstract.** Job is to *orient without decoding*: tell people what's below
  and what to do with it, without saying "this is a self-model" out loud (that spoils
  the recognition). Current version is in `src/data/mind.ts` → `intro`.
  Nit still outstanding: "to attempt inferring" → "to attempt to infer".
- **Paper vs. live dashboard.** Open question. The paper is the functional front door
  and serves recruiters/collaborators; the dashboard ("you're watching a model run",
  no section headers, poke around to discover) is the braver art piece. Not exclusive —
  see below.
- **J-space, dynamic.** Cells randomly varying brightness "like fireflies in a forest",
  each cell breathing; maybe a soft highlight travelling across the words. Effect not
  chosen yet; it should convey something rather than decorate. A travelling highlight
  reads as attention moving, which is on-theme.
- **Click generate → random blog post.** From `hello-world.md`. Natural home is
  `/demos/latent-space`, which can grow into the dashboard piece: draw the residual
  stream, J-space floating off it.
- **Post descriptions in Outputs.** The landing's §1.2 shows title + date + tags only.
  Descriptions (which support `backticks` → inline code) could go there too.
- **Sanity check before writing:** does this read as self-indulgent / "bad competition
  lore"? Personal material earns its place when it's load-bearing — e.g. explaining why
  the format was necessary — not when it's there for effect.

## Decided (don't redo)

- **Structure.** Introduction (doubles as the bio — there is deliberately no About page)
  → §1 Running inference (1.1 J-space, 1.2 Outputs, 1.3 Chain of thought samples,
  collapsed) → §2 Methodology (2.1 Training data, 2.2 Objective functions)
  → §3 Research log → §4 RLHF. J-space and Outputs sit together because they're the
  live stuff; Methodology is deliberately demoted so nobody has to read a course list
  first.
- **Aesthetic.** Academic paper, referencing transformer-circuits.pub. Rejected along
  the way: ink-pen/handwriting (too cute), Solarized Light and ivory/cream (too
  Anthropic-coded), Karma (childish), Spectral (spacing too old), Bahnschrift body.
- **Type & colour.** Source Serif 4 body, Libre Franklin headings, IBM Plex Mono labels.
  Paper `#eef1ec`, green links `#23794e`, sky-blue section numbers/markers `#2b8fd6`.
  Diamond bullets; 0.8s left-to-right underline draw on link hover. Light mode only.
- **CoT listings** follow DeepSeek-R1 (arXiv:2501.12948) — captioned `Listing N |`
  blocks. Prose is set in serif, not mono: the DeepSeek reference is carried by the
  *structure*, and mono prose is genuinely hard to read.
- **The "By interacting…" line** is small print, not a punchline — it stops being funny
  by the end of the page if it's shouted.

## Where things live

- `src/data/mind.ts` — all landing content (intro, J-space, CoT samples, training data,
  objectives, research log). This is the file to edit.
- `src/config.ts` — name, socials, meta description.
- `src/components/InferenceBody.astro` — the landing body and all its styles.
- `src/pages/index.astro` — sidebar contents + page layout.
- `src/content/blog/*.md` — posts; copy `_template.md`. Descriptions support
  `` `backticks` `` for inline code.

Deploys to https://herabytes.github.io on every push to `main`.
