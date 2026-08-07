import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

type FormState = {
  nom: string;
  email: string;
  telephone: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const EMPTY: FormState = { nom: '', email: '', telephone: '', message: '' };

export default function Contact() {
  const [values, setValues] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

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

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // TODO: brancher un service d'envoi (ex: Formspree, EmailJS, ou API custom)
    setSubmitted(true);
    setValues(EMPTY);
  };

  const fieldClass = (field: keyof FormState) =>
    `w-full rounded-xl border bg-card/60 px-4 py-3 text-sm text-fg placeholder:text-fg-faint transition-colors focus:outline-none focus:ring-2 focus:ring-accent-400/60 ${
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
              Parlons de vos ambitions et construisons ensemble les solutions digitales qui feront
              la différence.
            </p>
          </div>

          <div className="reveal" style={{ transitionDelay: '100ms' }}>
            {submitted ? (
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
                  onClick={() => setSubmitted(false)}
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
                      placeholder="Décrivez votre projet en quelques mots..."
                      className={`${fieldClass('message')} resize-none`}
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-on-accent transition-all duration-200 hover:bg-accent-400 hover:shadow-[0_0_28px_-4px] hover:shadow-accent-500/60 active:scale-[0.98]"
                  >
                    <Send size={16} />
                    Envoyer le message
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
