import { test, expect } from "@playwright/test";

test("la newsletter del footer acusa recibo", async ({ page }) => {
  await page.goto("/");
  const footer = page.locator(".ak-footer-news").first();
  await footer.getByLabel("Email").fill("e2e@suscriptor.dev");
  await footer.getByRole("button", { name: "Suscribirse" }).click();
  // Sin DATABASE_URL/RESEND_API_KEY el API degrada y responde 200 igualmente.
  await expect(footer.getByRole("status")).toBeVisible();
});
