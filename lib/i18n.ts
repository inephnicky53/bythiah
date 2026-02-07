// Supported languages
export type Locale = 'fr' | 'en';

export const locales: Locale[] = ['fr', 'en'];
export const defaultLocale: Locale = 'fr';

// Type for translations
export type Translations = {
  [key: string]: string | Translations;
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
      subtitle: 'Transformer des vies à travers l\'éducation, la santé et le développement communautaire',
      cta: 'Découvrir notre mission',
    },
    mission: {
      title: 'Notre Mission',
      description: 'Nous nous engageons à créer un impact durable dans les communautés en fournissant un accès à l\'éducation de qualité, aux soins de santé et aux opportunités de développement économique.',
    },
    pillars: {
      title: 'Nos Piliers',
      education: {
        title: 'Éducation',
        description: 'Offrir un accès à une éducation de qualité pour tous les enfants',
      },
      health: {
        title: 'Santé',
        description: 'Améliorer l\'accès aux soins de santé et promouvoir le bien-être',
      },
      community: {
        title: 'Développement Communautaire',
        description: 'Renforcer les communautés à travers des initiatives durables',
      },
    },
    programs: {
      title: 'Nos Programmes',
      description: 'Découvrez comment nous faisons la différence',
    },
    cta: {
      title: 'Rejoignez-nous dans notre mission',
      description: 'Ensemble, nous pouvons créer un changement positif et durable',
      button: 'Nous soutenir',
    },
  },
  en: {
    hero: {
      title: 'The Bythiah Project',
      subtitle: 'Transforming lives through education, health, and community development',
      cta: 'Discover our mission',
    },
    mission: {
      title: 'Our Mission',
      description: 'We are committed to creating lasting impact in communities by providing access to quality education, healthcare, and economic development opportunities.',
    },
    pillars: {
      title: 'Our Pillars',
      education: {
        title: 'Education',
        description: 'Providing access to quality education for all children',
      },
      health: {
        title: 'Health',
        description: 'Improving access to healthcare and promoting wellness',
      },
      community: {
        title: 'Community Development',
        description: 'Strengthening communities through sustainable initiatives',
      },
    },
    programs: {
      title: 'Our Programs',
      description: 'Discover how we make a difference',
    },
    cta: {
      title: 'Join us in our mission',
      description: 'Together, we can create positive and lasting change',
      button: 'Support us',
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
