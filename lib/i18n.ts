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
    programs: 'Programmes',
    pillars: 'Piliers',
    contact: 'Contact',
    donate: 'Faire un don',
  },
  en: {
    home: 'Home',
    about: 'About',
    programs: 'Programs',
    pillars: 'Pillars',
    contact: 'Contact',
    donate: 'Donate',
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
      description: 'Organisation non gouvernementale à caractère philanthropique, The Bythiah Project œuvre dans les secteurs de l\'éducation, de la santé et du sport, en République démocratique du Congo et dans d\'autres pays.',
      since: 'Depuis plus d\'une décennie, l\'organisation agit pour l\'assistance à l\'enfance et à la jeunesse, en particulier auprès des populations vulnérables.',
    },
    pillars: {
      title: 'Nos piliers d\'action',
      education: 'Éducation',
      health: 'Santé',
      sport: 'Sport',
      priority: 'Notre priorité : l\'assistance à l\'enfance et à la jeunesse.',
    },
    about: {
      title: 'Qui sommes-nous ?',
      description: 'The Bythiah Project est une organisation non gouvernementale créée en 2010, engagée pour l\'amélioration durable des conditions de vie des enfants et des jeunes.',
      intervention: 'Elle intervient dans les domaines de l\'éducation, de la santé et du sport, conformément au décret ministériel n°011/CAB/ME/J & GS/2018.',
    },
    vocation: {
      title: 'Notre vocation',
      description: 'Notre vocation première est l\'assistance aux personnes vulnérables et stigmatisées, notamment celles affectées par le VIH/SIDA, la drépanocytose, l\'épilepsie et le handicap.',
      support: 'Au-delà de l\'aide matérielle, nous apportons un accompagnement moral et psychologique afin de restaurer la dignité et l\'espérance.',
    },
    mission: {
      title: 'Notre mission',
      description: 'Soutenir les enfants et les jeunes démunis, particulièrement :',
      targets: [
        'les orphelins',
        'les drépanocytaires',
        'les épileptiques',
        'les personnes vivant avec le VIH/SIDA',
        'les enfants et jeunes vivant avec handicap',
      ],
    },
    vision: {
      title: 'Notre vision',
      description: 'Bâtir l\'avenir par l\'éducation et faire de l\'assistance à l\'enfance et à la jeunesse une priorité, afin de figurer parmi les meilleures organisations œuvrant dans les secteurs de l\'éducation, de la santé et du sport.',
    },
    motto: {
      title: 'Notre devise',
      text: 'Agir ensemble pour le bien-être universel.',
    },
  },
  en: {
    hero: {
      title: 'The Bythiah Project',
      subtitle: 'Acting together for universal well-being',
      cta: 'Discover our mission',
    },
    intro: {
      title: 'Acting together for universal well-being',
      description: 'A philanthropic non-governmental organization, The Bythiah Project works in the sectors of education, health, and sports in the Democratic Republic of Congo and other countries.',
      since: 'For over a decade, the organization has been working to assist children and youth, particularly among vulnerable populations.',
    },
    pillars: {
      title: 'Our pillars of action',
      education: 'Education',
      health: 'Health',
      sport: 'Sport',
      priority: 'Our priority: assistance to children and youth.',
    },
    about: {
      title: 'Who are we?',
      description: 'The Bythiah Project is a non-governmental organization created in 2010, committed to the sustainable improvement of living conditions for children and young people.',
      intervention: 'It operates in the fields of education, health, and sports, in accordance with ministerial decree n°011/CAB/ME/J & GS/2018.',
    },
    vocation: {
      title: 'Our vocation',
      description: 'Our primary vocation is to assist vulnerable and stigmatized people, particularly those affected by HIV/AIDS, sickle cell disease, epilepsy, and disability.',
      support: 'Beyond material aid, we provide moral and psychological support to restore dignity and hope.',
    },
    mission: {
      title: 'Our mission',
      description: 'Supporting disadvantaged children and youth, particularly:',
      targets: [
        'orphans',
        'people with sickle cell disease',
        'people with epilepsy',
        'people living with HIV/AIDS',
        'children and youth living with disabilities',
      ],
    },
    vision: {
      title: 'Our vision',
      description: 'Building the future through education and making assistance to children and youth a priority, in order to be among the best organizations working in the sectors of education, health, and sports.',
    },
    motto: {
      title: 'Our motto',
      text: 'Acting together for universal well-being.',
    },
  },
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
