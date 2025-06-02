import React from 'react'

const Rules = () => {
    let age=10
    let a;
    if(true){
      a=  <h1>{"hello"}</h1>
    }
  return (
   <div> {/*single parent  for all jsx expression*/}
    <>  {/* fragements : avoids extra space in the dom */}
    <React.Fragment>{/* fragements : avoids extra space in the dom */}
        <h1>RULES FOR JSX</h1>
         <h1>All atributes in jsx must written in camel case</h1>
         <p>class--className ,for--htmlFor checked--defaultChecked onclick-onClick etc..</p>
         {/* example */}
         {/* Invalid DOM property `class`. Did you mean `className` */}
         {/* wrong way */}
         {/* <p class=''>atributes example</p> */}
         {/* correct way */}
         <p className=''>atributes example</p>
         {/* while writting the style attribute the values must an object fromat */}
         {/* Uncaught Error: The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX. */}
        {/* wrong way */}
         {/* <p style=''>Style attribute example</p> */}
         {/* correct-way */}
         <p style={{padding:"2px",color:"red"}} width='10px' height='10px'>Style attribute example</p>
         {/* all jsx elements must be self closed */}
         {/* wrong way */}
         {/* <img src="" alt="" > */}
         {/* <input type="text" > */}
         {/* correct-way */}
         <img src="www.img" alt="no-img" />
         <input type="text" />
         {/* jsx can be wriiten inside the loops and conditional statement but loops and conditional statement cant be written inside jsx */}
         {/* not possible */}
         {/* his could be due to syntax errors or importing non-existent module */}
         <h1>
            {/* wrong-way */}
            {/* {
                if(){}
            } */}
         </h1>
         {a}
         {/* correct way of writting if-else condition */}
         <p>{(age>10)?"hello":"bye"}</p>
    </React.Fragment>
    </>
   </div>
   
  )
}

export default Rules
