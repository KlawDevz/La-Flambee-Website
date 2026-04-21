# La Flambée (Mirepoix) - Plan de Refonte

## 1. Contexte
Site vitrine avec "Live Status" pour le restaurant La Flambée (Viande maturée, Pizza). Focus absolu sur la conversion Mobile et la rapidité (>90/100 Lighthouse).

## 2. Architecture Technique Validée
- **Frontend** : Next.js 15 (App Router, SSG favorisé), Tailwind CSS v4, Framer Motion (Design Liquid Glass).
- **Backend & Admin** : Supabase (Remplace Sanity/Strapi pour un workflow intégré).
- **Sécurité & Qualité** : Zod, React Hook Form, Husky (TODO).

## 3. RoadMap / Suivi (Phase 1)

### Infrastructure & Set-Up
- [x] Créer projet Next.js
- [x] Installer dépendances (Supabase, Framer, Lucide, Tailwind)
- [ ] Configurer `lib/supabase.ts` avec les clés réelles
- [ ] Designer le schéma SQL Supabase (`restaurant_status`, `menu_categories`, `menu_items`)

### UI / UX Core (Mobile First)
- [ ] Définir la charte graphique dans `globals.css` (Rouge braise, Noir charbon, Blanc cassé).
- [ ] Composant : TopBar (Annonce dynamique).
- [ ] Composant : Navbar avec "Live Status" Indicator (Pastille Verte/Rouge).
- [ ] Composant : Hero Section (CTA Réservation/Appel `tel:`).

### Fonctionnalités Business
- [ ] Implémenter le Menu Dynamique (Sans PDF). Filtrage Categories.
- [ ] Composant : Carte Interactive & Infos Pratiques.
- [ ] Créer l'interface `/admin` (Mobile first, protégée par Supabase Auth) pour Davy & Julie.

### SEO & Performance
- [ ] Créer le composant de génération de JSON-LD (Schema.org `Restaurant`).
- [ ] Assurer le Lazy Loading et les formats WebP/AVIF.