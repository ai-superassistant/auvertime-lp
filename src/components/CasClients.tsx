import { TrendingUp } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const CASES = [
  {
    sector: 'E-commerce',
    service: 'Refonte UX/UI & développement',
    metric: '+42%',
    metricLabel: 'de conversion',
  },
  {
    sector: 'Génération de leads',
    service: 'Création landing pages & acquisition',
    metric: '-31%',
    metricLabel: 'de coût par lead',
  },
  {
    sector: 'SaaS B2B',
    service: 'Stratégie Growth & fidélisation',
    metric: 'x2,4',
    metricLabel: 'de ROAS',
  },
];

export default function CasClients() {
  return (
    <section id="cas-clients" className="border-t border-line-soft/80 bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading eyebrow="Cas clients" title="Des résultats qui parlent d'eux-mêmes.">
          Quelques performances obtenues pour nos clients, tous secteurs confondus.
        </SectionHeading>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CASES.map((c, i) => (
            <Reveal key={c.sector} delay={i * 0.09}>
              <article className="group flex h-full flex-col rounded-2xl border border-line/70 bg-card/60 p-7 transition-[transform,border-color,background-color,box-shadow] duration-200 ease-out hover:-translate-y-1.5 hover:border-accent-500/50 hover:bg-card hover:shadow-2xl hover:shadow-accent-500/10">
                <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent-500/30 bg-accent-500/10 text-brand transition-all duration-200 ease-out group-hover:scale-110 group-hover:bg-accent-500/20 group-hover:text-brand-hover">
                  <TrendingUp size={20} />
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fg-subtle">
                  {c.sector}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{c.service}</p>

                <div className="mt-6 flex items-baseline gap-2 border-t border-line/60 pt-5">
                  <span className="font-display text-4xl font-bold tracking-tight text-brand">
                    {c.metric}
                  </span>
                  <span className="text-sm font-medium text-fg-muted">{c.metricLabel}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
