import { useEffect, useState } from 'react'
import './App.css'
import useTheme, { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {

  const [themeMod, setTheemMod] = useState('light')

  const lightTheme = () => {
    setTheemMod('light')
  }

  const darkTheme = () => {
    setTheemMod('dark')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMod)
  }, [themeMod])

  return (
    <ThemeProvider value={{ themeMod, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
