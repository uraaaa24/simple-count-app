import { Box, Button, Paper, Typography } from "@mui/material"
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const countUp = () => {
    setCount(count + 1)
  }

  return (
    <Paper sx={{ p: 10 }}>
      <Box bgcolor={"red"} sx={{ p: 2 }}>
        <Typography variant="body1" >
          {count}
        </Typography>
        <Button variant="contained" onClick={countUp}>
          ボタン
        </Button>
      </Box>
    </Paper>
  )
}

export default App
