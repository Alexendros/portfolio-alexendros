"use client";

import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "ao-theme";
const EVENT = "ao-theme-change";

function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  return () => window.removeEventListener(EVENT, cb);
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot() {
  return false;
}

/**
 * Tema claro/oscuro persistente. Lee el estado real del `<html>` (resuelto sin
 * flash por el script bloqueante de `layout.tsx`) vía `useSyncExternalStore`.
 */
export function useTheme(): [boolean, () => void] {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {
      /* almacenamiento no disponible */
    }
    window.dispatchEvent(new Event(EVENT));
  }, []);

  return [dark, toggle];
}
