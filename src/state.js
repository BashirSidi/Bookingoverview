import create from "zustand";

const useStore = create((set) => ({
  mode: false,
  setMode: () => set((state) => ({ mode: !state.mode })),
}));

export default useStore;
