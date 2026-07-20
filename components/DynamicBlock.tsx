'use client';

import { type Locale } from '@/lib/i18n';
import NextImage from 'next/image';

export interface Block {
  id: string;
  type: string;
  order: number;
  contentFr: string;
  contentEn: string;
  imageUrl?: string;
}

interface DynamicBlockProps {
  block: Block;
  lang: Locale;
}

export default function DynamicBlock({ block, lang }: DynamicBlockProps) {
  const content = lang === 'fr' ? block.contentFr : block.contentEn;

  switch (block.type) {
    case 'hero':
      return (
        <section className="py-20 bg-gradient-to-b from-primary/5 to-white">
          <div className="container mx-auto px-4 text-center">
            {block.imageUrl && (
              <div className="mb-8">
                <NextImage
                  src={block.imageUrl}
                  alt=""
                  width={400}
                  height={300}
                  className="mx-auto rounded-2xl"
                />
              </div>
            )}
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </section>
      );
    case 'text':
      return (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </section>
      );
    case 'text-image':
      return (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div dangerouslySetInnerHTML={{ __html: content }} />
              {block.imageUrl && (
                <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
                  <NextImage
                    src={block.imageUrl}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      );
    default:
      return (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </section>
      );
  }
}
