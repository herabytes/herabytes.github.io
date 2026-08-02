import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** Published posts (drafts hidden in production), newest first. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) =>
    import.meta.env.PROD ? data.draft !== true : true
  );
  return posts.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );
}

/** Unique tags (lower-cased key -> original display casing), sorted. */
export async function getAllTags(): Promise<
  { tag: string; count: number }[]
> {
  const posts = await getPosts();
  const map = new Map<string, { tag: string; count: number }>();
  for (const p of posts) {
    for (const t of p.data.tags) {
      const key = t.toLowerCase();
      const existing = map.get(key);
      if (existing) existing.count++;
      else map.set(key, { tag: t, count: 1 });
    }
  }
  return [...map.values()].sort((a, b) =>
    a.tag.localeCompare(b.tag)
  );
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
