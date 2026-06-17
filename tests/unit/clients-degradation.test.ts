import { afterEach, describe, expect, it, vi } from "vitest";

// Cubre la inicialización null-safe de los clientes (`src/lib/{db,email,stripe}`):
// sin credenciales son `null`; con ellas se instancian. La lógica de los Route
// Handlers que los consume se prueba aparte en `tests/integration/` con mocks.

afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
});

describe("degradación null-safe de los clientes", () => {
  it("prisma es null sin DATABASE_URL", async () => {
    vi.stubEnv("DATABASE_URL", "");
    Reflect.deleteProperty(globalThis, "prisma");
    vi.resetModules();
    const { prisma } = await import("@/lib/db");
    expect(prisma).toBeNull();
  });

  it("resend es null sin clave y se instancia con RESEND_API_KEY", async () => {
    vi.stubEnv("RESEND_API_KEY", "");
    vi.resetModules();
    const sinClave = await import("@/lib/email");
    expect(sinClave.resend).toBeNull();
    expect(sinClave.EMAIL_FROM).toContain("@");
    expect(sinClave.CONTACT_TO).toContain("@");

    vi.stubEnv("RESEND_API_KEY", "re_test_123");
    vi.resetModules();
    const conClave = await import("@/lib/email");
    expect(conClave.resend).not.toBeNull();
  });

  it("stripe es null sin clave y se instancia con STRIPE_SECRET_KEY", async () => {
    vi.stubEnv("STRIPE_SECRET_KEY", "");
    vi.resetModules();
    const sinClave = await import("@/lib/stripe");
    expect(sinClave.stripe).toBeNull();
    expect(typeof sinClave.STRIPE_WEBHOOK_SECRET).toBe("string");
    expect(sinClave.BASE_URL).toMatch(/^https?:\/\//);

    vi.stubEnv("STRIPE_SECRET_KEY", "sk_test_123");
    vi.resetModules();
    const conClave = await import("@/lib/stripe");
    expect(conClave.stripe).not.toBeNull();
  });
});
