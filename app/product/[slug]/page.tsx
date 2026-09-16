'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ChevronRight,
  Heart,
  ShoppingCart,
  Truck,
  ShieldCheck,
  Leaf,
  Minus,
  Plus,
  Star,
  Check,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { ProductGrid } from '@/components/product-grid';
import { QuantitySelector } from '@/components/quantity-selector';
import { StarRating } from '@/components/star-rating';
import { useCart } from '@/lib/cart-context';
import { useWishlist } from '@/lib/wishlist-context';
import { useToast } from '@/hooks/use-toast';
import { getProductBySlug, getRelatedProducts } from '@/lib/data';
import { formatPrice } from '@/lib/format';
import { cn } from '@/lib/utils';

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const relatedProducts = getRelatedProducts(product, 4);

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();

  const [selectedSizeIdx, setSelectedSizeIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const selectedSize = product.sizes[selectedSizeIdx];
  const unitPrice = Math.round(product.basePrice * selectedSize.priceMultiplier);
  const totalPrice = unitPrice * quantity;
  const wished = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      name: product.name,
      slug: product.slug,
      image: product.image,
      sizeLabel: selectedSize.label,
      sizeValue: selectedSize.value,
      unitPrice,
      quantity,
      category: product.category,
    });
    toast({
      title: 'Added to cart',
      description: `${product.name} (${selectedSize.label}) x${quantity} added to your cart.`,
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    window.location.href = '/checkout';
  };

  const handleWishlist = () => {
    toggleWishlist(product.id);
    toast({
      title: wished ? 'Removed from wishlist' : 'Added to wishlist',
      description: product.name,
    });
  };

  const isSoup = product.category === 'soups';
  const sizeLabel = isSoup ? 'Select Volume' : 'Select Weight';

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/shop" className="hover:text-foreground">Shop</Link>
        <ChevronRight className="h-3 w-3" />
        <Link href={`/shop?category=${product.category}`} className="hover:text-foreground capitalize">
          {product.category.replace('-', ' ')}
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Image Gallery */}
        <div>
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border/60 bg-muted">
            <img
              src={product.gallery[activeImageIdx] || product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
            {product.isBestSeller && (
              <Badge className="absolute left-4 top-4 bg-primary text-primary-foreground shadow-sm">
                Best Seller
              </Badge>
            )}
          </div>
          {product.gallery.length > 1 && (
            <div className="mt-4 flex gap-3">
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={cn(
                    'relative h-20 w-20 overflow-hidden rounded-lg border-2 transition-all',
                    activeImageIdx === idx
                      ? 'border-primary ring-2 ring-primary/20'
                      : 'border-border hover:border-primary/40'
                  )}
                >
                  <img src={img} alt={`${product.name} ${idx + 1}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <div className="flex items-center gap-2">
            <StarRating rating={product.rating} size="md" showValue reviewCount={product.reviewCount} />
          </div>

          <h1 className="mt-2 font-serif text-3xl font-bold text-foreground">{product.name}</h1>

          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            {product.shortDescription}
          </p>

          <div className="mt-4 flex items-baseline gap-2">
            <span className="font-serif text-3xl font-bold text-primary">
              {formatPrice(unitPrice)}
            </span>
            <span className="text-sm text-muted-foreground">{product.unit}</span>
          </div>

          <Separator className="my-5" />

          {/* Size selector */}
          <div>
            <p className="mb-3 text-sm font-semibold text-foreground">{sizeLabel}</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size, idx) => (
                <button
                  key={size.value}
                  onClick={() => setSelectedSizeIdx(idx)}
                  className={cn(
                    'relative rounded-xl border-2 px-4 py-2.5 text-sm font-medium transition-all',
                    selectedSizeIdx === idx
                      ? 'border-primary bg-primary/5 text-primary'
                      : 'border-border text-foreground/70 hover:border-primary/40'
                  )}
                >
                  {size.label}
                  <span className="ml-2 text-xs text-muted-foreground">
                    {formatPrice(Math.round(product.basePrice * size.priceMultiplier))}
                  </span>
                  {selectedSizeIdx === idx && (
                    <Check className="absolute -right-2 -top-2 h-5 w-5 rounded-full bg-primary text-primary-foreground" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-5">
            <p className="mb-3 text-sm font-semibold text-foreground">Quantity</p>
            <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />
          </div>

          {/* Total */}
          <div className="mt-5 flex items-center justify-between rounded-xl bg-secondary/50 p-4">
            <span className="text-sm font-medium text-muted-foreground">Total Price</span>
            <span className="font-serif text-2xl font-bold text-primary">{formatPrice(totalPrice)}</span>
          </div>

          {/* Actions */}
          <div className="mt-5 flex gap-3">
            <Button size="lg" className="flex-1 rounded-full" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="flex-1 rounded-full" onClick={handleBuyNow}>
              Buy Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-4"
              onClick={handleWishlist}
              aria-label="Toggle wishlist"
            >
              <Heart className={cn('h-5 w-5', wished && 'fill-destructive text-destructive')} />
            </Button>
          </div>

          {/* Quick info */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center gap-1.5 rounded-xl border border-border/60 p-3 text-center">
              <Truck className="h-5 w-5 text-primary" />
              <p className="text-xs font-medium text-foreground">Fast Delivery</p>
              <p className="text-xs text-muted-foreground">Same-day in Lagos</p>
            </div>
            <div className="flex flex-col items-center gap-1.5 rounded-xl border border-border/60 p-3 text-center">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <p className="text-xs font-medium text-foreground">Quality Checked</p>
              <p className="text-xs text-muted-foreground">Every order</p>
            </div>
            <div className="flex flex-col items-center gap-1.5 rounded-xl border border-border/60 p-3 text-center">
              <Leaf className="h-5 w-5 text-primary" />
              <p className="text-xs font-medium text-foreground">100% Fresh</p>
              <p className="text-xs text-muted-foreground">Sourced daily</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs: Description, Nutrition, Reviews */}
      <div className="mt-12">
        <Tabs defaultValue="description">
          <TabsList className="w-full justify-start gap-2">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            <TabsTrigger value="reviews">
              Reviews ({product.reviews.length})
            </TabsTrigger>
          </TabsList>

          {/* Description */}
          <TabsContent value="description" className="mt-6">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="font-serif text-xl font-bold text-foreground">Product Details</h3>
                <p className="mt-3 leading-relaxed text-foreground/80">{product.description}</p>
              </div>
              <div className="rounded-xl border border-border/60 bg-card p-5">
                <h4 className="font-semibold text-foreground">Product Information</h4>
                <dl className="mt-3 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Origin</dt>
                    <dd className="font-medium text-foreground">{product.origin}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Storage</dt>
                    <dd className="font-medium text-foreground text-right">{product.storage}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Unit</dt>
                    <dd className="font-medium text-foreground">{product.unit}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Availability</dt>
                    <dd className="font-medium text-primary">
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </TabsContent>

          {/* Nutrition */}
          <TabsContent value="nutrition" className="mt-6">
            {product.nutrition ? (
              <div className="max-w-md">
                <h3 className="font-serif text-xl font-bold text-foreground">Nutritional Information</h3>
                <p className="mt-1 text-sm text-muted-foreground">Per {product.nutrition.servingSize}</p>
                <div className="mt-4 overflow-hidden rounded-xl border border-border/60">
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="bg-secondary/50">
                        <td className="px-4 py-3 font-semibold text-foreground">Calories</td>
                        <td className="px-4 py-3 text-right font-medium text-foreground">
                          {product.nutrition.calories}
                        </td>
                      </tr>
                      {product.nutrition.nutrients.map((nutrient) => (
                        <tr key={nutrient.label} className="border-t border-border/60">
                          <td className="px-4 py-3 text-muted-foreground">{nutrient.label}</td>
                          <td className="px-4 py-3 text-right font-medium text-foreground">
                            {nutrient.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  Nutritional values are approximate and may vary based on product source and preparation.
                </p>
              </div>
            ) : (
              <div className="rounded-xl border border-border/60 bg-secondary/30 p-8 text-center">
                <p className="text-sm text-muted-foreground">
                  Nutritional information is not available for this product.
                </p>
              </div>
            )}
          </TabsContent>

          {/* Reviews */}
          <TabsContent value="reviews" className="mt-6">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Summary */}
              <div className="lg:col-span-1">
                <div className="rounded-xl border border-border/60 bg-card p-5">
                  <div className="text-center">
                    <p className="font-serif text-4xl font-bold text-foreground">
                      {product.rating.toFixed(1)}
                    </p>
                    <StarRating rating={product.rating} size="lg" className="mt-2 justify-center" />
                    <p className="mt-2 text-sm text-muted-foreground">
                      Based on {product.reviewCount} reviews
                    </p>
                  </div>
                </div>
              </div>

              {/* Reviews list */}
              <div className="lg:col-span-2">
                <h3 className="font-serif text-xl font-bold text-foreground">Customer Reviews</h3>
                <div className="mt-4 space-y-4">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="rounded-xl border border-border/60 bg-card p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-foreground">{review.name}</p>
                          <StarRating rating={review.rating} size="sm" className="mt-1" />
                        </div>
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                      </div>
                      <p className="mt-3 text-sm text-foreground/80">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="font-serif text-2xl font-bold text-foreground">Related Products</h2>
          <div className="mt-6">
            <ProductGrid products={relatedProducts} />
          </div>
        </div>
      )}
    </div>
  );
}
