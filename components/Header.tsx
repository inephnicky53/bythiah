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
  const pathname = usePathname();
  const translations = getTranslations(lang);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: translate(translations, 'nav.home'), href: `/${lang}` },
    { name: translate(translations, 'nav.about'), href: `/${lang}/about` },
    { name: translate(translations, 'nav.pillars'), href: `/${lang}/pillars` },
    { name: translate(translations, 'nav.contact'), href: `/${lang}/contact` },
  ];

  const isActive = (href: string) => {
    if (href === `/${lang}`) return pathname === href;
    return pathname?.startsWith(href);
  };

  const textColor = scrolled ? 'text-gray-700' : 'text-white';
  const bgColor = scrolled ? 'bg-white/95 backdrop-blur border-b border-gray-200' : 'bg-transparent';

  return (
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${bgColor}`}>
        <nav className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link href={`/${lang}`}>
            <img src="/images/logo.png" alt="The Bythiah Project" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors ${
                        isActive(item.href) ? 'text-primary' : textColor
                    }`}
                >
                  {item.name}
                </Link>
            ))}

            <Link
                href={`/${lang}/donate`}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    scrolled
                        ? 'bg-primary text-white hover:bg-primary/90'
                        : 'bg-white/20 text-white hover:bg-white/30'
                }`}
            >
              {translate(translations, 'nav.donate')}
            </Link>

            <LanguageSwitcher lang={lang} isOnHero={!scrolled} />
          </div>

          {/* Mobile button */}
          <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
              <div className="px-4 py-4 space-y-2">
                {navigation.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-base font-medium text-gray-800"
                    >
                      {item.name}
                    </Link>
                ))}

                <Link
                    href={`/${lang}/donate`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block mt-3 rounded-md bg-primary px-4 py-2 text-center text-white font-medium"
                >
                  {translate(translations, 'nav.donate')}
                </Link>
              </div>
            </div>
        )}
      </header>
  );
}