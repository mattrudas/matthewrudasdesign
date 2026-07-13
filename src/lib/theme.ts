export type Theme = "light" | "dark";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/** Current theme snapshot for useSyncExternalStore (client). */
export function getThemeSnapshot(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme") as Theme | null;
  return stored ?? getSystemTheme();
}

/** Server snapshot — theming is resolved on the client. */
export function getServerThemeSnapshot(): Theme {
  return "light";
}

export function subscribeTheme(callback: () => void): () => void {
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  mql.addEventListener("change", callback);
  window.addEventListener("storage", callback);
  window.addEventListener("themechange", callback);
  return () => {
    mql.removeEventListener("change", callback);
    window.removeEventListener("storage", callback);
    window.removeEventListener("themechange", callback);
  };
}

export function applyTheme(theme: Theme): void {
  const root = document.documentElement;
  root.classList.remove("theme-dark", "theme-light");
  root.classList.add(theme === "dark" ? "theme-dark" : "theme-light");
  localStorage.setItem("theme", theme);
  window.dispatchEvent(new Event("themechange"));
}
