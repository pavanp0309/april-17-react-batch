import Rules from "./Rules";

// jsx syntax and Rules

// jsx-exppression
let h1Element=<h1>Hello Developers!</h1>;

// functional component
function App(){
  return(
    <div>
      <Rules/> {/*component call */}
     {/* {h1Element} jsx-expression must be wrapped inside the currly brace */}
     {/* 2+2
     <p> {2+2}</p> */}
    </div>
  )
}

export default App