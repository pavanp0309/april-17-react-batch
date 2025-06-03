import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const Courses = () => {
  return (
    <div>
     {/* naviagtion for courses internships hackthons */}
<ul class="nav justify-content-center">
  <li class="nav-item">
    <Link class="nav-link" to={'/courses/course-list'}>Courses</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to={'/courses/internships'}>Internships</Link>
  </li>
  <li class="nav-item">
   <Link class="nav-link" to={'/courses/Hackathons'}>Hackthons</Link>
  </li>
</ul>

      <Outlet/>
    </div>
  )
}

export default Courses
