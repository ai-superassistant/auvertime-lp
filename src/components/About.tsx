import Reveal from '@/components/Reveal';

export default function About() {
  return (
    <section id="apropos" className="border-t border-line-soft/80 bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            À propos
          </p>
        </Reveal>
        <Reveal>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-fg sm:text-4xl">
            Une agence digitale au service de votre croissance.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
            De la stratégie au déploiement, nous accompagnons les entreprises dans leurs projets
            digitaux avec une approche centrée sur la performance, l'innovation et l'expérience
            utilisateur.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
