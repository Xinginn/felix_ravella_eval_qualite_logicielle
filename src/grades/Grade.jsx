import "../assets/styles.css"

export function Grade({gradeData}) {

  const styles = {
    red:{
      backgroundColor: "red",
    }
  }


  function getGradeClass() {
    return "red"
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

