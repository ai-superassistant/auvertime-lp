import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '@/lib/scroll';
import ThemeToggle from '@/components/ThemeToggle';

const NAV = [
  { label: 'Expertises', id: 'expertises' },
  { label: 'Approche', id: 'approche' },
  { label: 'Contact', id: 'contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-line/80 bg-canvas/95'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        <button
          type="button"
          onClick={() => go('hero')}
          className="font-display text-lg font-bold tracking-tight text-fg"
        >
          AUVER<span className="text-brand">TIME</span>
        </button>

        <div className="flex items-center gap-3 md:gap-6">
          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className="text-sm font-medium text-fg-muted transition-colors hover:text-brand"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => go('contact')}
              className="rounded-full bg-accent-500 px-5 py-2 text-sm font-semibold text-on-accent transition-all duration-200 hover:bg-accent-400 hover:shadow-[0_0_24px_-6px] hover:shadow-accent-500/70 active:scale-[0.97]"
            >
              Nous contacter
            </button>
          </nav>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="text-fg transition-colors hover:text-brand md:hidden"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-line/60 bg-canvas transition-[max-height,opacity] duration-300 md:hidden ${
          open ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-fg transition-colors hover:bg-chip/60 hover:text-brand"
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => go('contact')}
            className="mt-2 rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-on-accent"
          >
            Nous contacter
          </button>
        </nav>
      </div>
    </header>
  );
}
