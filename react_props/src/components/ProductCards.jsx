import React from 'react'
import ProductCard from './ProductCard'

const ProductCards = () => {

  return (
    <div>
      <ProductCard name="iphone" spec={{ram:"2gb",rom:"gb",CPU_Model:"snapdragon"}}/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
  )
}

export default ProductCards
