export type Theme = 'light' | 'dark';

const KEY = 'theme';
const listeners = new Set<() => void>();

function systemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/** Current theme, read from the <html data-theme> attribute set at boot. */
export function getTheme(): Theme {
  const attr = document.documentElement.dataset.theme;
  return attr === 'light' || attr === 'dark' ? attr : systemTheme();
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

/** Keep following the OS as long as the user hasn't picked a theme manually. */
export function initThemeSync() {
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  mq.addEventListener('change', () => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(KEY);
    } catch {
      /* ignore */
    }
    if (stored !== 'light' && stored !== 'dark') apply(systemTheme());
  });
}
