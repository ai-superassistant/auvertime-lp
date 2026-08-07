export default function About() {
  return (
    <section id="apropos" className="border-t border-ink-900/80 bg-ink-950 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
        <p className="reveal mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
          À propos
        </p>
        <h2 className="reveal font-display text-3xl font-semibold leading-tight tracking-tight text-ink-100 sm:text-4xl">
          Une agence digitale au service de votre croissance.
        </h2>
        <p
          className="reveal mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-300"
          style={{ transitionDelay: '80ms' }}
        >
          De la stratégie au déploiement, nous accompagnons les entreprises dans leurs projets
          digitaux avec une approche centrée sur la performance, l'innovation et l'expérience
          utilisateur.
        </p>
      </div>
    </section>
  );
}
