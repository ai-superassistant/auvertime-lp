import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '@/lib/scroll';

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
          ? 'border-b border-ink-800/80 bg-ink-950/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        <button
          type="button"
          onClick={() => go('hero')}
          className="font-display text-lg font-bold tracking-tight text-ink-100"
        >
          AUVER<span className="text-accent-400">TIME</span>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className="text-sm font-medium text-ink-300 transition-colors hover:text-accent-300"
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => go('contact')}
            className="rounded-full bg-accent-500 px-5 py-2 text-sm font-semibold text-ink-950 transition-all duration-200 hover:bg-accent-400 hover:shadow-[0_0_24px_-6px] hover:shadow-accent-500/70 active:scale-[0.97]"
          >
            Nous contacter
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-ink-200 transition-colors hover:text-accent-300 md:hidden"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-ink-800/60 bg-ink-950/95 backdrop-blur-md transition-[max-height,opacity] duration-300 md:hidden ${
          open ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-ink-200 transition-colors hover:bg-ink-800/60 hover:text-accent-300"
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => go('contact')}
            className="mt-2 rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-ink-950"
          >
            Nous contacter
          </button>
        </nav>
      </div>
    </header>
  );
}
