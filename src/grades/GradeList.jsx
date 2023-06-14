import { useGradeStore } from "../lib/store/grades"
import { Grade } from "./Grade";



export function GradeList() {
  const grades = useGradeStore(state => state.grades);
  const gradeCount = useGradeStore(state => state.gradeCount);
  const addGrade = useGradeStore(state => state.addGrade)

  function handleAddGrade() {
    const newGrade = { id: 0, value: 10, title: "un test", comment: "commentaire inspiré" }
    addGrade(newGrade)
  }

	function handleTitleInput() {

	}



  return (
    <>
      <div>
        gradelist
        <div>
          {grades.map((item, index) => (
            <Grade key={item.id} gradeData={item}></Grade>
          ))}
        </div>

        <div>
				  <input type="text" placeholder="Titre" onInput={handleTitleInput}/>
				  <input type="number" placeholder="10" />
				  <textarea type="number" placeholder="Entrez un commentaire..."></textarea>
					
        </div>

        <button onClick={() => handleAddGrade()}>Add</button>
      </div>
    </>
  )
}