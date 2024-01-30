import { Button, Paper, Typography } from "@mui/material"
import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const countUp = useCallback(() => {
    setCount(count + 1)
  }, [count])

  const countDown = useCallback(() => {
    if (count > 0) {
      setCount(count - 1)
    }
  }, [count])

  return (
    <Paper sx={{ p: 10 }}>
      <Typography variant="body1" >
        {count}
      </Typography>
      <Button variant="contained" onClick={countUp}>
          カウントアップボタン
      </Button>
      <Button variant="contained" onClick={countDown}>
          カウントダウンボタン
      </Button>
    </Paper>
  )
}

export default App
