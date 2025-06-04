import React from 'react'
import Upcomingdata from '../data/batches'
import { Link } from 'react-router-dom'

const UpcomingBatches = () => {
  return (
    <div className='container my-3'>
      <div className="row">
        {
            Upcomingdata.map((course,index)=>(
            <div className="col-sm-12 col-md-3 col-lg-3" key={course.batchcode}>
            <div className="card border border-success shadow p-3">
                {/* when user clicks it naviagets to particular batchdetails pages of batch clicked */}
            <Link to={`/upcoming-batches/${course.batchcode}`} className='nav-link'>
                <img src={course.imageUrl} alt=""  className='card-img-top img-fluid' width={"100%"} style={{height:"150px"}}/>
                <div className="card-body">
                    <h3 className='card-title'>{course.name}</h3>
                    <p className='card-text text-danger fw-bold'>{course.startdate}</p>
                </div>
            </Link>
            </div>
            </div>

            ))
        }
      </div>
    </div>
  )
}

export default UpcomingBatches
