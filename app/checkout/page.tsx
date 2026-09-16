'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { ArrowLeft, CheckCircle2, ShieldCheck, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/lib/cart-context';
import { formatPrice } from '@/lib/format';

const FREE_DELIVERY_THRESHOLD = 25000;
const STANDARD_DELIVERY_FEE = 2000;

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);
  const [orderRef, setOrderRef] = useState('');

  const deliveryFee = useMemo(() => {
    if (subtotal === 0) return 0;
    return subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : STANDARD_DELIVERY_FEE;
  }, [subtotal]);

  const total = subtotal + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'NH-' + Date.now().toString().slice(-8);
    setOrderRef(ref);
    setPlaced(true);
    clearCart();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (placed) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center rounded-2xl border border-border/60 bg-card p-8 text-center shadow-sm sm:p-12">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2 className="h-10 w-10 text-primary" />
          </div>
          <h1 className="mt-6 font-serif text-2xl font-bold text-foreground sm:text-3xl">
            Order Placed Successfully!
          </h1>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            Thank you for your order. We've received your details and will contact you
            shortly to confirm your delivery and arrange payment.
          </p>
          <div className="mt-6 rounded-xl bg-secondary/50 p-4 px-6">
            <p className="text-xs text-muted-foreground">Your Order Reference</p>
            <p className="font-serif text-xl font-bold text-primary">{orderRef}</p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/shop">Continue Shopping</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-20 text-center">
          <h1 className="font-serif text-2xl font-bold text-foreground">
            Your cart is empty
          </h1>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Add some products to your cart before proceeding to checkout.
          </p>
          <Button asChild size="lg" className="mt-6 rounded-full">
            <Link href="/shop">Browse Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-6">
        <Button asChild variant="ghost" size="sm" className="mb-2">
          <Link href="/cart">
            <ArrowLeft className="mr-1.5 h-4 w-4" />
            Back to cart
          </Link>
        </Button>
        <h1 className="font-serif text-3xl font-bold text-foreground">Checkout</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Complete your details to place your order
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-border/60 bg-card p-5 sm:p-6">
              <h2 className="font-serif text-lg font-bold text-foreground">
                Delivery Information
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Please provide accurate details for smooth delivery.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input id="fullName" name="fullName" required placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+234 803 123 4567"
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="address">Delivery Address *</Label>
                  <Textarea
                    id="address"
                    name="address"
                    required
                    placeholder="House number, street name, area/estate"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input id="city" name="city" required placeholder="Lagos" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State *</Label>
                  <Input id="state" name="state" required placeholder="Lagos State" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="instructions">Additional Delivery Instructions</Label>
                  <Textarea
                    id="instructions"
                    name="instructions"
                    placeholder="Landmark, preferred delivery time, gate code, etc. (optional)"
                    rows={2}
                  />
                </div>
              </div>
            </div>

            {/* Payment info placeholder */}
            <div className="mt-4 rounded-xl border border-border/60 bg-secondary/30 p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">Payment Information</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Payment is collected on delivery or via Paystack after order confirmation.
                    You'll receive payment instructions once your order is confirmed. Pay on
                    delivery is available for all orders.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="rounded-xl border border-border/60 bg-card p-5">
                <h3 className="font-serif text-lg font-bold text-foreground">Order Summary</h3>

                {/* Items */}
                <div className="mt-4 max-h-64 space-y-3 overflow-y-auto">
                  {items.map((item) => (
                    <div
                      key={`${item.productId}-${item.sizeValue}`}
                      className="flex gap-3"
                    >
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-muted">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1 text-sm">
                        <p className="font-medium text-foreground line-clamp-1">{item.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.sizeLabel} × {item.quantity}
                        </p>
                        <p className="mt-0.5 font-medium text-primary">
                          {formatPrice(item.unitPrice * item.quantity)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="space-y-2.5 text-sm">
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
                  <Separator />
                  <div className="flex justify-between">
                    <span className="font-serif text-base font-bold text-foreground">Total</span>
                    <span className="font-serif text-xl font-bold text-primary">
                      {formatPrice(total)}
                    </span>
                  </div>
                </div>

                <Button type="submit" size="lg" className="mt-5 w-full rounded-full text-base">
                  Place Order
                </Button>

                <div className="mt-3 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Truck className="h-3.5 w-3.5" />
                    Fast delivery
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Secure checkout
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
