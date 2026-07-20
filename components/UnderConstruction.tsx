'use client';

import { useGetSettingsQuery } from '@/lib/store/apiSlice';
import { type Locale } from '@/lib/i18n';
import NextImage from 'next/image';

interface UnderConstructionProps {
  lang: Locale;
  children: React.ReactNode;
}

export default function UnderConstruction({ lang, children }: UnderConstructionProps) {
  const { data, error, isLoading, isUninitialized } = useGetSettingsQuery();

  // Tant que le backend n'a pas répondu : on affiche un loader plein écran
  // (évite le flash du site avant de savoir s'il est en maintenance).
  if (isLoading || isUninitialized) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-primary/10 to-accent/10 flex items-center justify-center p-4">
        <div className="flex flex-col items-center gap-6">
          <NextImage
            src="/images/logo2.png"
            alt="The Bythiah Project"
            width={96}
            height={96}
            className="object-contain animate-pulse"
            priority
          />
          <div className="flex justify-center gap-2" role="status" aria-label={lang === 'fr' ? 'Chargement' : 'Loading'}>
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    );
  }

  // Si l'API est indisponible, on n'empêche pas l'accès au site (fail-open).
  if (error) {
    return <>{children}</>;
  }

  const isUnderConstruction = data?.settings?.isUnderConstruction ?? false;
  const messageFr = data?.settings?.constructionMessageFr || 'Site en maintenance. Merci de votre patience.';
  const messageEn = data?.settings?.constructionMessageEn || 'Site under maintenance. Thank you for your patience.';

  if (!isUnderConstruction) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-accent/10 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
        <div className="mb-6 flex justify-center">
          <NextImage
            src="/images/logo2.png"
            alt="The Bythiah Project"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-accent mb-4">
          {lang === 'fr' ? 'Nous revenons bientôt !' : 'We will be back soon!'}
        </h1>
        <p className="text-lg text-accent/70 mb-8">
          {lang === 'fr' ? messageFr : messageEn}
        </p>
        <div className="flex justify-center gap-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
