import { create } from "zustand";

export const useStore = create((set) => ({
  isLoading: true,
  setIsLoading: (value: boolean) => set({ isLoading: value }),
}));

// USAGE: const isLoading = useStore((state) => state.isLoading);
