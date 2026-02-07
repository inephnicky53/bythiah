'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getTranslations, type Locale, t as translate } from '@/lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  lang: Locale;
}

export default function Header({ lang }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const translations = getTranslations(lang);

  const navigation = [
    { name: translate(translations, 'nav.home'), href: `/${lang}` },
    { name: translate(translations, 'nav.about'), href: `/${lang}/about` },
    { name: translate(translations, 'nav.programs'), href: `/${lang}/programs` },
    { name: translate(translations, 'nav.pillars'), href: `/${lang}/pillars` },
    { name: translate(translations, 'nav.contact'), href: `/${lang}/contact` },
  ];

  const isActive = (href: string) => {
    if (href === `/${lang}`) {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href={`/${lang}`} className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">The Bythiah Project</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-6 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.href)
                  ? 'text-primary'
                  : 'text-foreground/60'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href={`/${lang}/donate`}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {translate(translations, 'nav.donate')}
          </Link>
          <LanguageSwitcher lang={lang} />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <LanguageSwitcher lang={lang} />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background md:hidden">
          <div className="container mx-auto space-y-1 px-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent ${
                  isActive(item.href)
                    ? 'bg-accent text-primary'
                    : 'text-foreground/60'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href={`/${lang}/donate`}
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-md bg-primary px-3 py-2 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {translate(translations, 'nav.donate')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

