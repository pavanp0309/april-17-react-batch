import React from 'react'
import PricingCard from './PricingCard'

const PricingSection = () => {
  return (
    <div>
    <div className="row">
      <PricingCard type="free" price={"free"} credits={50} plan={["1 website","3 users","Unlimited robots","Full platform access"]}/>
      <PricingCard type="personal" price={"$19"} credits={1000}/>
      <PricingCard type="proffessional"  price={"$69"} credits={1200}/>
      <PricingCard type="premium"  price={"$500"} credits={12000} btntext="bookacall"/>
    </div>
   
    </div>
  )
}

export default PricingSection
