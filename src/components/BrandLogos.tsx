type LogoProps = { className?: string };

// Google Analytics — barres orange/ambre
export function GoogleAnalyticsLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-label="Google Analytics" role="img">
      <rect x="43" y="5" width="15" height="54" rx="7.5" fill="#F9AB00" />
      <rect x="24.5" y="23" width="15" height="36" rx="7.5" fill="#E37400" />
      <circle cx="13.5" cy="51.5" r="7.5" fill="#E37400" />
    </svg>
  );
}

// Google « G » — Google Partner
export function GoogleGLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-label="Google Partner" role="img">
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 9.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 3.18 29.93 1 24 1 15.4 1 7.96 5.93 4.34 13.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}

// Meta — Business Partner
export function MetaLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 72 40" className={className} fill="none" aria-label="Meta Business Partner" role="img">
      <defs>
        <linearGradient id="metaGrad" x1="0" y1="0.2" x2="1" y2="0.8">
          <stop offset="0" stopColor="#0064E1" />
          <stop offset="0.5" stopColor="#0082FB" />
          <stop offset="1" stopColor="#0064E1" />
        </linearGradient>
      </defs>
      <path
        d="M36 20 C36 8 25 8 25 20 C25 32 36 32 36 20 C36 8 47 8 47 20 C47 32 36 32 36 20 Z"
        stroke="url(#metaGrad)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
