# Proposition de Commit - Version 1.1.0

## Type de commit
`feat: refonte de la page d'accueil avec Hero vidéo et section scrolling`

## Description détaillée

```
feat: refonte de la page d'accueil avec Hero vidéo et section scrolling

Refonte complète de la page d'accueil avec deux nouveaux composants majeurs :
- Hero avec vidéo en arrière-plan et texte avec dégradé
- Section scrolling avec texte défilant et images changeantes

Nouveaux composants :
- VideoHero : Hero section avec vidéo background, texte dégradé, CTA animé
- ScrollingSection : 6 sections avec texte à gauche et images sticky à droite

Traductions enrichies :
- Ajout de tout le contenu de l'organisation (intro, piliers, vocation, mission, vision)
- Support des tableaux dans le type Translations
- Nouvelles sections : intro, pillars, about, vocation, mission, vision, motto

Refactorisation :
- Page d'accueil simplifiée de 145 à 23 lignes
- Architecture modulaire et maintenable
- Meilleure séparation des responsabilités

Fichiers créés :
- components/VideoHero.tsx
- components/ScrollingSection.tsx
- CHANGELOG.md
- COMMIT_PROPOSAL_V1.1.md

Fichiers modifiés :
- lib/i18n.ts (traductions enrichies + support tableaux)
- app/[lang]/page.tsx (refactorisation complète)

Tests :
✅ Lint : Aucune erreur
✅ Build : Réussi (22 pages générées)
✅ Types TypeScript : Valides
```

## Commandes Git suggérées

```bash
# Vérifier les fichiers modifiés
git status

# Ajouter les nouveaux fichiers et modifications
git add components/VideoHero.tsx
git add components/ScrollingSection.tsx
git add lib/i18n.ts
git add app/[lang]/page.tsx
git add CHANGELOG.md
git add COMMIT_PROPOSAL_V1.1.md

# Créer le commit
git commit -m "feat: refonte de la page d'accueil avec Hero vidéo et section scrolling

Refonte complète de la page d'accueil avec deux nouveaux composants majeurs :
- Hero avec vidéo en arrière-plan et texte avec dégradé
- Section scrolling avec texte défilant et images changeantes

Nouveaux composants :
- VideoHero : Hero section avec vidéo background, texte dégradé, CTA animé
- ScrollingSection : 6 sections avec texte à gauche et images sticky à droite

Traductions enrichies :
- Ajout de tout le contenu de l'organisation
- Support des tableaux dans le type Translations
- Nouvelles sections : intro, pillars, about, vocation, mission, vision, motto

Refactorisation :
- Page d'accueil simplifiée de 145 à 23 lignes
- Architecture modulaire et maintenable

Tests :
✅ Lint : Aucune erreur
✅ Build : Réussi (22 pages générées)
✅ Types TypeScript : Valides"

# Créer un tag pour la version
git tag -a v1.1.0 -m "Version 1.1.0 - Refonte page d'accueil avec Hero vidéo et scrolling"

# Pousser les changements (NE PAS EXÉCUTER SANS CONFIRMATION)
# git push origin main
# git push origin v1.1.0
```

## Détails des changements

### 1. VideoHero.tsx (nouveau)
- Vidéo en plein écran avec autoplay, loop, muted
- Overlay sombre pour lisibilité
- Texte avec dégradé de couleurs (bg-gradient-to-r from-primary via-secondary to-primary)
- Bouton CTA avec animation hover et scale
- Indicateur de scroll animé (bounce)
- Responsive (text-5xl → text-7xl)

### 2. ScrollingSection.tsx (nouveau)
- Grid 2 colonnes (texte gauche, images droite)
- 6 sections de contenu avec détection au scroll
- Images sticky avec transitions opacity
- useEffect pour gérer le scroll
- useRef pour les références des sections
- Responsive (hidden lg:block pour les images)

### 3. lib/i18n.ts (modifié)
**Type Translations :**
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

**Nouvelles traductions :**
- home.intro (title, description, since)
- home.pillars (title, education, health, sport, priority)
- home.about (title, description, intervention)
- home.vocation (title, description, support)
- home.mission (title, description, targets[])
- home.vision (title, description)
- home.motto (title, text)

### 4. app/[lang]/page.tsx (refactorisé)
**Avant :** 145 lignes avec Hero, Mission, Pillars, Programs, CTA
**Après :** 23 lignes avec VideoHero et ScrollingSection

## Prochaines étapes

### Immédiat
1. Ajouter la vidéo hero : `/public/videos/hero-video.mp4`
2. Ajouter les images : `/public/images/{intro,pillars,about,vocation,mission,vision}.jpg`

### Court terme
3. Optimiser la vidéo (WebM + MP4)
4. Optimiser les images avec Next.js Image
5. Ajouter des animations d'entrée

### Moyen terme
6. Créer la page donate
7. Remplir les pages about, programs, etc.
8. Ajouter des galeries photos

## Notes importantes

⚠️ **Avant de commiter :**
1. Vérifier que tous les fichiers sont corrects
2. Tester le site en local (npm run dev)
3. Vérifier le build (npm run build) ✅
4. Relire les changements (git diff)

⚠️ **Fichiers manquants (à ajouter) :**
- `/public/videos/hero-video.mp4` (vidéo hero)
- `/public/images/intro.jpg`
- `/public/images/pillars.jpg`
- `/public/images/about.jpg`
- `/public/images/vocation.jpg`
- `/public/images/mission.jpg`
- `/public/images/vision.jpg`

Sans ces fichiers, le site fonctionnera mais affichera des placeholders.

## Compatibilité

- ✅ Next.js 13.5.1
- ✅ React 18.2.0
- ✅ TypeScript 5.2.2
- ✅ Tailwind CSS 3.3.3
- ✅ Navigateurs modernes (Chrome, Firefox, Safari, Edge)

## Performance

- Build time : ~15 secondes
- 22 pages générées (11 par langue)
- First Load JS : ~79-90 kB
- Toutes les pages sont statiques (SSG)

