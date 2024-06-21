import { useState } from 'react'

function App() {

  const [color, setColor] = useState({
    name: 'Choose Color',
    value: 'white'
  })

  // const [text,setText] = useState('')

  return (
    <>
      <div className='w-full h-screen min-h-screen grid place-content-center duration-200' style={{ backgroundColor: color.value }}>
        <div className='text-6xl text-center'>{color.name}</div>
      </div>

      <div className="fixed flex flex-wrap bg-white p-3 w-4/12 mx-auto rounded-3xl justify-center bottom-12 inset-x-0 px-2">
        <button
          onClick={() => setColor({ name: 'RED', value: 'red' })}
          type="button"
          className="rounded-2xl bg-red-600 px-3 py-2 me-5 text-md font-semibold text-white shadow-sm hover:bg-red/80 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-black"
          style={{ backgroundColor: 'red' }}
        >
          Red
        </button>

        <button
          onClick={() => setColor({ name: 'BLUE', value: 'blue' })}
          type="button"
          className="rounded-2xl bg-blue-600 px-3 py-2 me-5 text-md font-semibold text-white shadow-sm hover:bg-blue/80 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-black"
          style={{ backgroundColor: 'blue' }}
        >
          Blue
        </button>

        <button
          onClick={() => setColor({ name: 'GREEN', value: 'green' })}
          type="button"
          className="rounded-2xl bg-green-600 px-3 py-2 me-5 text-md font-semibold text-white shadow-sm hover:bg-green/80 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-black"
          style={{ backgroundColor: 'green' }}
        >
          Green
        </button>
      </div>
    </>
  )
}

export default App
