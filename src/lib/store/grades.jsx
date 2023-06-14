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
  setGrades: (value) => set(
    (state) => ({
      grades: value
    })
  ),
  selectedGradeId: null,
  selectGrade: (id) => set(
    (state) => ({
      selectedGradeId: id
    })
  )
}));
