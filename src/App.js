import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Whitepaper from './Pages/Whitepaper'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='white-paper' element={<Whitepaper />} />
    </Routes>
    </BrowserRouter>

  )
}

export default App