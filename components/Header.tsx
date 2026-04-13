'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getTranslations, type Locale, t as translate } from '@/lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  lang: Locale;
}

export default function Header({ lang }: HeaderProps) {
  const pathname = usePathname();
  const translations = getTranslations(lang);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobilePillarsOpen, setMobilePillarsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pillarsBase = `/${lang}/pillars`;
  const pillarLinks = [
    { name: translate(translations, 'nav.pillarsOverview'), href: pillarsBase },
    { name: translate(translations, 'nav.pillarEducation'), href: `${pillarsBase}/education` },
    { name: translate(translations, 'nav.pillarHealth'), href: `${pillarsBase}/health` },
    { name: translate(translations, 'nav.pillarSport'), href: `${pillarsBase}/sport` },
  ];

  const mainNav = [
    { name: translate(translations, 'nav.home'), href: `/${lang}` },
    { name: translate(translations, 'nav.about'), href: `/${lang}/about` },
    { name: translate(translations, 'nav.contact'), href: `/${lang}/contact` },
  ];

  const isActive = (href: string) => {
    if (href === `/${lang}`) return pathname === href;
    return pathname?.startsWith(href);
  };

  const isPillarsSectionActive = pathname?.startsWith(pillarsBase) ?? false;

  const textColor = scrolled ? 'text-gray-700' : 'text-white';
  const bgColor = scrolled ? 'bg-white/95 backdrop-blur border-b border-gray-200' : 'bg-transparent';

  const linkClass = (href: string) =>
    `text-sm font-medium transition-colors ${
      isActive(href) ? 'text-primary' : textColor
    }`;

  const pillarsTriggerClass = `inline-flex items-center gap-1 rounded-md text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary/60 ${
    isPillarsSectionActive ? 'text-primary' : textColor
  }`;

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${bgColor}`}>
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href={`/${lang}`}>
          <img src="/images/logo.png" alt="The Bythiah Project" className="h-12 w-auto" />
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {mainNav.slice(0, 2).map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.name}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button type="button" className={pillarsTriggerClass}>
                {translate(translations, 'nav.pillars')}
                <ChevronDown className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="z-[60] min-w-[12rem]">
              {pillarLinks.map((item) => (
                <DropdownMenuItem key={item.href} asChild className="cursor-pointer">
                  <Link href={item.href}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href={mainNav[2].href} className={linkClass(mainNav[2].href)}>
            {mainNav[2].name}
          </Link>

          <Link
            href={`/${lang}/donate`}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              scrolled ? 'bg-primary text-white hover:bg-primary/90' : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            {translate(translations, 'nav.donate')}
          </Link>

          <LanguageSwitcher lang={lang} isOnHero={!scrolled} />
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden ${scrolled ? 'text-gray-700' : 'text-white'}`}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            <Link
              href={`/${lang}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-gray-800"
            >
              {mainNav[0].name}
            </Link>
            <Link
              href={mainNav[1].href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-gray-800"
            >
              {mainNav[1].name}
            </Link>

            <div className="border-t border-gray-100 pt-2 mt-2">
              <button
                type="button"
                onClick={() => setMobilePillarsOpen(!mobilePillarsOpen)}
                className="flex w-full items-center justify-between py-2 text-base font-medium text-gray-800"
                aria-expanded={mobilePillarsOpen}
              >
                {translate(translations, 'nav.pillars')}
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${mobilePillarsOpen ? 'rotate-180' : ''}`}
                  aria-hidden
                />
              </button>
              {mobilePillarsOpen && (
                <div className="mt-1 ml-2 space-y-1 border-l-2 border-primary/25 pl-3">
                  {pillarLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobilePillarsOpen(false);
                      }}
                      className="block py-2 text-sm text-gray-700 hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href={mainNav[2].href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-gray-800"
            >
              {mainNav[2].name}
            </Link>

            <div className="my-3 border-t border-gray-200" aria-hidden />

            <Link
              href={`/${lang}/donate`}
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-md bg-primary px-4 py-3 text-center text-white font-medium"
            >
              {translate(translations, 'nav.donate')}
            </Link>

            <div className="pt-2 flex justify-center">
              <LanguageSwitcher lang={lang} isOnHero={false} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
