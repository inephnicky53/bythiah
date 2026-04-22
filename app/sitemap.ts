import type { MetadataRoute } from 'next';
import { defaultSiteUrl, locales } from '@/lib/i18n';

const routes = [
  '',
  '/about',
  '/contact',
  '/donate',
  '/pillars',
  '/pillars/education',
  '/pillars/health',
  '/pillars/sport',
  '/actions',
  '/governance',
  '/international',
  '/partnerships',
  '/resources',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl;
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of routes) {
      const url = `${base}/${locale}${path}`;
      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: path === '' ? 1 : 0.75,
      });
    }
  }

  return entries;
}
