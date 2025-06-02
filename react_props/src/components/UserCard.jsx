import React from 'react'

const UserCard = ({address={},email,username,password}) => {
    const {city}=address
    
  return (
    <div className="col-sm-12 col-md-4 col-lg-4">
    <div className='card border border-danger p-3 shadow my-2'>
       <h3 className='card-title'>UserName:{username}</h3>
       <p className='card-text'>Email:{email}</p>
       <p className='card-text'>Password:{password}</p>
       <p className='card-text'>city:{city}</p>
    </div>
    </div>
  )
}

export default UserCard
