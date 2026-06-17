import { test, expect } from "@playwright/test";

test("filtra y busca en la página de proyectos", async ({ page }) => {
  await page.goto("/proyectos");
  await expect(page.getByRole("heading", { name: "Proyectos", level: 1 })).toBeVisible();

  // Búsqueda por texto libre: solo «Gráficas Nasve» menciona imprenta.
  await page.getByLabel("Buscar proyecto").fill("imprenta");
  await expect(page.getByText("1 proyecto", { exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Nasve/ })).toBeVisible();

  // Estado vacío.
  await page.getByLabel("Buscar proyecto").fill("zzzz-no-existe");
  await expect(page.getByText(/Sin resultados/)).toBeVisible();
});

test("filtra proyectos por categoría", async ({ page }) => {
  await page.goto("/proyectos");
  await page.getByRole("button", { name: "Open Source" }).click();
  await expect(page.getByText(/\d+ proyectos?$/)).toBeVisible();
});
