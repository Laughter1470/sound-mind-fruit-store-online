export type Category = 'fruits' | 'dry-fruits' | 'seeds' | 'nuts' | 'soups';

export interface SizeOption {
  label: string;
  value: string;
  priceMultiplier: number;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
}

export interface NutritionInfo {
  servingSize: string;
  calories: string;
  nutrients: { label: string; value: string }[];
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: Category;
  shortDescription: string;
  description: string;
  basePrice: number;
  unit: string;
  sizes: SizeOption[];
  image: string;
  gallery: string[];
  rating: number;
  reviewCount: number;
  isBestSeller: boolean;
  isFeatured: boolean;
  inStock: boolean;
  origin: string;
  storage: string;
  nutrition?: NutritionInfo;
  reviews: Review[];
}

export interface CategoryInfo {
  id: Category;
  name: string;
  slug: string;
  description: string;
  image: string;
  icon: string;
}

export interface CartItemData {
  productId: string;
  name: string;
  slug: string;
  image: string;
  sizeLabel: string;
  sizeValue: string;
  unitPrice: number;
  quantity: number;
  category: Category;
}
