import { ArrowRight } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import { GoogleAnalyticsLogo, GoogleGLogo, MetaLogo } from '@/components/BrandLogos';

const PARTNERS = [
  {
    Logo: GoogleAnalyticsLogo,
    label: 'Google Analytics',
    logoClass: 'h-6 w-6',
    position: 'left-[14%] top-[10%]',
    anim: 'anim-float',
    delay: '0s',
  },
  {
    Logo: GoogleGLogo,
    label: 'Google Partner',
    logoClass: 'h-6 w-6',
    position: 'right-[12%] top-[24%]',
    anim: 'anim-float-alt',
    delay: '-1.4s',
  },
  {
    Logo: MetaLogo,
    label: 'Meta Business Partner',
    logoClass: 'h-6 w-10',
    position: 'bottom-[10%] left-[28%]',
    anim: 'anim-drift',
    delay: '-0.7s',
  },
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-24 sm:pt-36 sm:pb-32">
      {/* Background composition */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(16,185,129,0.16),transparent_60%)]" />
        <div className="absolute -top-24 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-accent-600/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[24rem] w-[24rem] rounded-full bg-accent-800/20 blur-[120px]" />
        <div
          className="absolute inset-0"
          style={{
            opacity: 'var(--grid-opacity)',
            backgroundImage:
              'linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal-immediate">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-3.5 py-1.5 text-xs font-medium text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
            Agence digitale · Dev · Acquisition · Stratégie
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-fg sm:text-5xl lg:text-6xl">
            Donnez une nouvelle dimension à votre présence digitale.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
            Nous concevons des expériences digitales performantes qui renforcent votre visibilité,
            développent votre activité et créent de la valeur durable.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <CTAButton to="expertises">
              Découvrir nos expertises
              <ArrowRight size={16} />
            </CTAButton>
            <CTAButton to="contact" variant="ghost">
              Nous contacter
            </CTAButton>
          </div>
        </div>

        {/* Abstract graphic */}
        <div
          className="reveal-immediate relative hidden lg:block"
          style={{ animationDelay: '120ms' }}
        >
          <div className="relative aspect-square">
            <div className="absolute inset-0 rounded-[2rem] border border-line/60 bg-gradient-to-br from-card to-panel" />
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(80%_80%_at_70%_20%,rgba(16,185,129,0.18),transparent_70%)]" />

            {/* Floating partner badges */}
            {PARTNERS.map(({ Logo, label, logoClass, position, anim, delay }) => (
              <div
                key={label}
                className={`${anim} absolute ${position} z-10 flex w-40 flex-col items-center gap-2.5 rounded-2xl border border-accent-500/20 bg-card/90 px-4 py-4 text-center shadow-xl shadow-black/25 backdrop-blur-sm`}
                style={{ animationDelay: delay }}
              >
                <div className="flex h-7 items-center justify-center">
                  <Logo className={logoClass} />
                </div>
                <span className="text-xs font-semibold leading-tight text-fg">{label}</span>
              </div>
            ))}

            {/* Ring */}
            <svg
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              width="320"
              height="320"
              viewBox="0 0 320 320"
              fill="none"
            >
              <circle cx="160" cy="160" r="120" stroke="rgba(16,185,129,0.25)" strokeWidth="1" />
              <circle
                className="anim-orbit"
                cx="160"
                cy="160"
                r="80"
                stroke="rgba(16,185,129,0.35)"
                strokeWidth="1"
                strokeDasharray="4 6"
              />
              <circle cx="160" cy="160" r="40" stroke="rgba(16,185,129,0.5)" strokeWidth="1.5" />
              <g className="anim-orbit-rev">
                <circle className="anim-twinkle" cx="160" cy="40" r="4" fill="#10b981" />
                <circle
                  className="anim-twinkle"
                  cx="280"
                  cy="160"
                  r="3"
                  fill="#34d399"
                  style={{ animationDelay: '-1.2s' }}
                />
                <circle
                  className="anim-twinkle"
                  cx="160"
                  cy="280"
                  r="3"
                  fill="#10b981"
                  style={{ animationDelay: '-2.4s' }}
                />
                <circle
                  className="anim-twinkle"
                  cx="40"
                  cy="160"
                  r="4"
                  fill="#34d399"
                  style={{ animationDelay: '-0.6s' }}
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
