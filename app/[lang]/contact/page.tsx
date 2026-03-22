'use client';

import {getTranslations, type Locale, t as translate} from '@/lib/i18n';
import ContactForm from '@/components/ContactForm';
import PageHero from '@/components/PageHero';
import {motion} from 'framer-motion';
import {Mail, Phone, MapPin, Clock, MessageCircle, Globe2} from 'lucide-react';

interface ContactPageProps {
    params: {
        lang: string;
    };
}

export default function ContactPage({params}: ContactPageProps) {
    const lang = params.lang as Locale;
    const translations = getTranslations(lang);

    const contactDetails = [
        {
            icon: <Mail className="w-6 h-6"/>,
            title: 'Email',
            value: 'contact@bythiah.org',
            href: 'mailto:contact@bythiah.org',
        },
        {
            icon: <Phone className="w-6 h-6"/>,
            title: lang === 'fr' ? 'Téléphone' : 'Phone',
            value: '+243 808 511 200',
            href: 'tel:+243808511200',
        },
        {
            icon: <MapPin className="w-6 h-6"/>,
            title: 'Siège Social',
            value: '1022, Avenue des Forces Armées, B-16, Gombe – Kinshasa-RDC',
            href: '#',
        },
    ];
    const whatsappNumber = '+243808511200';
    const whatsappMessage = lang === 'fr'
        ? 'Bonjour, je suis intéressé par votre organisation.'
        : 'Hello, I am interested in your organization.';


    return (
        <div className="min-h-screen bg-secondary/20">
            <PageHero
                title={translate(translations, 'nav.contact')}
                description={lang === 'fr'
                    ? "Nous sommes à votre écoute. Une question, un projet ou une envie de contribuer ? Contactez-nous."
                    : "We are listening. A question, a project, or a desire to contribute? Get in touch with us."}
                color="#433b1c"
                backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80"
            />

            <section className="py-20 relative overflow-hidden">
                {/* Décoration d'arrière-plan */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"/>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">

                        {/* Colonne de Gauche : Infos & Réseaux */}
                        <motion.div
                            initial={{opacity: 0, x: -30}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            className="lg:col-span-5 space-y-12"
                        >
                            <div>
                                <h2 className="text-4xl font-bold text-accent mb-6">
                                    {lang === 'fr' ? "Parlons ensemble" : "Let's Talk"}
                                </h2>
                                <p className="text-lg text-accent/70 leading-relaxed text-justify">
                                    {lang === 'fr'
                                        ? "Que vous soyez un futur partenaire, un donateur ou une personne ayant besoin d'assistance, notre équipe vous répondra dans les plus brefs délais."
                                        : "Whether you are a future partner, a donor, or someone in need of assistance, our team will get back to you as soon as possible."}
                                </p>
                            </div>

                            {/* Cartes d'info rapides */}
                            <div className="grid gap-6">
                                {contactDetails.map((detail, index) => (
                                    <a
                                        key={index}
                                        href={detail.href}
                                        className="flex items-center gap-5 p-6 bg-white rounded-2xl border border-secondary shadow-sm hover:shadow-md hover:border-primary/30 transition-all group"
                                    >
                                        <div
                                            className="w-12 h-12 bg-secondary flex items-center justify-center rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            {detail.icon}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-primary uppercase tracking-wider">{detail.title}</p>
                                            <p className="text-lg font-semibold text-accent">{detail.value}</p>
                                        </div>
                                    </a>
                                ))}


                                {/* WhatsApp Button - Très mis en évidence */}
                                <motion.a
                                    whileHover={{scale: 1.02}}
                                    whileTap={{scale: 0.98}}
                                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 w-full p-5 bg-[#25D366] text-white rounded-2xl font-bold shadow-lg shadow-green-200 transition-all hover:bg-[#20ba5a]"
                                >
                                    <MessageCircle size={24}/>
                                    {lang === 'fr' ? 'Nous écrire sur WhatsApp' : 'Message us on WhatsApp'}
                                </motion.a>
                            </div>

                            {/* Badge Engagement */}
                            <div className="p-8 bg-accent rounded-3xl text-white relative overflow-hidden group">
                                <div className="relative z-10 flex items-start gap-4">
                                    <Globe2 className="w-10 h-10 text-primary shrink-0"/>
                                    <div>
                                        <h4 className="font-bold text-xl mb-2">Impact RDC & Libéria</h4>
                                        <p className="text-secondary/70 text-sm">
                                            {lang === 'fr'
                                                ? "Nos bureaux locaux coordonnent les interventions sur le terrain pour une efficacité maximale."
                                                : "Our local offices coordinate field interventions for maximum effectiveness."}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform"/>
                            </div>
                        </motion.div>

                        {/* Colonne de Droite : Le Formulaire */}
                        <motion.div
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-accent/5 border border-secondary"
                        >
                            <div className="mb-8 flex items-center gap-3">
                                <div className="h-10 w-1 bg-primary rounded-full"/>
                                <h3 className="text-2xl font-bold text-accent">
                                    {lang === 'fr' ? "Envoyez un message" : "Send a Message"}
                                </h3>
                            </div>
                            <ContactForm lang={lang}/>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Section Horaires & Disponibilité */}
            <section className="pb-24 pt-10">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="bg-white border border-secondary rounded-[3rem] p-10 md:p-16 relative overflow-hidden"
                    >
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                            <div className="lg:col-span-1">
                                <div className="flex items-center gap-3 text-primary mb-4">
                                    <Clock className="w-6 h-6"/>
                                    <h3 className="text-xl font-bold text-accent">
                                        {lang === 'fr' ? 'Disponibilité' : 'Availability'}
                                    </h3>
                                </div>
                                <p className="text-accent/60 italic text-sm">
                                    {lang === 'fr' ? "*Heures locales (GMT+1)" : "*Local time (GMT+1)"}
                                </p>
                            </div>

                            <div className="space-y-1">
                                <h4 className="font-bold text-accent">{lang === 'fr' ? 'Lundi - Vendredi' : 'Monday - Friday'}</h4>
                                <p className="text-primary font-medium">08:00 - 17:00</p>
                            </div>

                            <div className="space-y-1">
                                <h4 className="font-bold text-accent">{lang === 'fr' ? 'Samedi' : 'Saturday'}</h4>
                                <p className="text-primary font-medium">09:00 - 13:00</p>
                            </div>

                            <div className="space-y-1">
                                <h4 className="font-bold text-accent">{lang === 'fr' ? 'Dimanche' : 'Sunday'}</h4>
                                <p className="text-accent/40 font-medium">{lang === 'fr' ? 'Fermé' : 'Closed'}</p>
                            </div>
                        </div>

                        {/* Filigrane décoratif */}
                        <MessageCircle
                            className="absolute bottom-[-20%] right-[-5%] w-64 h-64 text-secondary/30 -rotate-12"/>
                    </motion.div>
                </div>
            </section>

            {/* CTA Réseaux Sociaux ou Map */}
            <div className="bg-primary py-12">
                <div
                    className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-white text-center md:text-left">
                    <h3 className="text-2xl font-bold">
                        {lang === 'fr' ? "Suivez-nous sur les réseaux sociaux" : "Follow us on social media"}
                    </h3>
                    <div className="flex gap-4">
                        {/* Remplacez par vos vrais liens */}
                        {['Facebook', 'LinkedIn', 'Twitter'].map((social) => (
                            <a href={`https://www.${social.toLowerCase()}.com/thebythiahproject`} key={social}
                                    className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition-all">
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}