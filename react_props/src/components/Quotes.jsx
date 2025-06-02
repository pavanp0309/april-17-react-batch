import React from 'react'
import {data} from "../data/quotesData"
const Quotes = () => {
    let  quotes=Object.values(data)
    console.log(quotes[0])
  return (
    <div>
      {
       quotes[0].map((ele)=><h1>child</h1>)
      }
    </div>
  )
}

export default Quotes
