import { useState } from 'react'
import './App.css'
import Main from './views/Main'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './views/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} >
            <Route path="" element={<Home/>} />
            {/* <Route path="/users" element={<Users/>} /> */}
          </Route>
          
        </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App
