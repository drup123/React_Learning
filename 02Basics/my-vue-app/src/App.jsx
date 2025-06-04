import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const removeValue = () => {
    setCount(count-1)
  }

  const addvalue = () => {
    setCount(count+1)
  }

  return (
    <>
    <h1>Let's Learn Hooks</h1>
   <h3>Value is {count}</h3>

   <button onClick={addvalue}>Add value {count}</button>
   <button onClick={removeValue}>Remove value {count}</button>
    </>
   
  )
}

export default App
