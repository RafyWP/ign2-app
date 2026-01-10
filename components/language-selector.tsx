'use client';

import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages = [
  { code: 'en', name: 'English', key: 'en' },
  { code: 'pt', name: 'Português', key: 'pt' },
  { code: 'es', name: 'Español', key: 'es' },
  { code: 'fr', name: 'Français', key: 'fr' },
];

export function LanguageSelector() {
  const setLanguage = (langKey: string) => {
    localStorage.setItem('app-language', langKey);
    localStorage.setItem('clerk-language', langKey === 'pt' ? 'ptBR' : langKey === 'es' ? 'esES' : langKey === 'fr' ? 'frFR' : 'enUS');
    window.location.reload(); // Reload to apply new localization
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