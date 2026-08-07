import { type ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  className?: string;
  children?: ReactNode;
};

export default function SectionHeading({ eyebrow, title, className = '', children }: Props) {
  return (
    <div className={`reveal mx-auto max-w-2xl text-center ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink-100 sm:text-4xl">
        {title}
      </h2>
      {children && <div className="mt-4 text-base leading-relaxed text-ink-300">{children}</div>}
    </div>
  );
}
