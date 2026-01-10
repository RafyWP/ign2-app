import { ClerkProvider } from '@/components/clerk-provider';
import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import { TranslationProvider } from '@/components/translation-provider';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { cookies } from 'next/headers';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SaaS Starter Kit - ign2 App',
  description: 'SaaS Starter Kit built with Next.js, Clerk, and Tailwind CSS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const lang = (cookieStore.get('app-language')?.value as 'en' | 'pt' | 'es' | 'fr') || 'en';

  return (
    <ClerkProvider>
      <html
        lang={lang}
        className='h-full'
        suppressHydrationWarning
      >
        <body className={`${geistSans.variable} ${geistMono.variable} flex min-h-full flex-col antialiased`}>
          <TranslationProvider initialLanguage={lang}>
            <ThemeProvider
              attribute='class'
              defaultTheme='system'
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
            </ThemeProvider>
          </TranslationProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
