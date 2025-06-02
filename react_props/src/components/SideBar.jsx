import React from 'react'
import Profile from './Profile'
import UserCard from './UserCard'

const SideBar = () => {
  return (
<>
 <Profile name="raju"/>
 <Profile name="ravi"><button>edit</button></Profile>
 <Profile name="ramu"><button className='btn btn-primary'>create</button></Profile>
 <Profile name="ramu"><UserCard/></Profile>
</>
)
}

export default SideBar
