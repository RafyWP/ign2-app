'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import Cookies from 'js-cookie';

type Language = 'en' | 'pt' | 'es' | 'fr' | 'it' | 'ru';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Translations loaded from JSON files
import en from '@/lib/translations/en.json';
import pt from '@/lib/translations/pt.json';
import es from '@/lib/translations/es.json';
import fr from '@/lib/translations/fr.json';
import it from '@/lib/translations/it.json';
import ru from '@/lib/translations/ru.json';

const translations: Record<Language, Record<string, string>> = {
  en,
  pt,
  es,
  fr,
  it,
  ru,
};

export function TranslationProvider({ children, initialLanguage = 'en' }: { children: ReactNode; initialLanguage?: Language }) {
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    Cookies.set('app-language', lang, { expires: 365 });
    localStorage.setItem('clerk-language', lang === 'pt' ? 'ptBR' : lang === 'es' ? 'esES' : lang === 'fr' ? 'frFR' : 'enUS');
    window.location.reload(); // Reload to apply new localization
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }
  return context;
}