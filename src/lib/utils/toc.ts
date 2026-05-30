import GithubSlugger from "github-slugger";

export interface TocItem {
  id: string;
  label: string;
}

/** Extrae los encabezados `##` del MDX y genera sus slugs (compatibles con rehype-slug). */
export function extractToc(src: string): TocItem[] {
  const slugger = new GithubSlugger();
  const items: TocItem[] = [];
  let inFence = false;
  for (const line of src.split("\n")) {
    if (/^```/.test(line.trim())) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const m = /^##\s+(.+)$/.exec(line.trim());
    if (m) {
      const label = m[1].trim();
      items.push({ id: slugger.slug(label), label });
    }
  }
  return items;
}
