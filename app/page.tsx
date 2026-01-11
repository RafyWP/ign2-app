'use client';

import Image from "next/image";
import { useTranslation } from "@/components/translation-provider";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between gap-6 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="w-full flex flex-col items-center gap-6 text-center">
          <p className="text-sm text-muted-foreground">
            {t('home.eyebrow')}
          </p>
          <h1 className="w-full text-4xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            {t('home.title')}
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {t('home.description')}
          </p>
        </div>
        <div className="w-full flex flex-col gap-4 text-base font-medium justify-center sm:flex-row">
          <a
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:min-w-[200px]"
            href="/dashboard"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            {t('home.deploy')}
          </a>
        </div>
      </main>
    </div>
  );
}
