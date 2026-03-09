import { type Locale } from '@/lib/i18n';
import { BarChart2, DollarSign, BookOpen, Clock } from 'lucide-react';

interface ResourcesPageProps {
  params: {
    lang: string;
  };
}

export default function ResourcesPage({ params }: ResourcesPageProps) {
  const lang = params.lang as Locale;

  const fundingSources = [
    lang === 'fr' ? 'Les membres effectifs et d\'honneur' : 'Effective and honorary members',
    lang === 'fr' ? 'Les contributions volontaires' : 'Voluntary contributions',
    lang === 'fr' ? 'Les dons du secteur privé et de particuliers' : 'Donations from the private sector and individuals',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-accent py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {lang === 'fr' ? '📊 Ressources & Transparence' : '📊 Resources & Transparency'}
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed">
            {lang === 'fr'
              ? 'Notre engagement envers la transparence et une gestion responsable des ressources.'
              : 'Our commitment to transparency and responsible resource management.'}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-16 max-w-3xl">

        {/* Plan stratégique */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <BarChart2 className="w-8 h-8 text-primary flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-bold text-accent">
              {lang === 'fr' ? 'Plan stratégique' : 'Strategic plan'}
            </h2>
          </div>
          <div className="bg-accent/5 rounded-2xl p-6 border border-border/30 text-foreground/80 leading-relaxed space-y-3">
            <p className="font-semibold text-accent">
              {lang === 'fr' ? 'Plan stratégique 2020–2024' : 'Strategic plan 2020–2024'}
            </p>
            <p>
              {lang === 'fr'
                ? 'Le plan stratégique 2020-2024 est aligné sur l\'Agenda 2030 et contribue à la mise en œuvre des Objectifs de Développement Durable, notamment à travers l\'apprentissage des métiers et le renforcement des partenariats.'
                : 'The 2020-2024 strategic plan is aligned with the 2030 Agenda and contributes to the implementation of the Sustainable Development Goals, notably through vocational training and partnership building.'}
            </p>
          </div>
        </div>

        {/* Financement */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="w-8 h-8 text-primary flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-bold text-accent">
              {lang === 'fr' ? 'Financement' : 'Funding'}
            </h2>
          </div>
          <p className="text-foreground/70 mb-4">
            {lang === 'fr'
              ? 'The Bythiah Project est financé par :'
              : 'The Bythiah Project is funded by:'}
          </p>
          <div className="space-y-3">
            {fundingSources.map((source, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-accent/5 rounded-xl border border-border/30">
                <span className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-foreground/80">{source}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Origine du nom */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-primary flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-bold text-accent">
              {lang === 'fr' ? '📖 Origine du nom' : '📖 Origin of the name'}
            </h2>
          </div>
          <div className="bg-secondary/40 rounded-2xl p-6 border border-primary/20 text-foreground/80 leading-relaxed space-y-3 italic">
            <p>
              {lang === 'fr'
                ? 'Le nom The Bythiah Project s\'inspire de l\'histoire biblique de Bithiah, fille du Pharaon, qui sauva Moïse des eaux.'
                : 'The name The Bythiah Project is inspired by the biblical story of Bithiah, daughter of Pharaoh, who saved Moses from the waters.'}
            </p>
            <p className="not-italic font-medium text-accent">
              {lang === 'fr'
                ? 'Il symbolise l\'engagement de chaque personne à devenir une « Bithiah » pour offrir à au moins un enfant une chance réelle de construire son avenir.'
                : 'It symbolizes each person\'s commitment to becoming a "Bithiah" to offer at least one child a real chance to build their future.'}
            </p>
          </div>
        </div>

        {/* Historique */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-8 h-8 text-primary flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-bold text-accent">
              {lang === 'fr' ? '🕰️ Historique' : '🕰️ History'}
            </h2>
          </div>
          <div className="relative pl-6 border-l-2 border-primary/30 space-y-8">
            <div className="relative">
              <span className="absolute -left-[29px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-white shadow" />
              <p className="text-sm font-semibold text-primary mb-1">1999 — Boston</p>
              <p className="text-foreground/80 leading-relaxed">
                {lang === 'fr'
                  ? 'Le projet a été conçu à Boston, à la suite de recherches menées sur les systèmes éducatif, sanitaire et sportif en RDC.'
                  : 'The project was conceived in Boston, following research on the educational, health, and sports systems in the DRC.'}
              </p>
            </div>
            <div className="relative">
              <span className="absolute -left-[29px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-white shadow" />
              <p className="text-sm font-semibold text-primary mb-1">2010 — Lungudi, Kasaï</p>
              <p className="text-foreground/80 leading-relaxed">
                {lang === 'fr'
                  ? 'L\'ONG a été officiellement créée après une mission de terrain à Lungudi, dans la province du Kasaï.'
                  : 'The NGO was officially founded after a field mission in Lungudi, in the Kasai province.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
