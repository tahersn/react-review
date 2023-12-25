import { useState } from 'react'
import './App.css'
import Home from './views/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-red-500'>
        <Home/>
        hello world
      </div>
        
    </>
  )
}

export default App
