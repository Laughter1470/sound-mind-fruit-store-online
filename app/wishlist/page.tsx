'use client';

import Link from 'next/link';
import { Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductGrid } from '@/components/product-grid';
import { useWishlist } from '@/lib/wishlist-context';
import { products } from '@/lib/data';

export default function WishlistPage() {
  const { wishlist } = useWishlist();
  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="font-serif text-3xl font-bold text-foreground">My Wishlist</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {wishlistProducts.length === 0
            ? 'Your wishlist is empty'
            : `${wishlistProducts.length} ${wishlistProducts.length === 1 ? 'item' : 'items'} saved`}
        </p>
      </div>

      {wishlistProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-20 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
            <Heart className="h-10 w-10 text-muted-foreground" />
          </div>
          <h2 className="mt-6 font-serif text-xl font-bold text-foreground">
            No saved items yet
          </h2>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Tap the heart icon on any product to save it here for later. Your wishlist makes
            it easy to keep track of your favourites.
          </p>
          <Button asChild size="lg" className="mt-6 rounded-full">
            <Link href="/shop">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Browse Products
            </Link>
          </Button>
        </div>
      ) : (
        <ProductGrid products={wishlistProducts} />
      )}
    </div>
  );
}
