// named imports 
// import { a,b,c } from "./card.js";
// import { t } from "./card.js"; 


// console.log(a)
// console.log(b)
// console.log(c)
// console.log(t) //Uncaught SyntaxError: The requested module './card.js' does not provide an export named 't' (at 



// Default imports : can be import with name 
// import rrr from "./card.js"
// console.log(rrr)


// import the card function form card2
// import { Card } from "./card2.js"
// import C from "./card2.js"

// combination both default and named 
// import C ,{Card} from "./card2.js"
// // calling the function
// var res=Card() // undefined *undefined=nan
// var res1=Card(10,20) //
// console.log(res)
// console.log(res1)
// console.log(C(1,6))



// Import it has an object format 

// all formats 
// nameed import
// import { person,Greet,userdata } from "./app";

// // defualt imports (with same or any name) 
// import d from  "./app.js"

// as an object import 
import * as userinfo from "./app.js"

console.log(userinfo)//Module {…}
console.log(userinfo.a)//es6 module exmaple
console.log(userinfo.person)//{name: 'ramu'}
console.log(userinfo.person.name)

// default value in object format
console.log(userinfo.default()) //{data: {…}, userinfo: Array(6)}


import { datavalue } from "./app.js"
console.log(datavalue)