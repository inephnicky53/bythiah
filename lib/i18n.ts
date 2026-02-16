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
    footer: footer.fr,
  },
  en: {
    nav: nav.en,
    home: home.en,
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
