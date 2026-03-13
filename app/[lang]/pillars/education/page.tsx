'use client';

import { getTranslations, type Locale, t as translate } from '@/lib/i18n';
import PageHero from '@/components/PageHero';
import { motion } from 'framer-motion';
import {
    CheckCircle,
    Quote,
    School,
    Lightbulb,
    HeartHandshake,
    ChevronRight
} from 'lucide-react';
import NextImage from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Styles Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface PillarPageProps {
    params: {
        lang: string;
    };
}

export default function EducationPage({ params }: PillarPageProps) {
    const lang = params.lang as Locale;
    const translations = getTranslations(lang);

    const galleryImages = [
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80",
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&q=80",
        "https://images.unsplash.com/photo-1524178232363-1fb28f74b671?w=1200&q=80",
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200&q=80"
    ];

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className="min-h-screen bg-white">
            <PageHero
                title={lang === 'fr' ? 'Éducation pour tous' : 'Education for all'}
                description={lang === 'fr'
                    ? "Bâtir l'avenir à travers l'éducation de base et l'excellence académique."
                    : "Building the future through basic education and academic excellence."}
                color="#433b1c"
                backgroundImage="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&q=80"
            />

            {/* SECTION 1: CITATION & VISION */}
            <section className="py-20 bg-secondary/10">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div {...fadeInUp} className="mb-12">
                            <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
                            <h2 className="text-2xl md:text-3xl font-serif italic text-accent leading-relaxed">
                                {lang === 'fr'
                                    ? "« L’éducation est l’arme la plus puissante que l’on puisse utiliser pour changer le monde. »"
                                    : "« Education is the most powerful weapon which you can use to change the world. »"}
                            </h2>
                            <p className="mt-4 font-bold text-primary">— Nelson Mandela</p>
                        </motion.div>

                        <motion.p {...fadeInUp} className="text-lg text-accent/80 leading-relaxed">
                            {lang === 'fr'
                                ? "Pour The Bythiah Project, l'éducation n'est pas qu'un droit, c'est un bouclier contre la corruption, l'incivisme et le tribalisme. Nous accompagnons les jeunes dont la situation sociale les empêche de rêver d'un avenir meilleur."
                                : "For The Bythiah Project, education is not just a right, it is a shield against corruption, lack of civic spirit, and tribalism. We support young people whose social situation prevents them from dreaming of a better future."}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* SECTION 2: SLIDER & ACTIONS */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeInUp} className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm uppercase tracking-wider">
                                <School size={18} />
                                {lang === 'fr' ? 'Impact sur le terrain' : 'Field Impact'}
                            </div>
                            <h2 className="text-4xl font-bold text-accent">
                                {lang === 'fr' ? 'Transformer l’Environnement d’Apprentissage' : 'Transforming the Learning Environment'}
                            </h2>
                            <p className="text-accent/70 text-lg">
                                {lang === 'fr'
                                    ? "Nous ne nous contentons pas de payer les frais scolaires. Nous créons un écosystème où l'enfant peut s'épanouir : matériel moderne, salles de classe rénovées et suivi pédagogique personnalisé."
                                    : "We don't just pay school fees. We create an ecosystem where children can thrive: modern materials, renovated classrooms, and personalized pedagogical follow-up."}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="p-4 bg-secondary/20 rounded-2xl border-l-4 border-primary">
                                    <h4 className="font-bold text-accent mb-1">{lang === 'fr' ? 'Infrastructures' : 'Infrastructure'}</h4>
                                    <p className="text-sm text-accent/60">{lang === 'fr' ? 'Rénovation de classes et accès à l’eau.' : 'Classroom renovation and water access.'}</p>
                                </div>
                                <div className="p-4 bg-secondary/20 rounded-2xl border-l-4 border-primary">
                                    <h4 className="font-bold text-accent mb-1">{lang === 'fr' ? 'Matériel' : 'Supplies'}</h4>
                                    <p className="text-sm text-accent/60">{lang === 'fr' ? 'Kits scolaires et outils informatiques.' : 'School kits and IT tools.'}</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div {...fadeInUp} className="relative">
                            <div className="rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-secondary/30">
                                <Swiper
                                    modules={[Autoplay, Pagination, EffectFade]}
                                    effect="fade"
                                    autoplay={{ delay: 3500 }}
                                    pagination={{ clickable: true }}
                                    className="h-[550px]"
                                >
                                    {galleryImages.map((src, index) => (
                                        <SwiperSlide key={index}>
                                            <NextImage src={src} alt={`Edu slide ${index}`} fill className="object-cover" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: MENTORAT & LEADERSHIP */}
            <section className="py-20 bg-accent text-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                        <motion.div {...fadeInUp} className="lg:w-1/2 space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white font-bold text-sm uppercase">
                                <Lightbulb size={18} />
                                {lang === 'fr' ? 'Au-delà des livres' : 'Beyond Books'}
                            </div>
                            <h2 className="text-4xl font-bold text-primary">
                                {lang === 'fr' ? 'Développer les Leaders de Demain' : 'Developing Tomorrow\'s Leaders'}
                            </h2>
                            <p className="text-secondary/70 text-lg leading-relaxed">
                                {lang === 'fr'
                                    ? "The Bythiah Project intègre une dimension culturelle et citoyenne. Notre ambition est de former des jeunes qualifiés, motivés et créatifs, capables de devenir des moteurs de changement dans leur communauté."
                                    : "The Bythiah Project integrates a cultural and civic dimension. Our ambition is to train qualified, motivated, and creative young people capable of becoming engines of change in their community."}
                            </p>
                            <div className="space-y-4">
                                {[
                                    { fr: "Développement de l'estime de soi", en: "Building self-esteem" },
                                    { fr: "Ateliers de leadership créatif", en: "Creative leadership workshops" },
                                    { fr: "Lutte contre l'incivisme scolaire", en: "Fighting school incivility" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle className="text-primary shrink-0" />
                                        <span className="font-medium">{lang === 'fr' ? item.fr : item.en}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div {...fadeInUp} className="lg:w-1/2 grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="h-64 relative rounded-3xl overflow-hidden shadow-xl">
                                    <NextImage src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&q=80" alt="Mentoring" fill className="object-cover" />
                                </div>
                                <div className="h-48 relative rounded-3xl overflow-hidden shadow-xl">
                                    <NextImage src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80" alt="Classes" fill className="object-cover" />
                                </div>
                            </div>
                            <div className="pt-12 space-y-4">
                                <div className="h-48 relative rounded-3xl overflow-hidden shadow-xl">
                                    <NextImage src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80" alt="Students" fill className="object-cover" />
                                </div>
                                <div className="h-64 relative rounded-3xl overflow-hidden shadow-xl">
                                    <NextImage src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&q=80" alt="Play" fill className="object-cover" />
                                </div>
                            </div>
                        </motion.div>
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
                                    {lang === 'fr' ? "La santé et le sport complètent notre vision." : "Health and sport complete our vision."}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href={`/${lang}/pillars/health`}
                                    className="flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-accent transition-all group"
                                >
                                    {lang === 'fr' ? 'Santé' : 'Health'}
                                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                                </Link>
                                <Link
                                    href={`/${lang}/pillars/sport`}
                                    className="flex items-center justify-center gap-3 px-8 py-4 bg-accent text-white rounded-2xl font-bold hover:bg-primary transition-all group"
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