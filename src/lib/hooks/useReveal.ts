"use client";

import { useEffect } from "react";

/**
 * Revela elementos con `[data-reveal]` al entrar en viewport añadiendo
 * la clase `is-revealed`. Respeta `prefers-reduced-motion`. Enfoque basado
 * en scroll (robusto frente a IntersectionObserver en previews/iframes).
 */
export function useReveal(): void {
  useEffect(() => {
    const all = () =>
      Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      all().forEach((e) => e.classList.add("is-revealed"));
      return;
    }

    const reveal = () => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-revealed)")
        .forEach((e) => {
          const r = e.getBoundingClientRect();
          if (r.top < window.innerHeight - 40 && r.bottom > 0) {
            e.classList.add("is-revealed");
          }
        });
    };

    reveal();
    const raf = requestAnimationFrame(reveal);
    const t = setTimeout(reveal, 250);
    window.addEventListener("scroll", reveal, { passive: true });
    window.addEventListener("resize", reveal);
    return () => {
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("resize", reveal);
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, []);
}
