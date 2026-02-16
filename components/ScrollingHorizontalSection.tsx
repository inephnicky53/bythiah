'use client';

import { useEffect, useRef, useState } from 'react';
import { type Locale } from '@/lib/i18n';
import { getTranslations, t as translate } from '@/lib/i18n';

interface ScrollingHorizontalSectionProps {
  lang: Locale;
}

interface Pillar {
  id: string;
  title: string;
  description: string;
  image: string;
}

export default function ScrollingHorizontalSection({ lang }: ScrollingHorizontalSectionProps) {
  const translations = getTranslations(lang);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInSection, setIsInSection] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const pillars: Pillar[] = [
    {
      id: 'education',
      title: translate(translations, 'home.pillars.education'),
      description: lang === 'fr'
        ? 'L\'éducation est le fondement du développement durable et de la transformation sociale. Nous croyons fermement que chaque enfant, indépendamment de son origine ou de sa situation économique, mérite accès à une éducation de qualité.\n\nNos programmes éducatifs visent à développer non seulement les compétences académiques, mais aussi les compétences de vie essentielles. Nous travaillons avec les écoles, les familles et les communautés pour créer un environnement d\'apprentissage inclusif et stimulant.\n\nGrâce à nos initiatives, nous avons aidé des milliers d\'enfants à accéder à l\'éducation, à améliorer leurs résultats scolaires et à envisager un avenir meilleur.'
        : 'Education is the foundation of sustainable development and social transformation. We firmly believe that every child, regardless of their background or economic situation, deserves access to quality education.\n\nOur educational programs aim to develop not only academic skills but also essential life skills. We work with schools, families, and communities to create an inclusive and stimulating learning environment.\n\nThrough our initiatives, we have helped thousands of children access education, improve their academic results, and envision a better future.',
      image: 'https://images.unsplash.com/photo-1427504494785-cdba58dadff0?w=800&q=80',
    },
    {
      id: 'health',
      title: translate(translations, 'home.pillars.health'),
      description: lang === 'fr'
        ? 'La santé est un droit fondamental et une condition préalable à une vie productive et épanouie. Nous nous engageons à améliorer l\'accès aux services de santé de qualité pour les populations les plus vulnérables.\n\nNos programmes de santé couvrent la prévention des maladies, les soins de santé primaires, la sensibilisation à l\'hygiène et la nutrition. Nous accordons une attention particulière aux enfants atteints de maladies chroniques comme la drépanocytose et l\'épilepsie, ainsi qu\'aux personnes vivant avec le VIH/SIDA.\n\nEn partenariat avec les centres de santé locaux et les professionnels médicaux, nous travaillons à réduire les inégalités en matière de santé et à promouvoir le bien-être physique et mental de tous.'
        : 'Health is a fundamental right and a prerequisite for a productive and fulfilling life. We are committed to improving access to quality health services for the most vulnerable populations.\n\nOur health programs cover disease prevention, primary healthcare, hygiene awareness, and nutrition. We pay special attention to children with chronic diseases such as sickle cell disease and epilepsy, as well as people living with HIV/AIDS.\n\nIn partnership with local health centers and medical professionals, we work to reduce health inequalities and promote the physical and mental well-being of all.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    },
    {
      id: 'sport',
      title: translate(translations, 'home.pillars.sport'),
      description: lang === 'fr'
        ? 'Le sport est un outil puissant de développement personnel et social. À travers le sport, nous développons le caractère, la discipline, la résilience et la confiance en soi chez les jeunes.\n\nNos programmes sportifs visent à promouvoir l\'activité physique, la cohésion sociale et l\'esprit d\'équipe. Nous organisons des tournois, des entraînements et des activités sportives qui permettent aux jeunes de s\'exprimer, de se dépasser et de construire des relations positives.\n\nNous croyons que le sport peut transformer des vies et créer des leaders de demain. En investissant dans le sport, nous investissons dans l\'avenir de nos communautés et dans la création d\'une génération plus saine, plus forte et plus unie.'
        : 'Sport is a powerful tool for personal and social development. Through sports, we develop character, discipline, resilience, and self-confidence in young people.\n\nOur sports programs aim to promote physical activity, social cohesion, and teamwork. We organize tournaments, training sessions, and sports activities that allow young people to express themselves, push their limits, and build positive relationships.\n\nWe believe that sport can transform lives and create tomorrow\'s leaders. By investing in sports, we invest in the future of our communities and in creating a healthier, stronger, and more united generation.',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Animate title
      if (titleRef.current) {
        const rect = titleRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        if (isVisible) {
          titleRef.current.classList.add('visible');
        }
      }

      // Scroll trigger for carousel with sticky behavior
      if (wrapperRef.current && sectionRef.current) {
        const wrapperRect = wrapperRef.current.getBoundingClientRect();
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if section is in viewport
        const sectionInView = sectionRect.top < windowHeight && sectionRect.bottom > 0;
        setIsInSection(sectionInView);

        // Calculate scroll progress within the section
        const sectionTop = sectionRect.top;
        const sectionHeight = sectionRect.height;
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));

        // Calculate which pillar should be active based on scroll progress
        const newIndex = Math.floor(scrollProgress * pillars.length);
        const clampedIndex = Math.min(newIndex, pillars.length - 1);

        setActiveIndex(clampedIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pillars.length]);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? pillars.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === pillars.length - 1 ? 0 : prev + 1));
  };

  return (
    <section ref={sectionRef} className="relative bg-accent py-20 h-screen">
      <div className="container mx-auto px-4 sm:px-8 lg:px-10">
        {/* Title */}
        <h2
          ref={titleRef}
          className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl underline-svg mb-16 text-center"
        >
          {translate(translations, 'home.pillars.title')}
          <svg
            viewBox="0 0 200 12"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="mt-4"
          >
            <path
              d="M0,6 Q50,0 100,6 T200,6"
              fill="none"
              stroke="url(#gradient-pillars)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="gradient-pillars" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fff2d2" />
                <stop offset="50%" stopColor="#8b7b3e" />
                <stop offset="100%" stopColor="#fff2d2" />
              </linearGradient>
            </defs>
          </svg>
        </h2>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {pillars.map((pillar) => (
                <div key={pillar.id} className="w-full flex-shrink-0 px-4">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Image */}
                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-white">{pillar.title}</h3>
                      <p className="text-lg text-white/90 leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
            aria-label="Previous pillar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
            aria-label="Next pillar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {pillars.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? 'bg-white w-8' : 'bg-white/40 w-2'
                }`}
                aria-label={`Go to pillar ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

