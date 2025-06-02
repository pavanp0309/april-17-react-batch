// what is Js 
// Prototype based object oriented programming langauge 
// synchronous 
// usecase:dynamic (content keeps updtating ),interactive,crud: 
//  console.log(typeof 8)//number
//  console.log(typeof "")//string
//  console.log(typeof {})//object
//  console.log(typeof [])//object
//  console.log(typeof null)//object
//  console.log("hello".toUpperCase())
//  let person={
//     name:"rr",
//     name1:function at(){

//     }
//  }
//  let a=new String("")
//  console.log(a)

// BOM : BROWSER OBJECT MODEL 
// usecase :
// location (talks about url),reload --
// storing the data ()
// Geolocation
// history : back and forward , etc..
// screen  width,height 
// cookies 

console.log(window.location)
// Production server :any one can acccess (its in live)
// developement server:

   // console.log(location.pathname)
   // if(location.pathname=="/index.html"){
   //    document.write("hello user")
   // }else{
   //    document.write("404 error😿😿")
   // }

 function Examples(){
   //  console.log(location.href)
   //  location.href='https://www.amazon.in/'/
   // console.log(location.replace("https://www.amazon.in/"))
   // location.reload()
   // console.log(location.protocol)
   location.assign("https://www.amazon.in")
  
 }

//  if(location.protocol=="http:"){
//    alert("site is not secured")
// }

// href: The entire URL.
// protocol: The protocol of the URL (e.g., "http:", "https:").
// host: The hostname and port number of the URL.
// hostname: The hostname of the URL.
// port: The port number of the URL.
// pathname: The path name of the URL.
// search: The query string part of the URL, including the question mark.
// hash: The fragment identifier part of the URL, including the hash symbol.
// origin: The origin of the URL (protocol, hostname and port number).

// methods
// assign(): Loads a new document.
// replace(): Replaces the current document with a new one, without keeping the previous one in history.
// reload(): Reloads the current document.


// localStorage 
// console.log(localStorage)
// console.log(localStorage.setItem("userId","123"))
// console.log(localStorage.setItem("userId1","1233"))
// console.log(localStorage.getItem("userId"))
// // console.log(localStorage.removeItem("userId1"))
// console.log(localStorage.clear())


// function Register(){
//    let a=prompt("enter user name")
//    let b=prompt("enter user password")
//    localStorage.setItem("name",a)
//    localStorage.setItem("password",b)
// }


// function Login(){
//    let a=prompt("enter user name")
//    let b=prompt("enter user password")
// if(a==localStorage.getItem("name")&&b==localStorage.getItem("password")){
//    alert("logged in successfully")
// }else{
//    alert("faileed to login")
// }
// }


// storing the array of Object
localStorage.setItem("user",JSON.stringify([{name:"raju",password:123}]))//home->about->contact //
// let ot=JSON.parse(localStorage.getItem("user"))
// console.log(ot)
// document.write(ot[0].name)

// sessionStorage.setItem("data","raju")//home-->about(home page data will be remove and about us page will be added)
// // sessionStorage.removeItem("data")//home-->about(home page data will be remove and about us page will be added)
// sessionStorage.clear()//home-->about(home page data will be remove and about us page will be added)



// Bom Properties : location ,screen navigator ,history ,localstorage,sessionStorage,cookies 
 console.log(screen)
 if(screen.availWidth>=500){
  // alert("please turn on desktop mode")
  document.body.style.background="red"

 }else if(screen.availWidth<500){
document.body.style.background="green"
 }

//  console.log(screen.colorDepth)
//  console.log(screen.availHeight)
//  console.log(screen.availWidth)
//  console.log(screen.orientation.type)


//  console.log(history)

//  function NextQa(){
//     // location.href="./example.html"
//     history.forward()
//  }
 
// console.log(navigator.appVersion)
// console.log(navigator.userAgent)
// console.log(navigator.appName)
// console.log(navigator.vendor)

// current position
// navigator.geolocation.getCurrentPosition((position)=>{
//   console.log(position.coords.latitude)
//   console.log(position.coords.longitude)
//   console.log(position.coords.speed)
// })

// // watch current position
// let watch=navigator.geolocation.watchPosition((poistion)=>{
//  console.log(poistion.coords.latitude)
// })


// // stop watching
// navigator.geolocation.clearWatch(watch)



// cookies 
// cookies are key value pairs  which is tored in the user Browser  
// usecases : 
// login session  (session tracking )
// theme tracking ,language tracking  user preference 
// google analytics (these is used for checking app performance and no -user visted the page etc..)


// cookie syntax 
// name=value;Expires=day(tues),12 dec 2025 07:00:00 GMT path=/; Domain =amazon.com  secure HTTpOnly

// creating the cookie
// console.log(document.cookie)
// console.log(document.cookie="user=pavan; path=/; max-age=3600")


// // deleting the cookie 
// console.log(document.cookie="user=pavan; path=/; max-age=0")

// limitations 
//  4kb  per cookie
//  for 1 domin eg: www.amaxon.in-   max 20 cookies per domain
// 
// 
//  Bom Methods : open ,close ,setTimeout ,setInterval  ,clearInterval ,clearTimeout alert()


// js is sync language
// after completion one task it moves to next one 

