'use client';

import { ClerkProvider as ClerkNextJSProvider } from '@clerk/nextjs';
import { shadcn } from '@clerk/themes';
import { enUS, ptBR, esES, frFR } from '@clerk/localizations';

type ClerkProviderProps = React.ComponentProps<typeof ClerkNextJSProvider>;

export function ClerkProvider({ children, appearance, ...props }: ClerkProviderProps) {
  const langKey = typeof window !== 'undefined' ? localStorage.getItem('clerk-language') || 'enUS' : 'enUS';
  const locs = { enUS, ptBR, esES, frFR };
  const baseLoc = locs[langKey as keyof typeof locs];
  // Custom overrides for untranslated strings
  const localization = langKey === 'ptBR' && baseLoc.signUp
    ? { ...baseLoc, signUp: { ...baseLoc.signUp, start: { ...baseLoc.signUp.start, title: 'Criar Conta' } } }
    : baseLoc;

  return (
    <ClerkNextJSProvider
      appearance={{
        theme: shadcn,
        ...appearance,
      }}
      localization={localization}
      {...props}
    >
      {children}
    </ClerkNextJSProvider>
  );
}
