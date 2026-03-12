import { type Locale } from '@/lib/i18n';
import PageHero from '@/components/PageHero';

interface PageProps {
  params: {
    lang: string;
  };
}

export default function ResourcesPage({ params }: PageProps) {
  const lang = params.lang as Locale;

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title={lang === 'fr' ? 'Ressources' : 'Resources'}
        description={lang === 'fr'
          ? 'Documentation, rapports et outils pour nos collaborateurs.'
          : 'Documentation, reports and tools for our collaborators.'}
        color="#8e44ad"
        backgroundImage="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&q=80"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border border-gray-100 rounded-xl shadow-sm">
            <h3 className="font-bold mb-2">Rapport annuel 2023</h3>
            <button className="text-primary text-sm font-semibold">Télécharger PDF</button>
          </div>
          <div className="p-6 border border-gray-100 rounded-xl shadow-sm">
            <h3 className="font-bold mb-2">Charte éthique</h3>
            <button className="text-primary text-sm font-semibold">Télécharger PDF</button>
          </div>
        </div>
      </div>
    </div>
  );
}
