import { useClerk } from '@clerk/nextjs';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages = [
  { code: 'en-US', name: 'English', key: 'enUS' },
  { code: 'pt-BR', name: 'Português', key: 'ptBR' },
  { code: 'es-ES', name: 'Español', key: 'esES' },
  { code: 'fr-FR', name: 'Français', key: 'frFR' },
  // Add more as needed
];

export function LanguageSelector() {
  const { __unstable__setLocalization } = useClerk();

  const setLanguage = (langKey: string) => {
    // Dynamically import the localization
    import('@clerk/localizations').then((localizations) => {
      const localization = (localizations as any)[langKey];
      if (localization) {
        __unstable__setLocalization(localization);
      }
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <Globe className='h-[1.2rem] w-[1.2rem]' />
          <span className='sr-only'>Select language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {languages.map((lang) => (
          <DropdownMenuItem key={lang.code} onClick={() => setLanguage(lang.key)}>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}