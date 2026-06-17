import { describe, expect, it } from "vitest";
import { getPostSource } from "@/lib/blog";
import { POSTS } from "@/lib/content/posts";

describe("getPostSource", () => {
  it("devuelve el cuerpo MDX de un post existente", () => {
    const src = getPostSource(POSTS[0]!.id);
    expect(src).toBeTypeOf("string");
    expect((src ?? "").length).toBeGreaterThan(0);
  });

  it("devuelve null cuando el archivo MDX no existe", () => {
    expect(getPostSource("slug-que-no-existe-xyz")).toBeNull();
  });
});
