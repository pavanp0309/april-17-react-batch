import React from 'react'
import Button from './Button'

// parent
const Gmail = () => {
  return (
    <div className='d-flex flex-column w-25 justify-content-between '>
        {/* component call */}
     
      <Button t={"inbox"} className="bg-secondary my-2 " icon="⭐"/>
      <Button t={"starred"} className="bg-danger mx-2 my-2" icon="⭐"/>
      <Button t={"snoozed"} className="bg-success mx-2 my-2" icon="⏲"/>
      <Button t={"sent"} className="bg-info my-2" icon="📩"/>
      <Button t={"draft"} className="bg-warning mx-2 my-2" icon="🥛"/>
      <Button t={"trash"} className="bg-danger my-2" icon="🔸"/>
      
    </div>
  )
}

export default Gmail
