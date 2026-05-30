import "server-only";
import fs from "node:fs";
import path from "node:path";

export { extractToc } from "./utils/toc";
export type { TocItem } from "./utils/toc";

const DIR = path.join(process.cwd(), "content/blog");

/** Devuelve el cuerpo MDX de un post, o null si no existe archivo (contenido seed). */
export function getPostSource(slug: string): string | null {
  try {
    return fs.readFileSync(path.join(DIR, `${slug}.mdx`), "utf8");
  } catch {
    return null;
  }
}
