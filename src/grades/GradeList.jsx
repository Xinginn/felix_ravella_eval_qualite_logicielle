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
        <h2>Liste des notes</h2>
        <div  class="block">
          {grades.map((item, index) => (
            <GradeShort key={item.id} gradeData={item}></GradeShort>
          ))}
        </div>

        <form class="block">
				  <input type="text" placeholder="Titre" value={title} onInput={handleTitleInput}/>
				  <input type="number" placeholder="10" value={value} onInput={handleValueInput} />
				  <textarea type="number" placeholder="Entrez un commentaire..." value={comment} onInput={handleCommentInput}></textarea>
          <button type="button" onClick={() => handleAddGrade()}>Add</button>
        </form>

      </div>
    </>
  )
}