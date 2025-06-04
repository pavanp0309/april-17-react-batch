import React from 'react'
import Upcomingdata from '../data/batches'
import { useParams } from 'react-router-dom'

const BatchCard = () => {
    // accessing the url 
     let url=useParams()
     console.log(url.batchid)
    // displaying the details of a particular batch of the user cliked if it existes
    let batchdetails=Upcomingdata.find((batch)=>batch.batchcode == url.batchid)
    console.log(batchdetails)
  return (
    <div className='card mx-auto py-5 my-3 shadow'>
        <img src={batchdetails?.imageUrl} alt="" style={{width:"100%",height:"150px"}} />
        <h1>Name:{batchdetails.name}</h1>
        <p>Trainer:{batchdetails.trainer}</p>
        <p>startDate:{batchdetails.startdate}</p>
        <p>Internship:{batchdetails.internship?"available":"no"}</p>
        <p>Time:{batchdetails.time}</p>
        <p>Discount:{batchdetails.discount}</p>
      
    </div>
  )
}

export default BatchCard
