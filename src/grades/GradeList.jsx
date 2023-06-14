import { useGradeSore } from "../lib/store/grades"



export function GradeList() {
  const grades = useGradeSore((state) => state.grades);
  console.log(grades)
  //addGrade(newGrade);
  /*
  function handleAddGrade() {
    const newGrade: Grade = {value: 10, title: "un test", comment: "commentaire inspiré"}
    addGrade(newGrade)
  }
  */


  return (
    <>
      <div>
        gradelist
        <div>
            {grades.map((item,index) => (
              <div key={index}>{grades.value}</div>
            ))}
        </div>


      </div>
    </>
  )
}