import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { http, HttpResponse } from "msw";
import { renderWithUser, screen } from "../helpers/render";
import { server } from "../helpers/msw/server";
import { PurchaseCard } from "@/components/sections/checkout/PurchaseCard";
import { PURCHASABLES } from "@/lib/content/checkout";

const ENDPOINT = "http://localhost:3000/api/checkout";
const item = PURCHASABLES[0]!;

// window.location.href no es asignable de forma fiable en jsdom (al asignar una
// URL absoluta intenta navegar). Lo sustituimos por un getter/setter respaldado
// por una variable: el getter mantiene la base para que el `fetch` relativo
// resuelva, y el setter captura la redirección a Stripe.
let hrefValue = "";
const BASE = "http://localhost:3000/";
beforeEach(() => {
  hrefValue = BASE;
  Object.defineProperty(window, "location", {
    configurable: true,
    value: {
      get href() {
        return hrefValue;
      },
      set href(v: string) {
        hrefValue = v;
      },
      toString() {
        return hrefValue;
      },
    },
  });
});
afterEach(() => {
  vi.restoreAllMocks();
});

describe("PurchaseCard", () => {
  it("muestra nombre y precio formateado del item", () => {
    renderWithUser(<PurchaseCard item={item} />);
    expect(screen.getByText(item.name)).toBeInTheDocument();
    // 39000 céntimos → «390 €» (formato es-ES).
    expect(screen.getByText(/390/)).toBeInTheDocument();
  });

  it("redirige a la URL de Stripe en el camino feliz", async () => {
    const { user } = renderWithUser(<PurchaseCard item={item} />);
    await user.click(screen.getByRole("button", { name: /Pagar ahora/ }));
    await vi.waitFor(() => expect(hrefValue).toBe("https://checkout.stripe.test/c/session_123"));
  });

  it("muestra el mensaje de fallback cuando el pago no está disponible (503)", async () => {
    server.use(
      http.post(ENDPOINT, () =>
        HttpResponse.json({ error: "Pagos no disponibles temporalmente." }, { status: 503 }),
      ),
    );
    const { user } = renderWithUser(<PurchaseCard item={item} />);
    await user.click(screen.getByRole("button", { name: /Pagar ahora/ }));
    expect(await screen.findByText(/Pagos no disponibles/)).toBeInTheDocument();
    // No hubo redirección: el href sigue en la base.
    expect(hrefValue).toBe(BASE);
  });
});
