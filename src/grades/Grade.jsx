import "../assets/styles.css"

export function Grade({gradeData}) {

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

  return (
    <>
      <div className={getGradeClass()}>
        <b>{gradeData.title}:</b><span >{gradeData.value}</span>
        <i>"{gradeData.comment}"</i>
      </div>
    </>
  )
}

