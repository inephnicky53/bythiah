import { getTranslations, type Locale, t as translate } from '@/lib/i18n';
import PageHero from '@/components/PageHero';

interface PillarPageProps {
    params: {
        lang: string;
    };
}

export default function HealthPage({ params }: PillarPageProps) {
    const lang = params.lang as Locale;
    const translations = getTranslations(lang);

    return (
        <div className="min-h-screen bg-white">
            <PageHero
                title={translate(translations, 'home.pillars.health')}
                description={lang === 'fr'
                    ? "La santé est un droit fondamental et une condition préalable à une vie productive et épanouie."
                    : "Health is a fundamental right and a prerequisite for a productive and fulfilling life."}
                color="#9d8142"
                backgroundImage="https://images.unsplash.com/photo-1576b603383d0-38a1b938c921?w=1200&q=80"
            />

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                        {lang === 'fr'
                            ? "Nous nous engageons à améliorer l'accès aux services de santé de qualité pour les populations les plus vulnérables. Nos programmes de santé couvrent la prévention des maladies, les soins de santé primaires, la sensibilisation à l'hygiène et la nutrition."
                            : "We are committed to improving access to quality health services for the most vulnerable populations. Our health programs cover disease prevention, primary healthcare, hygiene awareness, and nutrition."}
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl md:order-last">
                            <img
                                src="https://images.unsplash.com/photo-1505751172177-51ad1c92fa32?w=800&q=80"
                                alt="Health"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-accent">
                                {lang === 'fr' ? 'Soins et Prévention' : 'Care and Prevention'}
                            </h2>
                            <p className="text-foreground/70">
                                {lang === 'fr'
                                    ? "Nous accordons une attention particulière aux enfants atteints de maladies chroniques et aux personnes vivant avec le VIH/SIDA par un accompagnement médical et psychologique."
                                    : "We pay special attention to children with chronic diseases and people living with HIV/AIDS through medical and psychological support."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
