import { type Locale } from '@/lib/i18n';
import PageHero from '@/components/PageHero';

interface PageProps {
  params: {
    lang: string;
  };
}

export default function InternationalPage({ params }: PageProps) {
  const lang = params.lang as Locale;

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title={lang === 'fr' ? 'International' : 'International'}
        description={lang === 'fr'
          ? 'Nos partenariats et actions au-delà des frontières.'
          : 'Our partnerships and actions beyond borders.'}
        color="#2980b9"
        backgroundImage="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1200&q=80"
      />
      <div className="container mx-auto px-4 py-16">
        <p className="text-foreground/80">
          {lang === 'fr' ? 'Page International en construction...' : 'International page under construction...'}
        </p>
      </div>
    </div>
  );
}
