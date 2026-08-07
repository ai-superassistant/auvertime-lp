const STATS = [
  { value: '10+', label: "années d'expérience" },
  { value: '100+', label: 'projets accompagnés' },
  { value: '360°', label: "d'expertise digitale" },
];

export default function Stats() {
  return (
    <section id="chiffres" className="border-t border-ink-900/80 bg-ink-950 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="reveal text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="font-display text-5xl font-bold tracking-tight text-accent-400 sm:text-6xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-ink-400">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
