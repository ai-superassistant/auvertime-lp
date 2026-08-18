import { ArrowLeft } from 'lucide-react';

const INFO = [
  { label: 'Raison sociale', value: 'AUVERTIME' },
  { label: 'Forme juridique', value: 'Société par actions simplifiée (SAS)' },
  { label: 'SIREN', value: '813 298 247' },
  { label: 'SIRET (siège)', value: '813 298 247 00012' },
  { label: 'N° TVA intracommunautaire', value: 'FR15813298247' },
  { label: 'Capital social', value: '100 €' },
  { label: 'Adresse du siège social', value: '2 Rue Gaston Israel, 95880 Enghien-les-Bains' },
  { label: 'Code APE/NAF', value: '6201Z — Programmation informatique' },
  { label: 'Président', value: 'Bryan Chikli' },
  { label: 'Directeur de la publication', value: 'Bryan Chikli' },
];

export default function LegalNotice() {
  return (
    <div className="min-h-screen bg-canvas pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-brand"
        >
          <ArrowLeft size={16} />
          Retour à l'accueil
        </a>

        <h1 className="mt-8 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
          Mentions légales
        </h1>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="font-display text-lg font-semibold text-brand">
              Éditeur du site
            </h2>
            <dl className="mt-4 divide-y divide-line/60 rounded-xl border border-line/60 bg-panel/40">
              {INFO.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-1 gap-1 px-5 py-3.5 sm:grid-cols-[1fr_1.4fr] sm:gap-4"
                >
                  <dt className="text-sm font-medium text-fg-subtle">{item.label}</dt>
                  <dd className="text-sm text-fg">{item.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-brand">
              Hébergeur du site
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-fg-muted">
              Le site est hébergé par Vercel Inc., société de droit américain, dont le siège social
              est situé au 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
              <br />
              Site internet :{' '}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noreferrer noopener"
                className="text-brand transition-colors hover:text-brand-hover"
              >
                https://vercel.com
              </a>
              <br />
              Contact :{' '}
              <a
                href="mailto:privacy@vercel.com"
                className="text-brand transition-colors hover:text-brand-hover"
              >
                privacy@vercel.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-brand">
              Propriété intellectuelle
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-fg-muted">
              L'ensemble des éléments présents sur ce site (textes, graphismes, logos, mises en page,
              structure) est la propriété d'AUVERTIME ou de ses partenaires et est protégé par le
              droit de la propriété intellectuelle. Toute reproduction, représentation, modification
              ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite et
              pourra faire l'objet de poursuites judiciaires.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-brand">
              Données personnelles
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-fg-muted">
              Ce site ne collecte aucune donnée personnelle en dehors du formulaire de contact. Les
              informations transmises via ce formulaire sont utilisées uniquement pour répondre à
              votre demande et ne font l'objet d'aucune cession à des tiers. Conformément au Règlement
              Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous
              disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour
              l'exercer, vous pouvez nous contacter via le formulaire de la page d'accueil.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-brand">
              Cookies
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-fg-muted">
              Ce site n'utilise pas de cookies de suivi à des fins publicitaires. Le cas échéant, des
              cookies techniques strictement nécessaires au bon fonctionnement du site peuvent être
              utilisés. Aucune donnée n'est transmise à des services tiers à des fins d'analyse ou de
              ciblage publicitaire.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
