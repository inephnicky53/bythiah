import type { MetadataRoute } from 'next';
import { defaultSiteUrl } from '@/lib/i18n';

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl;
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${base}/sitemap.xml`,
  };
}
