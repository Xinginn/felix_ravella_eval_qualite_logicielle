import { describe, expect, it } from "vitest";
import { useGradeStore } from "../src/lib/store/grades";

describe('useGradeStore', () => {
  it('should be empty'), () => {
    const grades = useGradeStore(state => state.grades);
    expect(grades.length).toEqual(0);
  }
})