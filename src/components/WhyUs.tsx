import { Check } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const REASONS = [
  'Une expertise digitale globale',
  'Des solutions sur mesure',
  'Une approche orientée performance',
  'Un accompagnement durable',
  'Une équipe réactive et engagée',
];

export default function WhyUs() {
  return (
    <section id="pourquoi" className="border-t border-line-soft/80 bg-panel/40 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <SectionHeading eyebrow="Pourquoi AUVERTIME" title="Ce qui nous distingue.">
          Cinq engagements concrets, au service de vos résultats.
        </SectionHeading>

        <Reveal className="mt-14 grid gap-4 sm:grid-cols-2">
          {REASONS.map((reason) => (
            <div
              key={reason}
              className="group flex items-center gap-4 rounded-xl border border-line/60 bg-card/50 px-5 py-4 transition-[transform,border-color,background-color] duration-150 ease-out hover:-translate-y-0.5 hover:border-accent-500/40 hover:bg-card"
            >
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-brand transition-all duration-150 ease-out group-hover:scale-110 group-hover:bg-accent-500/25">
                <Check size={18} />
              </span>
              <span className="text-base font-medium text-fg">{reason}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
