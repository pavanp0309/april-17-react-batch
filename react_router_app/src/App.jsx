import React from 'react'
import { Routes,Route  } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Services from './pages/Services'
import About from './pages/About'
import PageNotFound from './pages/PageNotFound'
import Navbar from './components/Navbar'
import "./App.css"

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/about' element={<About/>} />
        {/* error Handling  */}
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </>
  )
}

export default App
