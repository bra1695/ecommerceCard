// lib/store.ts
import { create } from "zustand";

interface CartState {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  quantity: 0,
  incrementQuantity: () => set((state) => ({ quantity: state.quantity + 1 })),
  decrementQuantity: () => 
    set((state) => ({ quantity: Math.max(0, state.quantity - 1) }))
}));