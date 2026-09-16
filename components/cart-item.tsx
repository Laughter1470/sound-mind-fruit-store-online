'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Trash2 } from 'lucide-react';
import type { CartItemData } from '@/lib/types';
import { QuantitySelector } from './quantity-selector';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/cart-context';
import { formatPrice } from '@/lib/format';

interface CartItemProps {
  item: CartItemData;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-3 py-4 sm:gap-4">
      {/* Image */}
      <Link
        href={`/product/${item.slug}`}
        className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-muted sm:h-24 sm:w-24"
      >
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </Link>

      {/* Details */}
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <Link href={`/product/${item.slug}`} className="font-medium text-foreground hover:text-primary">
              {item.name}
            </Link>
            <p className="text-xs text-muted-foreground">{item.sizeLabel}</p>
          </div>
          <button
            onClick={() => removeFromCart(item.productId, item.sizeValue)}
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
            aria-label={`Remove ${item.name} from cart`}
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-auto flex items-center justify-between gap-2 pt-2">
          <QuantitySelector
            quantity={item.quantity}
            onQuantityChange={(q) => updateQuantity(item.productId, item.sizeValue, q)}
            size="sm"
          />
          <div className="text-right">
            <p className="text-xs text-muted-foreground">
              {formatPrice(item.unitPrice)} each
            </p>
            <p className="font-serif font-bold text-primary">
              {formatPrice(item.unitPrice * item.quantity)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
