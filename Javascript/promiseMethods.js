// // promises method
// // all -waits until all promises solved and rejects even one is rejects--returns array of value
// // race -- accepts resolved and rejected but first solved -returns single value
// // allSettled --> accepts both rejects and resolved values and returns array of objects
// // any--> only resolved values  but first solved --returns single value

// let P1 = new Promise((res, rej) => {
//   setTimeout(() => res("data is ready to fetch-1"), 1000);
// });
// let P2 = new Promise((res, rej) => {
//   setTimeout(() => res("data is ready to fetch-1"), 2000);
// });
// let P3 = new Promise((res, rej) => {
//   setTimeout(() => res("data is ready to fetch-1"), 3000);
// });

// // promise all method : it waits untill promsies is completed
// // even one failed it stops all promises and if all promises is solved it gives array of values
// // Promise.all([P1,P2,P3]).then((values)=>console.log(values)) /(3) ['data is ready to fetch-1', 'data is ready to fetch-1', 'data is ready to fetch-1']

// // 2.promise race  : what ever it comes it prints only those vale
// // it returns only the fastest response either rejected or resolved value

// let P4 = new Promise((res, rej) =>
//   setTimeout(() => res("data is  fetched-1"), 1000)
// );
// let P5 = new Promise((res, rej) =>
//   setTimeout(() => rej("data is   fetched"))
// ); //first solved
// let P6 = new Promise((res, rej) =>
//   setTimeout(() => rej("data is   fetched-2"), 3000)
// );

// // returns either rejected or fullfilled that is fastly 
// Promise.race([P4, P5, P6]).then((result) => console.log(result)); //data is  not fetched //accepts all values either resolved or rejected but need to be solved first

// // it returns both rejected and resolved value
// Promise.allSettled([P4, P5, P6]).then((result) => console.log(result));//acccepts all values
// // (3) [{…}, {…}, {…}]0: {status: 'fulfilled', value: 'data is  fetched-1'}1: {status: 'fulfilled', value: 'data is  not fetched'}2: {status: 'rejected', reason: 'data is   fetched-2'}length: 3[[Prototype]]: Array(0)

// // returns only the values that first solved and that is fullfilled
// Promise.any([P4,P5,P6]).then((result)=>console.log(result)) //only fullfilled that is solved first


// async and await keyword 

// it is syntatic sugar over the promises that makes code looke async  but behave sync

// async it is a function that returns the Promise 
// await paause the function excution util the promsie is resoolved or rejected 

async function Data(){
    return "hello" // returns the promise
}
let result=Data()
result.then((val)=>console.log(val))

// await keyword 
function delay(){
    return new Promise(res=>setTimeout(()=>res(),5000))
}
 async function  fetchData() {
    try {
        console.log("loading...")
    await delay() // //await is only valid in async functions and the top level bodies of modules (
    console.log("fetched ...data")
    } catch (error) {
        console.log(error)
    }
}
fetchData()