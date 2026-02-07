import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { locales, defaultLocale, isValidLocale, type Locale } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Bythiah Project - Transforming Lives',
  description: 'NGO dedicated to education, health, and community development',
  openGraph: {
    title: 'The Bythiah Project',
    description: 'Transforming lives through education, health, and community development',
    type: 'website',
  },
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  // Validate locale
  if (!isValidLocale(params.lang)) {
    notFound();
  }

  const lang = params.lang as Locale;

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header lang={lang} />
          <main className="flex-1">{children}</main>
          <Footer lang={lang} />
        </div>
      </body>
    </html>
  );
}
