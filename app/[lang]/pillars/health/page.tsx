'use client';

import {getTranslations, type Locale, t as translate} from '@/lib/i18n';
import PageHero from '@/components/PageHero';
import {motion} from 'framer-motion';
import {Activity, ShieldCheck, ArrowRight, HeartHandshake, Syringe, ChevronRight} from 'lucide-react';
import NextImage from 'next/image';
import Link from 'next/link';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination, EffectFade} from 'swiper/modules';

// Styles Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface PillarPageProps {
    params: {
        lang: string;
    };
}

export default function HealthPage({params}: PillarPageProps) {
    const lang = params.lang as Locale;
    const translations = getTranslations(lang);

    const healthImages = [
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200&q=80",
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
        "https://images.unsplash.com/photo-1581594658210-c5c85d9f68b1?w=1200&q=80",
        "https://images.unsplash.com/photo-1511174511562-5f7f1858548a?w=1200&q=80"
    ];

    const fadeInUp = {
        initial: {opacity: 0, y: 30},
        whileInView: {opacity: 1, y: 0},
        viewport: {once: true},
        transition: {duration: 0.6}
    };

    return (
        <div className="min-h-screen bg-white">
            <PageHero
                title={lang === 'fr' ? 'Améliorer la Santé pour Tous' : 'Improving Health for All'}
                description={lang === 'fr'
                    ? "Améliorer la santé pour tous : une priorité pour le développement de la jeunesse."
                    : "Improving health for all: a priority for youth development."}
                color="#433b1c"
                backgroundImage={healthImages[0]}
            />

            {/* SECTION 1: VISION & ENGAGEMENT */}
            <section className="py-20 bg-primary/5">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <motion.div {...fadeInUp} className="mb-8">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm uppercase mb-6">
                            <Activity size={18}/>
                            {lang === 'fr' ? 'La santé c’est la vie' : 'Health is life'}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6 italic">
                            « La prévention, le diagnostic et la prise en charge doivent intervenir le plus tôt
                            possible. »
                        </h2>
                        <p className="text-lg text-accent/70 leading-relaxed">
                            {lang === 'fr'
                                ? "Le renforcement du système de santé est essentiel. The Bythiah Project accorde une attention particulière à la promotion de la santé en milieu scolaire et universitaire pour éviter des conséquences irréversibles chez les jeunes."
                                : "Strengthening the health system is essential. The Bythiah Project pays special attention to promoting health in schools and universities to avoid irreversible consequences for young people."}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2: PATHOLOGIES & ACCOMPAGNEMENT (GRID) */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeInUp} className="relative order-last lg:order-first">
                            <div
                                className="rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-secondary/20">
                                <Swiper
                                    modules={[Autoplay, Pagination, EffectFade]}
                                    effect="fade"
                                    autoplay={{delay: 4000}}
                                    pagination={{clickable: true}}
                                    className="h-[550px]"
                                >
                                    {healthImages.map((src, index) => (
                                        <SwiperSlide key={index}>
                                            <NextImage src={src} alt={`Health slide ${index}`} fill
                                                       className="object-cover"/>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </motion.div>

                        <motion.div {...fadeInUp} className="space-y-8">
                            <h2 className="text-4xl font-bold text-accent">
                                {lang === 'fr' ? 'Nos Programmes de Sensibilisation' : 'Our Awareness Programs'}
                            </h2>
                            <p className="text-accent/70 text-lg">
                                {lang === 'fr'
                                    ? "Nous apportons un soutien vital aux personnes n'ayant pas les moyens d'accéder à des soins de qualité, avec des protocoles spécifiques pour les maladies chroniques."
                                    : "We provide vital support to people who cannot afford quality care, with specific protocols for chronic diseases."}
                            </p>

                            <div className="space-y-4">
                                {[
                                    {
                                        fr: "Lutte contre la drépanocytose et l'épilepsie",
                                        en: "Fight against sickle cell anemia and epilepsy"
                                    },
                                    {
                                        fr: "Accompagnement des enfants atteints de maladies graves",
                                        en: "Support for children with serious illnesses"
                                    },
                                    {
                                        fr: "Soutien à l'intégration des personnes vivant avec le VIH/SIDA",
                                        en: "Support for integration of people living with HIV/AIDS"
                                    },
                                    {
                                        fr: "Amélioration de la couverture sanitaire scolaire",
                                        en: "Improving school health coverage"
                                    }
                                ].map((item, i) => (
                                    <div key={i}
                                         className="flex items-start gap-4 p-5 bg-secondary/10 rounded-2xl hover:bg-secondary/20 transition-colors">
                                        <ShieldCheck className="text-primary mt-1 shrink-0"/>
                                        <span
                                            className="font-semibold text-accent leading-snug">{lang === 'fr' ? item.fr : item.en}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: LES 3 PÔLES D'ACTION (IMAGES & TEXTE) */}
            <section className="py-24 bg-accent text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-16">
                        {lang === 'fr' ? 'Une Approche Holistique' : 'A Holistic Approach'}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Activity className="w-10 h-10 text-primary"/>,
                                title: lang === 'fr' ? "Prévention" : "Prevention",
                                desc: lang === 'fr' ? "Campagnes d'hygiène et de sensibilisation aux risques sanitaires en milieu scolaire." : "Hygiene campaigns and health risk awareness in schools.",
                                img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&q=80"
                            },
                            {
                                icon: <Syringe className="w-10 h-10 text-primary"/>,
                                title: lang === 'fr' ? "Diagnostic" : "Diagnosis",
                                desc: lang === 'fr' ? "Dépistage précoce des maladies chroniques pour une meilleure prise en charge." : "Early screening of chronic diseases for better management.",
                                img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80"
                            },
                            {
                                icon: <HeartHandshake className="w-10 h-10 text-primary"/>,
                                title: lang === 'fr' ? "Accompagnement" : "Support",
                                desc: lang === 'fr' ? "Soutien médical et psychologique pour les familles vulnérables." : "Medical and psychological support for vulnerable families.",
                                img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=600&q=80"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                {...fadeInUp}
                                transition={{delay: i * 0.2}}
                                className="group"
                            >
                                <div
                                    className="relative h-64 rounded-[2rem] overflow-hidden mb-6 border border-white/10">
                                    <NextImage src={item.img} alt={item.title} fill
                                               className="object-cover group-hover:scale-110 transition-transform duration-700"/>
                                    <div
                                        className="absolute inset-0 bg-accent/40 group-hover:bg-accent/20 transition-colors"/>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        {item.icon}
                                        <h3 className="text-xl font-bold">{item.title}</h3>
                                    </div>
                                    <p className="text-secondary/60 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: NAVIGATION ENTRE PILIERS */}
            <section className="py-24 bg-secondary/30">
                <motion.div {...fadeInUp} className="max-w-3xl mx-auto space-y-8">
                    <HeartHandshake className="w-16 h-16 text-primary mx-auto"/>
                    <h2 className="text-3xl md:text-4xl font-bold text-accent text-center">
                        {lang === 'fr' ? "Découvrez nos autres champs d'action" : "Discover our other fields of action"}
                    </h2>
                    <div className="container mx-auto px-4">
                        <div
                            className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-white p-10 rounded-[3rem] shadow-xl border border-primary/10">
                            <div className="text-center md:text-left">
                                <p className="text-accent/60 italic">
                                    {lang === 'fr' ? "L'éducation et le sport complètent notre vision." : "Education and sport complete our vision."}
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href={`/${lang}/pillars/education`}
                                    className="flex items-center justify-center gap-3 px-8 py-4 bg-accent text-white rounded-2xl font-bold hover:bg-primary transition-all group"
                                >
                                    {lang === 'fr' ? 'Éducation' : 'Education'}
                                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                                </Link>
                                <Link
                                    href={`/${lang}/pillars/sport`}
                                    className="flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-accent transition-all group"
                                >
                                    Sport
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