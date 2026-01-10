'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Language = 'en' | 'pt' | 'es' | 'fr';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    'header.title': 'IGN2 App',
    'header.signIn': 'Sign in',
    'header.signUp': 'Sign up',
    'home.title': 'To get started, edit the page.tsx file.',
    'home.description': 'Looking for a starting point or more instructions? Head over to',
    'home.templates': 'Templates',
    'home.or': 'or the',
    'home.learning': 'Learning',
    'home.center': 'center.',
    'home.deploy': 'Deploy Now',
    'home.docs': 'Documentation',
  },
  pt: {
    'header.title': 'App IGN2',
    'header.signIn': 'Entrar',
    'header.signUp': 'Cadastrar',
    'home.title': 'Para começar, edite o arquivo page.tsx.',
    'home.description': 'Procurando um ponto de partida ou mais instruções? Vá para',
    'home.templates': 'Modelos',
    'home.or': 'ou o',
    'home.learning': 'Centro de Aprendizado',
    'home.center': '.',
    'home.deploy': 'Implantar Agora',
    'home.docs': 'Documentação',
  },
  es: {
    'header.title': 'App IGN2',
    'header.signIn': 'Iniciar sesión',
    'header.signUp': 'Registrarse',
    'home.title': 'Para comenzar, edite el archivo page.tsx.',
    'home.description': '¿Buscando un punto de partida o más instrucciones? Dirígete a',
    'home.templates': 'Plantillas',
    'home.or': 'o el',
    'home.learning': 'Centro de Aprendizaje',
    'home.center': '.',
    'home.deploy': 'Desplegar Ahora',
    'home.docs': 'Documentación',
  },
  fr: {
    'header.title': 'App IGN2',
    'header.signIn': 'Se connecter',
    'header.signUp': 'S\'inscrire',
    'home.title': 'Pour commencer, modifiez le fichier page.tsx.',
    'home.description': 'Vous cherchez un point de départ ou plus d\'instructions ? Rendez-vous sur',
    'home.templates': 'Modèles',
    'home.or': 'ou le',
    'home.learning': 'Centre d\'apprentissage',
    'home.center': '.',
    'home.deploy': 'Déployer Maintenant',
    'home.docs': 'Documentation',
  },
};

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const stored = localStorage.getItem('app-language') as Language;
    if (stored && stored in translations) {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app-language', lang);
    localStorage.setItem('clerk-language', lang === 'pt' ? 'ptBR' : lang === 'es' ? 'esES' : lang === 'fr' ? 'frFR' : 'enUS');
    window.location.reload();
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