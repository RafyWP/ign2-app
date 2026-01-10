'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Cookies from 'js-cookie';
import { useTranslation } from './translation-provider';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸', key: 'en' },
  { code: 'pt', name: 'Português', flag: '🇧🇷', key: 'pt' },
  { code: 'es', name: 'Español', flag: '🇪🇸', key: 'es' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', key: 'fr' },
];

export function LanguageSelector() {
  const { language } = useTranslation();
  const currentLang = languages.find(lang => lang.key === language) || languages[0];

  const setLanguage = (langKey: string) => {
    Cookies.set('app-language', langKey, { expires: 365 });
    localStorage.setItem('clerk-language', langKey === 'pt' ? 'ptBR' : langKey === 'es' ? 'esES' : langKey === 'fr' ? 'frFR' : 'enUS');
    window.location.reload(); // Reload to apply new localization
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon' suppressHydrationWarning>
          <span className='text-lg'>{currentLang.flag}</span>
          <span className='sr-only'>Select language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {languages.map((lang) => (
          <DropdownMenuItem key={lang.code} onClick={() => setLanguage(lang.key)} className='py-1'>
            <span className='text-base mr-2'>{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}