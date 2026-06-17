import { afterEach, describe, expect, it, vi } from "vitest";
import { act, render, screen } from "../helpers/render";
import { Terminal } from "@/components/sections/Terminal";

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe("Terminal", () => {
  it("muestra el contenido completo al instante con prefers-reduced-motion", () => {
    vi.spyOn(window, "matchMedia").mockReturnValue({
      matches: true,
      media: "(prefers-reduced-motion: reduce)",
      addEventListener: () => {},
      removeEventListener: () => {},
    } as unknown as MediaQueryList);

    const { container } = render(<Terminal title="~/whoami.sh" />);
    expect(screen.getByText("~/whoami.sh")).toBeInTheDocument();
    expect(container.textContent).toContain("cat ~/whoami.json");
    expect(container.textContent).toContain("open_to_work");
  });

  it("teclea el comando y revela las líneas con el tiempo (sin reduced-motion)", () => {
    vi.useFakeTimers();
    const { container } = render(<Terminal />);
    // Tras avanzar el reloj, el comando se ha tecleado y las líneas aparecen.
    act(() => {
      vi.advanceTimersByTime(3500);
    });
    expect(container.textContent).toContain("cat ~/whoami.json");
    expect(container.textContent).toContain("open_to_work");
  });
});
