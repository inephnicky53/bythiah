import { getTranslations, type Locale, t as translate } from '@/lib/i18n';

interface AboutPageProps {
  params: {
    lang: string;
  };
}

export default function AboutPage({ params }: AboutPageProps) {
  const lang = params.lang as Locale;
  const translations = getTranslations(lang);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold text-foreground">
        {translate(translations, 'nav.about')}
      </h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-foreground/80">
          {lang === 'fr'
            ? 'Page À propos en construction...'
            : 'About page under construction...'}
        </p>
      </div>
    </div>
  );
}
