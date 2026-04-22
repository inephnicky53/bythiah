'use client';

import {useEffect, useMemo, useRef, useState} from 'react';
import {type Locale} from '@/lib/i18n';
import type {PartnerLogo} from '@/lib/partners';

interface PartnersProps {
    lang: Locale;
    /** From `getPartnerLogos()` on the server; defaults to [] if omitted. */
    partners?: PartnerLogo[];
}

export default function Partners({ lang, partners = [] }: PartnersProps) {
    const titleRef = useRef<HTMLHeadingElement>(null);
    /** Si les props RSC arrivent vides, rechargement via /api/partners */
    const [fetched, setFetched] = useState<PartnerLogo[] | null>(null);

    useEffect(() => {
        if (partners.length > 0) return;
        let cancelled = false;
        fetch('/api/partners')
            .then((r) => r.json())
            .then((data: { partners?: PartnerLogo[] }) => {
                if (!cancelled && Array.isArray(data.partners) && data.partners.length > 0) {
                    setFetched(data.partners);
                }
            })
            .catch(() => {});
        return () => {
            cancelled = true;
        };
    }, [partners.length]);

    const effectivePartners = partners.length > 0 ? partners : (fetched ?? []);

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

    const marqueeItems = useMemo(() => {
        if (effectivePartners.length === 0) return [];
        return [...effectivePartners, ...effectivePartners, ...effectivePartners];
    }, [effectivePartners]);

    return (
        <section className="relative bg-accent/5 overflow-hidden py-10 lg:py-20">
            <div className="container mx-auto px-4 sm:px-8 lg:px-10 mb-12">
                {/* Title */}
                <h2
                    ref={titleRef}
                    className="text-3xl font-bold text-accent sm:text-4xl lg:text-5xl underline-svg mb-10 fade-in"
                >
                    <div className={'mb-4'}>
                        {lang === 'fr' ? 'Nos partenaires' : 'Our partners'}
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
                <p className="text-gray-600 text-base sm:text-lg max-w-2xl">
                    {lang === 'fr'
                        ? 'Ils nous font confiance et soutiennent notre mission.'
                        : 'They trust us and support our mission.'}
                </p>
            </div>

            {/* Marquee animé — logos depuis public/img/partners */}
            {marqueeItems.length > 0 && (
                <div className="relative w-full mt-10 group">
                    <div
                        className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-accent/5 to-transparent"/>
                    <div
                        className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-accent/5 to-transparent"/>

                    <div className="flex animate-marquee gap-8 w-max group-hover:[animation-play-state:paused]">
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
            )}

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

