import { create } from "zustand";

export const useGradeSore = create((set) => ({
  grades: [],
}));