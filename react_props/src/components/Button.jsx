import React from 'react'

// child component
const Button = (props) => {
    console.log("props:",props) // receives the date in the object format

  return (
    <button className={`btn ${props.className}`}>{props.icon}{props.t || "inbox"}</button>
  )
}

export default Button
