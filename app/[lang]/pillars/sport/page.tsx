import { getTranslations, type Locale, t as translate } from '@/lib/i18n';
import PageHero from '@/components/PageHero';

interface PillarPageProps {
    params: {
        lang: string;
    };
}

export default function SportPage({ params }: PillarPageProps) {
    const lang = params.lang as Locale;
    const translations = getTranslations(lang);

    return (
        <div className="min-h-screen bg-white">
            <PageHero
                title={translate(translations, 'home.pillars.sport')}
                description={lang === 'fr'
                    ? "Le sport est un outil puissant de développement personnel et social."
                    : "Sport is a powerful tool for personal and social development."}
                color="#5b532d"
                backgroundImage="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80"
            />

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                        {lang === 'fr'
                            ? "À travers le sport, nous développons le caractère, la discipline, la résilience et la confiance en soi chez les jeunes. Nos programmes sportifs visent à promouvoir l'activité physique, la cohésion sociale et l'esprit d'équipe."
                            : "Through sports, we develop character, discipline, resilience, and self-confidence in young people. Our sports programs aim to promote physical activity, social cohesion, and teamwork."}
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80"
                                alt="Sport"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-accent">
                                {lang === 'fr' ? 'Épanouissement par le Sport' : 'Fulfillment through Sport'}
                            </h2>
                            <p className="text-foreground/70">
                                {lang === 'fr'
                                    ? "Nous organisons des tournois, des séances d'entraînement régulières et fournissons des équipements sportifs pour encourager le talent local."
                                    : "We organize tournaments, regular training sessions, and provide sports equipment to encourage local talent."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
