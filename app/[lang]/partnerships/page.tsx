import { type Locale } from '@/lib/i18n';
import { Handshake, Building2, Globe, Users, Briefcase, User } from 'lucide-react';

interface PartnershipsPageProps {
  params: {
    lang: string;
  };
}

export default function PartnershipsPage({ params }: PartnershipsPageProps) {
  const lang = params.lang as Locale;

  const partnerTypes = [
    {
      icon: Building2,
      label: lang === 'fr' ? 'Gouvernements' : 'Governments',
    },
    {
      icon: Globe,
      label: lang === 'fr' ? 'Organisations non gouvernementales' : 'Non-governmental organizations',
    },
    {
      icon: Users,
      label: lang === 'fr' ? 'Institutions publiques' : 'Public institutions',
    },
    {
      icon: Briefcase,
      label: lang === 'fr' ? 'Secteur privé' : 'Private sector',
    },
    {
      icon: User,
      label: lang === 'fr' ? 'Particuliers' : 'Individuals',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-accent py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {lang === 'fr' ? '🤝 Partenariats' : '🤝 Partnerships'}
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed">
            {lang === 'fr'
              ? 'Ces partenariats permettent de renforcer l\'impact et la portée de nos actions.'
              : 'These partnerships strengthen the impact and reach of our actions.'}
          </p>
        </div>
      </div>

      {/* Collaborations */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Handshake className="w-8 h-8 text-primary flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-bold text-accent">
              {lang === 'fr' ? 'Nous développons des collaborations avec :' : 'We develop collaborations with:'}
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {partnerTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-border/40 bg-accent/5 hover:bg-accent/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{type.label}</span>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-lg text-foreground/70 leading-relaxed">
            {lang === 'fr'
              ? 'Ces partenariats permettent de renforcer l\'impact et la portée de nos actions au service des communautés les plus vulnérables.'
              : 'These partnerships strengthen the impact and reach of our actions in service of the most vulnerable communities.'}
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-accent py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {lang === 'fr' ? 'Devenir partenaire' : 'Become a partner'}
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            {lang === 'fr'
              ? 'Vous souhaitez collaborer avec nous ? Contactez-nous pour explorer les opportunités.'
              : 'Want to collaborate with us? Contact us to explore opportunities.'}
          </p>
          <a
            href={`/${lang}/contact`}
            className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            {lang === 'fr' ? 'Nous Contacter' : 'Contact Us'}
          </a>
        </div>
      </div>
    </div>
  );
}
