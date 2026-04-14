import { NextResponse } from 'next/server';
import { getPartnerLogos } from '@/lib/partners';

/** Permet au client de recharger la liste si les props RSC sont vides. */
export async function GET() {
  try {
    const partners = getPartnerLogos();
    return NextResponse.json({ partners });
  } catch {
    return NextResponse.json({ partners: [] }, { status: 500 });
  }
}
