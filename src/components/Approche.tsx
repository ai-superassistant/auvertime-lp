import SectionHeading from '@/components/SectionHeading';

const STEPS = [
  { num: '01', title: 'Comprendre', text: 'Analyser vos enjeux et vos objectifs.' },
  { num: '02', title: 'Concevoir', text: 'Imaginer une solution adaptée à votre entreprise.' },
  { num: '03', title: 'Déployer', text: 'Créer des outils performants et évolutifs.' },
  { num: '04', title: 'Optimiser', text: 'Mesurer, analyser et améliorer en continu.' },
];

export default function Approche() {
  return (
    <section id="approche" className="border-t border-line-soft/80 bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading eyebrow="Notre approche" title="Une méthode claire, en quatre temps.">
          De la première rencontre à l'amélioration continue, chaque étape compte.
        </SectionHeading>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div key={step.num} className="reveal" style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="group relative h-full rounded-2xl border border-line/70 bg-card/50 p-7 transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-xl hover:shadow-accent-500/10">
                <span className="inline-block font-display text-4xl font-bold text-accent-500/30 transition-[transform,color] duration-200 ease-out group-hover:scale-110 group-hover:text-accent-500/60">
                  {step.num}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-fg">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{step.text}</p>

                {i < STEPS.length - 1 && (
                  <div className="absolute right-4 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gradient-to-r from-accent-500/40 to-transparent lg:block" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
