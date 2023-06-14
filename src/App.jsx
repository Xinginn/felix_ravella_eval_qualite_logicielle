import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GradeList } from './grades/GradeList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GradeList></GradeList>
    </>
  )
}

export default App
