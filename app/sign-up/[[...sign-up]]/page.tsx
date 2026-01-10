'use client';

import { SignUp } from '@clerk/nextjs';
import { ChartLine, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { useTranslation } from '@/components/translation-provider';

export default function SignUpPage() {
  const { t } = useTranslation();

  return (
    <div className='bg-muted grid flex-1 lg:grid-cols-2'>
      <div className='hidden flex-1 items-center justify-end p-6 md:p-10 lg:flex'>
        <ul className='max-w-sm space-y-8'>
           <li>
             <div className='flex items-center gap-2'>
               <Clock className='size-4' />
               <p className='font-semibold'>{t('signup.saveTime')}</p>
             </div>
             <p className='text-muted-foreground mt-2 text-sm'>
               {t('signup.saveTimeDesc')}
             </p>
           </li>
           <li>
             <div className='flex items-center gap-2'>
               <ChartLine className='size-4' />
               <p className='font-semibold'>{t('signup.increaseEngagement')}</p>
             </div>
             <p className='text-muted-foreground mt-2 text-sm'>
               {t('signup.increaseEngagementDesc')}
             </p>
           </li>
           <li>
             <div className='flex items-center gap-2'>
               <ShieldCheck className='size-4' />
               <p className='font-semibold'>{t('signup.protectUsers')}</p>
             </div>
             <p className='text-muted-foreground mt-2 text-sm'>
               {t('signup.protectUsersDesc')}
             </p>
           </li>
           <li>
             <div className='flex items-center gap-2'>
               <Sparkles className='size-4' />
               <p className='font-semibold'>{t('signup.matchBrand')}</p>
             </div>
             <p className='text-muted-foreground mt-2 text-sm'>
               {t('signup.matchBrandDesc')}
             </p>
           </li>
        </ul>
      </div>
      <div className='flex flex-1 items-center justify-center p-6 md:p-10 lg:justify-start'>
        <SignUp />
      </div>
    </div>
  );
}
