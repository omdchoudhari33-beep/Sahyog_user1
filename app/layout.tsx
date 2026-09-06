import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/language-context';
import { LanguageSwitcher } from '@/components/language-switcher';
import { Toaster } from '@/components/ui/sonner';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sahyog - Report & Track Civic Issues',
  description:
    'Report civic issues like road damage, water leaks, and sanitation problems. Track progress in real time.',
  manifest: '/manifest.json',
  applicationName: 'Sahyog',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Sahyog',
  },
};

export const viewport = {
  themeColor: '#1E6FBA',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
} as const;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 border-b border-blue-800 bg-[#0b4f95] safe-top">
              <div className="mx-auto flex h-[76px] max-w-2xl items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-3" aria-label="Sahyog home">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-orange-400 bg-white text-2xl font-bold text-blue-800 shadow-sm">
                    स
                  </span>
                  <span className="leading-tight">
                    <span className="block font-serif text-[25px] font-bold tracking-tight text-white">
                      Sahyog
                    </span>
                    <span className="block text-[11px] font-medium tracking-wide text-blue-100 sm:text-xs">
                      Government of Jharkhand · Citizen-Campus Civic Platform
                    </span>
                  </span>
                </Link>
                <LanguageSwitcher />
              </div>
            </header>

            <main className="flex-1">{children}</main>

          </div>
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
