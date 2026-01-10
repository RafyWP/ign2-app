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

const translations: Record<Language, Record<string, string>> = {
  en: {
    'header.title': 'IGN2 App',
    'header.signIn': 'Sign in',
    'header.signUp': 'Sign up',
    'home.title': 'SaaS Starter Kit for launching secure MVPs',
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
    'home.title': 'SaaS Starter Kit para lançamento de MVP\'s Seguros',
    'home.description': 'Procurando um ponto de partida ou mais instruções? Vá para',
    'home.templates': 'Modelos',
    'home.or': 'ou o',
    'home.learning': 'Centro de Aprendizado',
    'home.center': '.',
    'home.deploy': 'Implantar Agora',
    'home.docs': 'Documentação',
    'signup.saveTime': 'Risparmia tempo di sviluppo',
    'signup.saveTimeDesc': 'Aggiungi autenticazione e gestione utenti alla tua app con solo poche righe di codice.',
    'signup.increaseEngagement': 'Aumenta l\'engagement',
    'signup.increaseEngagementDesc': 'Aggiungi interfacce intuitive progettate per ridurre l\'attrito per i tuoi utenti.',
    'signup.protectUsers': 'Proteggi i tuoi utenti',
    'signup.protectUsersDesc': 'Abilita funzionalità come la verifica in due passaggi e goditi aggiornamenti automatici di sicurezza.',
    'signup.matchBrand': 'Abbina alla tua marca',
    'signup.matchBrandDesc': 'Tema i nostri componenti pre-costruiti o integrati con le nostre API facili da usare.',
  },
  es: {
    'header.title': 'App IGN2',
    'header.signIn': 'Iniciar sesión',
    'header.signUp': 'Registrarse',
    'home.title': 'Kit de inicio SaaS para lanzar MVP seguros',
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
    'home.title': 'Kit de démarrage SaaS pour lancer des MVP sécurisés',
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
  it: {
    'header.title': 'App IGN2',
    'header.signIn': 'Accedi',
    'header.signUp': 'Registrati',
    'home.title': 'Kit di avvio SaaS per lanciare MVP sicuri',
    'home.description': 'Cerchi un punto di partenza o più istruzioni? Vai a',
    'home.templates': 'Modelli',
    'home.or': 'o il',
    'home.learning': 'Centro di apprendimento',
    'home.center': '.',
    'home.deploy': 'Distribuisci Ora',
    'home.docs': 'Documentazione',
    'signup.saveTime': 'Risparmia tempo di sviluppo',
    'signup.saveTimeDesc': 'Aggiungi autenticazione e gestione utenti alla tua app con solo poche righe di codice.',
    'signup.increaseEngagement': 'Aumenta l\'engagement',
    'signup.increaseEngagementDesc': 'Aggiungi interfacce intuitive progettate per ridurre l\'attrito per i tuoi utenti.',
    'signup.protectUsers': 'Proteggi i tuoi utenti',
    'signup.protectUsersDesc': 'Abilita funzionalità come la verifica in due passaggi e goditi aggiornamenti automatici di sicurezza.',
    'signup.matchBrand': 'Abbina alla tua marca',
    'signup.matchBrandDesc': 'Tema i nostri componenti pre-costruiti o integrati con le nostre API facili da usare.',
  },
  ru: {
    'header.title': 'Приложение IGN2',
    'header.signIn': 'Войти',
    'header.signUp': 'Регистрация',
    'home.title': 'SaaS Starter Kit для запуска безопасных MVP',
    'home.description': 'Ищете отправную точку или больше инструкций? Перейдите к',
    'home.templates': 'Шаблоны',
    'home.or': 'или',
    'home.learning': 'Центр обучения',
    'home.center': '.',
    'home.deploy': 'Развернуть сейчас',
    'home.docs': 'Документация',
    'signup.saveTime': 'Экономьте время разработки',
    'signup.saveTimeDesc': 'Добавьте аутентификацию и управление пользователями в свое приложение всего за несколько строк кода.',
    'signup.increaseEngagement': 'Увеличьте вовлеченность',
    'signup.increaseEngagementDesc': 'Добавьте интуитивные интерфейсы, разработанные для снижения трения для ваших пользователей.',
    'signup.protectUsers': 'Защитите своих пользователей',
    'signup.protectUsersDesc': 'Включите функции, такие как двухэтапная проверка, и наслаждайтесь автоматическими обновлениями безопасности.',
    'signup.matchBrand': 'Соответствует вашему бренду',
    'signup.matchBrandDesc': 'Тема наших предварительно созданных компонентов или интеграция с нашими простыми в использовании API.',
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