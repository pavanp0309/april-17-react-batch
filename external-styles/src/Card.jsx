

const Card = () => {
// inline styles
let card={
    border:"2px solid red",
    width:"300px",
    height:"420px",
    padding:".68rem",
    background:"lightblue",
    boxSizing:"border-box"

}
let imgstyle={
    width:"100%",
    height:"200px"
}
let btnstyle={
      padding:"7px 15px",
      display:"inline-block",
      borderRadius:"15px",
      outline:"none",
      border:"2px solid green",
      textTransform:"uppercase",
      marginBottom:"5px"
}

  return (
    <div className='card' style={card}>
    <img src="./src/assets/1.jpg" alt=""  className='card-img-top' style={imgstyle}/>
      <div className="card-body">
         <h4 className='card-title' style={{fontSize:"30px"}}>shoes</h4>
         <p className='card-text'>availabe with 50% offer</p>
         <button className="btn btn-danger" style={btnstyle}>addtocart</button>
      </div>
    </div>
  )
}

export default Card
