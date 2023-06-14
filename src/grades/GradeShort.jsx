import "../assets/styles.css"
import { useGradeStore } from "../lib/store/grades";

export function GradeShort({gradeData}) {
  const selectedGradeId = useGradeStore(state => state.selectedGradeId);
  const selectGrade = useGradeStore(state => state.selectGrade)



  function handleSelect() {
    selectGrade(gradeData.id)
  }

  function getGradeClass() {
    if(gradeData.value < 8){
      return "red";
    } else if (gradeData.value < 10) {
      return "orange";
    } else if (gradeData.value < 13) {
      return "yellow";
    } else {
      return "green";
    }
  }

  function handelSelect() {

  }

  return (
    <>
      <div className={getGradeClass()} onClick={handleSelect}>
        <b>{gradeData.title}:</b><span >{gradeData.value}</span>
        <i>"{(gradeData.comment).substring(0, 10)}"</i><br/>
        {gradeData.date}
      </div>
    </>
  )
}

