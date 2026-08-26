import { useSyncExternalStore } from "react";
import { getTheme, setTheme, subscribe, type Theme } from "@/lib/theme";

/**
 * Reads the active theme from a shared store so every mounted consumer stays
 * in sync, and exposes a toggle that persists the choice.
 */
export function useTheme() {
  const theme = useSyncExternalStore(
    subscribe,
    getTheme,
    () => "light" as Theme,
  );
  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");
  return { theme, toggle };
}
