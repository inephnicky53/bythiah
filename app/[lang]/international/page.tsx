import { type Locale } from '@/lib/i18n';

interface InternationalPageProps {
  params: {
    lang: string;
  };
}

export default function InternationalPage({ params }: InternationalPageProps) {
  const lang = params.lang as Locale;

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold text-foreground">
        {lang === 'fr' ? 'International' : 'International'}
      </h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-foreground/80">
          {lang === 'fr'
            ? 'Page International en construction...'
            : 'International page under construction...'}
        </p>
      </div>
    </div>
  );
}
