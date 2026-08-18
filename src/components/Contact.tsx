import { useRef, useState, type FormEvent } from 'react';
import { Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

type FormState = {
  nom: string;
  email: string;
  telephone: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;
type Status = 'idle' | 'submitting' | 'success' | 'error';

const EMPTY: FormState = { nom: '', email: '', telephone: '', message: '' };

// Endpoint Formspree (ou compatible). Défini dans .env / les variables Vercel.
// Tant qu'il est absent, le formulaire reste en mode démonstration.
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

export default function Contact() {
  const [values, setValues] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const honeypot = useRef<HTMLInputElement>(null);

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const validate = (): boolean => {
    const next: Errors = {};
    if (!values.nom.trim()) next.nom = 'Votre nom est requis.';
    if (!values.email.trim()) {
      next.email = 'Votre email est requis.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Format d'email invalide.";
    }
    if (!values.message.trim()) next.message = 'Votre message est requis.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Piège anti-spam : un bot remplit le champ caché → on ignore silencieusement.
    if (honeypot.current?.value) {
      setStatus('success');
      setValues(EMPTY);
      return;
    }

    // Aucun endpoint configuré : mode démo (aucun envoi réel).
    if (!ENDPOINT) {
      setStatus('success');
      setValues(EMPTY);
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          nom: values.nom,
          email: values.email,
          telephone: values.telephone,
          message: values.message,
          _subject: `Nouveau message de ${values.nom} — auvertime.com`,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setValues(EMPTY);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const submitting = status === 'submitting';

  const fieldClass = (field: keyof FormState) =>
    `w-full rounded-xl border bg-card/60 px-4 py-3 text-sm text-fg placeholder:text-fg-faint transition-colors focus:outline-none focus:ring-2 focus:ring-accent-400/60 disabled:opacity-60 ${
      errors[field] ? 'border-red-500/60' : 'border-line focus:border-accent-500/60'
    }`;

  return (
    <section id="contact" className="border-t border-line-soft/80 bg-panel/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="reveal">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Contact
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-fg sm:text-4xl">
              Donnons vie à votre projet.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-fg-muted">
              Notre équipe est à votre écoute pour comprendre vos ambitions, échanger sur vos enjeux
              et imaginer avec vous des solutions digitales performantes.
            </p>
            <p className="mt-6 text-sm text-fg-muted">
              Ou écrivez-nous directement à{' '}
              <a
                href="mailto:contact@auvertime.com"
                className="font-medium text-brand transition-colors hover:text-brand-hover"
              >
                contact@auvertime.com
              </a>
            </p>
          </div>

          <div className="reveal" style={{ transitionDelay: '100ms' }}>
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-accent-500/40 bg-card/60 p-12 text-center">
                <CheckCircle2 size={48} className="text-brand" />
                <h3 className="mt-4 font-display text-xl font-semibold text-fg">
                  Message envoyé
                </h3>
                <p className="mt-2 text-sm text-fg-muted">
                  Merci pour votre message. Nous vous répondrons dans les meilleurs délais.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm font-medium text-brand hover:text-brand-hover"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                noValidate
                className="rounded-2xl border border-line/70 bg-card/50 p-6 sm:p-8"
              >
                <div className="grid gap-5">
                  <div>
                    <label htmlFor="nom" className="mb-1.5 block text-sm font-medium text-fg">
                      Nom <span className="text-brand">*</span>
                    </label>
                    <input
                      id="nom"
                      type="text"
                      value={values.nom}
                      onChange={update('nom')}
                      disabled={submitting}
                      placeholder="Votre nom"
                      className={fieldClass('nom')}
                    />
                    {errors.nom && <p className="mt-1.5 text-xs text-red-400">{errors.nom}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-fg">
                      Email <span className="text-brand">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={values.email}
                      onChange={update('email')}
                      disabled={submitting}
                      placeholder="vous@entreprise.com"
                      className={fieldClass('email')}
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="telephone" className="mb-1.5 block text-sm font-medium text-fg">
                      Téléphone <span className="text-fg-faint">(optionnel)</span>
                    </label>
                    <input
                      id="telephone"
                      type="tel"
                      value={values.telephone}
                      onChange={update('telephone')}
                      disabled={submitting}
                      placeholder="06 12 34 56 78"
                      className={fieldClass('telephone')}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-fg">
                      Message <span className="text-brand">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={values.message}
                      onChange={update('message')}
                      disabled={submitting}
                      placeholder="Décrivez votre projet en quelques mots..."
                      className={`${fieldClass('message')} resize-none`}
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                  </div>

                  {/* Honeypot anti-spam — invisible pour les humains */}
                  <input
                    ref={honeypot}
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />

                  {status === 'error' && (
                    <div className="flex items-start gap-2.5 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                      <AlertCircle size={18} className="mt-0.5 shrink-0" />
                      <span>
                        L'envoi a échoué. Réessayez, ou écrivez-nous à{' '}
                        <a href="mailto:contact@auvertime.com" className="font-medium underline">
                          contact@auvertime.com
                        </a>
                        .
                      </span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-on-accent transition-all duration-200 hover:bg-accent-400 hover:shadow-[0_0_28px_-4px] hover:shadow-accent-500/60 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:shadow-none"
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Envoi en cours…
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
