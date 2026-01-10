'use client';

import { ClerkProvider as ClerkNextJSProvider } from '@clerk/nextjs';
import { shadcn } from '@clerk/themes';
import { useEffect, useState } from 'react';

type ClerkProviderProps = React.ComponentProps<typeof ClerkNextJSProvider>;

export function ClerkProvider({ children, appearance, ...props }: ClerkProviderProps) {
  const [localization, setLocalization] = useState<any>(null);

  useEffect(() => {
    const langKey = localStorage.getItem('clerk-language') || 'enUS';
    import('@clerk/localizations').then((localizations) => {
      const loc = (localizations as any)[langKey];
      setLocalization(loc);
    });
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
