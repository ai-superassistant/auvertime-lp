import { ArrowRight } from 'lucide-react';
import CTAButton from '@/components/CTAButton';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-24 sm:pt-36 sm:pb-32">
      {/* Background composition */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(16,185,129,0.16),transparent_60%)]" />
        <div className="absolute -top-24 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-accent-600/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[24rem] w-[24rem] rounded-full bg-accent-800/20 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-3.5 py-1.5 text-xs font-medium text-accent-300">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
            Agence digitale · Dev · Acquisition · Stratégie
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink-100 sm:text-5xl lg:text-6xl">
            Donnez une nouvelle dimension à votre présence digitale.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
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
        <div className="reveal relative hidden lg:block" style={{ transitionDelay: '120ms' }}>
          <div className="relative aspect-square">
            <div className="absolute inset-0 rounded-[2rem] border border-ink-700/60 bg-gradient-to-br from-ink-850 to-ink-900" />
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(80%_80%_at_70%_20%,rgba(16,185,129,0.18),transparent_70%)]" />

            {/* Floating shapes */}
            <div className="absolute left-[12%] top-[14%] h-24 w-24 rounded-2xl border border-accent-400/40 bg-accent-500/10 backdrop-blur-sm" />
            <div className="absolute right-[14%] top-[22%] h-16 w-16 rounded-full border border-accent-300/40 bg-accent-500/20" />
            <div className="absolute bottom-[16%] left-[20%] h-20 w-32 rounded-xl border border-ink-600 bg-ink-800/70 backdrop-blur-sm" />
            <div className="absolute bottom-[22%] right-[10%] h-28 w-28 rounded-3xl border border-accent-500/30 bg-gradient-to-br from-accent-600/30 to-transparent" />

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
                cx="160"
                cy="160"
                r="80"
                stroke="rgba(16,185,129,0.35)"
                strokeWidth="1"
                strokeDasharray="4 6"
              />
              <circle cx="160" cy="160" r="40" stroke="rgba(16,185,129,0.5)" strokeWidth="1.5" />
              <circle cx="160" cy="40" r="4" fill="#10b981" />
              <circle cx="280" cy="160" r="3" fill="#34d399" />
              <circle cx="160" cy="280" r="3" fill="#10b981" />
              <circle cx="40" cy="160" r="4" fill="#34d399" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
