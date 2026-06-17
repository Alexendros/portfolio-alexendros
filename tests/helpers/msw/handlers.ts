import { http, HttpResponse } from "msw";

// Origen fijado en `vitest.config.ts` (environmentOptions.jsdom.url). Los
// componentes hacen `fetch("/api/...")`, que resuelve contra este origen.
const ORIGIN = "http://localhost:3000";

// Handlers por defecto (camino feliz). Cada test sobrescribe lo que necesite
// con `server.use(...)` para simular 422, 503, errores de red, etc.
export const handlers = [
  http.post(`${ORIGIN}/api/contact`, () => HttpResponse.json({ ok: true })),
  http.post(`${ORIGIN}/api/newsletter`, () => HttpResponse.json({ ok: true })),
  http.post(`${ORIGIN}/api/checkout`, () =>
    HttpResponse.json({ url: "https://checkout.stripe.test/c/session_123" }),
  ),
];
