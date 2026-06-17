import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// Servidor MSW para Node (tests de componentes). Su ciclo de vida
// (listen/resetHandlers/close) lo gestiona `tests/setup.component.ts`.
export const server = setupServer(...handlers);
