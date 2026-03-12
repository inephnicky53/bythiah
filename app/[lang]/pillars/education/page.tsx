import { getTranslations, type Locale, t as translate } from '@/lib/i18n';
import PageHero from '@/components/PageHero';

interface PillarPageProps {
    params: {
        lang: string;
    };
}

export default function EducationPage({ params }: PillarPageProps) {
    const lang = params.lang as Locale;
    const translations = getTranslations(lang);

    return (
        <div className="min-h-screen bg-white">
            <PageHero
                title={translate(translations, 'home.pillars.education')}
                description={lang === 'fr'
                    ? "L'éducation est le fondement du développement durable et de la transformation sociale."
                    : "Education is the foundation of sustainable development and social transformation."}
                color="#7c572c"
                backgroundImage="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&q=80"
            />

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                        {lang === 'fr'
                            ? "Nous croyons fermement que chaque enfant, indépendamment de son origine ou de sa situation économique, mérite accès à une éducation de qualité. Nos programmes éducatifs visent à développer non seulement les compétences académiques, mais aussi les compétences de vie essentielles. Nous travaillons avec les écoles, les familles et les communautés pour créer un environnement d'apprentissage inclusif et stimulant."
                            : "We firmly believe that every child, regardless of their background or economic situation, deserves access to quality education. Our educational programs aim to develop not only academic skills but also essential life skills. We work with schools, families, and communities to create an inclusive and stimulating learning environment."}
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80"
                                alt="Education"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-accent">
                                {lang === 'fr' ? 'Notre Approche' : 'Our Approach'}
                            </h2>
                            <p className="text-foreground/70">
                                {lang === 'fr'
                                    ? "Nous fournissons des fournitures scolaires, payons les frais de scolarité pour les plus démunis et formons les enseignants aux méthodes pédagogiques modernes."
                                    : "We provide school supplies, pay tuition fees for the most disadvantaged, and train teachers in modern pedagogical methods."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
