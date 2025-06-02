import React from 'react'

const PricingCard = (props) => {
    console.log(props)
    let {type,price,credits,btntext,plan=[]}=props
    console.log(plan)
  return (
    <div className="col-sm-12 col-md-3 col-lg-3">
    <div className={`card shadow`}>
       <div className="card-header">
        <span>⭐ {type}</span>
        <h3>{price}</h3>
        <span>forever</span>
        <p>credits per month {credits}{credits>1200?"+":""}</p>
        <button className='btn btn-primary'>{btntext||"select a plan"}</button>
       </div>
       <div className="card-body">
        <h2>This plan includes:</h2>
        <ul>
           {
            plan.map((ele)=><li>{ele}</li>)
           }
            
       
        </ul>
      
       </div>
    </div>
    </div>
  )
}

export default PricingCard
