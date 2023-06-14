import { useState } from 'react'

import './App.css'
import { Grade } from './grades/Grade'
import { GradeList } from './grades/GradeList'
import { useGradeStore } from './lib/store/grades'

function App() {
  const [count, setCount] = useState(0)

  const selectedGradeId = useGradeStore((state) => state.selectedGradeId)

  return (
    <>
      <GradeList></GradeList>

      <Grade></Grade>
    </>
  )
}

export default App
