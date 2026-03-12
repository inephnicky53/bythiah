import { getTranslations, type Locale, t as translate } from '@/lib/i18n';
import PageHero from '@/components/PageHero';

interface ProgramsPageProps {
  params: {
    lang: string;
  };
}

interface Program {
  id: string;
  title: string;
  description: string;
  objectives: string[];
  image: string;
}

export default function ProgramsPage({ params }: ProgramsPageProps) {
  const lang = params.lang as Locale;
  const translations = getTranslations(lang);

  const programs: Program[] = lang === 'fr' ? [
    {
      id: 'education',
      title: 'Programme Éducation',
      description: 'Notre programme éducatif vise à fournir une éducation de qualité à tous les enfants, indépendamment de leur situation économique. Nous travaillons en partenariat avec les écoles locales pour améliorer les infrastructures, former les enseignants et soutenir les enfants vulnérables.',
      objectives: [
        'Augmenter l\'accès à l\'éducation primaire et secondaire',
        'Améliorer la qualité de l\'enseignement',
        'Soutenir les enfants orphelins et vulnérables',
        'Fournir des bourses d\'études',
        'Construire et rénover les écoles',
      ],
      image: 'https://images.unsplash.com/photo-1427504494785-cdba58dadff0?w=800&q=80',
    },
    {
      id: 'health',
      title: 'Programme Santé',
      description: 'Nous nous engageons à améliorer l\'accès aux services de santé de qualité pour les populations les plus vulnérables. Notre programme couvre la prévention des maladies, les soins de santé primaires, la sensibilisation à l\'hygiène et la nutrition.',
      objectives: [
        'Améliorer l\'accès aux services de santé',
        'Prévenir les maladies chroniques',
        'Soutenir les enfants atteints de drépanocytose et d\'épilepsie',
        'Accompagner les personnes vivant avec le VIH/SIDA',
        'Promouvoir l\'hygiène et la nutrition',
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    },
    {
      id: 'sport',
      title: 'Programme Sport',
      description: 'Le sport est un outil puissant de développement personnel et social. Notre programme sportif vise à promouvoir l\'activité physique, la cohésion sociale et l\'esprit d\'équipe chez les jeunes.',
      objectives: [
        'Promouvoir l\'activité physique régulière',
        'Développer le caractère et la discipline',
        'Organiser des tournois et compétitions',
        'Former des entraîneurs locaux',
        'Créer des espaces de loisirs sécurisés',
      ],
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
    },
  ] : [
    {
      id: 'education',
      title: 'Education Program',
      description: 'Our educational program aims to provide quality education to all children, regardless of their economic situation. We work in partnership with local schools to improve infrastructure, train teachers, and support vulnerable children.',
      objectives: [
        'Increase access to primary and secondary education',
        'Improve the quality of teaching',
        'Support orphaned and vulnerable children',
        'Provide scholarships',
        'Build and renovate schools',
      ],
      image: 'https://images.unsplash.com/photo-1427504494785-cdba58dadff0?w=800&q=80',
    },
    {
      id: 'health',
      title: 'Health Program',
      description: 'We are committed to improving access to quality health services for the most vulnerable populations. Our program covers disease prevention, primary healthcare, hygiene awareness, and nutrition.',
      objectives: [
        'Improve access to health services',
        'Prevent chronic diseases',
        'Support children with sickle cell disease and epilepsy',
        'Accompany people living with HIV/AIDS',
        'Promote hygiene and nutrition',
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    },
    {
      id: 'sport',
      title: 'Sports Program',
      description: 'Sport is a powerful tool for personal and social development. Our sports program aims to promote physical activity, social cohesion, and teamwork among young people.',
      objectives: [
        'Promote regular physical activity',
        'Develop character and discipline',
        'Organize tournaments and competitions',
        'Train local coaches',
        'Create safe recreational spaces',
      ],
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title={translate(translations, 'nav.pillars')}
        description={lang === 'fr'
          ? 'Découvrez nos programmes d\'action dans les domaines de l\'éducation, de la santé et du sport.'
          : 'Discover our action programs in the fields of education, health, and sports.'}
        color="#7c572c"
        backgroundImage="https://images.unsplash.com/photo-1427504494785-cdba58dadff0?w=1200&q=80"
      />

      {/* Programs Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-16">
          {programs.map((program) => (
            <div key={program.id} className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-accent">{program.title}</h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {program.description}
                </p>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">
                    {lang === 'fr' ? 'Objectifs' : 'Objectives'}
                  </h3>
                  <ul className="space-y-2">
                    {program.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="text-primary font-bold mt-1">✓</span>
                        <span className="text-foreground/80">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-accent py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {lang === 'fr'
              ? 'Soutenez nos programmes'
              : 'Support our programs'}
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            {lang === 'fr'
              ? 'Votre contribution nous aide à transformer des vies et à créer un impact durable dans les communautés.'
              : 'Your contribution helps us transform lives and create lasting impact in communities.'}
          </p>
          <a
            href={`/${lang}/donate`}
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            {lang === 'fr' ? 'Faire un don' : 'Donate'}
          </a>
        </div>
      </div>
    </div>
  );
}
