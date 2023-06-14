import { create } from "zustand";

export const useGradeStore = create((set) => ({
  gradeCount: 0,
  grades: [],
  addGrade: (newGrade) => set(
    (state) => ({
      grades: [...state.grades,newGrade],
      gradeCount: state.gradeCount +1,
      })
  ),
}));
