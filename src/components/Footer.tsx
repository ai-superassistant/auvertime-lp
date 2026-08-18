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
