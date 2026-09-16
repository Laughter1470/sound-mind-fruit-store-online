'use client';

import { formatPrice } from '@/lib/format';

interface PriceSummaryProps {
  subtotal: number;
  deliveryFee: number;
  grandTotal?: number;
}

export function PriceSummary({ subtotal, deliveryFee, grandTotal }: PriceSummaryProps) {
  const total = grandTotal ?? subtotal + deliveryFee;
  const freeDeliveryThreshold = 25000;
  const remaining = Math.max(0, freeDeliveryThreshold - subtotal);
  const progress = Math.min(100, (subtotal / freeDeliveryThreshold) * 100);

  return (
    <div className="rounded-xl border border-border/60 bg-card p-5">
      <h3 className="font-serif text-lg font-bold text-foreground">Order Summary</h3>

      {/* Free delivery progress */}
      {subtotal > 0 && (
        <div className="mt-3 rounded-lg bg-primary/5 p-3">
          {remaining > 0 ? (
            <p className="text-xs text-muted-foreground">
              Add <span className="font-semibold text-primary">{formatPrice(remaining)}</span> more for free delivery!
            </p>
          ) : (
            <p className="text-xs font-medium text-primary">You qualify for free delivery!</p>
          )}
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-primary/15">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      <div className="mt-4 space-y-2.5 text-sm">
        <div className="flex justify-between text-muted-foreground">
          <span>Subtotal</span>
          <span className="font-medium text-foreground">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-muted-foreground">
          <span>Delivery fee</span>
          <span className="font-medium text-foreground">
            {deliveryFee === 0 ? 'Free' : formatPrice(deliveryFee)}
          </span>
        </div>
        <div className="border-t border-border/60 pt-2.5">
          <div className="flex justify-between">
            <span className="font-serif text-base font-bold text-foreground">Total</span>
            <span className="font-serif text-xl font-bold text-primary">{formatPrice(total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
