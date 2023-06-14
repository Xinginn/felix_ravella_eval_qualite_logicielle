import { useState } from "react";
import "../assets/styles.css"
import { useGradeStore } from "../lib/store/grades";

export function Grade({ gradeData }) {
  
  if (!gradeData) {
    return <></>
  }


  const grades = useGradeStore(state => state.grades);
  const setGrades = useGradeStore(state => state.setGrades);
  const selectedGradeId = useGradeStore(state => state.selectedGradeId);

  const [value, setValue] = useState(gradeData.value);

  const [title, setTitle] = useState(gradeData.title);
  const [comment, setComment] = useState(gradeData.comment);



  function handleUpdate() {
    console.log("handle")
    let newList = [...grades]
    for(let i = 0; i < newList.length; i++) {
      if(newList[i].id === gradeData.id) {
        newList[i] = {
          id: gradeData.id,
          title,
          value,
          comment,
          date: gradeData.date
        }
      }
    }
    setGrades(newList);
    
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
      <h2>Editer une note</h2>
      <form class="block">
        <input type="text" placeholder="Titre" value={title} onInput={handleTitleInput} />
        <input type="number" placeholder="10" value={value} onInput={handleValueInput} />
        <textarea type="number" placeholder="Entrez un commentaire..." value={comment}  onInput={handleCommentInput}></textarea>
        <button type="button" onClick={() => handleUpdate()}>Update</button>
      </form>
    </>
  )
}

