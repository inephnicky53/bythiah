import { getTranslations, type Locale, t as translate } from '@/lib/i18n';
import PageHero from '@/components/PageHero';
import DonationForm from '@/components/DonationForm';

interface DonatePageProps {
  params: {
    lang: string;
  };
}

export default function DonatePage({ params }: DonatePageProps) {
  const lang = params.lang as Locale;
  const translations = getTranslations(lang);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PageHero
        title={lang === 'fr' ? 'Faire un don' : 'Donate'}
        description={lang === 'fr'
          ? "Chaque contribution rapproche un enfant de ses rêves. Soutenez-nous aujourd'hui."
          : "Every contribution brings a child closer to their dreams. Support us today."}
        color="#c21d41" // Using a bold red for donation
        backgroundImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80"
      />

      <div className="container mx-auto px-4 py-16 -mt-20 relative z-20">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <DonationForm lang={lang} />
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-accent mb-4">
                {lang === 'fr' ? 'Pourquoi donner ?' : 'Why give?'}
              </h3>
              <ul className="space-y-4 text-foreground/70 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{lang === 'fr' ? '10$ permet d\'acheter des fournitures scolaires pour un trimestre.' : '10$ allows to buy school supplies for a quarter.'}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{lang === 'fr' ? '50$ couvre les frais médicaux de base pour une famille vulnérable.' : '50$ covers basic medical costs for a vulnerable family.'}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{lang === 'fr' ? '100$ finance une bourse d\'études complète pour une année.' : '100$ funds a full scholarship for one year.'}</span>
                </li>
              </ul>
            </div>

            <div className="bg-accent/10 p-6 rounded-2xl border border-accent/20">
              <h3 className="text-xl font-bold text-accent mb-2">
                {lang === 'fr' ? 'Don en nature' : 'In-kind donation'}
              </h3>
              <p className="text-sm text-foreground/70 mb-4">
                {lang === 'fr'
                  ? 'Vous avez des vêtements, du matériel scolaire ou informatique ? Contactez-nous directement.'
                  : 'Do you have clothes, school or computer equipment? Contact us directly.'}
              </p>
              <a href={`/${lang}/contact`} className="text-accent font-bold hover:underline">
                {lang === 'fr' ? 'Contactez-nous' : 'Contact Us'} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
