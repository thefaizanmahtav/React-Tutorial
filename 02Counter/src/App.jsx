import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter, setCounter] = useState(0) // useState are containing 2 values as array form [] 1st (varable name) 2nd method (function)

  function addValue() {
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }

  function removeValue() {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Faizan Ahmad</h1>
      <h2>Counte: {counter}</h2>
      <button onClick={addValue}>addValue {counter}</button>
      <br />
      <button onClick={removeValue}>removeValue {counter}</button>
    </>
  )
}

export default App
