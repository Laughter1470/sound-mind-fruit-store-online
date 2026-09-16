'use client';

import Link from 'next/link';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import type { Product } from '@/lib/types';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/lib/cart-context';
import { useWishlist } from '@/lib/wishlist-context';
import { formatPrice } from '@/lib/format';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();
  const wished = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const size = product.sizes[0];
    addToCart({
      productId: product.id,
      name: product.name,
      slug: product.slug,
      image: product.image,
      sizeLabel: size.label,
      sizeValue: size.value,
      unitPrice: Math.round(product.basePrice * size.priceMultiplier),
      quantity: 1,
      category: product.category,
    });
    toast({
      title: 'Added to cart',
      description: `${product.name} (${size.label}) added to your cart.`,
    });
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
    toast({
      title: wished ? 'Removed from wishlist' : 'Added to wishlist',
      description: product.name,
    });
  };

  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <Card className="overflow-hidden border-border/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Badges */}
          <div className="absolute left-3 top-3 flex flex-col gap-1.5">
            {product.isBestSeller && (
              <Badge className="bg-primary text-primary-foreground shadow-sm">
                Best Seller
              </Badge>
            )}
            {product.isFeatured && !product.isBestSeller && (
              <Badge className="bg-accent text-accent-foreground shadow-sm">
                Featured
              </Badge>
            )}
          </div>
          {/* Wishlist */}
          <button
            onClick={handleWishlist}
            aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
            className={cn(
              'absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/90 shadow-sm transition-all hover:scale-110',
              wished ? 'text-destructive' : 'text-foreground/60'
            )}
          >
            <Heart className={cn('h-4 w-4', wished && 'fill-current')} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Rating */}
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" />
            <span className="text-xs font-medium text-foreground">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
          </div>

          {/* Name */}
          <h3 className="mt-1.5 font-medium leading-snug text-foreground line-clamp-1">
            {product.name}
          </h3>

          {/* Description */}
          <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
            {product.shortDescription}
          </p>

          {/* Price + CTA */}
          <div className="mt-3 flex items-center justify-between gap-2">
            <div>
              <p className="font-serif text-lg font-bold text-primary">
                {formatPrice(Math.round(product.basePrice * product.sizes[0].priceMultiplier))}
              </p>
              <p className="text-xs text-muted-foreground">{product.unit}</p>
            </div>
            <Button
              size="icon"
              onClick={handleAddToCart}
              aria-label={`Add ${product.name} to cart`}
              className="h-9 w-9 rounded-full bg-primary text-primary-foreground shadow-sm transition-all hover:scale-105 hover:bg-primary/90"
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
}
