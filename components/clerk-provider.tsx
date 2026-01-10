'use client';

import { ClerkProvider as ClerkNextJSProvider } from '@clerk/nextjs';
import { shadcn } from '@clerk/themes';
import { enUS, ptBR, esES, frFR } from '@clerk/localizations';
import { useEffect, useState } from 'react';
import type { LocalizationResource } from '@clerk/types';

type ClerkProviderProps = React.ComponentProps<typeof ClerkNextJSProvider>;

export function ClerkProvider({ children, appearance, ...props }: ClerkProviderProps) {
  const [localization, setLocalization] = useState<LocalizationResource | undefined>(undefined);

  useEffect(() => {
    const langKey = localStorage.getItem('clerk-language') || 'enUS';
    const locs = { enUS, ptBR, esES, frFR };
    const loc = locs[langKey as keyof typeof locs];
    setLocalization(loc);
  }, []);

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
