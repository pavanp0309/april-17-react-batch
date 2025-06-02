// callback :it is a function passed as an argument to another function to be called later
// synchronous callbacks : called immediately during function excution
// Asynchronous callbacks  :called later after a task completes

// synchronous excution
// debugger;
// declaration
// console.log("hello task-1")
// console.log("hello task-2")
// console.log("hello task-3")

// but function are not excuted on how they are declared that are excuted on how they are called
function A() {
  console.log("hello- task-1");
}
function B() {
  for (let i = 0; i < 10000; i++) {
    console.log("hello- task-2");
  }
}

function c() {
  console.log("hello- task-3");
}
// debugger
// A()
// B()
// c()

// // synchronous callbacks
// function Ab(name,c){ //paramters
//  console.log("wlecome",name)
//  console.log(c())
// }
// function cd(){
//     console.log("logout")
// }

// Ab("ravi" ,cd)//arguments

// asynhronous  behaviour

// setTimeOut
// setTimeout(() => {

// }, timeout);
//
// debugger;
// console.log("hello task-1");
// setTimeout(() => {
//   console.log("hello task-2");
// });
// setTimeout(() => {
//   console.log("hello task-3");
// },3000);
// setTimeout(() => {
//   console.log("hello task-4-first");
// },2000);
// setTimeout(() => {
//   console.log("hello task-4-secone");
// },2000);
// console.log("hello task-5");

// synchrounous callback usagge
// registerform-> name email password -->profilepage

// asynchronous  coutdown timer  ()
// console.log("hello-1")
// var count = 10;
// let id = setInterval(() => {
//   console.log(count--);
//   if (count < 0) {
//     clearInterval(id);
//     console.log("cleared interval");
//   }
// }, 1000);

// console.log("count", count);
// console.log("hello-2")
// console.log("hello-2")
// console.log("hello-3")

// Registeration
console.log("hello-callback hell");
// callbackHell : the pyramid doom structure of nested callbacks
// 1.heard read and maintain ,2 cant reuseable
// setTimeout(()=>{
//   console.log("register user")
//   setTimeout(()=>{
//     console.log("login user")
//     setTimeout(()=>{
//       console.log("welcome user")
//       setTimeout(()=>{
//         console.log("update profile")

//       },2000)
//     },3000)
//   },4000)
// },5000)

// console.log("bye callback helll")

// function Loginuser(c) {
//   let user = prompt("enter a value");
//   console.log(user);
//   console.log(c); //()=>FetchProfile()
//   setTimeout(() => {
//     console.log("fetches user");
//     c(user);
//   }, 1000);
// }

// function FetchProfile(user, callback) {
//   setTimeout(() => {
//     console.log("profile info", user);
//     callback(user, "admin");
//   }, 1000);
// }

// function Loaddashbaord(name, role) {
//   console.log("dash board loaded successfull", name, role);
// }

// callback hell
// Loginuser((user) => FetchProfile(user, Loaddashbaord));
// function step1(callback) {
//   console.log("step1");
//   callback();
// }
// function step2(c) {
//   console.log("step2");
//   c();
// }
// function step3(c) {
//   console.log("step3");
//   c();
// }
// function step4() {
//   console.log("step4");
// }

// step1(() =>
//    step2(() =>
//      step3(() =>
//        step4()
// )));

// solution for callback hell
// writing comments
// separating the function
// promises
// async and await

//  promises states
// pending
// fullfilled
// rejected

// promise is a js object which represents eventual completion of async operation
// usecase : feching data from server (bank details)

// syntax: creation of promise
// const p1 = new Promise(() => {});
// console.log(p1);
// when promise is created the state  will be pending and result undefinded

// syntax: resolve of promise
// const p2= new Promise((resolve,rejected)=>{
//   resolve()
// })
// console.log(p2)
// // when the promises is resolved the state will fullfilled and value be the value returned by resolved function

// // syntax: resolve of promise
// const p3= new Promise((resolve,rejected)=>{
//  rejected()
// })
// console.log(p3)
// when the promises is rejected the state will rejected and value be the value returned by rejected function

// let order pizza  (then method)
// const pizzaorder = new Promise((resolve, rejected) => {
//   let pizzaavailable = false;
//   if (pizzaavailable) {
//     resolve("pizza is delivered");
//   } else {
//     rejected("pizza is rejected");
//   }
// });
// console.log(pizzaorder);

// pizzaorder.then((mes)=>console.log("success",mes))
// .catch((error)=>console.log("error",error))

// let fetchProducts = new Promise((res, rej) => {
//   let isPrimeuser = false;
//   if (isPrimeuser) {
//     res("accessed to laste deals");
//   } else {
//     rej("buy the Prime for offers before");
//   }
// });

// fetchProducts.then((d) => console.log(d)).catch((e) => console.log(e));

// Promise Chaining
// Promise is technique where multiple thend are called in  asequence to perform async operation

function Step1() {
  return new Promise((res, rej) => {
    console.log("step1");
    res();
  });
}
function Step2() {
  return new Promise((res, rej) => {
    console.log("step2");
    res();
  });
}
function Step3() {
  return new Promise((res, rej) => {
    console.log("step3");
    res();
  });
}
function Step4() {
  return new Promise((res, rej) => {
    console.log("step4");
    res();
  });
}

Step1()
  .then(Step2)
  .then(Step3)
  .then(() => {
    console.log("all steps completed");
  });

// create task using promises
// register->sendotp--->verify-otp-login
function registerUser(email) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(`user regitered with ${email}`);
      res({ uid: 1, email });
    }, 1000);
  });
}
function sendOtp(user) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(`otp sent the user ${user.email}`);
      res({ ...user, otp: "123" });
    }, 1000);
  });
}
function verifyOtp(userotp) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let enterotp = prompt("");
      if (enterotp == userotp.otp) {
        console.log("otp verfied");
        res(userotp);
      } else {
        rej("otp verfication failed");
      }
    }, 1000);
  });
}
function Loginuser(user) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(` user ${user.email}`);
      res("successfully completed");
    }, 1000);
  });
}

registerUser("pavan@gmail.com")
  .then(sendOtp)
  .then(verifyOtp)
  .then(Loginuser)
  .then((fmsg) => {
    console.log(fmsg);
  })
  .catch((er) => console.log(er));
