import { Button } from "@mui/material"
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const countUp = () => {
    setCount(count + 1)
  }

  return (
    <>
      {count}
      <Button onClick={countUp}>
        ボタン
      </Button>
    </>
  )
}

export default App
