import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useTheme } from "@/lib/hooks/useTheme";

beforeEach(() => {
  document.documentElement.classList.remove("dark");
  localStorage.clear();
});
afterEach(() => {
  document.documentElement.classList.remove("dark");
});

describe("useTheme", () => {
  it("refleja el estado inicial (sin clase dark)", () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current[0]).toBe(false);
  });

  it("alterna la clase dark en <html> y persiste en localStorage", () => {
    const { result } = renderHook(() => useTheme());

    act(() => result.current[1]());
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(localStorage.getItem("ao-theme")).toBe("dark");
    expect(result.current[0]).toBe(true);

    act(() => result.current[1]());
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(localStorage.getItem("ao-theme")).toBe("light");
    expect(result.current[0]).toBe(false);
  });
});
