import { type ReactNode } from 'react';
import { scrollToSection } from '@/lib/scroll';

type Props = {
  children: ReactNode;
  to: string;
  variant?: 'primary' | 'ghost';
  className?: string;
};

export default function CTAButton({ children, to, variant = 'primary', className = '' }: Props) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950';
  const styles =
    variant === 'primary'
      ? 'bg-accent-500 text-ink-950 hover:bg-accent-400 hover:shadow-[0_0_28px_-4px] hover:shadow-accent-500/60 active:scale-[0.98]'
      : 'border border-ink-600 text-ink-100 hover:border-accent-500 hover:text-accent-300 hover:bg-ink-800/60 active:scale-[0.98]';

  return (
    <button
      type="button"
      onClick={() => scrollToSection(to)}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </button>
  );
}
