console.log("functions😁🤪")

// Named functions
// function greet(){
//     // code 
//     console.log("hii react dev🔥")
// }

// // calling the function
// // greet() //hii react dev🔥
// // greet() //hii react dev🔥
// // greet() //hii react dev🔥


// // Paramters and arguements
// // case1: single paramter
// function GreetDev(n){ //paramters ,params ,formal arguments
//      // code 
//      console.log("hii react dev🔥",n)//hii react dev🔥 vasu
//      console.log("hii react dev🔥",typeof n)//hii react dev🔥 string
// }

// // function call
// // GreetDev()//hii react dev🔥 undefined
// // GreetDev("vasu") // actual arguments
// //hii react dev🔥 undefined


// // case2:multiple paramters
// // problem1: we need to create extra variable(parameter) everytime new value(argument) is passed
// // problem2: if value is not passed and when paramters is created used for some purpose the it results unexcepted error

// function GreetDev1(a,b,n,m){
//  console.log("a:",a)//a: 1
//  console.log("b:",b) //b: 3
//  console.log("n:",n) //n: react-dev
//  console.log("m:",m) //n: react-dev
//  console.log(a+b+m)
// }

// // function call
// // GreetDev1(1,3,"react-dev",5) //9
// // GreetDev1(1,3,"react-dev")//nan


// // solution  problem2:default values/paramters(es6)
// // before es6 (before 2015)
// function GreetUser(a,b,n,m){
//     if(a==undefined){
//         a=0;
//     }

//     console.log("a:",a)//a: 1
//     console.log("b:",b) //b: 3
//     console.log("n:",n) //n: react-dev
//     console.log("m:",m) //n: react-dev
// }
// calling the function
// GreetUser(1,3,5,6)
// GreetUser() // if values are not passed default values are assigned
// // GreetUser(2)// if value is passed it will replace with original value


// // after es6 (after 2015)

// function GreetUser(a=0,b=1,n="hii",m=0){
   
//     console.log("a:",a)//a: 1
//     console.log("b:",b) //b: 3
//     console.log("n:",n) //n: react-dev
//     console.log("m:",m) //n: react-dev
// }
// // calling the function
// // GreetUser(1,3,5,6)
// // GreetUser() // if values are not passed default values are assigned
// // GreetUser(2)// if va



// // solution : problem1: Rest paramters(...r)
// //Note: Uncaught SyntaxError: Rest parameter must be last formal parameter
// // function Remaining(a,b,c,d,...e){
// // console.log(a,b,c,d)//1 3 4 5
// // console.log(e)//[6, 5, 7, 8, 8, 9, 9, 9, 9, 9, 9]
// // // printing the rest values 
// // e.map(ele=>console.log(ele))

// // console.log("using loop.....")
// // for(let i in e){
// //     console.log(e[i])
// // }
// // }

// // Remaining(1,3,4,5,6,5,7,8,8,9,9,9,9,9,9)
// // Remaining("r","a","v","i","k","u","m","r")

// /*----------------------->RETURN STATEMENT<---------------------- */
// // empty functions will always returns undefined (function without return statement) 
// function examplereturn(){
//     // no return statement
// }

// // 
// let res=examplereturn()
// console.log(res)//undefined

// // function with empty return statement will return undefined
// function examplereturn1(){
//     console.log("hello") //reachable code detected
//     return // return statement is the last statement of any function excution
//     console.log("hello") //Unreachable code detected
// }

// // 
// // let res1=examplereturn1()
// // console.log(res1)//undefined



// // function examplereturn2(a,b){
// //     debugger
// //    return  a+b //we can return number,strings boolean ,objects arrays functions
// // }
// // let res2=examplereturn2(2,2)
// // console.log(res2+3)//undefined

// // function Eax(a){
// //     return a()
// // }

// // let doubt=Eax(function(){
// //     console.log("hello")
// // })
// // console.log(doubt)


// // it is used to point out to a object locations and varies based the context it is used 
// // globalscope
// // console.log(this) //Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// // // inside function
// // function data(){
// //     console.log(this)  //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// // }
// // data()

// // // inside method 
// // let person={
// //     name:"raju",
// //     call:function data(){
// //         console.log(this) 
// //     }
// // }

// // person.call() //{name: 'raju', call: ƒ}


// var p1={
//     name:"raju",
//     salary:2000
// }
// var p2={
//     name:"ramu",
//     salary:3000
// }

// var p3={
//     name:"rani",
//     salary:4000
// }

// function calsal(){

//     console.log(this.salary*100)
// }
// // calsal.call(p2,"hello",2,3,3)
// // calsal.call(p1)
// // calsal.call(p3)
// // calsal.apply(p3,[1,3,3])
// let d=calsal.bind(p2,"hello")
// d()

// syntatic sugar of named function (simpler form of Named function)
// Named function 
// function Data(){
// console.log("Named function")
// }
// // called with named
// Data()

// // arrow function (not req with fn keyword)
// let data=()=>{console.log("arrow function")}
// // arrow function are called variable name
// data()


// 2.arrow function doesnt require parasanthesis when pass single parameter 
// function ParaExample (a){ //parameter
// console.log(a)
// }
// ParaExample("hello")

// // arrow functions -not required ()
// let para=a=>{console.log(a)}
// para("hello")

// // 3.arrow function doesnt require {} when we pass single statement/expression 
// function curly(){ //--require {}
// console.log("hello curly") //statement/expression
// }
// curly()

// // arrow function -not required {}
// const  arcurly=()=> console.log("hello curly") //statement/expression

// arcurly()


// // arrow require paranthesis and curly braces { } when we pass more than one paramenter or expression
// // @param : a,b
// // @expression :a+b
// const reqCur=(a,b)=>console.log(a+b) //require () when passed with more than 1 params
// reqCur(1,2)

// // it also requires {} when multiple expression are passed
// const reqCur1=(a,b)=>a+b // one expression
// // const reqCur2=(a,b)=>a+b ,a-b // two expression is not allowed
// const reqCur2=(a,b)=>{a+b ,a-b }// two expression with {} allowed


// arrow function has an implict return by default 
// function cal(a,b){
//     var c= a+b 
//     console.log(c)
//     return c
// }

// let res=cal(1,3)
// console.log(res*5)
// console.log(res-5)

// // arrow function --implict return
// let cal1=(a,b)=>a+b  // implict return works only for single expression 
// let res1=cal1(1,2)
// console.log("res1-->",res1*2)
// console.log("res1-->",res1-2)

// explict return statement 
// let cal2=(a,b)=> { //when we use curly braces it required to write return statment
//    return a+b
// }
// let res2=cal2(1,2)
// console.log(res2)

// arrow function doesnt have its own arugument keyword
// function ardata(){
// console.log(arguments) // Arguments(5) [1, 3, 4, 5, 6, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// }
// ardata(1,3,4,5,6)

// // with arrow function 
// let  ardata1=()=>{
//     console.log(arguments) //Uncaught ReferenceError: arguments is not defined
    
// }
// ardata1(1,3,4,5,6)


// arrow function doesnt have its own these keyword binding so its should be used as method inside an object 


// let a={
//     name:"raju",
//     call:function(){
//         console.log(this.name)
//     }
// }

// a.call()//raju

// // with arrow function
// let a1={
//     name:"raju",
//     call:()=>{
//         console.log(this.name)
//     }
// }

// a1.call()//


// Hositing : moving all declaration to top of there scope
// scope : life time variable (upto when and wher it is accessiable)

// debugger;
// Hoist()
// function Hoist(){
//     console.log("hello hoist")
// }

// a()

// // // not hoisted 
// // a() //refrence error
// // const a=()=>{console.log("hello hoist")}

// // arrow function should be used as constructor
// // function Person(name,age){
// //      this.name=name;
// //      this.age=age;
// // }

// // let Ravi=new Person("ravi",20)
// // console.log(Ravi)


// // let Person1=(name,age)=>{ //functions.js:322  // Uncaught TypeError: Person1 is not a constructor
// //     this.name=name;
// //     this.age=age;
// // }

// // let Ravi1=new Person1("ravi",20)
// // console.log(Ravi)

// var a=10

// function Gues(){
//      var a=20
//      return a
// }

// let d=Gues()
// console.log(a) // 10


// // function expression
// let r=function(){
//      console.log("hello")
// }
// r()

// // IIFE:IMmediately invoked function expression
// let b=10

// let r1=(function(){
//      console.log("hello-3")
//      let b=20
//      console.log(b)
// })()
// console.log(b)

// var a=10
// function Parent(){
      
//      function child(){
//          console.log(a)
//      }
//      child()
// }

// Parent()


// var a=10
// var a=10;
// let b=10
// let b=10


// (function(){
//      var a=10;
//      var a=30
// })()

// console.log(a)