// Setup del proyecto `component` (entorno jsdom).
import "@testing-library/jest-dom/vitest";
import { afterAll, afterEach, beforeAll, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import { server } from "./helpers/msw/server";

// MSW: intercepta la red durante los tests de componentes. `error` ante
// peticiones no declaradas fuerza a registrar cada endpoint en los handlers.
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => {
  cleanup();
  server.resetHandlers();
});
afterAll(() => server.close());

// Analítica: no-op en tests (evita efectos de red de @vercel/analytics).
vi.mock("@vercel/analytics", () => ({ track: vi.fn() }));

// jsdom no implementa matchMedia. Stub por defecto: no coincide ninguna media
// query (p. ej. `prefers-reduced-motion` = sin reducción). Los tests pueden
// sobrescribirlo con vi.spyOn cuando necesiten el caso contrario.
if (!window.matchMedia) {
  window.matchMedia = (query: string) =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }) as unknown as MediaQueryList;
}
