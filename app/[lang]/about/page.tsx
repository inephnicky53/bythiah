'use client';

import { getTranslations, type Locale, t as translate } from '@/lib/i18n';
import PageHero from '@/components/PageHero';
import { motion } from 'framer-motion';
import { Quote, History, ShieldCheck, GraduationCap, MapPin, Trophy } from 'lucide-react';

interface AboutPageProps {
  params: {
    lang: string;
  };
}

export default function AboutPage({ params }: AboutPageProps) {
  const lang = params.lang as Locale;
  const translations = getTranslations(lang);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 }
  };

  return (
      <div className="min-h-screen bg-secondary/30">
        <PageHero
            title={translate(translations, 'nav.about')}
            description={lang === 'fr'
                ? "Chacun peut devenir une « Bithiah » et offrir une chance pour un avenir meilleur."
                : "Everyone can become a 'Bythiah' and offer a chance for a better future."}
            color="#433b1c" // Accent color
            backgroundImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80"
        />

        {/* 1. L'ORIGINE : Le Concept Biblique & Symbolique */}
        <section className="py-20 bg-white overflow-hidden border-b border-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <motion.div {...fadeInUp} className="inline-block p-3 bg-secondary rounded-full text-primary mb-4">
                <History size={32} />
              </motion.div>
              <motion.h2 {...fadeInUp} className="text-4xl font-bold text-accent mb-6">
                {lang === 'fr' ? 'L’Origine du Nom' : 'The Origin of the Name'}
              </motion.h2>
              <motion.div {...fadeInUp} className="prose prose-lg mx-auto text-accent/80 leading-relaxed">
                <p>
                  {lang === 'fr'
                      ? "The Bythiah Project (TBP) tire son nom de la princesse égyptienne Bithiah (« Fille de Dieu »), qui sauva Moïse des eaux du Nil. Cet acte d’humanité pure définit notre mission."
                      : "The Bythiah Project (TBP) takes its name from the Egyptian princess Bithiah ('Daughter of God'), who saved Moses from the waters of the Nile. This act of pure humanity defines our mission."}
                </p>
                <blockquote className="text-primary font-semibold text-2xl mt-8 border-none italic">
                  {lang === 'fr'
                      ? "« The Bythiah Project, c’est nous… et ça peut être vous. »"
                      : "« The Bythiah Project is us… and it can be you. »"}
                </blockquote>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. LA FONDATRICE & LE MOT DE LA PRÉSIDENTE */}
        <section className="py-20 bg-accent text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden border-8 border-primary/20 shadow-2xl">
                  <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                      alt="Mme Zalia Amour"
                      className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl shadow-xl hidden md:block">
                  <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">Expertise</p>
                  <p className="text-xl font-bold text-white italic">MA Education (Phoenix, 2008)</p>
                </div>
              </motion.div>

              <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-primary">
                  {lang === 'fr' ? 'Mot de la Présidente & Fondatrice' : 'Word from the President & Founder'}
                </h2>
                <div className="space-y-4 text-secondary/80 leading-relaxed">
                  <div className="relative p-6 bg-primary/10 rounded-xl border-l-4 border-primary">
                    <Quote className="absolute top-2 right-4 text-primary/20 w-12 h-12" />
                    <p className="text-xl italic text-secondary relative z-10">
                      {lang === 'fr'
                          ? "« L’équité est le socle de l’existence de notre société. Il ne saurait y avoir de justice sociale si les individus sont discriminés en fonction de leur condition physique. »"
                          : "« Equity is the foundation of our society's existence. There can be no social justice if individuals are discriminated against based on their physical condition. »"}
                    </p>
                  </div>
                  <p>
                    {lang === 'fr'
                        ? "Notre engagement s’inscrit dans le respect de la Convention Internationale relative aux Droits de l’Enfant. Nous accordons une place particulière à l'encadrement des enfants vivant avec handicap ou souffrant de pathologies graves."
                        : "Our commitment is rooted in respect for the International Convention on the Rights of the Child. We give special attention to mentoring children living with disabilities or suffering from serious pathologies."}
                  </p>
                  <p className="font-bold text-primary text-lg">— Mme Zalia Amour</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. TIMELINE HISTORIQUE */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-accent">{lang === 'fr' ? 'Notre Parcours' : 'Our Journey'}</h2>
              <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    date: 'Septembre 1999',
                    loc: 'Boston, USA',
                    title: lang === 'fr' ? 'La Genèse' : 'The Genesis',
                    desc: lang === 'fr' ? 'Rédaction du premier projet à Boston suite aux observations des failles éducatives en RDC.' : 'Writing of the first project in Boston following observations of educational failures in DRC.'
                  },
                  {
                    date: '2009 - 2010',
                    loc: 'Tshikapa, RDC',
                    title: lang === 'fr' ? 'Installation en RDC' : 'Installation in DRC',
                    desc: lang === 'fr' ? 'Visite marquante à Lungudi. Création officielle de l’ONG en 2010.' : 'Memorable visit to Lungudi. Official creation of the NGO in 2010.'
                  },
                  {
                    date: '2012 - 2019',
                    loc: 'Monrovia, Libéria',
                    title: lang === 'fr' ? 'Expansion Ouest-Africaine' : 'West African Expansion',
                    desc: lang === 'fr' ? 'Recherches sur les similitudes post-conflit. Relance du projet après l’épidémie d’Ebola.' : 'Research on post-conflict similarities. Project relaunch after the Ebola epidemic.'
                  },
                  {
                    date: '9 Juin 2020',
                    loc: 'Libéria',
                    title: lang === 'fr' ? 'Accord de Siège' : 'Headquarters Agreement',
                    desc: lang === 'fr' ? 'Signature officielle avec le gouvernement libérien malgré les défis de la COVID-19.' : 'Official signature with the Liberian government despite COVID-19 challenges.'
                  }
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        {...fadeInUp}
                        className="flex gap-6 p-6 rounded-2xl border border-secondary bg-secondary/10 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all group"
                    >
                      <div className="shrink-0 w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-primary uppercase">{item.date}</span>
                        <h3 className="text-xl font-bold text-accent mt-1">{item.title}</h3>
                        <p className="text-accent/70 mt-2 leading-relaxed text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. VUE D'ENSEMBLE & ENGAGEMENT */}
        <section className="py-20 bg-secondary/40 border-y border-secondary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2 space-y-8">
                <h2 className="text-3xl font-bold text-accent">{lang === 'fr' ? 'Vue d’ensemble des défis' : 'Overview of Challenges'}</h2>
                <p className="text-lg text-accent/80 leading-relaxed">
                  {lang === 'fr'
                      ? "De la RDC au Libéria, les crises sociales ont laissé des cicatrices profondes. Des enfants sans abri à l'Est de la RDC aux générations privées d'école après la guerre civile au Libéria, l'urgence d'agir reste absolue."
                      : "From DRC to Liberia, social crises have left deep scars. From homeless children in Eastern DRC to generations deprived of school after the Liberian civil war, the urgency to act remains absolute."}
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { icon: <GraduationCap />, title: lang === 'fr' ? 'Éducation' : 'Education' },
                    { icon: <ShieldCheck />, title: lang === 'fr' ? 'Santé' : 'Health' },
                    { icon: <Trophy />, title: lang === 'fr' ? 'Sport' : 'Sport' }
                  ].map((item, i) => (
                      <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-secondary flex flex-col items-center text-center">
                        <div className="text-primary mb-3">{item.icon}</div>
                        <h4 className="font-bold text-accent">{item.title}</h4>
                      </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary rounded-3xl p-8 text-white flex flex-col justify-center relative overflow-hidden shadow-2xl shadow-primary/20">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">{lang === 'fr' ? 'Changer une vie' : 'Changing a life'}</h3>
                  <p className="text-secondary opacity-90 italic">
                    {lang === 'fr'
                        ? "« Notre objectif est clair : contribuer au développement du pays en identifiant les enfants dans le besoin pour leur permettre d'atteindre l'excellence. »"
                        : "« Our goal is clear: contribute to the country's development by identifying children in need to allow them to reach excellence. »"}
                  </p>
                </div>
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-accent/10 rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* 5. CTA SECTION */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="max-w-4xl mx-auto bg-accent rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-primary" />
              <h2 className="text-3xl font-bold mb-6">
                {lang === 'fr' ? 'Devenez une Bithiah aujourd’hui' : 'Become a Bythiah Today'}
              </h2>
              <p className="text-secondary/70 mb-10 text-lg max-w-2xl mx-auto">
                {lang === 'fr'
                    ? "Chaque geste compte pour offrir un avenir à un enfant vulnérable. Ensemble, transformons ces vies."
                    : "Every gesture counts to offer a future to a vulnerable child. Together, let's transform these lives."}
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a href={`/${lang}/contact`} className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-12 rounded-full transition-all shadow-lg hover:shadow-primary/20">
                  {lang === 'fr' ? 'Nous soutenir' : 'Support Us'}
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
  );
}