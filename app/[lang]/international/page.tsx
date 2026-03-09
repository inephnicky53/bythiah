import { type Locale } from '@/lib/i18n';
import { Globe, MapPin, FileCheck } from 'lucide-react';

interface InternationalPageProps {
  params: {
    lang: string;
  };
}

export default function InternationalPage({ params }: InternationalPageProps) {
  const lang = params.lang as Locale;

  const regions = [
    { flag: '🌍', label: lang === 'fr' ? 'Afrique de l\'Ouest' : 'West Africa' },
    { flag: '🌎', label: lang === 'fr' ? 'Amérique du Nord' : 'North America' },
    { flag: '🇪🇺', label: lang === 'fr' ? 'Europe' : 'Europe' },
    { flag: '🌏', label: lang === 'fr' ? 'Moyen-Orient et Asie' : 'Middle East and Asia' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-accent py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {lang === 'fr' ? '🌐 Présence Internationale' : '🌐 International Presence'}
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed">
            {lang === 'fr'
              ? 'En plus de la RDC, The Bythiah Project dispose de représentations dans plusieurs régions du monde.'
              : 'In addition to the DRC, The Bythiah Project has representations in several regions of the world.'}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Présence mondiale */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-8 h-8 text-primary flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-bold text-accent">
              {lang === 'fr' ? 'Nos représentations' : 'Our representations'}
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {regions.map((region, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 rounded-2xl border border-border/40 bg-accent/5 hover:bg-accent/10 transition-colors"
              >
                <span className="text-3xl">{region.flag}</span>
                <span className="font-medium text-foreground">{region.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Libéria */}
        <div className="max-w-3xl mx-auto bg-accent/5 rounded-3xl p-8 sm:p-10 border border-border/30">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-8 h-8 text-primary flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-bold text-accent">
              {lang === 'fr' ? 'The Bythiah Project au Libéria' : 'The Bythiah Project in Liberia'}
            </h2>
          </div>

          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              {lang === 'fr'
                ? 'Le projet a été relancé au Libéria en 2019.'
                : 'The project was relaunched in Liberia in 2019.'}
            </p>
            <div className="flex items-start gap-3 bg-white rounded-xl p-5 border border-border/30">
              <FileCheck className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <p>
                {lang === 'fr'
                  ? 'Le 09 juin 2020, un accord de siège a été signé avec le gouvernement libérien, autorisant officiellement l\'installation et l\'exercice des activités de l\'organisation dans les secteurs de l\'éducation, de la santé et du sport.'
                  : 'On June 9, 2020, a headquarters agreement was signed with the Liberian government, officially authorizing the organization to establish and carry out its activities in the fields of education, health, and sport.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
