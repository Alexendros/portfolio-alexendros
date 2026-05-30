"use client";

import { usePathname } from "next/navigation";
import { useReveal } from "@/lib/hooks/useReveal";

/**
 * Activa el scroll-reveal global. Se vuelve a montar al cambiar de ruta
 * (key = pathname) para re-escanear los `[data-reveal]` de la nueva página.
 */
export function RevealController() {
  usePathname(); // re-render en navegación
  useReveal();
  return null;
}
