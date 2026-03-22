'use client';

import { getTranslations, type Locale, t as translate } from '@/lib/i18n';
import PageHero from '@/components/PageHero';
import { motion } from 'framer-motion';
import { GraduationCap, HeartPulse, Trophy, CheckCircle2, Quote, ArrowRight, Activity, Users, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface PillarsPageProps {
  params: {
    lang: string;
  };
}

export default function PillarsPage({ params }: PillarsPageProps) {
  const lang = params.lang as Locale;
  const translations = getTranslations(lang);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const scrollToAnchor = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navButtons = [
    { id: 'education', icon: <GraduationCap />, label: lang === 'fr' ? 'Éducation' : 'Education' },
    { id: 'health', icon: <HeartPulse />, label: lang === 'fr' ? 'Santé' : 'Health' },
    { id: 'sport', icon: <Trophy />, label: lang === 'fr' ? 'Sport' : 'Sport' },
  ];

  return (
      <div className="min-h-screen bg-white">
        <PageHero
            title={translate(translations, 'nav.pillars')}
            description={lang === 'fr'
                ? "Éducation, Santé et Sport : nos leviers pour transformer durablement la jeunesse africaine."
                : "Education, Health and Sport: our levers to sustainably transform African youth."}
            color="#433b1c"
            backgroundImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80"
        />

        {/* INTRODUCTION SECTION */}
        <section className="py-20 bg-secondary/10">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold text-accent mb-6">
              {lang === 'fr' ? 'Trois Piliers, Une Vision Unique' : 'Three Pillars, One Unique Vision'}
            </motion.h2>
            <motion.p {...fadeInUp} className="text-lg text-accent/80 leading-relaxed mb-12">
              {lang === 'fr'
                  ? "Les actions menées par The Bythiah Project reposent sur des fondations solides. Ces trois secteurs constituent des leviers essentiels pour favoriser le développement des enfants et des jeunes, tout en contribuant à la construction d’une société plus juste et équilibrée."
                  : "The actions undertaken by The Bythiah Project are based on solid foundations. These three areas are essential levers for promoting the development of children and young people, while contributing to the building of a fairer and more balanced society."}
            </motion.p>

            {/* QUICK NAVIGATION BUTTONS */}
            <motion.div
                {...fadeInUp}
                className="flex flex-wrap justify-center gap-4"
            >
              {navButtons.map((btn) => (
                  <button
                      key={btn.id}
                      onClick={() => scrollToAnchor(btn.id)}
                      className="flex items-center gap-3 px-8 py-4 bg-white border-2 border-secondary text-accent rounded-2xl font-bold shadow-sm hover:border-primary hover:text-primary transition-all group"
                  >
                    <span className="text-primary group-hover:scale-110 transition-transform">{btn.icon}</span>
                    {btn.label}
                    <ChevronDown size={16} className="opacity-50 group-hover:translate-y-1 transition-transform" />
                  </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PILLIER 1 : EDUCATION */}
        <section id="education" className="py-24 overflow-hidden scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeInUp} className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm uppercase">
                  <GraduationCap size={20} />
                  {lang === 'fr' ? 'Bâtir l’avenir' : 'Building the future'}
                </div>
                <h2 className="text-4xl font-bold text-accent italic">
                  {lang === 'fr' ? 'L’Éducation : Notre Cheval de Bataille' : 'Education: Our Main Priority'}
                </h2>
                <div className="relative p-6 bg-secondary/20 rounded-2xl border-l-4 border-primary italic text-accent/80">
                  <Quote className="absolute -top-4 -left-2 text-primary/20 w-12 h-12" />
                  <p className="text-lg">
                    « L’éducation est l’arme la plus puissante que l’on puisse utiliser pour changer le monde. »
                  </p>
                  <cite className="block mt-2 font-bold not-italic">— Nelson Mandela</cite>
                </div>
                <p className="text-accent/70 leading-relaxed text-justify">
                  {lang === 'fr'
                      ? "Notre vision est de bâtir l’avenir à travers l’éducation de base. Nous accompagnons les jeunes dont la situation sociale les empêche de poursuivre leurs études pour combattre l’ignorance, la corruption et le tribalisme."
                      : "Our vision is to build the future through basic education. We support young people whose social situation prevents them from pursuing their studies to combat ignorance, corruption, and tribalism."}
                </p>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    { fr: "Renforcer l'apprentissage", en: "Strengthening learning" },
                    { fr: "Améliorer l'environnement éducatif", en: "Improving education environment" },
                    { fr: "Former les enseignants", en: "Teacher training" },
                    { fr: "Intégrer la culture", en: "Integrating culture" }
                  ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-accent/80 font-medium">
                        <CheckCircle2 className="text-primary shrink-0" size={20} />
                        {lang === 'fr' ? item.fr : item.en}
                      </li>
                  ))}
                </ul>
                <div>
                  <a href={`/${lang}/pillars/education`} className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-bold text-sm uppercase">
                    {lang === 'fr' ? 'En savoir plus' : 'Learn more'}
                  </a>
                </div>
              </motion.div>
              <motion.div {...fadeInUp} className="relative">
                <div className="aspect-video lg:aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-8 border-secondary">
                  <Image src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80" alt="Education" fill className="object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PILLIER 2 : SANTÉ */}
        <section id="health" className="py-24 bg-accent text-white relative scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeInUp} className="order-2 lg:order-1 relative">
                <div className="aspect-video lg:aspect-square rounded-[3rem] overflow-hidden shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500 border-8 border-white/10">
                  <Image src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80" alt="Health" fill className="object-cover" />
                </div>
              </motion.div>
              <motion.div {...fadeInUp} className="order-1 lg:order-2 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white font-bold text-sm uppercase">
                  <HeartPulse size={20} />
                  {lang === 'fr' ? 'La santé, c’est la vie' : 'Health is life'}
                </div>
                <h2 className="text-4xl font-bold text-primary">
                  {lang === 'fr' ? 'Améliorer la Santé pour Tous' : 'Improving Health for All'}
                </h2>
                <p className="text-secondary/80 leading-relaxed text-justify">
                  {lang === 'fr'
                      ? "Nous accordons une attention particulière à la promotion de la santé en milieu scolaire. La prévention et le diagnostic précoce sont nos priorités pour éviter des conséquences irréversibles."
                      : "We pay special attention to health promotion in schools. Prevention and early diagnosis are our priorities to avoid irreversible consequences."}
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { fr: "Lutte contre la drépanocytose", en: "Sickle cell awareness" },
                    { fr: "Accompagnement VIH/SIDA", en: "HIV/AIDS support" },
                    { fr: "Prise en charge épilepsie", en: "Epilepsy management" },
                    { fr: "Couverture santé scolaire", en: "School health coverage" }
                  ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                        <Activity className="text-primary mt-1" size={24} />
                        <span className="font-medium">{lang === 'fr' ? item.fr : item.en}</span>
                      </div>
                  ))}
                </div>
                <div>
                  <a href={`/${lang}/pillars/health`} className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-bold text-sm uppercase">
                    {lang === 'fr' ? 'En savoir plus' : 'Learn more'}
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PILLIER 3 : SPORT */}
        <section id="sport" className="py-24 bg-white scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeInUp} className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm uppercase">
                  <Trophy size={20} />
                  {lang === 'fr' ? 'Intégration sociale' : 'Social integration'}
                </div>
                <h2 className="text-4xl font-bold text-accent italic">
                  {lang === 'fr' ? 'Le Sport : Levier d’Excellence' : 'Sport: Lever of Excellence'}
                </h2>
                <p className="text-accent/70 leading-relaxed text-justify">
                  {lang === 'fr'
                      ? "Le sport rassemble autour de valeurs : esprit d’équipe, discipline et solidarité. À travers The Bythiah Sport Association (TBSA), nous détectons les talents invisibles."
                      : "Sport brings people together around values: teamwork, discipline, and solidarity. Through The Bythiah Sport Association (TBSA), we detect invisible talents."}
                </p>

                {/* Programme DFV */}
                <div className="bg-secondary p-8 rounded-[2rem] border border-primary/20 shadow-sm relative overflow-hidden">
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold text-accent mb-4">Programme DFV</h4>
                    <div className="flex flex-wrap gap-4">
                      <span className="bg-primary text-white px-4 py-1 rounded-full font-bold">Dénicher</span>
                      <span className="bg-primary text-white px-4 py-1 rounded-full font-bold">Former</span>
                      <span className="bg-primary text-white px-4 py-1 rounded-full font-bold">Valoriser</span>
                    </div>
                    <p className="mt-4 text-sm text-accent/70 italic">
                      {lang === 'fr'
                          ? "Partenariat avec la FECOFA et PSG Academy Turkey pour un encadrement professionnel dès 4 ans."
                          : "Partnership with FECOFA and PSG Academy Turkey for professional coaching from age 4."}
                    </p>
                  </div>
                  <Users className="absolute -bottom-4 -right-4 w-32 h-32 text-primary/10" />
                </div>

                <div>
                  <a href={`/${lang}/pillars/sport`} className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-bold text-sm uppercase">
                    {lang === 'fr' ? 'En savoir plus' : 'Learn more'}
                  </a>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden relative shadow-xl">
                    <Image src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80" alt="Sport 1" fill className="object-cover" />
                  </div>
                  <div className="aspect-square rounded-3xl overflow-hidden relative shadow-xl">
                    <Image src="https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=600&q=80" alt="Sport 2" fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-square rounded-3xl overflow-hidden relative shadow-xl">
                    <Image src="https://images.unsplash.com/photo-1511886929837-354d827aae26?w=600&q=80" alt="Sport 3" fill className="object-cover" />
                  </div>
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden relative shadow-xl">
                    <Image src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80" alt="Sport 4" fill className="object-cover" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="py-20 bg-secondary/30 relative">
          <div className="container mx-auto px-4 text-center">
            <motion.div {...fadeInUp} className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl font-bold text-accent">
                {lang === 'fr' ? 'Prêt à devenir une Bythiah ?' : 'Ready to become a Bythiah?'}
              </h2>
              <p className="text-lg text-accent/70">
                {lang === 'fr'
                    ? "Soutenez nos programmes DFV ou nos initiatives de santé scolaire pour transformer des vies dès aujourd'hui."
                    : "Support our DFV programs or school health initiatives to transform lives today."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/${lang}/contact`} className="bg-primary hover:bg-accent text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg flex items-center justify-center gap-2">
                  {lang === 'fr' ? 'Nous soutenir' : 'Support Us'}
                  <ArrowRight size={20} />
                </Link>
                <Link href={`/${lang}/contact`} className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg flex items-center justify-center gap-2">
                  {lang === 'fr' ? 'En savoir plus' : 'Learn more'}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
  );
}