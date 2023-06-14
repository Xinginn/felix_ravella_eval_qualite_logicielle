import { useGradeStore } from "../lib/store/grades"
import { GradeShort } from "./GradeShort";
import { useState } from 'react'



export function GradeList() {
  const grades = useGradeStore(state => state.grades);
  const gradeCount = useGradeStore(state => state.gradeCount);
  const addGrade = useGradeStore(state => state.addGrade)
	
  const [value,setValue] = useState(0);
	const [title,setTitle] = useState('');
  const [comment,setComment] = useState('');

  function handleAddGrade() {
    const newDate = new Date().toLocaleString("fr-FR")
    addGrade({ id: gradeCount, value, title, comment, date: newDate})
    setTitle('');
    setValue(0);
    setComment('');
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
            <GradeShort key={item.id} gradeData={item}></GradeShort>
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