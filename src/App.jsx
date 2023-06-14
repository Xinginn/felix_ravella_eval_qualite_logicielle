import { useState } from 'react'

import './App.css'
import { GradeList } from './grades/GradeList'
import { useGradeStore } from './lib/store/grades'

function App() {
  const [count, setCount] = useState(0)

  const selectedGradeId = useGradeStore((state) => state.selectedGradeId)

  return (
    <>
      <GradeList></GradeList>

      {selectedGradeId}
    </>
  )
}

export default App
