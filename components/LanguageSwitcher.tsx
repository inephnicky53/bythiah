'use client';

import { usePathname, useRouter } from 'next/navigation';
import { type Locale, locales } from '@/lib/i18n';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  lang: Locale;
}

export default function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (newLang: Locale) => {
    if (!pathname) return;
    
    // Replace the current language in the pathname with the new one
    const segments = pathname.split('/');
    segments[1] = newLang;
    const newPathname = segments.join('/');
    
    router.push(newPathname);
  };

  return (
    <div className="relative inline-block">
      <button
        className="flex items-center space-x-1 rounded-md border border-border px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent"
        onClick={() => switchLanguage(lang === 'fr' ? 'en' : 'fr')}
        aria-label="Switch language"
      >
        <Globe size={16} />
        <span className="uppercase">{lang}</span>
      </button>
    </div>
  );
}

