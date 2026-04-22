import { type Locale } from '@/lib/i18n';
import { getPartnerLogos } from '@/lib/partners';
import dynamic from 'next/dynamic';
import VideoHero from '@/components/VideoHero';
import ScrollingSection from '@/components/ScrollingSection';
import ScrollingHorizontalSection from '@/components/ScrollingHorizontalSection';
import ScrollTop from '@/components/ScrollTop';
import Partners from '@/components/Partners';

const ProjectGallery = dynamic(() => import('@/components/ProjectGallery'), {
  loading: () => <div className="h-screen flex items-center justify-center">Chargement...</div>,
});

interface HomePageProps {
  params: {
    lang: string;
  };
}

export default function HomePage({ params }: HomePageProps) {
  const lang = params.lang as Locale;
  const partners = getPartnerLogos();

  return (
    <div className="flex flex-col">
      {/* Hero Section with Video Background */}
      <VideoHero lang={lang} />

      {/* Scrolling Section with Text and Changing Images */}
      <ScrollingSection lang={lang} />

      {/* Scrolling Horizontal Section - Pillars */}
      <ScrollingHorizontalSection lang={lang} />

      {/* Project Gallery */}
      <ProjectGallery lang={lang} />

      {/* Partners Section */}
      <Partners lang={lang} partners={partners} />

      {/* Scroll to Top Button */}
      <ScrollTop />
    </div>
  );
}
