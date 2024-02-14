import React from 'react'
import Home from './pages/Home'
import Play from './pages/Play'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>


<Routes>
    <Route path='/' element=<Home/> />
    <Route path='/play' element=<Play/> />
</Routes>
</BrowserRouter>
    </>
  )
}

export default App