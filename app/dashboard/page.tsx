import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import { useTranslation } from '@/components/translation-provider';

export default function Dashboard() {
  const { t } = useTranslation();

  return (
    <>
      <SignedOut>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-2xl font-bold mb-4">{t('dashboard.signInRequired')}</h1>
          <SignInButton>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              {t('header.signIn')}
            </button>
          </SignInButton>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold">{t('dashboard.title')}</h1>
        </div>
      </SignedIn>
    </>
  );
}