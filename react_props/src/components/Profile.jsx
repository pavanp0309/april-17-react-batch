import React from 'react'

const Profile = (props) => {
    // console.log(props)
    const {name,children}=props
    // console.log(children)
  return (
    <div>
    {name}
      {children }
    </div>
  )
}

export default Profile
