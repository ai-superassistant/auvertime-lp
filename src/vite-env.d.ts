/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Endpoint du formulaire de contact (Formspree ou compatible). */
  readonly VITE_CONTACT_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
