import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

let info = {
  name:"faizan",
  address:"nai bazar purwa"
}

function App() {
  return (
    <>
      <h1 className='bg-green-400 text-black rounded-md p-3 b-5'>Tailwin React</h1>
    <Card name="Faizan" textBtn="click me" /> {/* Card component with props */}
    <Card name="Nafees" textBtn="visit me"/> {/* Another Card component with different props */}
    </>
  )
}

export default App
