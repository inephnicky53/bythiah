import { getTranslations, type Locale, t as translate } from '@/lib/i18n';
import Link from 'next/link';
import { ArrowRight, BookOpen, Heart, Users, GraduationCap, Stethoscope, Home } from 'lucide-react';

interface HomePageProps {
  params: {
    lang: string;
  };
}

export default function HomePage({ params }: HomePageProps) {
  const lang = params.lang as Locale;
  const translations = getTranslations(lang);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/30 to-primary/5 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              {translate(translations, 'home.hero.title')}
            </h1>
            <p className="mb-8 text-lg text-foreground/80 md:text-xl">
              {translate(translations, 'home.hero.subtitle')}
            </p>
            <Link
              href={`/${lang}/about`}
              className="inline-flex items-center space-x-2 rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <span>{translate(translations, 'home.hero.cta')}</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              {translate(translations, 'home.mission.title')}
            </h2>
            <p className="text-lg text-foreground/80">
              {translate(translations, 'home.mission.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
            {translate(translations, 'home.pillars.title')}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Education Pillar */}
            <div className="rounded-lg bg-background p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {translate(translations, 'home.pillars.education.title')}
              </h3>
              <p className="text-foreground/70">
                {translate(translations, 'home.pillars.education.description')}
              </p>
            </div>

            {/* Health Pillar */}
            <div className="rounded-lg bg-background p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Stethoscope className="text-primary" size={24} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {translate(translations, 'home.pillars.health.title')}
              </h3>
              <p className="text-foreground/70">
                {translate(translations, 'home.pillars.health.description')}
              </p>
            </div>

            {/* Community Development Pillar */}
            <div className="rounded-lg bg-background p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {translate(translations, 'home.pillars.community.title')}
              </h3>
              <p className="text-foreground/70">
                {translate(translations, 'home.pillars.community.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              {translate(translations, 'home.programs.title')}
            </h2>
            <p className="mb-8 text-lg text-foreground/80">
              {translate(translations, 'home.programs.description')}
            </p>
            <Link
              href={`/${lang}/programs`}
              className="inline-flex items-center space-x-2 rounded-md border border-primary px-6 py-3 text-base font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <span>{lang === 'fr' ? 'Voir nos programmes' : 'View our programs'}</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              {translate(translations, 'home.cta.title')}
            </h2>
            <p className="mb-8 text-lg opacity-90">
              {translate(translations, 'home.cta.description')}
            </p>
            <Link
              href={`/${lang}/donate`}
              className="inline-flex items-center space-x-2 rounded-md bg-white px-8 py-3 text-base font-medium text-primary transition-colors hover:bg-white/90"
            >
              <Heart size={20} />
              <span>{translate(translations, 'home.cta.button')}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
