'use client';

import { useEffect, useRef } from 'react';
import { type Locale } from '@/lib/i18n';

interface PartnersProps {
  lang: Locale;
}

interface Sponsor {
  id: string;
  name: string;
  logo: string;
}

const sponsors: Sponsor[] = [
  { id: 'sponsor1', name: 'Sponsor 1', logo: '/images/sponsors/sponsor1.jpg' },
  { id: 'sponsor2', name: 'Sponsor 2', logo: '/images/sponsors/sponsor2.jpg' },
  { id: 'sponsor3', name: 'Sponsor 3', logo: '/images/sponsors/sponsor3.jpg' },
  { id: 'sponsor4', name: 'Sponsor 4', logo: '/images/sponsors/sponsor4.jpg' },
];

// On duplique les sponsors pour un défilement infini fluide
const marqueeItems = [...sponsors, ...sponsors, ...sponsors];

export default function Partners({ lang }: PartnersProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        const rect = titleRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        if (isVisible) {
          titleRef.current.classList.add('visible');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-accent/5 py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 lg:px-10 mb-12">
        {/* Title */}
        <h2
          ref={titleRef}
          className="text-3xl font-bold text-accent sm:text-4xl lg:text-5xl underline-svg mb-4 fade-in"
        >
          {lang === 'fr' ? 'Nos Sponsors' : 'Our Sponsors'}
          <svg
            viewBox="0 0 200 12"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="mt-4 mx-auto"
            style={{ width: '40%' }}
          >
            <path
              d="M0,6 Q50,0 100,6 T200,6"
              fill="none"
              stroke="url(#gradient-sponsors)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="gradient-sponsors" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b7b3e" />
                <stop offset="50%" stopColor="#fff2d2" />
                <stop offset="100%" stopColor="#8b7b3e" />
              </linearGradient>
            </defs>
          </svg>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl">
          {lang === 'fr'
            ? 'Ils nous font confiance et soutiennent notre mission.'
            : 'They trust us and support our mission.'}
        </p>
      </div>

      {/* Marquee animé */}
      <div className="relative w-full">
        {/* Dégradés latéraux */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-accent/5 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-accent/5 to-transparent" />

        <div className="flex animate-marquee gap-8 w-max">
          {marqueeItems.map((sponsor, index) => (
            <div
              key={`${sponsor.id}-${index}`}
              className="flex-shrink-0 w-48 h-32 bg-white rounded-2xl shadow-md border border-border/30 flex items-center justify-center p-4 hover:shadow-lg transition-shadow duration-300"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center container mx-auto px-4">
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
    </section>
  );
}

