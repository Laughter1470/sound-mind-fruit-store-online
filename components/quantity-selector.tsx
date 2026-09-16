'use client';

import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  min?: number;
  max?: number;
  size?: 'sm' | 'md';
}

export function QuantitySelector({
  quantity,
  onQuantityChange,
  min = 1,
  max = 99,
  size = 'md',
}: QuantitySelectorProps) {
  const btnSize = size === 'sm' ? 'h-8 w-8' : 'h-10 w-10';
  const iconSize = size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4';

  return (
    <div className="inline-flex items-center rounded-lg border border-input bg-background">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className={`${btnSize} rounded-r-none`}
        onClick={() => onQuantityChange(Math.max(min, quantity - 1))}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
      >
        <Minus className={iconSize} />
      </Button>
      <span className="flex w-10 items-center justify-center text-sm font-medium tabular-nums">
        {quantity}
      </span>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className={`${btnSize} rounded-l-none`}
        onClick={() => onQuantityChange(Math.min(max, quantity + 1))}
        disabled={quantity >= max}
        aria-label="Increase quantity"
      >
        <Plus className={iconSize} />
      </Button>
    </div>
  );
}
