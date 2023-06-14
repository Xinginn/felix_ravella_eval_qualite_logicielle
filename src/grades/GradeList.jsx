import { useGradeStore } from "../lib/store/grades"
import { Grade } from "./Grade";
import { useState } from 'react'



export function GradeList() {
  const grades = useGradeStore(state => state.grades);
  const gradeCount = useGradeStore(state => state.gradeCount);
  const addGrade = useGradeStore(state => state.addGrade)
	
  const [value,setValue] = useState(0);
	const [title,setTitle] = useState('');
  const [comment,setComment] = useState('');

  function handleAddGrade() {
    addGrade({ id: gradeCount, value, title, comment })
	}

  function handleTitleInput(event) {
    setTitle(event.target.value)
  }

  function handleValueInput(event) {
    setValue(parseInt(event.target.value))
    
  }

  function handleCommentInput(event) {
    setComment(event.target.value)
    
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
				  <input type="number" placeholder="10" onInput={handleValueInput} />
				  <textarea type="number" placeholder="Entrez un commentaire..." onInput={handleCommentInput}></textarea>
					
        </div>

        <button onClick={() => handleAddGrade()}>Add</button>
      </div>
    </>
  )
}