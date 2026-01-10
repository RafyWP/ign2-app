import { Button } from '@/components/ui/button';
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Rocket } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { LanguageSelector } from './language-selector';
import { useTranslation } from './translation-provider';

export function Header() {
  const { t } = useTranslation();

  return (
    <header className='flex h-16 items-center justify-between gap-4 border-b px-4'>
      <Link
        href='/'
        className='flex items-center gap-x-4'
      >
        <Rocket />
        <span className='font-semibold'>{t('header.title')}</span>
      </Link>
      <div className='flex items-center gap-x-4'>
        <ThemeToggle />
        <LanguageSelector />
        <SignedOut>
          <SignInButton>
            <Button variant='ghost'>{t('header.signIn')}</Button>
          </SignInButton>
          <SignUpButton>
            <Button>{t('header.signUp')}</Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
