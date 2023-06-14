import { useState } from 'react'

import './App.css'
import { Grade } from './grades/Grade'
import { GradeList } from './grades/GradeList'
import { useGradeStore } from './lib/store/grades'

function App() {
  const [count, setCount] = useState(0)
  const grades = useGradeStore(state => state.grades);

  const selectedGradeId = useGradeStore((state) => state.selectedGradeId)
  const selectedGrade = grades[selectedGradeId]

  return (
    <>
      <GradeList ></GradeList>

      <Grade gradeData={selectedGrade}></Grade>
    </>
  )
}

export default App
