import { create } from "zustand";
import { IProduct } from "../data/products";

interface CartStoreProps {
  cartItems: IProduct[];
  addItemToCart: (item: IProduct) => void;
  removeItemFromCart: (itemIdToRemove: number) => void;
}

export const useCartStore = create<CartStoreProps>()((set) => ({
  cartItems: [],
  addItemToCart: (item) => set((state) => ({ cartItems: [...state.cartItems, item] })),
  removeItemFromCart: (itemIdToRemove) =>
    set((state) => ({ cartItems: state.cartItems.filter((item) => item.id !== itemIdToRemove) })),
}));
