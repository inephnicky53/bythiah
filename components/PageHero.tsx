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
            className="relative w-full min-h-[60vh] flex items-center overflow-hidden"
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

            <div className="container mx-auto px-4 relative z-10 pt-20">

                <div
                    className={`max-w-3xl transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {title}
                    </h1>

                    <p className="text-lg md:text-xl text-white/90">
                        {description}
                    </p>

                </div>

            </div>

            {/* Waves */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">

                <svg
                    viewBox="0 0 1200 200"
                    preserveAspectRatio="none"
                    className="w-screen h-[110px]"
                >

                    <path
                        d="M0,120 C300,40 600,200 900,80 C1050,30 1150,70 1200,100 L1200,200 L0,200 Z"
                        fill="white"
                        opacity="0.5"
                    >
                        <animate
                            attributeName="d"
                            dur="8s"
                            repeatCount="indefinite"
                            values="
              M0,120 C300,40 600,200 900,80 C1050,30 1150,70 1200,100 L1200,200 L0,200 Z;
              M0,100 C300,180 600,40 900,120 C1050,160 1150,120 1200,90 L1200,200 L0,200 Z;
              M0,120 C300,40 600,200 900,80 C1050,30 1150,70 1200,100 L1200,200 L0,200 Z"
                        />
                    </path>

                    <path
                        d="M0,150 C300,100 600,220 900,140 C1050,90 1150,130 1200,150 L1200,200 L0,200 Z"
                        fill="white"
                        opacity="0.8"
                    />

                </svg>

            </div>

        </section>
    );
}