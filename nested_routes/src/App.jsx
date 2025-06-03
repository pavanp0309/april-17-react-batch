import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import PageNotFound from './pages/PageNotFound'
import NavBar from './components/NavBar'
import CourseCards from './CourseCards'
import Internships from './Internships'
import Hackathon from './Hackathon'

const App = () => {
  return (
    <>
    <NavBar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    {/* nested Routing */}
    {/* url: localhost:5173/courses/course-list */}
    <Route path='/courses' element={<Courses/>}>
        <Route index   element={<Internships/>}/>
        <Route path='course-list' element={<CourseCards/>}/>
        <Route path='internships' element={<Internships/>}/>
        <Route path='Hackathons' element={<Hackathon/>}/>
    </Route>

 {/* error Handling */}
    <Route path='*' element={<PageNotFound/>}/>
   </Routes>
  </>
  )
}

export default App
