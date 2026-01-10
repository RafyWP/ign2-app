import { Button } from '@/components/ui/button';
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton, LanguageSelector } from '@clerk/nextjs';
import { Rocket } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  return (
    <header className='flex h-16 items-center justify-between gap-4 border-b px-4'>
      <Link
        href='/'
        className='flex items-center gap-x-4'
      >
        <Rocket />
        <span className='font-semibold'>ign2 App</span>
      </Link>
       <div className='flex items-center gap-x-4'>
         <ThemeToggle />
         <LanguageSelector />
         <SignedOut>
           <SignInButton>
             <Button variant='ghost'>Sign in</Button>
           </SignInButton>
           <SignUpButton>
             <Button>Sign up</Button>
           </SignUpButton>
         </SignedOut>
         <SignedIn>
           <UserButton />
         </SignedIn>
       </div>
    </header>
  );
}
