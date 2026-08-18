import { Code2, Megaphone, Compass, Check } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const EXPERTISES = [
  {
    icon: Compass,
    title: 'Stratégie digitale',
    tagline: 'Construire une présence digitale performante commence par une vision claire.',
    bullets: ['Audit et diagnostic digital', 'Positionnement et objectifs', 'Roadmap et priorisation'],
    description:
      `Nous vous accompagnons dans la définition de votre stratégie afin d'aligner vos objectifs business avec les meilleurs leviers digitaux.`,
  },
  {
    icon: Code2,
    title: 'Développement web',
    tagline: 'Des sites internet conçus pour valoriser votre marque et accompagner votre développement.',
    bullets: ['Sites vitrines', 'Plateformes métiers', 'E-commerce', 'Développements sur mesure'],
    description: 'Des solutions rapides, intuitives et évolutives, pensées pour durer.',
  },
  {
    icon: Megaphone,
    title: 'Acquisition & campagnes publicitaires',
    tagline: 'Touchez les bonnes audiences, au bon moment.',
    bullets: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Native Ads', 'Microsoft Ads', 'YouTube Ads', 'Remarketing'],
    description: 'Chaque campagne est optimisée pour maximiser votre visibilité et améliorer vos performances.',
    isTagGrid: true,
  },
];

export default function Expertises() {
  return (
    <section id="expertises" className="border-t border-line-soft/80 bg-panel/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading eyebrow="Nos expertises" title="Trois leviers, une même exigence de résultat.">
          Nous couvrons l'ensemble de la chaîne de valeur digitale, de la conception à l'acquisition.
        </SectionHeading>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {EXPERTISES.map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="reveal" style={{ transitionDelay: `${i * 90}ms` }}>
                <article className="group flex h-full flex-col rounded-2xl border border-line/70 bg-card/60 p-7 transition-[transform,border-color,background-color,box-shadow] duration-200 ease-out hover:-translate-y-1.5 hover:border-accent-500/50 hover:bg-card hover:shadow-2xl hover:shadow-accent-500/10">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent-500/30 bg-accent-500/10 text-brand transition-all duration-200 ease-out group-hover:scale-110 group-hover:bg-accent-500/20 group-hover:text-brand-hover">
                    <Icon size={22} />
                  </div>

                  <h3 className="font-display text-xl font-semibold text-fg">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">{card.tagline}</p>

                  {card.bullets && (
                    <div className="mt-6">
                      {card.isTagGrid ? (
                        <div className="flex flex-wrap gap-2">
                          {card.bullets.map((b) => (
                            <span
                              key={b}
                              className="rounded-full border border-edge bg-chip/60 px-3 py-1.5 text-xs font-medium text-fg transition-[transform,border-color,color] duration-150 ease-out hover:-translate-y-0.5 hover:border-accent-500/60 hover:text-brand group-hover:border-accent-500/40"
                            >
                              {b}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <ul className="space-y-2.5">
                          {card.bullets.map((b) => (
                            <li key={b} className="flex items-center gap-2.5 text-sm text-fg">
                              <Check size={15} className="shrink-0 text-brand" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  <p className="mt-6 border-t border-line/60 pt-5 text-sm italic leading-relaxed text-fg-subtle">
                    {card.description}
                  </p>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
