import { describe, expect, it } from "vitest";
import { http, HttpResponse } from "msw";
import { renderWithUser, screen } from "../helpers/render";
import { server } from "../helpers/msw/server";
import { NewsletterForm } from "@/components/sections/NewsletterForm";

const ENDPOINT = "http://localhost:3000/api/newsletter";

describe("NewsletterForm", () => {
  it("muestra mensaje de éxito tras suscribirse (variant footer)", async () => {
    const { user } = renderWithUser(<NewsletterForm />);
    await user.type(screen.getByLabelText("Email"), "nuevo@suscriptor.dev");
    await user.click(screen.getByRole("button", { name: "Suscribirse" }));
    expect(await screen.findByRole("status")).toHaveTextContent(/Gracias/);
  });

  it("muestra el error devuelto por el servidor (variant cta)", async () => {
    server.use(
      http.post(ENDPOINT, () => HttpResponse.json({ error: "Email no válido." }, { status: 422 })),
    );
    const { user } = renderWithUser(<NewsletterForm variant="cta" />);
    await user.type(screen.getByLabelText("Email"), "correo@dudoso.dev");
    await user.click(screen.getByRole("button", { name: /Hablemos/ }));
    expect(await screen.findByRole("status")).toHaveTextContent("Email no válido.");
  });

  it("muestra error de red si el fetch falla (variant coming)", async () => {
    server.use(http.post(ENDPOINT, () => HttpResponse.error()));
    const { user } = renderWithUser(<NewsletterForm variant="coming" />);
    await user.type(screen.getByLabelText("Email"), "a@b.com");
    await user.click(screen.getByRole("button", { name: /Avísame/ }));
    expect(await screen.findByRole("status")).toHaveTextContent(/Error de red/);
  });
});
