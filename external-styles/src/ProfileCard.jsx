import React from 'react'

const ProfileCard = () => {
  return (
  <div className="card shadow mx-auto my-4" style={{width:"28rem"}} >
  <img src="./src/assets/1.jpg" className="card-img-top" alt="..." width={"100%"} height={"100px"}/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  )
}

export default ProfileCard
