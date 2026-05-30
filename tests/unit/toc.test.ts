import { describe, expect, it } from "vitest";
import { extractToc } from "@/lib/utils/toc";

describe("extractToc", () => {
  it("extrae encabezados ## con slugs", () => {
    const src = "## ¿Qué es una IDP?\n\ntexto\n\n## El problema real\n";
    const toc = extractToc(src);
    expect(toc).toHaveLength(2);
    expect(toc[0].label).toBe("¿Qué es una IDP?");
    expect(toc[0].id).toBeTruthy();
    expect(toc[1].label).toBe("El problema real");
  });

  it("ignora encabezados dentro de bloques de código", () => {
    const src = "## Real\n\n```md\n## No es encabezado\n```\n\n## Otra\n";
    const toc = extractToc(src);
    expect(toc.map((t) => t.label)).toEqual(["Real", "Otra"]);
  });

  it("devuelve vacío sin encabezados", () => {
    expect(extractToc("solo texto, sin headings")).toHaveLength(0);
  });
});
