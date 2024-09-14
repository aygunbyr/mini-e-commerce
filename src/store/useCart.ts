import { create } from "zustand";
import Product from "../models/Product";

interface CartState {
  products: Product[];
  add: (product: Product) => void;
  remove: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}

export const useCart = create<CartState>((set) => ({
  products: [],
  add: (product: Product) =>
    set((state) => {
      const existingProduct = state.products.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        return {
          ...state,
          products: state.products.map((item) =>
            item.id === product.id
              ? { ...item, quantity: (item.quantity || 0) + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          products: [...state.products, { ...product, quantity: 1 }],
        };
      }
    }),
  remove: (id: number) =>
    set((state) => ({
      ...state,
      products: state.products.filter((product) => product.id !== id),
    })),
  increaseQuantity: (id: number) =>
    set((state) => ({
      ...state,
      products: state.products.map((product) =>
        product.id === id
          ? { ...product, quantity: (product.quantity || 0) + 1 }
          : product
      ),
    })),
  decreaseQuantity: (id: number) =>
    set((state) => ({
      ...state,
      products: state.products
        .map((product) =>
          product.id === id
            ? { ...product, quantity: (product.quantity || 0) - 1 }
            : product
        )
        .filter((product) => product.quantity && product.quantity > 0),
    })),
}));
