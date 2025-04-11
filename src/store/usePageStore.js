import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const pageSlice = (set) => ({
  selectedProduct: null,
  setSelectedProduct: (selectedProduct) => set({ selectedProduct }),
});

const store = (set) => ({
  ...pageSlice(set),
});

export const usePageStore = create(immer(store));
