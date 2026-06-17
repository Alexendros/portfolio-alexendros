import { afterEach, describe, expect, it, vi } from "vitest";
import { render } from "../helpers/render";
import { useReveal } from "@/lib/hooks/useReveal";

function Harness() {
  useReveal();
  return (
    <div data-reveal data-testid="el">
      contenido
    </div>
  );
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe("useReveal", () => {
  it("revela todos los elementos al instante con prefers-reduced-motion", () => {
    vi.spyOn(window, "matchMedia").mockReturnValue({
      matches: true,
    } as unknown as MediaQueryList);
    const { getByTestId } = render(<Harness />);
    expect(getByTestId("el").classList.contains("is-revealed")).toBe(true);
  });

  it("revela los elementos visibles en viewport (sin reduced-motion)", () => {
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockReturnValue({
      top: 100,
      bottom: 200,
      left: 0,
      right: 0,
      width: 0,
      height: 100,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    } as DOMRect);
    const { getByTestId } = render(<Harness />);
    expect(getByTestId("el").classList.contains("is-revealed")).toBe(true);
  });
});
