'use client';

import {useEffect, useRef, useState} from 'react';
import {type Locale} from '@/lib/i18n';
import {getTranslations, t as translate} from '@/lib/i18n';
import {useInView} from '@/lib/hooks/useInView';
import {useIsMobile} from '@/lib/hooks/useIsMobile';

interface ScrollingSectionProps {
    lang: Locale;
}

interface Section {
    id: string;
    title: string;
    content: string | string[];
    image: string;
}

export default function ScrollingSection({lang}: ScrollingSectionProps) {
    const translations = getTranslations(lang);
    const isMobile = useIsMobile();
    const [activeSection, setActiveSection] = useState(0);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Pale/soft colors for each section
    const paleColors = [
        'bg-white',      // Intro - very light beige
        'bg-orange-50',     // About - light cream
        'bg-yellow-50',     // Vocation - light pale yellow
        'bg-white',       // Mission - light pale rose
        'bg-orange-50',       // Vision - light pale blue
    ];

    // Define sections with their content
    const sections: Section[] = [
        {
            id: 'intro',
            title: translate(translations, 'home.intro.title'),
            content: [
                translate(translations, 'home.intro.description'),
                translate(translations, 'home.intro.since'),
                translate(translations, 'home.intro.commitment'),
            ],
            image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
        },

        {
            id: 'about',
            title: translate(translations, 'home.about.title'),
            content: [
                translate(translations, 'home.about.description'),
                translate(translations, 'home.about.intervention'),
                translate(translations, 'home.about.journey'),
            ],
            image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80',
        },
        {
            id: 'vocation',
            title: translate(translations, 'home.vocation.title'),
            content: [
                translate(translations, 'home.vocation.description'),
                translate(translations, 'home.vocation.support'),
                translate(translations, 'home.vocation.work'),
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

                translate(translations, 'home.mission.goal'),
                translate(translations, 'home.mission.mindset'),
            ],
            image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80',
        },
        {
            id: 'vision',
            title: translate(translations, 'home.vision.title'),
            content: [
                translate(translations, 'home.vision.description'),
                translate(translations, 'home.vision.building'),
                translate(translations, 'home.vision.priority'),
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
        <section className={`relative transition-colors duration-700 ${paleColors[activeSection] || 'bg-white'}`}>
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
                                className="flex flex-col lg:min-h-screen lg:items-center px-6 py-10 sm:px-8 lg:px-10"
                            >
                                <div
                                    ref={(el) => {
                                        contentRefs.current[index] = el;
                                    }}
                                    className="space-y-5 max-w-2xl fade-in lg:ml-20"
                                >
                                    <h2
                                        ref={(el) => {
                                            titleRefs.current[index] = el;
                                        }}
                                        className="text-3xl font-bold text-accent sm:text-4xl lg:text-5xl underline-svg mb-4 lg:mb-16"
                                    >
                                        <div className={'mb-2 lg:mb-4'}>
                                            {section.title}
                                        </div>
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
                                                    <stop offset="0%" stopColor="#fff2d2"/>
                                                    <stop offset="50%" stopColor="#8b7b3e"/>
                                                    <stop offset="100%" stopColor="#fff2d2"/>
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

                                {/* Mobile image - below text */}
                                <div className="lg:hidden w-full mt-8 mb-8">
                                    <div
                                        className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-2xl">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={section.image}
                                            alt={section.title}
                                            className="h-full w-full object-cover"
                                        />
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"/>
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
                                    style={{width: '90%', height: '80%'}}
                                >
                                    <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={section.image}
                                            alt={section.title}
                                            className="h-full w-full object-cover"
                                        />
                                        {/* Subtle overlay */}
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"/>
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

