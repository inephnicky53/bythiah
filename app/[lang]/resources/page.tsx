import { type Locale } from '@/lib/i18n';

interface ResourcesPageProps {
  params: {
    lang: string;
  };
}

export default function ResourcesPage({ params }: ResourcesPageProps) {
  const lang = params.lang as Locale;

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold text-foreground">
        {lang === 'fr' ? 'Ressources' : 'Resources'}
      </h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-foreground/80">
          {lang === 'fr'
            ? 'Page Ressources en construction...'
            : 'Resources page under construction...'}
        </p>
      </div>
    </div>
  );
}
