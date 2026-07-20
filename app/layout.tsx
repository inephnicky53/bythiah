import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { defaultLocale, defaultSiteUrl } from '@/lib/i18n';
import ReduxProvider from '@/components/ReduxProvider';

const inter = Inter({ subsets: ['latin'] });

const site = process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: {
    default: 'The Bythiah Project',
    template: '%s | The Bythiah Project',
  },
  description:
    'Humanitarian NGO: education, health, and sport for children and youth in the DRC and beyond.',
  icons: {
    icon: [{ url: '/images/logo2.png', type: 'image/png' }],
    apple: '/images/logo2.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'The Bythiah Project',
    images: [
      {
        url: '/images/logo2.png',
        alt: 'The Bythiah Project',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/logo2.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={defaultLocale} suppressHydrationWarning>
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
