'use client';

import { useEffect, useRef, useState } from 'react';
import { type Locale } from '@/lib/i18n';
import { getTranslations, t as translate } from '@/lib/i18n';
import { useInView } from '@/lib/hooks/useInView';
import { useIsMobile } from '@/lib/hooks/useIsMobile';

interface ScrollingSectionProps {
  lang: Locale;
}

interface Section {
  id: string;
  title: string;
  content: string | string[];
  image: string;
}

export default function ScrollingSection({ lang }: ScrollingSectionProps) {
  const translations = getTranslations(lang);
  const isMobile = useIsMobile();
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Define sections with their content
  const sections: Section[] = [
    {
      id: 'intro',
      title: translate(translations, 'home.intro.title'),
      content: [
        translate(translations, 'home.intro.description'),
        translate(translations, 'home.intro.since'),
        lang === 'fr'
          ? 'Notre engagement est de créer un impact durable dans les communautés les plus vulnérables, en apportant espoir et dignité à ceux qui en ont le plus besoin.'
          : 'Our commitment is to create lasting impact in the most vulnerable communities, bringing hope and dignity to those who need it most.',
      ],
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
    },

    {
      id: 'about',
      title: translate(translations, 'home.about.title'),
      content: [
        translate(translations, 'home.about.description'),
        translate(translations, 'home.about.intervention'),
        lang === 'fr'
          ? 'Depuis notre création, nous avons touché des milliers de vies en RDC et au-delà. Notre approche holistique nous permet d\'adresser les besoins réels des communautés avec lesquelles nous travaillons.'
          : 'Since our creation, we have touched thousands of lives in DRC and beyond. Our holistic approach allows us to address the real needs of the communities we work with.',
      ],
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80',
    },
    {
      id: 'vocation',
      title: translate(translations, 'home.vocation.title'),
      content: [
        translate(translations, 'home.vocation.description'),
        translate(translations, 'home.vocation.support'),
        lang === 'fr'
          ? 'Nous travaillons main dans la main avec les familles, les écoles et les centres de santé pour créer un environnement où chaque personne, quelle que soit sa condition, peut vivre dans la dignité et l\'espoir.'
          : 'We work hand in hand with families, schools, and health centers to create an environment where every person, regardless of their condition, can live with dignity and hope.',
      ],
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80',
    },
    {
      id: 'mission',
      title: translate(translations, 'home.mission.title'),
      content: [
        translate(translations, 'home.mission.description'),
        '• ' + (lang === 'fr' ? 'les orphelins' : 'orphans'),
        '• ' + (lang === 'fr' ? 'les drépanocytaires' : 'people with sickle cell disease'),
        '• ' + (lang === 'fr' ? 'les épileptiques' : 'people with epilepsy'),
        '• ' + (lang === 'fr' ? 'les personnes vivant avec le VIH/SIDA' : 'people living with HIV/AIDS'),
        '• ' + (lang === 'fr' ? 'les enfants et jeunes vivant avec handicap' : 'children and youth living with disabilities'),
        '',
        lang === 'fr'
          ? 'Chaque enfant mérite une chance de réussir. Notre mission est de leur fournir les outils, le soutien et l\'amour nécessaires pour construire un avenir meilleur.'
          : 'Every child deserves a chance to succeed. Our mission is to provide them with the tools, support and love needed to build a better future.',
      ],
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80',
    },
    {
      id: 'vision',
      title: translate(translations, 'home.vision.title'),
      content: [
        translate(translations, 'home.vision.description'),
        '',
        lang === 'fr'
          ? 'Nous rêvons d\'un monde où chaque enfant, indépendamment de son origine ou de sa condition, a accès à une éducation de qualité, à des soins de santé adéquats et à des opportunités de développement personnel. C\'est cette vision qui guide chacune de nos actions.'
          : 'We dream of a world where every child, regardless of their origin or condition, has access to quality education, adequate healthcare, and personal development opportunities. This vision guides all our actions.',
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRefs.current.length) return;

      // Calculer quelle section est la plus visible
      let maxVisibility = 0;
      let mostVisibleIndex = 0;

      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Calculer la visibilité (0 à 1)
          const visibleTop = Math.max(0, Math.min(windowHeight, rect.bottom));
          const visibleBottom = Math.max(0, Math.min(windowHeight, windowHeight - rect.top));
          const visibility = (visibleTop + visibleBottom) / (windowHeight * 2);

          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            mostVisibleIndex = index;
          }
        }
      });

      setActiveSection(mostVisibleIndex);

      // Désactiver les animations sur mobile
      if (isMobile) {
        return;
      }

      // Animer les titres
      titleRefs.current.forEach((titleRef) => {
        if (titleRef) {
          const rect = titleRef.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
          if (isVisible) {
            titleRef.classList.add('visible');
          }
        }
      });

      // Animer les contenus
      contentRefs.current.forEach((contentRef) => {
        if (contentRef) {
          const rect = contentRef.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
          if (isVisible) {
            contentRef.classList.add('visible');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  return (
    <section className="relative bg-white">
      <div className="w-full">
        <div className="grid lg:grid-cols-2">
          {/* Left side - Scrolling text */}
          <div className="relative">
            {sections.map((section, index) => (
              <div
                key={section.id}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                className="min-h-screen flex items-center px-6 py-16 sm:px-8 lg:px-10"
              >
                <div
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  className="space-y-5 max-w-2xl fade-in ml-40"
                >
                  <h2
                    ref={(el) => {
                      titleRefs.current[index] = el;
                    }}
                    className="text-3xl font-bold text-accent sm:text-4xl lg:text-5xl underline-svg mb-16"
                  >
                    {section.title}
                    <svg
                      viewBox="0 0 200 12"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0,6 Q50,0 100,6 T200,6"
                        fill="none"
                        stroke={`url(#gradient-${index})`}
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8b7b3e" />
                          <stop offset="50%" stopColor="#fff2d2" />
                          <stop offset="100%" stopColor="#8b7b3e" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </h2>
                  <div className="space-y-4 text-base sm:text-lg text-gray-700">
                    {Array.isArray(section.content) ? (
                      section.content.map((paragraph, idx) => (
                        paragraph && (
                          <p key={idx} className="leading-relaxed">
                            {paragraph}
                          </p>
                        )
                      ))
                    ) : (
                      <p className="leading-relaxed">{section.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Sticky changing images (50% width, centered) */}
          <div className="relative hidden lg:block">
            <div className="sticky top-0 h-screen flex items-center justify-center p-8">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  className={`absolute transition-opacity duration-700 ${
                    activeSection === index ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ width: '80%', height: '80%' }}
                >
                  <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={section.image}
                      alt={section.title}
                      className="h-full w-full object-cover"
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

