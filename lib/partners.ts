import fs from 'fs';
import path from 'path';

const IMAGE_EXT = /\.(png|jpe?g|gif|webp|svg)$/i;

/** Dossiers sous `public/` où lire les logos (ordre d’affichage). */
const PARTNER_SOURCES: { dir: string; urlPrefix: string }[] = [
  { dir: 'img/partners', urlPrefix: '/img/partners' },
  { dir: 'images/sponsors', urlPrefix: '/images/sponsors' },
];

export type PartnerLogo = {
  id: string;
  name: string;
  logo: string;
};

function fileNameToDisplayName(file: string): string {
  const base = file.replace(/\.[^.]+$/, '');
  return base
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function toLogoEntry(file: string, urlPrefix: string): PartnerLogo {
  return {
    id: `${urlPrefix}/${file}`,
    name: fileNameToDisplayName(file),
    logo: `${urlPrefix}/${encodeURIComponent(file)}`,
  };
}

/**
 * Liste de secours si la lecture disque échoue (mauvais cwd, serverless, etc.).
 * Les fichiers doivent exister dans public/images/sponsors/.
 */
const FALLBACK_SPONSOR_FILES = [
  'amb-france.jpg',
  'anapi.png',
  'books.png',
  'educ.png',
  'fecofa.png',
  'fecorols.png',
  'fenacoju.png',
  'fevoco.png',
  'fpef.png',
  'frdct.png',
  'jeunesse.png',
  'ligue-tenis.png',
  'litekin.png',
  'main-partners.png',
  'ogefrem.png',
  'plan.png',
  'psg-turkey.png',
  'sante.png',
  'socials.png',
  'sport.png',
] as const;

function getFallbackSponsors(): PartnerLogo[] {
  return FALLBACK_SPONSOR_FILES.map((file) => toLogoEntry(file, '/images/sponsors'));
}

function collectFromPublicSubdir(relativeDir: string, urlPrefix: string): PartnerLogo[] {
  try {
    const abs = path.join(process.cwd(), 'public', relativeDir);
    if (!fs.existsSync(abs)) {
      return [];
    }
    return fs
      .readdirSync(abs)
      .filter((file) => IMAGE_EXT.test(file) && !file.startsWith('.'))
      .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
      .map((file) => toLogoEntry(file, urlPrefix));
  } catch {
    return [];
  }
}

function mergeUniqueByLogo(entries: PartnerLogo[]): PartnerLogo[] {
  const seen = new Set<string>();
  const out: PartnerLogo[] = [];
  for (const e of entries) {
    if (seen.has(e.logo)) continue;
    seen.add(e.logo);
    out.push(e);
  }
  return out;
}

/**
 * Logos partenaires : lecture de `public/img/partners` et `public/images/sponsors`,
 * avec repli sur une liste statique si le disque n’est pas lisible (souvent le cas en prod).
 */
export function getPartnerLogos(): PartnerLogo[] {
  const merged: PartnerLogo[] = [];
  for (const { dir, urlPrefix } of PARTNER_SOURCES) {
    merged.push(...collectFromPublicSubdir(dir, urlPrefix));
  }
  const fromDisk = mergeUniqueByLogo(merged);
  if (fromDisk.length > 0) {
    return fromDisk;
  }
  return getFallbackSponsors();
}
