# Changelog - The Bythiah Project

## Version 1.4.2 - Correction du Logo du Header (2026-02-15)

### 🐛 Corrections de bugs

#### Logo du Header
- ✅ Correction du bug d'affichage au chargement de la page
- ✅ Logo s'affiche correctement à 60px au démarrage
- ✅ Réduction progressive au scroll jusqu'à 40px
- ✅ Transition fluide sans saccades

#### Détails Techniques
- ✅ Correction de la formule : `40 + (20 * (1 - scrollProgress))`
- ✅ Ajout de l'attribut `width={180}` pour le ratio correct
- ✅ Hauteur initiale : 60px (40 + 20)
- ✅ Hauteur minimale : 40px au scroll

### 📝 Fichiers modifiés

- `components/Header.tsx` - Correction du calcul du logoHeight
- `CHANGELOG.md` - Documentation v1.4.2

### 📊 Performance

- Build time : ~25 secondes
- First Load JS : 98.2 kB (inchangé)
- Lint : ✅ Aucune erreur
- Build : ✅ Réussi (22 pages générées)

---

## Version 1.4.1 - Section Piliers Sticky avec Scroll Hijacking (2026-02-15)

### 🎨 Améliorations visuelles

#### ScrollingHorizontalSection Sticky
- ✅ Section fixée (fixed) pendant que l'utilisateur scroll
- ✅ Spacer de 200vh pour permettre le scroll à travers tous les piliers
- ✅ Carousel qui avance automatiquement au scroll
- ✅ Retour au scroll normal après la dernière section
- ✅ Effet immersif et engageant

#### Implémentation Technique
- ✅ Wrapper externe avec spacer pour le scroll hijacking
- ✅ Section avec position fixed et z-index 40
- ✅ Détection de la position du scroll dans la section
- ✅ Avancement automatique du carousel basé sur le scroll progress
- ✅ Centrage vertical du contenu avec flexbox

### 📝 Fichiers modifiés

- `components/ScrollingHorizontalSection.tsx` - Section sticky avec scroll hijacking
- `CHANGELOG.md` - Documentation v1.4.1

### 📊 Performance

- Build time : ~25 secondes
- First Load JS : 98.2 kB (+0.1 kB par rapport à v1.4.0)
- Lint : ✅ Aucune erreur
- Build : ✅ Réussi (22 pages générées)

---

## Version 1.4.0 - Logo Animé, Scroll Trigger et Descriptions Enrichies (2026-02-15)

### 🎨 Améliorations visuelles

#### Logo Animé dans le Header
- ✅ Logo grand au début du site (60px de hauteur)
- ✅ Réduction progressive au scroll (40px minimum)
- ✅ Hauteur du header dynamique (64px à 96px)
- ✅ Transition fluide (300ms)
- ✅ Effet parallaxe au scroll

#### ScrollingHorizontalSection avec Scroll Trigger
- ✅ Carousel des piliers qui slide automatiquement au scroll
- ✅ Détection de la position du scroll dans la section
- ✅ Avancement automatique basé sur le scroll progress
- ✅ Boutons de navigation toujours disponibles
- ✅ Indicateurs de position interactifs

#### Descriptions des Piliers Enrichies
- ✅ Éducation : 3 paragraphes développés
- ✅ Santé : 3 paragraphes développés
- ✅ Sport : 3 paragraphes développés
- ✅ Support bilingue complet (fr/en)
- ✅ Contenu logique et engageant

### 📝 Fichiers modifiés

- `components/Header.tsx` - Logo animé avec scroll tracking
- `components/ScrollingHorizontalSection.tsx` - Scroll trigger et descriptions enrichies
- `CHANGELOG.md` - Documentation v1.4.0

### 📊 Performance

- Build time : ~25 secondes
- First Load JS : 98.1 kB (+0.9 kB par rapport à v1.3.0)
- Lint : ✅ Aucune erreur
- Build : ✅ Réussi (22 pages générées)

---

## Version 1.3.0 - Piliers Horizontaux, Scroll-Top et Partenaires (2026-02-15)

### 🎨 Nouvelles fonctionnalités

#### Section Piliers Horizontale (ScrollingHorizontalSection)
- ✅ Slider horizontal des 3 piliers (Éducation, Santé, Sport)
- ✅ Fond sombre (accent color) pour meilleure visibilité
- ✅ Images et texte descriptif pour chaque pilier
- ✅ Boutons de navigation (précédent/suivant)
- ✅ Indicateurs de position (dots)
- ✅ Animations fluides (transition 500ms)
- ✅ Support bilingue complet (fr/en)

#### Bouton Scroll-Top (ScrollTop)
- ✅ Bouton flottant en bas à droite
- ✅ Apparaît après 300px de scroll
- ✅ Animation fade-in/fade-out
- ✅ Scroll fluide vers le haut (smooth behavior)
- ✅ Icône ChevronUp de Lucide React

#### Section Partenaires (Partners)
- ✅ Grille responsive (1/2/4 colonnes)
- ✅ 4 partenaires avec logos et descriptions
- ✅ Support bilingue complet (fr/en)
- ✅ Animations au scroll
- ✅ CTA pour contacter
- ✅ Titre avec soulignement SVG animé

### 📁 Nouveaux fichiers

- `components/ScrollingHorizontalSection.tsx` - Section piliers horizontale (180 lignes)
- `components/ScrollTop.tsx` - Bouton scroll-top flottant (35 lignes)
- `components/Partners.tsx` - Section partenaires (160 lignes)
- `COMMIT_PROPOSAL_V1.3.0.md` - Proposition de commit détaillée

### 🔧 Fichiers modifiés

- `components/ScrollingSection.tsx` - Suppression de la section "Nos piliers"
- `app/[lang]/page.tsx` - Intégration des nouveaux composants

### 📊 Performance

- Build time : ~25 secondes
- First Load JS : 97.2 kB (+1.7 kB par rapport à v1.2.1)
- Lint : ✅ Aucune erreur
- Build : ✅ Réussi (22 pages générées)

---

## Version 1.2.1 - Header Transparent et Logos (2026-02-15)

### 🎨 Nouvelles fonctionnalités

#### Header transparent sur Hero
- ✅ Header devient transparent au-dessus du Hero
- ✅ Transition fluide au scroll (300ms)
- ✅ Texte blanc sur le Hero pour meilleure lisibilité
- ✅ Bouton CTA avec style transparent (white/20) sur le Hero
- ✅ Navigation et language switcher adaptés au contexte
- ✅ Détection de scroll avec hook useEffect

#### Logos
- ✅ Logo.png ajouté dans le Header
- ✅ Logo2.png ajouté dans le Footer
- ✅ Images optimisées avec height et width
- ✅ ESLint disable pour les images externes

#### Correction SVG
- ✅ Correction des template literals dans ScrollingSection
- ✅ IDs uniques pour les gradients SVG (gradient-${index})
- ✅ Stroke correctement interpolé avec template literals

### 📁 Fichiers modifiés

- `components/Header.tsx` - Détection scroll + styles conditionnels
- `components/LanguageSwitcher.tsx` - Support isOnHero prop
- `components/Footer.tsx` - Ajout logo2.png
- `components/ScrollingSection.tsx` - Correction SVG template literals
- `CHANGELOG.md` - Documentation v1.2.1

### 📊 Performance

- Build time : ~20 secondes
- First Load JS : 95.5 kB (inchangé)
- Lint : ✅ Aucune erreur
- Build : ✅ Réussi (22 pages générées)

---

## Version 1.2.0 - Animations, Témoignages et Galerie (2026-02-08)

### 🎨 Nouvelles fonctionnalités

#### Animations au scroll
- ✅ Animations fade-in pour tous les éléments
- ✅ Animations slide-in-left et slide-in-right
- ✅ Soulignement courbé animé pour les titres (SVG path animation)
- ✅ Hook personnalisé `useInView` pour détecter la visibilité
- ✅ Animations déclenchées automatiquement au scroll

#### Section Témoignages
- ✅ 4 témoignages avec photos et citations
- ✅ Support bilingue (fr/en)
- ✅ Icône de citation (Lucide React)
- ✅ Layout en grille responsive (1 col mobile, 2 cols desktop)
- ✅ Animations avec délais échelonnés
- ✅ Cartes avec hover effects et ombres

#### Galerie de Projets
- ✅ 6 projets réalisés avec images
- ✅ Support bilingue (fr/en)
- ✅ Layout en grille responsive (1/2/3 colonnes)
- ✅ Hover effects avec overlay et zoom
- ✅ Modal pour afficher les détails
- ✅ Badges de catégories (Éducation, Santé, Sport, Développement)

### ⚡ Optimisations de performance

- ✅ Lazy loading des composants lourds avec `next/dynamic`
- ✅ Preload metadata pour la vidéo Hero
- ✅ Poster image pour la vidéo (chargement instantané)
- ✅ Animations CSS optimisées avec `transition`
- ✅ Intersection Observer pour animations au scroll
- ✅ Images externes optimisées (Unsplash)

### 🎨 Améliorations CSS

Nouvelles classes d'animation dans `app/globals.css` :
- `.fade-in` - Fade in avec translateY
- `.slide-in-left` - Slide depuis la gauche
- `.slide-in-right` - Slide depuis la droite
- `.underline-curved` - Soulignement courbé simple
- `.underline-svg` - Soulignement SVG animé avec stroke-dasharray

### 📁 Nouveaux fichiers

- `lib/hooks/useInView.ts` - Hook pour détecter la visibilité
- `components/Testimonials.tsx` - Section témoignages
- `components/ProjectGallery.tsx` - Galerie de projets

### 🔧 Fichiers modifiés

- `app/[lang]/page.tsx` - Intégration des nouveaux composants avec lazy loading
- `app/globals.css` - Ajout des animations CSS
- `components/VideoHero.tsx` - Ajout preload et poster
- `components/ScrollingSection.tsx` - Ajout animations et soulignement SVG

### 📊 Performance

- Build time : ~20 secondes
- First Load JS : 95.4 kB (page d'accueil) - +4.1 kB
- Lazy loading : Testimonials et ProjectGallery chargés à la demande
- Toutes les pages statiques (SSG)

---

## Version 1.1.1 - Optimisations Hero et Section Scrolling (2026-02-08)

### 🎨 Améliorations visuelles

#### Hero Section
- ✅ Hero prend maintenant 100% de l'écran (h-screen w-screen)
- ✅ Vidéo de démonstration ajoutée (Coverr - volunteers helping children in Africa)
- ✅ Marges réduites (px-6 sm:px-8 lg:px-12)
- ✅ Texte plus grand et plus impactant (text-8xl sur XL)
- ✅ Overlay plus sombre (bg-black/50) pour meilleure lisibilité
- ✅ Bouton CTA avec shadow-xl

#### Section Scrolling
- ✅ Images à 50% de largeur, centrées verticalement et horizontalement
- ✅ Images avec coins arrondis (rounded-2xl) et ombre portée (shadow-2xl)
- ✅ Marges réduites (px-6 sm:px-8 lg:px-10)
- ✅ Images Unsplash ajoutées pour chaque section :
  - Intro : Enfants africains souriants
  - Piliers : Éducation et apprentissage
  - À propos : Communauté et solidarité
  - Vocation : Soins et assistance
  - Mission : Enfants et espoir
  - Vision : Avenir et développement

### 📝 Contenu enrichi

Chaque section a maintenant du contenu logique et cohérent :

1. **Introduction** : Présentation de l'organisation + engagement durable
2. **Piliers** : Éducation, Santé, Sport + explication des droits fondamentaux
3. **À propos** : Histoire + approche holistique
4. **Vocation** : Assistance aux vulnérables + travail avec les communautés
5. **Mission** : Liste des bénéficiaires + message d'espoir
6. **Vision** : Rêve d'un monde meilleur + guide des actions

### 🔧 Corrections techniques
- ✅ Ajout de `eslint-disable-next-line` pour l'utilisation de `<img>` (images externes)
- ✅ Filtrage des paragraphes vides dans le rendu
- ✅ Support bilingue complet (fr/en) pour tout le contenu

---

## Version 1.1.0 - Refonte de la page d'accueil (2026-02-08)

### ✨ Nouvelles fonctionnalités

#### 1. Hero avec vidéo en arrière-plan
- **Composant** : `components/VideoHero.tsx`
- Vidéo en plein écran avec overlay sombre
- Texte avec dégradé de couleurs (primary → secondary → primary)
- Bouton CTA avec animation hover
- Indicateur de scroll animé
- Responsive et optimisé pour mobile

#### 2. Section scrolling avec images changeantes
- **Composant** : `components/ScrollingSection.tsx`
- Texte qui défile à gauche
- Images qui changent à droite (sticky)
- Détection automatique de la section active au scroll
- Transitions fluides entre les images
- 6 sections de contenu :
  - Introduction
  - Piliers d'action
  - Qui sommes-nous
  - Notre vocation
  - Notre mission
  - Notre vision

#### 3. Traductions i18n enrichies
- **Fichier** : `lib/i18n.ts`
- Ajout de tout le contenu fourni par l'utilisateur
- Support des tableaux dans les traductions
- Nouvelles sections :
  - `home.intro` - Introduction de l'organisation
  - `home.pillars` - Piliers d'action (Éducation, Santé, Sport)
  - `home.about` - Qui sommes-nous
  - `home.vocation` - Notre vocation
  - `home.mission` - Notre mission (avec liste de cibles)
  - `home.vision` - Notre vision
  - `home.motto` - Notre devise

### 🔧 Modifications techniques

#### Type Translations
```typescript
// Avant
export type Translations = {
  [key: string]: string | Translations;
};

// Après
export type Translations = {
  [key: string]: string | string[] | Translations;
};
```
Support des tableaux pour les listes (ex: targets dans mission)

#### Page d'accueil simplifiée
- **Fichier** : `app/[lang]/page.tsx`
- Refactorisation complète
- Utilisation des nouveaux composants VideoHero et ScrollingSection
- Code réduit de 145 lignes à 23 lignes
- Architecture plus modulaire et maintenable

### 📦 Fichiers créés
- `components/VideoHero.tsx` - Hero avec vidéo
- `components/ScrollingSection.tsx` - Section scrolling
- `CHANGELOG.md` - Ce fichier

### 📝 Fichiers modifiés
- `lib/i18n.ts` - Traductions enrichies
- `app/[lang]/page.tsx` - Refactorisation

### ✅ Tests
- ✅ Lint : Aucune erreur
- ✅ Build : Réussi (22 pages générées)
- ✅ Types TypeScript : Valides

### 📋 Prochaines étapes suggérées

1. **Ajouter les vidéos et images**
   - Placer la vidéo hero dans `/public/videos/hero-video.mp4`
   - Ajouter les images pour chaque section dans `/public/images/`
   - Images nécessaires :
     - intro.jpg
     - pillars.jpg
     - about.jpg
     - vocation.jpg
     - mission.jpg
     - vision.jpg

2. **Optimiser les performances**
   - Compresser la vidéo hero (format WebM en plus de MP4)
   - Optimiser les images avec Next.js Image
   - Ajouter le lazy loading pour les images

3. **Améliorer l'accessibilité**
   - Ajouter des attributs ARIA
   - Tester avec un lecteur d'écran
   - Vérifier le contraste des couleurs

4. **Ajouter des animations**
   - Animations d'entrée pour le texte
   - Parallax pour la vidéo
   - Transitions plus fluides

5. **Créer les autres pages**
   - Remplir le contenu des pages about, programs, etc.
   - Créer la page donate avec formulaire
   - Ajouter des galeries photos

### 🎨 Design

**Palette de couleurs utilisée :**
- Primary: `#8b7b3e` (or doré)
- Secondary: `#fff2d2` (beige clair)
- Accent: `#433b1c` (marron foncé)

**Typographie :**
- Hero title : 5xl → 7xl (responsive)
- Section titles : 4xl → 5xl
- Body text : lg (18px)

### 🚀 Déploiement

Avant de déployer :
1. Ajouter les vidéos et images
2. Configurer `metadataBase` dans le layout
3. Tester sur différents navigateurs
4. Vérifier les performances avec Lighthouse

---

## Version 1.0.0 - Implémentation initiale (2026-02-08)

Voir `IMPLEMENTATION.md` pour les détails de la version initiale.

