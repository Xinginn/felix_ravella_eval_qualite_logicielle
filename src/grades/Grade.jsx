import "../assets/styles.css"
import { useGradeStore } from "../lib/store/grades";

export function Grade() {
  const grades = useGradeStore(state => state.grades);
  const selectedGradeId = useGradeStore(state => state.selectedGradeId);

  if (selectedGradeId != null) {
    return (
      <>
        <div>
          {grades[selectedGradeId].title}
        </div>
      </>
    )
  } else {
    return (<></>)
  }
}

