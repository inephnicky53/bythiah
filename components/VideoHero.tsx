'use client';

import {type Locale} from '@/lib/i18n';
import {getTranslations, t as translate} from '@/lib/i18n';
import Link from 'next/link';

interface VideoHeroProps {
    lang: Locale;
}

export default function VideoHero({lang}: VideoHeroProps) {
    const translations = getTranslations(lang);

    const scrollToNextSection = () => {
        const heroHeight = window.innerHeight;
        window.scrollTo({
            top: heroHeight,
            behavior: 'smooth',
        });
    };

    return (
        <section className="h-screen w-screen overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    poster="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80"
                    className="h-full w-full object-cover"
                >
                    <source
                        src="https://cdn.coverr.co/videos/coverr-volunteers-helping-children-in-africa-8127/1080p.mp4"
                        type="video/mp4"/>
                    {/* Fallback image if video doesn't load */}
                </video>
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50"/>
            </div>

            {/* Content with gradient text at bottom */}
            <div className="absolute inset-0 z-10 flex flex-col justify-end">
                {/* Gradient overlay from transparent to dark */}
                <div
                    className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none"/>

                {/* Text content */}
                <div
                    className="relative w-full space-y-4 sm:space-y-6 py-8 sm:py-12 px-4 sm:px-8 lg:px-12 pb-20 sm:pb-24">
                    <h1 className="text-3xl font-bold text-white sm:text-6xl lg:text-7xl xl:text-8xl leading-tight">
                        <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                          {translate(translations, 'home.hero.title')}
                        </span>
                    </h1>

                    <p className="max-w-4xl text-base text-white/90 sm:text-2xl lg:text-3xl xl:text-4xl leading-relaxed">
                        {translate(translations, 'home.hero.subtitle')}
                    </p>

                    <div className="pt-4 sm:pt-6">
                        <Link
                            href={`/${lang}/about`}
                            className="inline-flex items-center rounded-full bg-primary px-6 sm:px-10 py-3 sm:py-5 text-base sm:text-lg font-semibold text-white transition-all hover:bg-primary/90 hover:scale-105 shadow-xl"
                        >
                            {translate(translations, 'home.hero.cta')}
                            <svg
                                className="ml-2 h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <button
                onClick={scrollToNextSection}
                className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 animate-bounce cursor-pointer bg-transparent border-none p-2"
                aria-label="Scroll to next section"
            >
                <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </button>
        </section>
    );
}

