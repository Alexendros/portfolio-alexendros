import { test, expect } from "@playwright/test";

test("el pago degrada a un mensaje de fallback sin claves de Stripe", async ({ page }) => {
  await page.goto("/escaparate");
  await page
    .getByRole("button", { name: /Pagar ahora/ })
    .first()
    .click();
  // Sin STRIPE_SECRET_KEY, /api/checkout responde 503 y la tarjeta muestra el
  // fallback en vez de redirigir a Stripe.
  await expect(page.getByText(/Pagos no disponibles|No se pudo iniciar/).first()).toBeVisible();
});
