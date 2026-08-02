---
title: 'Sample post — how the blog works'
date: 2026-08-02
description: 'Placeholder post documenting how to write and tag entries. Replace or delete me.'
tags: ['engineering']
draft: false
---

This is a placeholder post so the blog isn't empty — replace or delete it.

Posts are Markdown files in `src/content/blog/`. The frontmatter sets title, date,
tags, and an optional description:

```yaml
---
title: 'My post'
date: 2026-08-02
tags: ['ML']
---
```

To add one: copy `_template.md`, rename it (the filename becomes the URL), fill in
the frontmatter, and write. New tags automatically get their own `/tags/<tag>` page.
Set `draft: true` to keep a post hidden while you work on it.

Link a J-space card on the landing page to any post by its path, e.g.
`href: '/blog/hello-world'` in `src/data/mind.ts`.
