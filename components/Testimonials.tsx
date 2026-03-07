'use client';

import { useRef, useEffect } from 'react';
import { type Locale } from '@/lib/i18n';
import { Quote } from 'lucide-react';
import { useIsMobile } from '@/lib/hooks/useIsMobile';

interface TestimonialsProps {
  lang: Locale;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      // Désactiver les animations sur mobile
      if (isMobile) {
        return;
      }

      // Animer le titre
      if (titleRef.current) {
        const rect = titleRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        if (isVisible) {
          titleRef.current.classList.add('visible');
        }
      }

      // Animer les cartes
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
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const testimonials: Testimonial[] = lang === 'fr' ? [
    {
      id: '1',
      name: 'Marie Kabila',
      role: 'Mère bénéficiaire',
      content: 'Grâce à The Bythiah Project, ma fille a pu retourner à l\'école. Aujourd\'hui, elle rêve de devenir médecin. Cette organisation a changé notre vie et nous a redonné espoir.',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80',
    },
    {
      id: '2',
      name: 'Dr. Jean Mukendi',
      role: 'Partenaire médical',
      content: 'Le travail de The Bythiah Project dans le domaine de la santé est remarquable. Leur engagement auprès des enfants drépanocytaires et des personnes vivant avec le VIH/SIDA fait une réelle différence.',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
    },
    {
      id: '3',
      name: 'Emmanuel Tshisekedi',
      role: 'Ancien bénéficiaire, maintenant bénévole',
      content: 'J\'ai été aidé par cette organisation quand j\'étais enfant. Aujourd\'hui, je suis diplômé et je reviens pour aider d\'autres jeunes. C\'est ma façon de rendre ce que j\'ai reçu.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    },
    {
      id: '4',
      name: 'Sophie Lumingu',
      role: 'Enseignante partenaire',
      content: 'Les programmes éducatifs de The Bythiah Project sont exceptionnels. Ils ne se contentent pas de fournir des fournitures, ils créent un environnement où chaque enfant peut s\'épanouir.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    },
  ] : [
    {
      id: '1',
      name: 'Marie Kabila',
      role: 'Beneficiary Mother',
      content: 'Thanks to The Bythiah Project, my daughter was able to return to school. Today, she dreams of becoming a doctor. This organization has changed our lives and given us hope.',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80',
    },
    {
      id: '2',
      name: 'Dr. Jean Mukendi',
      role: 'Medical Partner',
      content: 'The work of The Bythiah Project in healthcare is remarkable. Their commitment to children with sickle cell disease and people living with HIV/AIDS makes a real difference.',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
    },
    {
      id: '3',
      name: 'Emmanuel Tshisekedi',
      role: 'Former Beneficiary, Now Volunteer',
      content: 'I was helped by this organization when I was a child. Today, I am a graduate and I come back to help other young people. It\'s my way of giving back what I received.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    },
    {
      id: '4',
      name: 'Sophie Lumingu',
      role: 'Partner Teacher',
      content: 'The educational programs of The Bythiah Project are exceptional. They don\'t just provide supplies, they create an environment where every child can thrive.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    },
  ];

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-secondary/30 via-white to-secondary/20 py-20 lg:py-32">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Title */}
        <div className="mb-16 text-center fade-in">
          <h2
            ref={titleRef}
            className="text-4xl font-bold text-accent sm:text-5xl lg:text-6xl underline-svg mb-4"
          >
            {lang === 'fr' ? 'Témoignages' : 'Testimonials'}
            <svg 
              viewBox="0 0 200 12" 
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="mx-auto"
              style={{ width: '60%' }}
            >
              <path
                d="M0,6 Q50,0 100,6 T200,6"
                fill="none"
                stroke="url(#gradient-testimonials)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient-testimonials" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b7b3e" />
                  <stop offset="50%" stopColor="#fff2d2" />
                  <stop offset="100%" stopColor="#8b7b3e" />
                </linearGradient>
              </defs>
            </svg>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            {lang === 'fr' 
              ? 'Découvrez les histoires inspirantes de ceux dont nous avons touché les vies'
              : 'Discover the inspiring stories of those whose lives we have touched'}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="fade-in bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 relative"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 bg-primary rounded-full p-3 shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <p className="text-gray-700 text-base leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <p className="font-semibold text-accent">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

