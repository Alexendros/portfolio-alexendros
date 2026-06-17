import { describe, expect, it } from "vitest";
import {
  makeBlogPostingJsonLd,
  makeBreadcrumbJsonLd,
  makeCreativeWorkJsonLd,
  makePersonJsonLd,
  makeProfessionalServiceJsonLd,
  makeWebSiteJsonLd,
} from "@/lib/seo/jsonld";
import { postConMeta, postSinMeta, proyectoConRepo, proyectoSinRepo } from "../fixtures/content";

// schema-dts tipa cada propiedad como unión muy amplia; para las aserciones
// accedemos al objeto plano resultante como Record.
const plain = (x: object) => x as unknown as Record<string, unknown>;

describe("generadores JSON-LD", () => {
  it("WebSite declara contexto, tipo y URL del sitio", () => {
    const j = plain(makeWebSiteJsonLd());
    expect(j["@context"]).toBe("https://schema.org");
    expect(j["@type"]).toBe("WebSite");
    expect(String(j.url)).toMatch(/alexendros\.dev/);
  });

  it("Person enlaza redes en sameAs", () => {
    const j = plain(makePersonJsonLd());
    expect(j["@type"]).toBe("Person");
    expect(Array.isArray(j.sameAs)).toBe(true);
  });

  it("ProfessionalService es del tipo correcto", () => {
    const j = plain(makeProfessionalServiceJsonLd());
    expect(j["@type"]).toBe("ProfessionalService");
    expect(String(j.url)).toContain("/servicios");
  });

  it("BlogPosting prioriza metaDescription y enlaza el post", () => {
    const j = plain(makeBlogPostingJsonLd(postConMeta));
    expect(j.description).toBe(postConMeta.metaDescription);
    expect(j.headline).toBe(postConMeta.title);
    expect(String(j.url)).toContain(postConMeta.id);
  });

  it("BlogPosting genera descripción de respaldo sin meta ni desc", () => {
    const j = plain(makeBlogPostingJsonLd(postSinMeta));
    expect(String(j.description)).toContain(postSinMeta.title);
  });

  it("SoftwareApplication añade codeRepository y usa liveUrl cuando existen", () => {
    const j = plain(makeCreativeWorkJsonLd(proyectoConRepo));
    expect(j.codeRepository).toBe(proyectoConRepo.repoUrl);
    expect(j.url).toBe(proyectoConRepo.liveUrl);
  });

  it("SoftwareApplication cae a la URL canónica sin repo ni liveUrl", () => {
    const j = plain(makeCreativeWorkJsonLd(proyectoSinRepo));
    expect(j.codeRepository).toBeUndefined();
    expect(String(j.url)).toContain(`/proyectos/${proyectoSinRepo.id}`);
  });

  it("BreadcrumbList numera las posiciones desde 1", () => {
    const j = plain(
      makeBreadcrumbJsonLd([
        { name: "Inicio", url: "https://alexendros.dev/" },
        { name: "Blog", url: "https://alexendros.dev/blog" },
      ]),
    );
    const items = j.itemListElement as Array<{ position: number; name: string }>;
    expect(items).toHaveLength(2);
    expect(items[0]!.position).toBe(1);
    expect(items[1]!.position).toBe(2);
  });
});
