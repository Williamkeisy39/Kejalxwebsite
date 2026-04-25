import type { Metadata } from 'next';
import { Manrope, Playfair_Display } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';
import { ReactNode } from 'react';
import ScrollRevealObserver from '@/components/scroll-reveal-observer';
import PublicShell from '@/components/public-shell';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Kejalux.com — Kenya\'s Real Estate Marketplace',
  description:
    'Search thousands of homes, apartments, land, and rentals across Kenya. Buy, sell, or rent property on Kejalux.com.',
  metadataBase: new URL('https://kejalux.com'),
  icons: {
    icon: '/kej.png'
  },
  openGraph: {
    title: 'Kejalux.com',
    description: 'Search, list, buy, sell, and rent property across Kenya on Kejalux.com',
    url: 'https://kejalux.com',
    siteName: 'Kejalux.com'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <body className="min-h-screen overflow-x-hidden bg-sand-50 text-ink-900">
        <ScrollRevealObserver />
        <PublicShell>{children}</PublicShell>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
