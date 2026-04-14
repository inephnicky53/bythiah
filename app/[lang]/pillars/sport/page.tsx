'use client';

import {getTranslations, type Locale, t as translate} from '@/lib/i18n';
import PageHero from '@/components/PageHero';
import {motion} from 'framer-motion';
import {Trophy, Target, Users, Medal, ArrowRight, Star, Zap, ChevronRight, HeartHandshake} from 'lucide-react';
import NextImage from 'next/image';
import Link from 'next/link';
import {useEffect, useMemo, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination, EffectFade} from 'swiper/modules';

// Styles Swiper obligatoires
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface PillarPageProps {
    params: {
        lang: string;
    };
}

export default function SportPage({params}: PillarPageProps) {
    const lang = params.lang as Locale;
    const translations = getTranslations(lang);
    const [partnerLogos, setPartnerLogos] = useState<string[]>([]);

    const sportImages = [
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&q=80",
        "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=1200&q=80",
        "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=1200&q=80",
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80"
    ];

    useEffect(() => {
        let cancelled = false;
        fetch('/api/partners')
            .then((response) => response.json())
            .then((data: { partners?: Array<{ logo?: string }> }) => {
                if (cancelled || !Array.isArray(data.partners)) return;
                const logos = data.partners
                    .map((item) => item.logo)
                    .filter((logo): logo is string => typeof logo === 'string');
                if (logos.length > 0) setPartnerLogos(logos);
            })
            .catch(() => {});
        return () => {
            cancelled = true;
        };
    }, []);

    const partnerColumns = useMemo(
        () => [
            partnerLogos.filter((_, index) => index % 3 === 0),
            partnerLogos.filter((_, index) => index % 3 === 1),
            partnerLogos.filter((_, index) => index % 3 === 2),
        ],
        [partnerLogos]
    );

    const fadeInUp = {
        initial: {opacity: 0, y: 30},
        whileInView: {opacity: 1, y: 0},
        viewport: {once: true},
        transition: {duration: 0.6}
    };

    return (
        <div className="min-h-screen bg-white">
            <PageHero
                title={lang === 'fr' ? 'Le Sport : Levier d\'Excellence et d\'Intégration' : 'Sport: Lever of Excellence and Integration'}
                description={lang === 'fr'
                    ? "Détecter les talents invisibles et cultiver l'excellence par les valeurs du sport."
                    : "Detecting invisible talents and cultivating excellence through sports values."}
                color="#433b1c"
                backgroundImage={sportImages[0]}
            />

            {/* SECTION 1: VISION & TBSA */}
            <section className="py-14 md:py-20 bg-secondary/10">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <motion.div {...fadeInUp} className="mb-8">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white font-bold text-[11px] sm:text-sm uppercase mb-6 tracking-wide leading-tight">
                            <Trophy size={18} className="text-primary"/>
                            The Bythiah Sport Association (TBSA)
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
                            {lang === 'fr'
                                ? "Le Sport : Levier d'Excellence et d'Intégration"
                                : "Sport: Lever of Excellence and Integration"}
                        </h2>
                        <p className="text-lg text-accent/70 leading-relaxed">
                            {lang === 'fr'
                                ? "Le sport rassemble autour de valeurs essentielles : esprit d’équipe, discipline et solidarité. À travers la TBSA, nous détectons les talents invisibles pour leur offrir un encadrement professionnel et humain."
                                : "Sport brings people together around essential values: teamwork, discipline, and solidarity. Through TBSA, we detect invisible talents to offer them professional and human support."}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2: PROGRAMME DFV & PARTENARIATS */}
            <section className="py-14 md:py-24 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <motion.div {...fadeInUp} className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-accent italic">
                                {lang === 'fr' ? 'Le Programme DFV' : 'The DFV Program'}
                            </h2>

                            <div className="flex flex-wrap gap-3">
                                {[
                                    {word: 'Dénicher', en: 'Detect'},
                                    {word: 'Former', en: 'Train'},
                                    {word: 'Valoriser', en: 'Promote'}
                                ].map((item, i) => (
                                    <span key={i}
                                          className="bg-primary text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-black shadow-lg shadow-primary/20 uppercase">
                    {lang === 'fr' ? item.word : item.en}
                  </span>
                                ))}
                            </div>

                            <p className="text-accent/70 text-lg leading-relaxed">
                                {lang === 'fr'
                                    ? "Grâce à notre partenariat avec la FECOFA et PSG Academy Turkey, nous assurons un encadrement de haut niveau dès 4 ans. Nous formons des athlètes accomplis et des citoyens responsables."
                                    : "Thanks to our partnership with FECOFA and PSG Academy Turkey, we provide high-level coaching from age 4. We train accomplished athletes and responsible citizens."}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 pt-4">
                                <div
                                    className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-secondary shadow-sm group hover:border-primary transition-colors">
                                    <div
                                        className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <Star size={24}/>
                                    </div>
                                    <span className="font-bold text-accent">PSG Academy Turkey</span>
                                </div>
                                <div
                                    className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-secondary shadow-sm group hover:border-primary transition-colors">
                                    <div
                                        className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <Medal size={24}/>
                                    </div>
                                    <span className="font-bold text-accent">FECOFA</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div {...fadeInUp} className="relative">
                            <div
                                className="rounded-[1.75rem] sm:rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden shadow-2xl border-[8px] sm:border-[12px] border-secondary/20 rotate-0 sm:rotate-1 hover:rotate-0 transition-transform duration-700">
                                <Swiper
                                    modules={[Autoplay, Pagination, EffectFade]}
                                    effect="fade"
                                    autoplay={{delay: 3000}}
                                    pagination={{clickable: true}}
                                    className="h-[320px] sm:h-[420px] lg:h-[500px]"
                                >
                                    {sportImages.map((src, index) => (
                                        <SwiperSlide key={index}>
                                            <NextImage src={src} alt={`Sport activity ${index}`} fill
                                                       className="object-cover"/>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: PARTENAIRES SPORT (DESIGN MOSAÏQUE VERTICALE) */}
            <section className="py-14 md:py-24 bg-[#eef2f6] overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
                        <motion.div {...fadeInUp} className="order-2 lg:order-1 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 h-[340px] sm:h-[380px] md:h-[460px] lg:h-[520px]">
                            {partnerColumns.map((column, colIndex) => {
                                const isDown = colIndex === 1;
                                const sourceItems = (column.length > 0 ? column : partnerLogos).slice(0, 14);
                                // Rotate list per column so repetitions are less obvious.
                                const rotateBy =
                                    sourceItems.length > 0 ? (colIndex * 3) % sourceItems.length : 0;
                                const rotated =
                                    sourceItems.length > 0
                                        ? [...sourceItems.slice(rotateBy), ...sourceItems.slice(0, rotateBy)]
                                        : [];
                                // For a seamless loop, duplicate exactly once and animate by -50%.
                                const loopItems = [...rotated, ...rotated];
                                return (
                                    <div
                                        key={colIndex}
                                        className={`${colIndex === 2 ? 'hidden md:block' : ''} relative overflow-hidden rounded-xl
                                        [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]
                                        [mask-size:100%_100%] [mask-repeat:no-repeat]`}
                                    >
                                        <motion.div
                                            animate={{y: isDown ? ['-50%', '0%'] : ['0%', '-50%']}}
                                            transition={{
                                                duration: 10 + colIndex * 1.5,
                                                ease: 'linear',
                                                repeat: Infinity,
                                                repeatType: 'loop',
                                            }}
                                            className="flex flex-col gap-3"
                                        >
                                            {loopItems.map((logo, index) => (
                                                <div
                                                    key={`${logo}-${index}`}
                                                    className="h-20 sm:h-[5.5rem] lg:h-24 bg-white rounded-xl border border-secondary shadow-sm flex items-center justify-center p-3"
                                                >
                                                    <NextImage
                                                        src={logo}
                                                        alt="Partenaire sportif"
                                                        width={140}
                                                        height={70}
                                                        className="max-h-12 sm:max-h-14 w-auto object-contain"
                                                    />
                                                </div>
                                            ))}
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </motion.div>

                        <motion.div {...fadeInUp} className="order-1 lg:order-2 bg-white/80 rounded-[1.75rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-12 border border-primary/10 shadow-xl">
                            <p className="text-sm font-semibold uppercase tracking-widest text-accent/60 mb-4">
                                {lang === 'fr' ? 'Nos partenaires' : 'Our partners'}
                            </p>
                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-accent leading-tight mb-5 sm:mb-6">
                                {lang === 'fr'
                                    ? 'Partenaires et sponsors pour un impact durable'
                                    : 'Partners and sponsors for sustainable impact'}
                            </h2>
                            <p className="text-accent/70 leading-relaxed text-base sm:text-lg">
                                {lang === 'fr'
                                    ? "Nous collaborons avec un réseau de partenaires sportifs et institutionnels qui partagent notre vision : détecter, former et valoriser les talents de demain dans un cadre sain, structuré et inclusif."
                                    : "We collaborate with a network of sports and institutional partners who share our vision: detect, train, and promote tomorrow's talents in a healthy, structured, and inclusive environment."}
                            </p>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* SECTION 4: NOS DEUX ENTITÉS SPORTIVES */}
            <section className="py-14 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-accent">
                            {lang === 'fr' ? 'Nos structures sportives' : 'Our sports entities'}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <motion.div {...fadeInUp} className="rounded-[1.5rem] sm:rounded-[2rem] border border-secondary bg-secondary/10 p-6 sm:p-8 shadow-lg">
                            <div className="flex justify-center mb-6">
                                <NextImage
                                    src="/images/forever-champ.jpg"
                                    alt="The Bythiah Forever Champions"
                                    width={220}
                                    height={120}
                                    className="h-auto w-auto object-contain rounded-lg"
                                />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-accent mb-3 text-center">The Bythiah Forever Champions</h3>
                            <p className="text-accent/70 text-center leading-relaxed">
                                {lang === 'fr'
                                    ? "Notre cadre de formation continue qui accompagne les jeunes talents vers la performance, la discipline et la confiance en soi."
                                    : "Our continuous training framework supporting young talents toward performance, discipline, and self-confidence."}
                            </p>
                        </motion.div>

                        <motion.div {...fadeInUp} transition={{delay: 0.15}} className="rounded-[1.5rem] sm:rounded-[2rem] border border-secondary bg-secondary/10 p-6 sm:p-8 shadow-lg">
                            <div className="flex justify-center mb-6">
                                <NextImage
                                    src="/images/sport.jpg"
                                    alt="The Bythiah Sport Association"
                                    width={220}
                                    height={120}
                                    className="h-auto w-auto object-contain rounded-lg"
                                />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-accent mb-3 text-center">The Bythiah Sport Association</h3>
                            <p className="text-accent/70 text-center leading-relaxed">
                                {lang === 'fr'
                                    ? "Le bras opérationnel qui structure nos académies, compétitions et partenariats, en mettant l’humain au centre du jeu."
                                    : "The operational arm structuring our academies, competitions, and partnerships, with people at the heart of the game."}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: VALEURS & MOSAÏQUE */}
            <section className="py-14 md:py-24 bg-accent text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {lang === 'fr' ? "Plus qu'une discipline, une école de vie" : "More than a discipline, a school of life"}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5 md:gap-6">
                        {[
                            {
                                title: lang === 'fr' ? 'Esprit d’Équipe' : 'Team Spirit',
                                icon: <Users/>,
                                img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80"
                            },
                            {
                                title: lang === 'fr' ? 'Discipline' : 'Discipline',
                                icon: <Target/>,
                                img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80"
                            },
                            {
                                title: lang === 'fr' ? 'Résilience' : 'Resilience',
                                icon: <Zap/>,
                                img: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=1200&q=80"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                {...fadeInUp}
                                transition={{delay: i * 0.2}}
                                className="group relative h-72 sm:h-80 md:h-96 rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden"
                            >
                                <NextImage src={item.img} alt={item.title} fill
                                           className="object-cover group-hover:scale-110 transition-transform duration-700"/>
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-accent via-accent/20 to-transparent"/>
                                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                                    <div className="flex items-center gap-3 text-primary mb-2">
                                        {item.icon}
                                        <h3 className="text-lg sm:text-xl font-bold text-white">{item.title}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 6: NAVIGATION ENTRE PILIERS */}
            <section className="py-14 md:py-24 bg-secondary/30">
                <motion.div {...fadeInUp} className="max-w-3xl mx-auto space-y-8">
                    <HeartHandshake className="w-16 h-16 text-primary mx-auto"/>
                    <h2 className="text-3xl md:text-4xl font-bold text-accent text-center">
                        {lang === 'fr' ? "Découvrez nos autres champs d'action" : "Discover our other fields of action"}
                    </h2>
                    <div className="container mx-auto px-4">
                        <div
                            className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 bg-white p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[3rem] shadow-xl border border-primary/10">
                            <div className="text-center md:text-left">
                                <p className="text-accent/60 italic">
                                    {lang === 'fr' ? "L'éducation et la santé complètent notre vision." : "Education and health complete our vision."}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto">
                                <Link
                                    href={`/${lang}/pillars/education`}
                                    className="flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-accent text-white rounded-2xl font-bold hover:bg-primary transition-all group"
                                >
                                    {lang === 'fr' ? 'Éducation' : 'Education'}
                                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                                </Link>
                                <Link
                                    href={`/${lang}/pillars/health`}
                                    className="flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-2xl font-bold hover:bg-accent transition-all group"
                                >
                                    {lang === 'fr' ? 'Santé' : 'Health'}
                                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}