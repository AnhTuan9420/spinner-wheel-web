import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const productSlice = (set) => ({
  selectedProduct: null,
  setSelectedProduct: (selectedProduct) => set({ selectedProduct }),
  prodInScroll: 'iphone-15-pro-max',
  setProdInScroll: (prodInScroll) => set({ prodInScroll }),
});

const store = (set) => ({
  ...productSlice(set),
});

export const useStoreProduct = create(immer(store));
