// Supported languages
export type Locale = 'fr' | 'en';

export const locales: Locale[] = ['fr', 'en'];
export const defaultLocale: Locale = 'fr';

// Type for translations
export type Translations = {
    [key: string]: string | string[] | Translations;
};

// Navigation translations
const nav = {
    fr: {
        home: 'Accueil',
        about: 'À propos',
        pillars: 'Nos piliers',
        contact: 'Contact',
        donate: 'Faire un don',
        links: "Liens rapides"
    },
    en: {
        home: 'Home',
        about: 'About',
        pillars: 'Our pillars',
        contact: 'Contact',
        donate: 'Donate',
        links: "Quick links"
    },
};

// Home page translations
const home = {
    fr: {
        hero: {
            title: 'The Bythiah Project',
            subtitle: 'Agir ensemble pour le bien-être universel',
            cta: 'Découvrir notre mission',
        },
        intro: {
            title: 'Agir ensemble pour le bien-être universel',
            description: "Organisation non gouvernementale à caractère philanthropique, The Bythiah Project œuvre dans les secteurs de l’éducation, de la santé et du sport en République Démocratique du Congo et dans plusieurs autres pays. À travers ses actions et ses programmes, l’organisation s’engage à promouvoir le bien-être des enfants et des jeunes, tout en contribuant au développement des communautés.\n",
            since: "Depuis plus d’une décennie, l’organisation agit pour l’assistance à l’enfance et à la jeunesse, en particulier auprès des populations les plus vulnérables. À travers des initiatives éducatives, sanitaires et sportives, The Bythiah Project accompagne les enfants et les jeunes afin de leur offrir des opportunités d’apprentissage, d’encadrement et d’épanouissement.\n",
            commitment: "Notre engagement est de créer un impact durable dans les communautés qui en ont le plus besoin, en apportant soutien, espoir et dignité aux personnes les plus fragiles. En investissant dans la jeunesse et en valorisant leur potentiel, nous contribuons à construire un avenir plus prometteur pour les générations futures."

        },
        pillars: {
            title: 'Nos piliers d\'action',
            priority: "Les actions de The Bythiah Project reposent sur trois piliers fondamentaux qui " +
                "guident l’ensemble de nos programmes et initiatives : l’Éducation, la Santé et le " +
                "Sport. Ces domaines représentent des leviers essentiels pour favoriser le " +
                "développement des enfants et des jeunes, tout en contribuant à la construction d’une " +
                "société plus juste, équilibrée et solidaire.",
            description: "Nous sommes convaincus que l’avenir d’une société dépend de la capacité de sa " +
                "jeunesse à se former, à se développer et à s’épanouir dans un environnement " +
                "favorable. L’éducation permet de transmettre les connaissances et les valeurs " +
                "nécessaires à la construction d’un avenir durable, la santé garantit le bien-être " +
                "physique et mental, tandis que le sport contribue à l’apprentissage de la " +
                "discipline, de l’esprit d’équipe et du respect.",
            with: "À travers ces trois piliers, The Bythiah Project s’engage à accompagner les enfants " +
                "et les jeunes dans leur développement personnel et social. Nos actions visent à leur " +
                "offrir des opportunités d’apprentissage, de protection et d’encadrement afin de leur " +
                "permettre de réaliser pleinement leur potentiel et de devenir des acteurs du " +
                "développement de leurs communautés."
        },
        about: {
            title: 'Qui sommes-nous ?',
            description: "The Bythiah Project est une organisation non gouvernementale créée en 2010, engagée pour l’amélioration durable des conditions de vie des enfants et des jeunes. Animée par des valeurs de solidarité, d’équité et de responsabilité sociale, l’organisation œuvre pour offrir de meilleures perspectives aux populations les plus vulnérables.\n",
            intervention: "Nos actions s’articulent principalement autour de trois domaines essentiels : l’éducation, la santé et le sport, conformément au décret ministériel n°011/CAB/ME/J & GS/2018. À travers ces piliers, nous développons des initiatives visant à accompagner les enfants et les jeunes dans leur épanouissement personnel, leur formation et leur intégration au sein de la société.\n",
            journey: "Depuis notre création, The Bythiah Project a impacté la vie de milliers de personnes en République Démocratique du Congo et au-delà. Notre approche holistique nous permet de répondre aux besoins réels des communautés avec lesquelles nous travaillons, en mettant l’accent sur des solutions durables qui contribuent au développement humain et social.",
        },
        vocation: {
            title: 'Notre vocation',
            description: "Notre vocation première est l’assistance aux personnes vulnérables et souvent stigmatisées, notamment celles affectées par le VIH/SIDA, la drépanocytose, l’épilepsie ou vivant avec un handicap. À travers nos actions, nous cherchons à améliorer leurs conditions de vie et à leur offrir des opportunités d’épanouissement au sein de la société.\n",
            support: "Au-delà de l’aide matérielle, The Bythiah Project s’engage à apporter un accompagnement moral et psychologique afin de restaurer la dignité, la confiance et l’espérance des personnes que nous accompagnons. Nous croyons que chaque individu mérite d’être soutenu et valorisé, quelles que soient les difficultés auxquelles il est confronté.\n",
            work: "Pour atteindre cet objectif, nous travaillons en collaboration étroite avec les familles, les écoles et les centres de santé, afin de créer un environnement solidaire et inclusif où chaque personne, quelle que soit sa condition, peut vivre dans la dignité et nourrir l’espoir d’un avenir meilleur."
        },
        mission: {
            title: 'Notre mission',
            description: 'La mission de The Bythiah Project est de soutenir les enfants et les jeunes démunis, en particulier ceux qui vivent dans des situations de grande vulnérabilité. Nous accordons une attention particulière à :',
            targets: [
                'les orphelins',
                'les drépanocytaires',
                'les épileptiques',
                'les personnes vivant avec le VIH/SIDA',
                'les enfants et jeunes vivant avec handicap',
            ],
            goal: "À travers nos programmes et initiatives, nous cherchons à améliorer leurs conditions de vie, à favoriser leur accès à l’éducation, aux soins de santé et à un environnement propice à leur épanouissement.",
            mindset: "Nous sommes convaincus que chaque enfant mérite une chance de réussir. C’est pourquoi notre mission consiste à leur offrir les outils, le soutien et l’accompagnement nécessaires afin qu’ils puissent développer leur potentiel et construire un avenir meilleur."
        },
        vision: {
            title: 'Notre vision',
            description: "Notre vision est de bâtir l’avenir par l’éducation et de faire de l’assistance à l’enfance et à la jeunesse une priorité. À travers nos actions, nous aspirons à devenir l’une des organisations de référence œuvrant dans les domaines de l’éducation, de la santé et du sport, au service du développement des enfants et des jeunes.",
            building: "Nous rêvons d’un monde où chaque enfant, indépendamment de son origine, de sa situation sociale ou de sa condition de vie, peut bénéficier d’une éducation de qualité, d’un accès aux soins de santé et d’opportunités favorisant son développement personnel et son épanouissement.",
            priority: "C’est cette vision qui guide chacune de nos initiatives et renforce notre engagement à accompagner les jeunes générations afin qu’elles puissent construire un avenir plus prometteur pour elles-mêmes et pour leurs communautés."
        },
        motto: {
            title: 'Notre devise',
            text: 'Agir ensemble pour le bien-être universel.',
        },
        projects: {
            title: 'Nos projets',
            description: 'Découvrez nos projets réalisés dans les domaines de l\'éducation, de la santé et du sport.',
        },
    },
    en: {
        hero: {
            title: "The Bythiah Project",
            subtitle: "Acting together for universal well-being",
            cta: "Discover our mission"
        },
        intro: {
            title: "Acting together for universal well-being",
            description: "A philanthropic non-governmental organization, The Bythiah Project works in the sectors of education, health, and sports in the Democratic Republic of Congo and in several other countries. Through its actions and programs, the organization is committed to promoting the well-being of children and youth while contributing to the development of communities.\n",
            since: "For more than a decade, the organization has been working to support children and youth, particularly among the most vulnerable populations. Through educational, health, and sports initiatives, The Bythiah Project supports children and young people by offering them opportunities for learning, guidance, and personal development.\n",
            commitment: "Our commitment is to create a lasting impact in the communities that need it most by bringing support, hope, and dignity to the most vulnerable individuals. By investing in youth and valuing their potential, we contribute to building a more promising future for the generations to come."
        },
        pillars: {
            title: "Our pillars of action",
            priority: "The actions of The Bythiah Project are based on three fundamental pillars that guide all of our programs and initiatives: Education, Health, and Sports. These areas represent essential levers to foster the development of children and youth while contributing to the building of a more just, balanced, and supportive society.",
            description: "We believe that the future of a society depends on the ability of its youth to learn, grow, and thrive in a supportive environment. Education helps transmit the knowledge and values necessary for building a sustainable future, health ensures physical and mental well-being, while sports contribute to learning discipline, teamwork, and respect.",
            with: "Through these three pillars, The Bythiah Project is committed to supporting children and young people in their personal and social development. Our actions aim to offer them opportunities for learning, protection, and guidance so they can fully realize their potential and become actors in the development of their communities."
        },
        about: {
            title: "Who are we?",
            description: "The Bythiah Project is a non-governmental organization created in 2010, committed to the sustainable improvement of the living conditions of children and young people. Driven by values of solidarity, equity, and social responsibility, the organization works to offer better prospects to the most vulnerable populations.\n",
            intervention: "Our actions are mainly structured around three essential areas: education, health, and sports, in accordance with ministerial decree No. 011/CAB/ME/J & GS/2018. Through these pillars, we develop initiatives aimed at supporting children and youth in their personal growth, education, and integration into society.\n",
            journey: "Since its creation, The Bythiah Project has impacted the lives of thousands of people in the Democratic Republic of Congo and beyond. Our holistic approach allows us to address the real needs of the communities we work with, focusing on sustainable solutions that contribute to human and social development."
        },
        vocation: {
            title: "Our vocation",
            description: "Our primary vocation is to assist vulnerable and often stigmatized individuals, particularly those affected by HIV/AIDS, sickle cell disease, epilepsy, or living with disabilities. Through our actions, we seek to improve their living conditions and provide them with opportunities to thrive within society.\n",
            support: "Beyond material assistance, The Bythiah Project is committed to providing moral and psychological support in order to restore dignity, confidence, and hope to the people we assist. We believe that every individual deserves to be supported and valued, regardless of the challenges they face.\n",
            work: "To achieve this goal, we work closely with families, schools, and health centers in order to create a supportive and inclusive environment where every person, regardless of their condition, can live with dignity and nurture hope for a better future."
        },
        mission: {
            title: "Our mission",
            description: "The mission of The Bythiah Project is to support underprivileged children and youth, particularly those living in highly vulnerable situations. We pay special attention to:",
            targets: [
                "orphans",
                "people with sickle cell disease",
                "people with epilepsy",
                "people living with HIV/AIDS",
                "children and youth living with disabilities"
            ],
            goal: "Through our programs and initiatives, we aim to improve their living conditions and promote their access to education, healthcare, and an environment conducive to their development.",
            mindset: "We believe that every child deserves a chance to succeed. That is why our mission is to provide them with the tools, support, and guidance they need to develop their potential and build a better future."
        },
        vision: {
            title: "Our vision",
            description: "Our vision is to build the future through education and to make support for children and youth a priority. Through our actions, we aspire to become one of the leading organizations working in the fields of education, health, and sports, serving the development of children and youth.",
            building: "We dream of a world where every child, regardless of their origin, social situation, or living conditions, can benefit from quality education, access to healthcare, and opportunities that foster personal development and fulfillment.",
            priority: "It is this vision that guides each of our initiatives and strengthens our commitment to supporting younger generations so they can build a more promising future for themselves and their communities."
        },
        motto: {
            title: "Our motto",
            text: "Acting together for universal well-being."
        },
        projects: {
            title: "Our projects",
            description: "Discover our projects carried out in the fields of education, health, and sports."
        }
    }
};

// Pages translations
const pages = {
    fr: {
        contact: {
            title: 'Contact',
            subtitle: 'Nous aimerions entendre parler de vous. Contactez-nous pour toute question ou suggestion.',
            formTitle: 'Envoyez-nous un message',
            infoTitle: 'Nos coordonnées',
            hoursTitle: 'Heures de fonctionnement',
            mondayFriday: 'Lundi - Vendredi',
            saturday: 'Samedi',
            sunday: 'Dimanche',
            closed: 'Fermé',
            name: 'Nom',
            email: 'Email',
            subject: 'Sujet',
            message: 'Message',
            send: 'Envoyer',
            success: 'Message envoyé avec succès!',
            namePlaceholder: 'Votre nom',
            subjectPlaceholder: 'Sujet du message',
            messagePlaceholder: 'Votre message...',
        },
        programs: {
            title: 'Programmes',
            subtitle: 'Découvrez nos programmes d\'action dans les domaines de l\'éducation, de la santé et du sport.',
            educationTitle: 'Programme Éducation',
            educationDesc: 'Notre programme éducatif vise à fournir une éducation de qualité à tous les enfants, indépendamment de leur situation économique. Nous travaillons en partenariat avec les écoles locales pour améliorer les infrastructures, former les enseignants et soutenir les enfants vulnérables.',
            healthTitle: 'Programme Santé',
            healthDesc: 'Nous nous engageons à améliorer l\'accès aux services de santé de qualité pour les populations les plus vulnérables. Notre programme couvre la prévention des maladies, les soins de santé primaires, la sensibilisation à l\'hygiène et la nutrition.',
            sportTitle: 'Programme Sport',
            sportDesc: 'Le sport est un outil puissant de développement personnel et social. Notre programme sportif vise à promouvoir l\'activité physique, la cohésion sociale et l\'esprit d\'équipe chez les jeunes.',
            objectives: 'Objectifs',
            supportPrograms: 'Soutenez nos programmes',
            supportText: 'Votre contribution nous aide à transformer des vies et à créer un impact durable dans les communautés.',
        },
        about: {
            title: 'À propos',
            subtitle: 'Découvrez l\'histoire et la mission de The Bythiah Project.',
            whoWeAre: 'Qui sommes-nous ?',
            ourFounder: 'Notre Fondatrice',
            founderRole: 'Fondatrice et Directrice Générale',
            founderBio1: 'Mme Zalia Amour est la fondatrice et directrice générale de The Bythiah Project. Avec plus d\'une décennie d\'expérience dans le secteur du développement communautaire, elle a consacré sa vie à transformer les vies des enfants et des jeunes vulnérables.',
            founderBio2: 'Son vision est de créer un monde où chaque enfant, indépendamment de son origine ou de sa condition, a accès à une éducation de qualité, à des soins de santé adéquats et à des opportunités de développement personnel. Sous sa direction, The Bythiah Project a grandi pour devenir l\'une des organisations les plus respectées dans le secteur du développement en RDC.',
            contact: 'Contacter',
            ourValues: 'Nos Valeurs',
            integrity: 'Intégrité',
            integrityDesc: 'Nous agissons avec honnêteté et transparence dans toutes nos actions.',
            compassion: 'Compassion',
            compassionDesc: 'Nous nous soucions profondément du bien-être de ceux que nous servons.',
            excellence: 'Excellence',
            excellenceDesc: 'Nous nous efforçons d\'atteindre les plus hauts standards dans tout ce que nous faisons.',
            ourJourney: 'Notre Parcours',
            foundation: 'Fondation',
            foundationDesc: 'The Bythiah Project est créée avec une vision claire de transformer les vies.',
            expansion: 'Expansion',
            expansionDesc: 'Nous avons étendu nos programmes à plusieurs provinces de la RDC.',
            recognition: 'Reconnaissance',
            recognitionDesc: 'The Bythiah Project reçoit plusieurs prix pour son impact communautaire.',
            today: 'Aujourd\'hui',
            todayDesc: 'Nous continuons à grandir et à servir des milliers de personnes chaque année.',
            joinMission: 'Rejoignez-nous dans notre mission',
            joinText: 'Ensemble, nous pouvons créer un impact durable et transformer des vies.',
            contactUs: 'Nous Contacter',
        },
    },
    en: {
        contact: {
            title: 'Contact',
            subtitle: 'We would love to hear from you. Contact us for any questions or suggestions.',
            formTitle: 'Send us a message',
            infoTitle: 'Contact Information',
            hoursTitle: 'Office Hours',
            mondayFriday: 'Monday - Friday',
            saturday: 'Saturday',
            sunday: 'Sunday',
            closed: 'Closed',
            name: 'Name',
            email: 'Email',
            subject: 'Subject',
            message: 'Message',
            send: 'Send',
            success: 'Message sent successfully!',
            namePlaceholder: 'Your name',
            subjectPlaceholder: 'Message subject',
            messagePlaceholder: 'Your message...',
        },
        programs: {
            title: 'Programs',
            subtitle: 'Discover our action programs in the fields of education, health, and sports.',
            educationTitle: 'Education Program',
            educationDesc: 'Our educational program aims to provide quality education to all children, regardless of their economic situation. We work in partnership with local schools to improve infrastructure, train teachers, and support vulnerable children.',
            healthTitle: 'Health Program',
            healthDesc: 'We are committed to improving access to quality health services for the most vulnerable populations. Our program covers disease prevention, primary healthcare, hygiene awareness, and nutrition.',
            sportTitle: 'Sports Program',
            sportDesc: 'Sport is a powerful tool for personal and social development. Our sports program aims to promote physical activity, social cohesion, and teamwork among young people.',
            objectives: 'Objectives',
            supportPrograms: 'Support our programs',
            supportText: 'Your contribution helps us transform lives and create lasting impact in communities.',
        },
        about: {
            title: 'About',
            subtitle: 'Discover the story and mission of The Bythiah Project.',
            whoWeAre: 'Who are we?',
            ourFounder: 'Our Founder',
            founderRole: 'Founder and Executive Director',
            founderBio1: 'Mme Zalia Amour is the founder and executive director of The Bythiah Project. With over a decade of experience in the community development sector, she has dedicated her life to transforming the lives of vulnerable children and youth.',
            founderBio2: 'Her vision is to create a world where every child, regardless of their origin or condition, has access to quality education, adequate healthcare, and personal development opportunities. Under her leadership, The Bythiah Project has grown to become one of the most respected organizations in the development sector in DRC.',
            contact: 'Contact',
            ourValues: 'Our Values',
            integrity: 'Integrity',
            integrityDesc: 'We act with honesty and transparency in all our actions.',
            compassion: 'Compassion',
            compassionDesc: 'We deeply care about the well-being of those we serve.',
            excellence: 'Excellence',
            excellenceDesc: 'We strive to achieve the highest standards in everything we do.',
            ourJourney: 'Our Journey',
            foundation: 'Foundation',
            foundationDesc: 'The Bythiah Project is founded with a clear vision to transform lives.',
            expansion: 'Expansion',
            expansionDesc: 'We expanded our programs to several provinces in DRC.',
            recognition: 'Recognition',
            recognitionDesc: 'The Bythiah Project receives several awards for its community impact.',
            today: 'Today',
            todayDesc: 'We continue to grow and serve thousands of people every year.',
            joinMission: 'Join us in our mission',
            joinText: 'Together, we can create lasting impact and transform lives.',
            contactUs: 'Contact Us',
        },
    },
};

// Footer translations
const footer = {
    fr: {
        about: 'À propos',
        contact: 'Contact',
        email: 'Email',
        phone: 'Téléphone',
        address: 'Adresse',
        followUs: 'Suivez-nous',
        rights: 'Tous droits réservés',
    },
    en: {
        about: 'About',
        contact: 'Contact',
        email: 'Email',
        phone: 'Phone',
        address: 'Address',
        followUs: 'Follow us',
        rights: 'All rights reserved',
    },
};

// Main translations object
const translations = {
    fr: {
        nav: nav.fr,
        home: home.fr,
        pages: pages.fr,
        footer: footer.fr,
    },
    en: {
        nav: nav.en,
        home: home.en,
        pages: pages.en,
        footer: footer.en,
    },
};

// Get translations for a specific locale
export function getTranslations(locale: Locale): Translations {
    return translations[locale] || translations[defaultLocale];
}

// Helper to get nested translation
export function t(
    translations: Translations,
    key: string,
    defaultValue: string = ''
): string {
    const keys = key.split('.');
    let value: any = translations;

    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            return defaultValue;
        }
    }

    return typeof value === 'string' ? value : defaultValue;
}

// Validate if locale is supported
export function isValidLocale(locale: string): locale is Locale {
    return locales.includes(locale as Locale);
}
