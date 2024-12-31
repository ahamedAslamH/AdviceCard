import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Advice from './components/Advice'

function App() {
  const [count,setCount] = useState (0)
  const counter = () => {
       setCount(count + 1) 
        }
        console.log(count)
        console.log(setCount)
  return (
     
    <>
     <Advice />
    </>
  )
}

export default App
