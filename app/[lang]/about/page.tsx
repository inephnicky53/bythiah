import { getTranslations, type Locale, t as translate } from '@/lib/i18n';

interface AboutPageProps {
  params: {
    lang: string;
  };
}

export default function AboutPage({ params }: AboutPageProps) {
  const lang = params.lang as Locale;
  const translations = getTranslations(lang);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-accent py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {translate(translations, 'nav.about')}
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            {lang === 'fr'
              ? 'Découvrez l\'histoire et la mission de The Bythiah Project.'
              : 'Discover the story and mission of The Bythiah Project.'}
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Organization Info */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-accent mb-6">
            {lang === 'fr' ? 'Qui sommes-nous ?' : 'Who are we?'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                {translate(translations, 'home.about.description')}
              </p>
              <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                {translate(translations, 'home.about.intervention')}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {lang === 'fr'
                  ? 'Depuis notre création, nous avons touché des milliers de vies en RDC et au-delà. Notre approche holistique nous permet d\'adresser les besoins réels des communautés avec lesquelles nous travaillons.'
                  : 'Since our creation, we have touched thousands of lives in DRC and beyond. Our holistic approach allows us to address the real needs of the communities we work with.'}
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80"
                alt="The Bythiah Project"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="mb-16 bg-accent/5 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-accent mb-8 text-center">
            {lang === 'fr' ? 'Notre Fondatrice' : 'Our Founder'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Founder Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
                alt="Mme Zalia Amour"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Founder Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Mme Zalia Amour
              </h3>
              <p className="text-lg text-primary font-semibold mb-4">
                {lang === 'fr' ? 'Fondatrice et Directrice Générale' : 'Founder and Executive Director'}
              </p>
              <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? 'Mme Zalia Amour est la fondatrice et directrice générale de The Bythiah Project. Avec plus d\'une décennie d\'expérience dans le secteur du développement communautaire, elle a consacré sa vie à transformer les vies des enfants et des jeunes vulnérables.'
                  : 'Mme Zalia Amour is the founder and executive director of The Bythiah Project. With over a decade of experience in the community development sector, she has dedicated her life to transforming the lives of vulnerable children and youth.'}
              </p>
              <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? 'Son vision est de créer un monde où chaque enfant, indépendamment de son origine ou de sa condition, a accès à une éducation de qualité, à des soins de santé adéquats et à des opportunités de développement personnel. Sous sa direction, The Bythiah Project a grandi pour devenir l\'une des organisations les plus respectées dans le secteur du développement en RDC.'
                  : 'Her vision is to create a world where every child, regardless of their origin or condition, has access to quality education, adequate healthcare, and personal development opportunities. Under her leadership, The Bythiah Project has grown to become one of the most respected organizations in the development sector in DRC.'}
              </p>
              <div className="flex space-x-4">
                <a href="mailto:zalia@bythiah.org" className="text-primary hover:text-primary/80 font-semibold">
                  {lang === 'fr' ? 'Contacter' : 'Contact'}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-accent mb-8 text-center">
            {lang === 'fr' ? 'Nos Valeurs' : 'Our Values'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: lang === 'fr' ? 'Intégrité' : 'Integrity',
                description: lang === 'fr'
                  ? 'Nous agissons avec honnêteté et transparence dans toutes nos actions.'
                  : 'We act with honesty and transparency in all our actions.',
              },
              {
                title: lang === 'fr' ? 'Compassion' : 'Compassion',
                description: lang === 'fr'
                  ? 'Nous nous soucions profondément du bien-être de ceux que nous servons.'
                  : 'We deeply care about the well-being of those we serve.',
              },
              {
                title: lang === 'fr' ? 'Excellence' : 'Excellence',
                description: lang === 'fr'
                  ? 'Nous nous efforçons d\'atteindre les plus hauts standards dans tout ce que nous faisons.'
                  : 'We strive to achieve the highest standards in everything we do.',
              },
            ].map((value, index) => (
              <div key={index} className="bg-white border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-accent mb-3">{value.title}</h3>
                <p className="text-foreground/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-accent mb-8 text-center">
            {lang === 'fr' ? 'Notre Parcours' : 'Our Journey'}
          </h2>
          <div className="space-y-6">
            {[
              {
                year: '2010',
                title: lang === 'fr' ? 'Fondation' : 'Foundation',
                description: lang === 'fr'
                  ? 'The Bythiah Project est créée avec une vision claire de transformer les vies.'
                  : 'The Bythiah Project is founded with a clear vision to transform lives.',
              },
              {
                year: '2015',
                title: lang === 'fr' ? 'Expansion' : 'Expansion',
                description: lang === 'fr'
                  ? 'Nous avons étendu nos programmes à plusieurs provinces de la RDC.'
                  : 'We expanded our programs to several provinces in DRC.',
              },
              {
                year: '2020',
                title: lang === 'fr' ? 'Reconnaissance' : 'Recognition',
                description: lang === 'fr'
                  ? 'The Bythiah Project reçoit plusieurs prix pour son impact communautaire.'
                  : 'The Bythiah Project receives several awards for its community impact.',
              },
              {
                year: '2024',
                title: lang === 'fr' ? 'Aujourd\'hui' : 'Today',
                description: lang === 'fr'
                  ? 'Nous continuons à grandir et à servir des milliers de personnes chaque année.'
                  : 'We continue to grow and serve thousands of people every year.',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  {index < 3 && <div className="w-1 h-16 bg-primary/30 mt-2" />}
                </div>
                <div className="pb-6">
                  <h3 className="text-xl font-bold text-accent">{item.year} - {item.title}</h3>
                  <p className="text-foreground/80 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-accent py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {lang === 'fr'
              ? 'Rejoignez-nous dans notre mission'
              : 'Join us in our mission'}
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            {lang === 'fr'
              ? 'Ensemble, nous pouvons créer un impact durable et transformer des vies.'
              : 'Together, we can create lasting impact and transform lives.'}
          </p>
          <a
            href={`/${lang}/contact`}
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            {lang === 'fr' ? 'Nous Contacter' : 'Contact Us'}
          </a>
        </div>
      </div>
    </div>
  );
}
