import Link from 'next/link';
import { getTranslations, type Locale, t as translate } from '@/lib/i18n';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  lang: Locale;
}

export default function Footer({ lang }: FooterProps) {
  const translations = getTranslations(lang);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and About Section */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo2.png"
              alt="The Bythiah Project"
              height={50}
              width={150}
              className="mb-4 h-12 w-auto"
            />
            <p className="text-sm text-accent-foreground/80">
              {lang === 'fr'
                ? 'Une organisation dédiée à transformer des vies à travers l\'éducation, la santé et le développement communautaire.'
                : 'An organization dedicated to transforming lives through education, health, and community development.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">{translate(translations, 'nav.about')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${lang}/about`}
                  className="text-accent-foreground/80 transition-colors hover:text-primary"
                >
                  {translate(translations, 'nav.about')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/programs`}
                  className="text-accent-foreground/80 transition-colors hover:text-primary"
                >
                  {translate(translations, 'nav.programs')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/pillars`}
                  className="text-accent-foreground/80 transition-colors hover:text-primary"
                >
                  {translate(translations, 'nav.pillars')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">{translate(translations, 'footer.contact')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail size={16} className="mt-0.5 text-primary" />
                <a
                  href="mailto:contact@bythiah.org"
                  className="text-accent-foreground/80 transition-colors hover:text-primary"
                >
                  contact@bythiah.org
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone size={16} className="mt-0.5 text-primary" />
                <a
                  href="tel:+243808511200"
                  className="text-accent-foreground/80 transition-colors hover:text-primary"
                >
                  +243 808 511 200
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-0.5 text-primary" />
                <span className="text-accent-foreground/80">
                  1022, Av. des Forces Armées, B-16, Gombe – Kinshasa, RDC
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">{translate(translations, 'footer.followUs')}</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-foreground/80 transition-colors hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-foreground/80 transition-colors hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-foreground/80 transition-colors hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-foreground/80 transition-colors hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-accent-foreground/20 pt-8 text-center text-sm text-accent-foreground/60">
          <p>
            © {currentYear} The Bythiah Project. {translate(translations, 'footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
}

