import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter, setCounter] = useState(0) // useState are containing 2 values as array form [] 1st (varable name) 2nd method (function)

  function addValue() {
    if (counter < 20) {
      // setCounter(counter + 1)

      // in here waht is the value of thees counter value : its all of thees will give us original value 
      // without any increment because useState not send changes in UI or variable singlely this is send
      // changes in a batches.

      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)

      // if want to change thees counter we can use callbacks . we access privious value and incriment them such as
      setCounter((PrivCounter) => PrivCounter + 1) // privCounter give here privious state of the value
      setCounter((PrivCounter) => PrivCounter + 1)
      setCounter((PrivCounter) => PrivCounter + 1)
      setCounter((PrivCounter) => PrivCounter + 1)
      // in here setCounter always containing callBacks
    }
  }

  function removeValue() {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Faizan Counter</h1>
      <h2>Counte: {counter}</h2>
      <button onClick={addValue}>addValue {counter}</button>
      <br />
      <button onClick={removeValue}>removeValue {counter}</button>
    </>
  )
}

export default App
