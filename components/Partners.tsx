'use client';

import { useEffect, useRef } from 'react';
import { type Locale } from '@/lib/i18n';
import { getTranslations, t as translate } from '@/lib/i18n';

interface PartnersProps {
  lang: Locale;
}

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
}

export default function Partners({ lang }: PartnersProps) {
  const translations = getTranslations(lang);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const partners: Partner[] = [
    {
      id: 'partner1',
      name: lang === 'fr' ? 'Partenaire Global' : 'Global Partner',
      logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&q=80',
      description: lang === 'fr'
        ? 'Un partenaire stratégique qui nous aide à étendre notre impact à travers le monde.'
        : 'A strategic partner helping us expand our impact across the world.',
    },
    {
      id: 'partner2',
      name: lang === 'fr' ? 'Partenaire Santé' : 'Health Partner',
      logo: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&q=80',
      description: lang === 'fr'
        ? 'Spécialisé dans les services de santé, contribuant à nos programmes médicaux.'
        : 'Specialized in health services, contributing to our medical programs.',
    },
    {
      id: 'partner3',
      name: lang === 'fr' ? 'Partenaire Éducation' : 'Education Partner',
      logo: 'https://images.unsplash.com/photo-1427504494785-cdba58dadff0?w=200&q=80',
      description: lang === 'fr'
        ? 'Dédié à l\'éducation, soutenant nos initiatives d\'apprentissage et de développement.'
        : 'Dedicated to education, supporting our learning and development initiatives.',
    },
    {
      id: 'partner4',
      name: lang === 'fr' ? 'Partenaire Communautaire' : 'Community Partner',
      logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&q=80',
      description: lang === 'fr'
        ? 'Engagé dans le développement communautaire et l\'autonomisation locale.'
        : 'Engaged in community development and local empowerment.',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        const rect = titleRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        if (isVisible) {
          titleRef.current.classList.add('visible');
        }
      }

      cardsRef.current.forEach((card) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
          if (isVisible) {
            card.classList.add('visible');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-white py-20">
      <div className="container mx-auto px-4 sm:px-8 lg:px-10">
        {/* Title */}
        <h2
          ref={titleRef}
          className="text-3xl font-bold text-accent sm:text-4xl lg:text-5xl underline-svg mb-16 text-center fade-in"
        >
          {lang === 'fr' ? 'Nos Partenaires' : 'Our Partners'}
          <svg
            viewBox="0 0 200 12"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="mt-4"
          >
            <path
              d="M0,6 Q50,0 100,6 T200,6"
              fill="none"
              stroke="url(#gradient-partners)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="gradient-partners" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b7b3e" />
                <stop offset="50%" stopColor="#fff2d2" />
                <stop offset="100%" stopColor="#8b7b3e" />
              </linearGradient>
            </defs>
          </svg>
        </h2>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="fade-in bg-white border border-border/40 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Logo */}
              <div className="mb-4 h-24 flex items-center justify-center bg-accent/10 rounded-lg overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-accent mb-2">{partner.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{partner.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            {lang === 'fr'
              ? 'Intéressé par un partenariat ? Contactez-nous pour explorer les opportunités de collaboration.'
              : 'Interested in a partnership? Contact us to explore collaboration opportunities.'}
          </p>
          <a
            href={`/${lang}/contact`}
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors"
          >
            {lang === 'fr' ? 'Nous Contacter' : 'Contact Us'}
          </a>
        </div>
      </div>
    </section>
  );
}

