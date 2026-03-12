import { type Locale } from '@/lib/i18n';
import PageHero from '@/components/PageHero';

interface PageProps {
    params: {
        lang: string;
    };
}

export default function GovernancePage({ params }: PageProps) {
    const lang = params.lang as Locale;

    return (
        <div className="min-h-screen bg-white">
            <PageHero
                title={lang === 'fr' ? 'Gouvernance' : 'Governance'}
                description={lang === 'fr'
                    ? 'Une structure transparente et engagée pour un impact maximal.'
                    : 'A transparent and committed structure for maximum impact.'}
                color="#2c3e50"
                backgroundImage="https://images.unsplash.com/photo-1577416414929-7a3bc76bac75?w=1200&q=80"
            />
            <div className="container mx-auto px-4 py-16">
                <p className="text-foreground/80">
                    {lang === 'fr' ? 'Page Gouvernance en construction...' : 'Governance page under construction...'}
                </p>
            </div>
        </div>
    );
}
