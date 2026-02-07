import { type Locale } from '@/lib/i18n';

interface ActionsPageProps {
  params: {
    lang: string;
  };
}

export default function ActionsPage({ params }: ActionsPageProps) {
  const lang = params.lang as Locale;

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold text-foreground">
        {lang === 'fr' ? 'Actions' : 'Actions'}
      </h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-foreground/80">
          {lang === 'fr'
            ? 'Page Actions en construction...'
            : 'Actions page under construction...'}
        </p>
      </div>
    </div>
  );
}
