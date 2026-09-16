'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { ArrowLeft, ShoppingBag, ShoppingCart, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartItem } from '@/components/cart-item';
import { PriceSummary } from '@/components/price-summary';
import { useCart } from '@/lib/cart-context';

const FREE_DELIVERY_THRESHOLD = 25000;
const STANDARD_DELIVERY_FEE = 2000;

export default function CartPage() {
  const { items, subtotal, clearCart } = useCart();

  const deliveryFee = useMemo(() => {
    if (subtotal === 0) return 0;
    return subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : STANDARD_DELIVERY_FEE;
  }, [subtotal]);

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-20 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
            <ShoppingCart className="h-10 w-10 text-muted-foreground" />
          </div>
          <h1 className="mt-6 font-serif text-2xl font-bold text-foreground">
            Your cart is empty
          </h1>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Looks like you haven't added any products yet. Browse our fresh selection and
            start filling your cart!
          </p>
          <Button asChild size="lg" className="mt-6 rounded-full">
            <Link href="/shop">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Start Shopping
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground">Shopping Cart</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>
        <Button variant="ghost" size="sm" onClick={clearCart} className="text-destructive hover:text-destructive">
          <Trash2 className="mr-1.5 h-4 w-4" />
          Clear cart
        </Button>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Cart items */}
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-border/60 bg-card">
            <div className="divide-y divide-border/60 px-4 sm:px-6">
              {items.map((item) => (
                <CartItem
                  key={`${item.productId}-${item.sizeValue}`}
                  item={item}
                />
              ))}
            </div>
          </div>

          <div className="mt-4">
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/shop">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-4">
            <PriceSummary
              subtotal={subtotal}
              deliveryFee={deliveryFee}
              grandTotal={subtotal + deliveryFee}
            />

            <Button asChild size="lg" className="w-full rounded-full text-base">
              <Link href="/checkout">
                Proceed to Checkout
              </Link>
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              Secure checkout • Pay on delivery available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
