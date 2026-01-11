'use client';

import { Button } from '@/components/ui/button';
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { LanguageSelector } from './language-selector';
import { useTranslation } from './translation-provider';
import Image from "next/image";

export function Header() {
  const { t } = useTranslation();

  return (
    <header className='flex h-16 items-center justify-between gap-4 border-b px-4'>
      <Link
        href='/'
        className='flex items-center gap-x-4'
      >
        <Image
          className=""
          src="/ign2-app.png"
          alt="ign2 App logomark"
          width={24}
          height={24}
        />
        <span className='font-semibold'>{t('header.title')}</span>
      </Link>
       <div className='flex items-center gap-x-2'>
        <ThemeToggle />
        <LanguageSelector />
        <SignedOut>
           <SignInButton>
             <Button variant='ghost' size='sm'>{t('header.signIn')}</Button>
           </SignInButton>
           <SignUpButton>
             <Button size='sm'>{t('header.signUp')}</Button>
           </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
