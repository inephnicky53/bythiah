'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getTranslations, type Locale, t as translate } from '@/lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeaderProps {
  lang: Locale;
}

export default function Header({ lang }: HeaderProps) {
  const pathname = usePathname();
  const translations = getTranslations(lang);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pillarsOpen, setPillarsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroHeight =
      typeof window !== 'undefined' ? window.innerHeight : 0;

  const scrollProgress = Math.min(scrollY / (heroHeight * 0.7), 1);

  const headerHeight = 70 + (30 * (1 - scrollProgress));
  const logoHeight = 40 + (20 * (1 - scrollProgress));

  const isOnHero = scrollY < heroHeight * 0.7;

  const navigation = [
    { name: translate(translations, 'nav.home'), href: `/${lang}` },
    { name: translate(translations, 'nav.about'), href: `/${lang}/about` },
    {
      name: translate(translations, 'nav.pillars'),
      href: `/${lang}/pillars`,
      items: [
        { name: translate(translations, 'home.pillars.education'), href: `/${lang}/pillars/education` },
        { name: translate(translations, 'home.pillars.health'), href: `/${lang}/pillars/health` },
        { name: translate(translations, 'home.pillars.sport'), href: `/${lang}/pillars/sport` },
      ]
    },
    { name: translate(translations, 'nav.contact'), href: `/${lang}/contact` },
  ];

  const isActive = (href: string) => {
    if (href === `/${lang}`) return pathname === href;
    return pathname?.startsWith(href);
  };

  return (
      <header
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
              isOnHero
                  ? 'bg-transparent'
                  : 'bg-white/90 backdrop-blur border-b border-gray-200'
          }`}
          style={{ height: `${headerHeight}px` }}
      >
        <nav className="container mx-auto flex items-center justify-between px-4 h-full">

          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center">
            <img
                src="/images/logo.png"
                alt="The Bythiah Project"
                className="w-auto transition-all duration-300"
                style={{ height: `${logoHeight}px` }}
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">

            {navigation.map((item) => (
                <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => item.items && setPillarsOpen(true)}
                    onMouseLeave={() => item.items && setPillarsOpen(false)}
                >

                  <Link
                      href={item.href}
                      className={`flex items-center space-x-1 text-sm font-medium ${
                          isActive(item.href)
                              ? 'text-primary'
                              : isOnHero
                                  ? 'text-white/90'
                                  : 'text-gray-600'
                      }`}
                  >
                    <span>{item.name}</span>
                    {item.items && <ChevronDown size={14} />}
                  </Link>

                  {item.items && pillarsOpen && (
                      <div className="absolute top-full left-0 mt-3 w-48 rounded-md bg-white shadow-lg">
                        {item.items.map((subItem) => (
                            <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm hover:bg-gray-100"
                            >
                              {subItem.name}
                            </Link>
                        ))}
                      </div>
                  )}
                </div>
            ))}

            <Link
                href={`/${lang}/donate`}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                    isOnHero
                        ? 'bg-white/20 text-white hover:bg-white/30'
                        : 'bg-primary text-white'
                }`}
            >
              {translate(translations, 'nav.donate')}
            </Link>

            <LanguageSwitcher lang={lang} isOnHero={isOnHero} />

          </div>

          {/* Mobile button */}
          <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </nav>
      </header>
  );
}