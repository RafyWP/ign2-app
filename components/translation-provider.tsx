'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import Cookies from 'js-cookie';

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
    'signup.saveTime': 'Save on development time',
    'signup.saveTimeDesc': 'Add authentication and user management to your app with just a few lines of code.',
    'signup.increaseEngagement': 'Increase engagement',
    'signup.increaseEngagementDesc': 'Add intuitive UIs designed to decrease friction for your users.',
    'signup.protectUsers': 'Protect your users',
    'signup.protectUsersDesc': 'Enable features like two-step verification and enjoy automatic security updates.',
    'signup.matchBrand': 'Match your brand',
    'signup.matchBrandDesc': 'Theme our pre-built components, or integrate with our easy-to-use APIs.',
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
    'signup.saveTime': 'Economize tempo de desenvolvimento',
    'signup.saveTimeDesc': 'Adicione autenticação e gerenciamento de usuários ao seu app com apenas algumas linhas de código.',
    'signup.increaseEngagement': 'Aumente o engajamento',
    'signup.increaseEngagementDesc': 'Adicione interfaces intuitivas projetadas para reduzir o atrito para seus usuários.',
    'signup.protectUsers': 'Proteja seus usuários',
    'signup.protectUsersDesc': 'Habilite recursos como verificação em duas etapas e aproveite atualizações automáticas de segurança.',
    'signup.matchBrand': 'Combine com sua marca',
    'signup.matchBrandDesc': 'Tema nossos componentes pré-construídos ou integre com nossas APIs fáceis de usar.',
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
    'signup.saveTime': 'Ahorra tiempo de desarrollo',
    'signup.saveTimeDesc': 'Agrega autenticación y gestión de usuarios a tu app con solo unas pocas líneas de código.',
    'signup.increaseEngagement': 'Aumenta el compromiso',
    'signup.increaseEngagementDesc': 'Agrega interfaces intuitivas diseñadas para reducir la fricción para tus usuarios.',
    'signup.protectUsers': 'Protege a tus usuarios',
    'signup.protectUsersDesc': 'Habilita funciones como verificación de dos pasos y disfruta de actualizaciones automáticas de seguridad.',
    'signup.matchBrand': 'Coincide con tu marca',
    'signup.matchBrandDesc': 'Tema nuestros componentes preconstruidos o intégrate con nuestras APIs fáciles de usar.',
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
    'signup.saveTime': 'Économisez du temps de développement',
    'signup.saveTimeDesc': 'Ajoutez l\'authentification et la gestion des utilisateurs à votre app avec seulement quelques lignes de code.',
    'signup.increaseEngagement': 'Augmentez l\'engagement',
    'signup.increaseEngagementDesc': 'Ajoutez des interfaces intuitives conçues pour réduire les frictions pour vos utilisateurs.',
    'signup.protectUsers': 'Protégez vos utilisateurs',
    'signup.protectUsersDesc': 'Activez des fonctionnalités comme la vérification en deux étapes et profitez des mises à jour automatiques de sécurité.',
    'signup.matchBrand': 'Correspond à votre marque',
    'signup.matchBrandDesc': 'Thématisez nos composants pré-construits ou intégrez-vous avec nos APIs faciles à utiliser.',
  },
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