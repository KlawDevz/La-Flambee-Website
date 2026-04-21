export type Category = 'pizzas' | 'viandes' | 'salades' | 'desserts';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  isSoldOut: boolean;
  allergens?: string[];
  isSignature?: boolean; // Pour les plats stars (ex: Viande maturée)
}

export interface RestaurantStatus {
  isOpen: boolean;
  message: string | null; // Message optionnel (ex: "Service complet ce midi")
  updatedAt: string;
}

// --- DONNÉES FACTICES (MOCK) ---

export const mockStatus: RestaurantStatus = {
  isOpen: true,
  message: "🔥 La cheminée est allumée ! Il nous reste quelques tables.",
  updatedAt: new Date().toISOString(),
};

export const mockMenu: MenuItem[] = [
  {
    id: 'v1',
    name: 'Côte de Bœuf Maturée (Pour 2)',
    description: 'Viande d\'exception maturée sur place (30 jours). Frites maison, sauce au poivre ou roquefort.',
    price: 65.0,
    category: 'viandes',
    isSoldOut: false,
    isSignature: true,
  },
  {
    id: 'v2',
    name: 'Magret de Canard entier',
    description: 'Magret du sud-ouest cuit au feu de bois. Pommes grenailles et légumes de saison.',
    price: 24.5,
    category: 'viandes',
    isSoldOut: false,
  },
  {
    id: 'p1',
    name: 'La Flambée (Signature)',
    description: 'Base tomate, mozza, effiloché de boeuf confit, oignons caramélisés, sauce barbecue.',
    price: 16.5,
    category: 'pizzas',
    isSoldOut: false,
    isSignature: true,
    allergens: ['gluten', 'lactose'],
  },
  {
    id: 'p2',
    name: 'Reine Classique',
    description: 'Base tomate, mozzarella, jambon blanc supérieur, champignons frais.',
    price: 12.0,
    category: 'pizzas',
    isSoldOut: false,
    allergens: ['gluten', 'lactose'],
  },
  {
    id: 'p3',
    name: 'La Truffée',
    description: 'Base crème, mozza, champignons, huile de truffe blanche, roquette fraîche.',
    price: 17.0,
    category: 'pizzas',
    isSoldOut: true, // Exemple de rupture
    allergens: ['gluten', 'lactose'],
  },
  {
    id: 's1',
    name: 'Salade Ariégeoise',
    description: 'Salade mêlée, gésiers fumés, croutons, noix, tomates cerises, vinaigrette moutarde.',
    price: 14.5,
    category: 'salades',
    isSoldOut: false,
    allergens: ['fruits à coque'],
  },
  {
    id: 'd1',
    name: 'Tiramisu Maison',
    description: 'Recette traditionnelle italienne au café et amaretto.',
    price: 7.0,
    category: 'desserts',
    isSoldOut: false,
    allergens: ['gluten', 'lactose', 'oeufs'],
  }
];