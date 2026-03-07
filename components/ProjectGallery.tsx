'use client';

import { useState, useRef, useEffect } from 'react';
import { type Locale } from '@/lib/i18n';
import { X } from 'lucide-react';
import { useIsMobile } from '@/lib/hooks/useIsMobile';

interface ProjectGalleryProps {
  lang: Locale;
}

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export default function ProjectGallery({ lang }: ProjectGalleryProps) {
  const isMobile = useIsMobile();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      // Animer les projets
      projectsRef.current.forEach((project) => {
        if (project) {
          const rect = project.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
          if (isVisible) {
            project.classList.add('visible');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const projects: Project[] = lang === 'fr' ? [
    {
      id: '1',
      title: 'Programme d\'éducation - École Primaire',
      category: 'Éducation',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80',
      description: 'Distribution de fournitures scolaires et soutien éducatif à plus de 200 enfants dans les écoles primaires de Kinshasa.',
    },
    {
      id: '2',
      title: 'Campagne de sensibilisation VIH/SIDA',
      category: 'Santé',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
      description: 'Sensibilisation et dépistage gratuit du VIH/SIDA auprès de 500 personnes dans les communautés vulnérables.',
    },
    {
      id: '3',
      title: 'Tournoi de football inter-écoles',
      category: 'Sport',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
      description: 'Organisation d\'un tournoi de football réunissant 12 écoles et plus de 300 jeunes participants.',
    },
    {
      id: '4',
      title: 'Soutien aux enfants drépanocytaires',
      category: 'Santé',
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
      description: 'Prise en charge médicale et accompagnement psychologique de 50 enfants atteints de drépanocytose.',
    },
    {
      id: '5',
      title: 'Bibliothèque communautaire',
      category: 'Éducation',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
      description: 'Création d\'une bibliothèque communautaire avec plus de 1000 livres pour encourager la lecture chez les jeunes.',
    },
    {
      id: '6',
      title: 'Atelier de formation professionnelle',
      category: 'Développement',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      description: 'Formation en couture et artisanat pour 40 jeunes femmes, favorisant leur autonomie économique.',
    },
  ] : [
    {
      id: '1',
      title: 'Education Program - Primary School',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80',
      description: 'Distribution of school supplies and educational support to over 200 children in primary schools in Kinshasa.',
    },
    {
      id: '2',
      title: 'HIV/AIDS Awareness Campaign',
      category: 'Health',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
      description: 'Awareness and free HIV/AIDS testing for 500 people in vulnerable communities.',
    },
    {
      id: '3',
      title: 'Inter-School Football Tournament',
      category: 'Sport',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
      description: 'Organization of a football tournament bringing together 12 schools and over 300 young participants.',
    },
    {
      id: '4',
      title: 'Support for Children with Sickle Cell Disease',
      category: 'Health',
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
      description: 'Medical care and psychological support for 50 children with sickle cell disease.',
    },
    {
      id: '5',
      title: 'Community Library',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
      description: 'Creation of a community library with over 1000 books to encourage reading among young people.',
    },
    {
      id: '6',
      title: 'Professional Training Workshop',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      description: 'Sewing and crafts training for 40 young women, promoting their economic autonomy.',
    },
  ];

  return (
    <section className="relative bg-white py-20 lg:py-32">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Title */}
        <div className="mb-16 text-center fade-in">
          <h2
            ref={titleRef}
            className="text-4xl font-bold text-accent sm:text-5xl lg:text-6xl underline-svg mb-4"
          >
            {lang === 'fr' ? 'Nos Projets Réalisés' : 'Our Completed Projects'}
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
                stroke="url(#gradient-gallery)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient-gallery" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b7b3e" />
                  <stop offset="50%" stopColor="#fff2d2" />
                  <stop offset="100%" stopColor="#8b7b3e" />
                </linearGradient>
              </defs>
            </svg>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            {lang === 'fr' 
              ? 'Découvrez quelques-uns des projets qui ont transformé des vies'
              : 'Discover some of the projects that have transformed lives'}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                projectsRef.current[index] = el;
              }}
              className="fade-in group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block px-3 py-1 bg-primary rounded-full text-xs font-semibold mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold">{project.title}</h3>
                </div>
              </div>

              {/* Category Badge (always visible) */}
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 sm:h-96 object-cover rounded-t-2xl"
            />

            <div className="p-8">
              <span className="inline-block px-3 py-1 bg-primary rounded-full text-xs font-semibold text-white mb-4">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-accent mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

