import { type Locale } from '@/lib/i18n';

interface PartnershipsPageProps {
  params: {
    lang: string;
  };
}

export default function PartnershipsPage({ params }: PartnershipsPageProps) {
  const lang = params.lang as Locale;

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold text-foreground">
        {lang === 'fr' ? 'Partenariats' : 'Partnerships'}
      </h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-foreground/80">
          {lang === 'fr'
            ? 'Page Partenariats en construction...'
            : 'Partnerships page under construction...'}
        </p>
      </div>
    </div>
  );
}
