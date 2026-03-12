import { getTranslations, type Locale, t as translate } from '@/lib/i18n';
import ContactForm from '@/components/ContactForm';
import PageHero from '@/components/PageHero';

interface ContactPageProps {
  params: {
    lang: string;
  };
}

export default function ContactPage({ params }: ContactPageProps) {
  const lang = params.lang as Locale;
  const translations = getTranslations(lang);

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title={translate(translations, 'nav.contact')}
        description={lang === 'fr'
          ? 'Nous aimerions entendre parler de vous. Contactez-nous pour toute question ou suggestion.'
          : 'We would love to hear from you. Contact us for any questions or suggestions.'}
        color="#2c3e50"
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80"
      />

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-16">
        <ContactForm lang={lang} />
      </div>

      {/* Additional Info Section */}
      <div className="bg-accent/5 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            {lang === 'fr' ? 'Heures de fonctionnement' : 'Office Hours'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-semibold text-foreground mb-2">
                {lang === 'fr' ? 'Lundi - Vendredi' : 'Monday - Friday'}
              </h3>
              <p className="text-foreground/70">08:00 - 17:00</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-foreground mb-2">
                {lang === 'fr' ? 'Samedi' : 'Saturday'}
              </h3>
              <p className="text-foreground/70">09:00 - 13:00</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-foreground mb-2">
                {lang === 'fr' ? 'Dimanche' : 'Sunday'}
              </h3>
              <p className="text-foreground/70">
                {lang === 'fr' ? 'Fermé' : 'Closed'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
