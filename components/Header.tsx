'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getTranslations, type Locale, t as translate } from '@/lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeaderProps {
  lang: Locale;
}

export default function Header({ lang }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOnHero, setIsOnHero] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();
  const translations = getTranslations(lang);

  // Détecter si on est sur le Hero et calculer le scroll
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setScrollY(window.scrollY);
      setIsOnHero(window.scrollY < heroHeight * 0.8);
    };

    // Initialiser au montage du composant
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Calculer la hauteur du header et la taille du logo en fonction du scroll
  const heroHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
  const maxScroll = heroHeight * 0.8;
  const scrollProgress = Math.min(scrollY / maxScroll, 1);

  // Hauteur du header : 64px (h-16) au minimum, 96px (h-24) au maximum
  const headerHeight = 64 + (32 * (1 - scrollProgress));
  // Taille du logo : 40px au minimum, 60px au maximum
  const logoHeight = heroHeight ? 60 + (40 * (1 - scrollProgress)) : 100;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        isOnHero
          ? 'border-b-0 bg-transparent backdrop-blur-none'
          : 'border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
      }`}
      style={{ height: `${headerHeight}px` }}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 h-full">
        {/* Logo */}
        <Link href={`/${lang}`} className="flex items-center space-x-2 transition-all duration-300">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            alt="The Bythiah Project"
            height={60}
            width={100}
            className="w-auto transition-all duration-300"
            style={{ height: `${logoHeight}px` }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-6 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.href)
                  ? isOnHero ? 'text-white' : 'text-primary'
                  : isOnHero ? 'text-white/80' : 'text-foreground/60'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href={`/${lang}/donate`}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              isOnHero
                ? 'bg-white/20 text-white hover:bg-white/30'
                : 'bg-primary text-primary-foreground hover:bg-primary/90'
            }`}
          >
            {translate(translations, 'nav.donate')}
          </Link>
          <LanguageSwitcher lang={lang} isOnHero={isOnHero} />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <LanguageSwitcher lang={lang} isOnHero={isOnHero} />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={isOnHero ? 'text-white' : 'text-foreground'}
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

