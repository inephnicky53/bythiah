'use client';

import { useEffect, useState } from 'react';

interface PageHeroProps {
    title: string;
    description: string;
    color?: string;
    backgroundImage?: string;
}

export default function PageHero({
                                     title,
                                     description,
                                     color = '#7c572c',
                                     backgroundImage
                                 }: PageHeroProps) {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <section
            className="relative w-full min-h-[80vh] flex items-center overflow-hidden"
            style={{ backgroundColor: color }}
        >

            {backgroundImage && (
                <div className="absolute inset-0">
                    <img
                        src={backgroundImage}
                        alt={title}
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </div>
            )}

            <div className="container mx-auto px-4 relative z-10">

                <div
                    className={`max-w-3xl transition-all duration-1000 ${
                        loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        {title}
                    </h1>

                    <p className="text-lg md:text-xl text-white/90">
                        {description}
                    </p>

                </div>

            </div>

            {/* SVG WAVES */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">

                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="block w-screen h-[80px]"
                >

                    <path
                        d="M0,90 C200,60 350,120 550,100 C750,80 900,40 1200,90 L1200,120 L0,120 Z"
                        fill="white"
                        opacity="0.6"
                    />

                    <path
                        d="M0,100 C250,60 450,120 700,90 C900,70 1050,80 1200,100 L1200,120 L0,120 Z"
                        fill="white"
                        opacity="0.8"
                    />

                    <path
                        d="M0,110 C300,80 500,120 800,100 C1000,90 1100,100 1200,110 L1200,120 L0,120 Z"
                        fill="white"
                    />

                </svg>

            </div>

        </section>
    );
}