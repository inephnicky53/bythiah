'use client';

import { getTranslations, type Locale, t as translate } from '@/lib/i18n';
import PageHero from '@/components/PageHero';
import DonationForm from '@/components/DonationForm';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';
// Import avec alias pour éviter tout conflit avec l'objet global Image du navigateur
import NextImage from 'next/image';

interface DonatePageProps {
  params: {
    lang: string;
  };
}

export default function DonatePage({ params }: DonatePageProps) {
  const lang = params.lang as Locale;
  const translations = getTranslations(lang);

  const whatsappNumber = "243808511200"; // Numéro officiel Bythiah
  const whatsappMsg = encodeURIComponent(lang === 'fr'
      ? "Bonjour, je souhaite effectuer un virement bancaire ou un don en nature pour The Bythiah Project."
      : "Hello, I would like to make a bank transfer or an in-kind donation to The Bythiah Project.");

  return (
      <div className="min-h-screen bg-[#FDFCFB] flex flex-col">
        <PageHero
            title={lang === 'fr' ? 'Soutenir notre Impact' : 'Support our Impact'}
            description={lang === 'fr'
                ? "Chaque don est une graine d'espoir pour l'éducation, la santé et le sport en Afrique."
                : "Every donation is a seed of hope for education, health, and sport in Africa."}
            color="#433b1c"
            backgroundImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80"
        />

        <div className="container mx-auto px-4 py-12 -mt-24 relative z-20">
          <div className="grid lg:grid-cols-12 gap-8 items-start">

            {/* FORMULAIRE MOBILE MONEY & CARD */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-accent/5 border border-secondary"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                  <Heart size={28} className="fill-current" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-accent">
                    {lang === 'fr' ? 'Don Sécurisé' : 'Secure Donation'}
                  </h2>
                  <p className="text-sm text-accent/50">{lang === 'fr' ? 'Mobile Money & Cartes' : 'Mobile Money & Cards'}</p>
                </div>
              </div>

              <DonationForm lang={lang} />

              <div className="mt-8 flex items-center justify-center gap-4 py-4 border-t border-secondary/50 text-center">
                <ShieldCheck className="text-green-600 w-5 h-5 shrink-0" />
                <p className="text-[10px] md:text-xs text-accent/60 font-medium uppercase tracking-widest">
                  {lang === 'fr' ? 'Transaction 100% sécurisée' : '100% Secure Transaction'}
                </p>
              </div>
            </motion.div>

            {/* MOTIVATION & WHATSAPP */}
            <div className="lg:col-span-5 space-y-6">
              <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-accent p-8 rounded-[2.5rem] text-white shadow-lg"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Zap className="text-primary" />
                  {lang === 'fr' ? 'L’impact de votre don' : 'Your donation impact'}
                </h3>
                <div className="space-y-6">
                  {[
                    { val: '10$', fr: 'Kit scolaire complet pour un trimestre', en: 'Complete school kit for a term' },
                    { val: '50$', fr: 'Frais médicaux pour une famille', en: 'Medical fees for a family' },
                    { val: '100$', fr: 'Bourse d’études annuelle complète', en: 'Full annual scholarship' }
                  ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-start group">
                        <span className="text-2xl font-black text-primary group-hover:scale-110 transition-transform">{item.val}</span>
                        <p className="text-sm text-secondary/80 leading-snug">{lang === 'fr' ? item.fr : item.en}</p>
                      </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white p-8 rounded-[2.5rem] border border-secondary shadow-sm"
              >
                <h3 className="font-bold text-accent mb-2">
                  {lang === 'fr' ? 'Virement ou Don en nature ?' : 'Bank Transfer or In-kind?'}
                </h3>
                <p className="text-sm text-accent/60 mb-6">
                  {lang === 'fr'
                      ? "Pour les virements bancaires ou le matériel, contactez notre équipe."
                      : "For bank transfers or equipment, please contact our team."}
                </p>
                <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-green-200 transition-all"
                >
                  <MessageCircle size={22} />
                  {lang === 'fr' ? 'Nous écrire sur WhatsApp' : 'Message us on WhatsApp'}
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* SECTION SLIDE DE MOTIVATION (IMAGE FIXÉE AVEC ALIAS) */}
        <section className="py-20 bg-primary/5 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-4xl font-bold text-accent leading-tight">
                  {lang === 'fr'
                      ? "Votre générosité est leur plus grande opportunité"
                      : "Your generosity is their greatest opportunity"}
                </h2>
                <p className="text-lg text-accent/70">
                  {lang === 'fr'
                      ? "Chaque jour, The Bythiah Project transforme la vie de centaines d'enfants. Ne reportez pas à demain le sourire que vous pouvez offrir aujourd'hui."
                      : "Every day, The Bythiah Project transforms the lives of hundreds of children. Don't delay the smile you can provide today."}
                </p>
                <Link
                    href={`/${lang}/contact`}
                    className="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-primary pb-1 hover:gap-4 transition-all"
                >
                  {lang === 'fr' ? 'Découvrir nos projets' : 'Discover our projects'}
                  <ArrowRight size={20} />
                </Link>
              </div>

              <div className="md:w-1/2 relative h-[400px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
                {/* Utilisation de NextImage pour éviter le conflit */}
                <NextImage
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80"
                    alt="Impact"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                    <p className="text-white text-sm italic">
                      {lang === 'fr'
                          ? "« Grâce au projet Bythiah, j'ai pu reprendre le chemin de l'école. »"
                          : "« Thanks to the Bythiah project, I was able to go back to school. »"}
                    </p>
                    <p className="text-primary font-bold mt-2 text-xs uppercase">— Bénédicte, 12 ans</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}