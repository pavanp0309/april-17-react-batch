console.log("hi everyone these variable class")

// Declaration
// RULES : for decalaration of variabel
1. 
var a;
// An identifier or keyword cannot immediately follow a numeric literal
// var 5a; //syntax error 
// 2.
// var full name //wrongway
// var full_name //wrightway
// var fullName //wrightway
// 3.
// 'for' is not allowed as a variable declaration name.
// var for  ////wrongway

// Difference  b/w var let const

// decalartion 
// var a;
// let b;
// // const c; //SyntaxError: Missing initializer in const declaration
// const c=10 

// var and let can be decalared but const varaibled must be initialixed with value at time of decalare 

// REDECLARTION 
var r1;
var r1;
let r2;
// let r2;// SyntaxError: Identifier 'r2' has already been declared
const r3=10
// const r3=10 //Identifier 'r3' has already been declared

//  only var can be REDECLARed , const and let keyword cant be re-decalared in the same scope 


// scope 

// global scope 
// var gs=1
// let gs1=2
// const gs2=3
// console.log("g",gs)
// console.log("g",gs1)
// console.log("g",gs2)


// block scope 
// {
//     // var gs=1
//     // let gs1=2
//     // const gs2=3
// // console.log("gb",gs)
// // console.log("gb",gs1)
// // console.log("gb",gs2)
// }
// // console.log("ob",gs) //var is acccessibale outside of block
// // console.log("ob",gs1) //Uncaught ReferenceError: gs1 is not defined
// // console.log("ob",gs2) //Uncaught ReferenceError: gs2 is not defined

// // Note: var is function and let const are block scoped 




// function data(){
// // function scope
//     var gs=1
//     let gs1=2
//     const gs2=3
// console.log("fg",gs)
// console.log("fg",gs1)
// console.log("fg",gs2)
// }
// data()
// console.log("of",gs)// Uncaught ReferenceError: gs is not defined
// console.log("of",gs1)// Uncaught ReferenceError: gs is not defined


// console.log("gb",gs)
// console.log("gb",gs1) //ReferenceError: Cannot access 'gs1' before initialization
debugger
    var gs=1
    let gs1=2
    const gs2=3
    


// console.log("gb",gs2)
