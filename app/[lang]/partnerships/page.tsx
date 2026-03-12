import { type Locale } from '@/lib/i18n';
import PageHero from '@/components/PageHero';

interface PageProps {
  params: {
    lang: string;
  };
}

export default function PartnershipsPage({ params }: PageProps) {
  const lang = params.lang as Locale;

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title={lang === 'fr' ? 'Partenariats' : 'Partnerships'}
        description={lang === 'fr'
          ? 'Ensemble, nous sommes plus forts pour changer les choses.'
          : 'Together, we are stronger to change things.'}
        color="#e67e22"
        backgroundImage="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&q=80"
      />
      <div className="container mx-auto px-4 py-16">
        <p className="text-foreground/80">
          {lang === 'fr' ? 'Page Partenariats en construction...' : 'Partnerships page under construction...'}
        </p>
      </div>
    </div>
  );
}
