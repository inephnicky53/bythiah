'use client';

import { useEffect, useState } from 'react';

/**
 * Hook pour détecter si on est sur un appareil mobile
 * Utilise le breakpoint Tailwind 'md' (768px)
 * @returns boolean - true si la largeur de l'écran est < 768px
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Fonction pour vérifier la taille de l'écran
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Vérifier au montage
    checkIsMobile();

    // Ajouter un listener pour les changements de taille
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // Retourner false pendant le SSR pour éviter les hydration mismatches
  return isClient ? isMobile : false;
}

