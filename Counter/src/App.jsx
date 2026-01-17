import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  
  const addValue = () => {
   
    setCount(count = count + 1)
    // setCount(count = count + 1)
    
  }

  const removeValue = () => {
    setCount(count = Math.max(0, count - 1))
  }

  const reset = () => {
    setCount(count = 0)
  }

  return (
     <div className="counter-container">
    <h1>Counter value: {count}</h1>

    <div className="counter-buttons">
      <button onClick={addValue}>Increase</button>
      <button onClick={removeValue}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  </div>
  )
}

export default App
