function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/80 bg-canvas py-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-display text-lg font-bold tracking-tight text-fg">
              AUVER<span className="text-brand">TIME</span>
            </p>
            <p className="mt-1 text-xs text-fg-faint">
              Développement web · Acquisition · Stratégie digitale
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/mentions-legales"
              className="text-sm text-fg-muted transition-colors hover:text-brand"
            >
              Mentions légales
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-fg-subtle transition-colors hover:text-brand"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-line/60 pt-6 text-center">
          <p className="text-xs text-fg-faint">
            © {year} AUVERTIME — Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
