import React from 'react'

// child components
const ProductCard = (props) => {
  console.log(props) //{name: 'mobile', spec: {…}}
  // const {name="",spec={}}=props

  // to render objects destructure the object
  // const {ram="hello"}=spec
  // console.log(ram)

  // 2 accessing with dot noation with optianl chaining 
  // const {name,spec}=props

  // 3.converting the objects in array and mapping it 
  const {name,spec={}}=props
   let a=Object.values(spec)
   console.log(a)

  return (
    <div>
      <h1>{name }</h1>
      {/* <p>{ram}</p> */}
      {/* 2nd way */}
      {/* <p>{spec?.ram || "alternative for ram"}</p> */}
      <p>{a.map((ele ,index)=><span key={index}>{ele} <br/></span>)}</p>
    </div>
  )
}

export default ProductCard
