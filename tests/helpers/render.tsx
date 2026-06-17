// Wrapper de React Testing Library. Reexporta la API de RTL y añade
// `renderWithUser`, que devuelve además una instancia de `user-event` ya
// configurada para simular interacción real.
import { render, type RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ReactElement } from "react";

export * from "@testing-library/react";
export { userEvent };

export function renderWithUser(ui: ReactElement, options?: RenderOptions) {
  return { user: userEvent.setup(), ...render(ui, options) };
}
