export interface CraftingStep {
  num: string;
  title: string;
  desc: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'urns' | 'felt-replicas' | 'candles' | 'cards' | 'photo-cards' | 'gift-boxes' | 'remembrance-kits';
  tagline: string;
  description: string;
  longDescription: string;
  price: number;
  materials: string[];
  dimensions: string;
  craftingTime: string;
  features: string[];
  images: string[];
  featured: boolean;
  isNew: boolean;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  products: string[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'products' | 'ordering' | 'shipping' | 'custom' | 'general';
}

export interface Testimonial {
  id: string;
  name: string;
  petName: string;
  petType: string;
  content: string;
  productName: string;
  location: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}
