import { type Locale } from '@/lib/i18n';
import PageHero from '@/components/PageHero';

interface ActionsPageProps {
  params: {
    lang: string;
  };
}

export default function ActionsPage({ params }: ActionsPageProps) {
  const lang = params.lang as Locale;

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title={lang === 'fr' ? 'Nos Actions' : 'Our Actions'}
        description={lang === 'fr'
          ? 'Découvrez nos initiatives sur le terrain pour soutenir les populations localement.'
          : 'Discover our initiatives on the ground to support local populations.'}
        color="#27ae60"
        backgroundImage="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&q=80"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-foreground/80">
            {lang === 'fr'
              ? 'Page Actions en construction...'
              : 'Actions page under construction...'}
          </p>
        </div>
      </div>
    </div>
  );
}
