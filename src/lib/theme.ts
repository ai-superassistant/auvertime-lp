export type Theme = 'light' | 'dark';

const KEY = 'theme';
const listeners = new Set<() => void>();

/** Current theme, read from the <html data-theme> attribute set at boot. */
export function getTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

function apply(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  listeners.forEach((fn) => fn());
}

/** Set the theme and remember the choice across visits. */
export function setTheme(theme: Theme) {
  try {
    localStorage.setItem(KEY, theme);
  } catch {
    /* storage unavailable — apply for this session only */
  }
  apply(theme);
}

export function subscribe(fn: () => void) {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}
