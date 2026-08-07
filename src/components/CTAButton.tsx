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
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-150 ease-out will-change-transform [&_svg]:transition-transform [&_svg]:duration-150 hover:[&_svg]:translate-x-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';
  const styles =
    variant === 'primary'
      ? 'bg-accent-500 text-on-accent hover:bg-accent-400 hover:-translate-y-0.5 hover:shadow-[0_0_28px_-4px] hover:shadow-accent-500/60 active:translate-y-0 active:scale-[0.97]'
      : 'border border-edge text-fg hover:border-accent-500 hover:text-brand hover:bg-chip/60 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]';

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
