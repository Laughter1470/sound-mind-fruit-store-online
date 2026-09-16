'use client';

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type ReactNode,
} from 'react';
import type { CartItemData } from './types';

interface CartState {
  items: CartItemData[];
}

type CartAction =
  | { type: 'ADD_ITEM'; item: CartItemData }
  | { type: 'REMOVE_ITEM'; productId: string; sizeValue: string }
  | { type: 'UPDATE_QUANTITY'; productId: string; sizeValue: string; quantity: number }
  | { type: 'CLEAR' }
  | { type: 'INIT'; items: CartItemData[] };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'INIT':
      return { items: action.items };
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (i) =>
          i.productId === action.item.productId &&
          i.sizeValue === action.item.sizeValue
      );
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.productId === action.item.productId &&
            i.sizeValue === action.item.sizeValue
              ? { ...i, quantity: i.quantity + action.item.quantity }
              : i
          ),
        };
      }
      return { items: [...state.items, action.item] };
    }
    case 'REMOVE_ITEM':
      return {
        items: state.items.filter(
          (i) =>
            !(i.productId === action.productId && i.sizeValue === action.sizeValue)
        ),
      };
    case 'UPDATE_QUANTITY':
      return {
        items: state.items.map((i) =>
          i.productId === action.productId && i.sizeValue === action.sizeValue
            ? { ...i, quantity: Math.max(1, action.quantity) }
            : i
        ),
      };
    case 'CLEAR':
      return { items: [] };
    default:
      return state;
  }
}

interface CartContextValue {
  items: CartItemData[];
  addToCart: (item: CartItemData) => void;
  removeFromCart: (productId: string, sizeValue: string) => void;
  updateQuantity: (productId: string, sizeValue: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = 'natures-harvest-cart';

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        dispatch({ type: 'INIT', items: JSON.parse(stored) });
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch {
      // ignore
    }
  }, [state.items]);

  const value: CartContextValue = {
    items: state.items,
    addToCart: (item) => dispatch({ type: 'ADD_ITEM', item }),
    removeFromCart: (productId, sizeValue) =>
      dispatch({ type: 'REMOVE_ITEM', productId, sizeValue }),
    updateQuantity: (productId, sizeValue, quantity) =>
      dispatch({ type: 'UPDATE_QUANTITY', productId, sizeValue, quantity }),
    clearCart: () => dispatch({ type: 'CLEAR' }),
    totalItems: state.items.reduce((sum, i) => sum + i.quantity, 0),
    subtotal: state.items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
