import type { Metadata } from 'next';
import {
  locales,
  defaultLocale,
  isValidLocale,
  type Locale,
  localeSeo,
} from '@/lib/i18n';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HtmlLang from '@/components/HtmlLang';
import UnderConstruction from '@/components/UnderConstruction';

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  if (!isValidLocale(params.lang)) {
    return {};
  }
  const lang = params.lang as Locale;
  const seo = localeSeo[lang];

  return {
    title: {
      default: seo.defaultTitle,
      template: '%s | The Bythiah Project',
    },
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: 'The Bythiah Project',
      description: seo.description,
      type: 'website',
      locale: lang === 'fr' ? 'fr_FR' : 'en_US',
      alternateLocale: lang === 'fr' ? ['en_US'] : ['fr_FR'],
      images: [
        {
          url: '/images/logo2.png',
          alt: 'The Bythiah Project',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'The Bythiah Project',
      description: seo.description,
      images: ['/images/logo2.png'],
    },
    robots: { index: true, follow: true },
  };
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!isValidLocale(params.lang)) {
    notFound();
  }

  const lang = params.lang as Locale;

  return (
    <>
      <HtmlLang lang={lang} />
      <UnderConstruction lang={lang}>
        <div className="flex min-h-screen flex-col">
          <Header lang={lang} />
          <main className="flex-1 top-0">{children}</main>
          <Footer lang={lang} />
        </div>
      </UnderConstruction>
    </>
  );
}
