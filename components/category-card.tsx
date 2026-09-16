'use client';

import Link from 'next/link';
import { Apple, Citrus, Sprout, Nut, Soup, Leaf, type LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { CategoryInfo } from '@/lib/types';

const iconMap: Record<string, LucideIcon> = {
  Apple,
  Citrus,
  Sprout,
  Nut,
  Soup,
  Leaf,
};

interface CategoryCardProps {
  category: CategoryInfo;
  count: number;
}

export function CategoryCard({ category, count }: CategoryCardProps) {
  const IconComponent = iconMap[category.icon] ?? Leaf;

  return (
    <Link href={`/shop?category=${category.slug}`}>
      <Card className="group relative aspect-[4/5] overflow-hidden border-border/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5">
        <img
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
            <IconComponent className="h-5 w-5" />
          </div>
          <h3 className="font-serif text-lg font-bold text-white">{category.name}</h3>
          <p className="mt-0.5 text-xs text-white/80">{count} products</p>
        </div>
      </Card>
    </Link>
  );
}
