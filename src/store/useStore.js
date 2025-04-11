import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const storageKeys = {
  appStorage: "appStorage",
};

const rehydrateStorageSlice = (set) => ({
  _hasHydrated: false,
  setHasHydrated: (state) => set({ _hasHydrated: state }),
});

const preOrderSlice = (set) => ({
  preOrderForm: {},
  setPreOrderForm: (preOrderForm) => set({ preOrderForm }),
});

const store = (set) => ({
  ...rehydrateStorageSlice(set),
  ...preOrderSlice(set),
});

export const useStore = create(
  persist(immer(store), {
    name: storageKeys.appStorage,
    storage: createJSONStorage(() => localStorage),
    onRehydrateStorage: () => (state) => {
      state.setHasHydrated(true);
    },
  })
);
