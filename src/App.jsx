import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Poets from './pages/Poets'
import Favorites from './pages/Favorites'
import WritePoem from './pages/WritePoem'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/poets" element={<Poets />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/write" element={<WritePoem />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
