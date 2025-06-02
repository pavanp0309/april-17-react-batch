console.log("arrays & array methods")

let a=[1,3,4,"raju","ramu",true]
// // 0:1 1:3 2:4 3:raju 4:ramu 5:true 
// console.log(a) //[1, 3, 4, 'raju', 'ramu', true]
// console.log(a.length) //6
// console.log(typeof a) //object --type of array
// console.log(typeof a[1]) //number ---type or array element

// // To access access the values
// // syntax: Arra[index ]
// console.log(a[4]) //ramu

// methods 

// let a1=[1,3,4,"raju","ramu",true]
// console.log(a.length)
// console.log(a)
// // Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// // console.log("pop-method",a1.pop()) //true
// // console.log("pop-method",a1.pop()) //ramu


// // Push menthod
// // Appends new elements to the end of an array, and returns the new length of the array.
// // console.log("push-method",a1.push()) //if no element is added it returns the original array length
// // console.log("push-method",a1.push("🍔")) //if no element is added it returns the original array length
// // console.log(a1)


// // Shift & unshift 
// // Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// // console.log("shift-method",a1.shift()) //1
// // console.log("shift-method",a1.shift()) //3
// // console.log("shift-method",a1.shift()) //4


// // Unshift
// console.log("unshift-method",a1.unshift()) //6 //if no element is added it returns the original array length
// console.log("unshift-method",a1.unshift("🍗")) //7
// console.log(a1)// ['🍗', 1, 3, 4, 'raju', 'ramu', true]


//Slice method : slice(startindex,endindex)
// const data=["a","b","c","d",1,3,4,5,6]
// // 0:a 1:b 2:c 3:d 4:1 5:3 6:4 7:5 8:6
// console.log(data)

// console.log("slice🍽🗡",data.slice()) // if no index value is given it returns the entire array
// console.log("slice🍽🗡",data.slice(2))//['c', 'd', 1, 3, 4, 5, 6] //if only startindex is given it extracts to last from startindex
// console.log("slice🍽🗡",data.slice(2,5))// ['c', 'd', 1] (it extracts upto the previous index value only)

// edgecase 

// console.log("slice🍽🗡",data.slice(-2))//[5, 6] //length:9 index:-2  length+index 9-2 ==>7
// console.log("slice🍽🗡",data.slice(5,2))// startindex>endindex==>empty []
// console.log("slice🍽🗡",data.slice(-2,-5))// startindex>endindex==>empty [] sindex:-2 (9-2==7) enindex:-5 (9-5==4)



// splice  (startindex,elementsremoved,elements)
// const data=["a","b","c","d",1,3,4,5,6]
//  // 0:a 1:b 2:c 3:d 4:1 5:3 6:4 7:5 8:6
// console.log(data)

// // console.log("slice🍽🗡",data.splice())  //[]
// // console.log("slice🍽🗡",data.splice(2))  //['c', 'd', 1, 3, 4, 5, 6]
// // console.log("slice🍽🗡",data.slice(2,3))  //['c']
// // console.log("slice🍽🗡",data.splice(2,3))  //['c', 'd', 1]
// console.log("slice🍽🗡",data.splice(2,3,"🍟","😁"))  //['c', 'd', 1]
// console.log(data)

// includes 
// const data1=["a","b","c","d",1,3,4,5,6]
// console.log(data1.includes("c")) //true
// console.log(data1.includes("r")) //false 



// Higher Order Methods 
// map(function(ele,index,newArr){}) // syntax with anonomous function
// map((ele,index,newArr)=>{}) // syntax with arrow function
// map(data) // syntax with Named function
// function data(ele,index,newArr){

// }


// let da=[1,2,3,4,5,6,7,8,9,10]
// let da1=[2,4,6,8,9,0,13,7]
// let rrr=[9.,4,5,6,7,,8,]
// // 0:1 1:2 2:3 ....
// function mul(da){
//     let result=[] //empty array for adding multipled value
//     // loop
// for(let i=0;i<da.length;i++){
//     // console.log("index",i);
//     // console.log("element",da[i]);
    
// //    let res= da[i]*2
// //    console.log(res)

// //    pushing all the values into new array
// result.push(da[i]*2)

// }
// console.log(result)
// }


// calling function
// mul(da)
// mul(da1)
// mul(rrr)



// function example(a){ //parameters,params,formal arguments
//   console.log(a)//
// }

// example(1,3,4,5) //arguments ,actual arguemnts
// example([1,3,4,5]) //arguments ,actual arguemnts
// example({name:"raju"}) //arguments ,actual arguemnts
// example(true) //arguments ,actual arguemnts


// doubt 

// function Doubt(a,b){
//   console.log("avalue",a)
//   console.log("bvalue",b)
 
//   let res=[]
//   let iseven=[]
//     // loop for reating the values
//     for(let i=0;i<b.length;i++){
//         console.log("index",i)
//         console.log("elements",b[i])
//         res.push(b[i]*2)
//         if(b[i]%2==0){
//             iseven.push(b[i])
//         }
//     }
//     console.log(res)
//     console.log(iseven)
   
// }

// Doubt([1,3,4,5,7,7],[12,3,4,5,6])
// Doubt("ravikumar","pavan")
// Doubt(true)

// let data=[12,3,4,5,6]
// let res=data.map(function(ele,i){
//         console.log("index",i)
//         console.log("ele",ele)
//         return ele*2
// })
// console.log(res)
// // checking the condition
// let res1=data.map(function(ele,i){
//     console.log("index",i)
//     console.log("ele",ele)
//     return ele%2==0
// })
// console.log(res1)

// // solution
// let res2=data.filter(function(ele,i){
//     console.log("index",i)
//     console.log("ele",ele)
//     return ele%2==0
// })
// console.log(res2)

// let d="pavan".split('').reverse()


// let doubt=d.map(function(ele,i){
//     console.log("index",i)
//     console.log("ele",ele)
//     return ele
// })
// console.log(doubt)

// let doubt1=d.filter(function(ele,i,newarr){
//     console.log("index",i)
//     console.log("ele",ele)
//     // console.log("newarr",newarr)
//     return ele=="a"
// })
// console.log(doubt1)



// let example1=[1,3,4,5,6,7,7,8]
// let res=example1.map(function(ele,i){
//     console.log("index",i)
//     console.log("E▶",ele)
//     return ele%2
// })
// console.log(res) // [1, 1, 0, 1, 0, 1, 1, 0]

// let res2=res.map(function(ele,i){
//     console.log("index",i)
//     console.log("E▶",ele)
//     return ele*2
// })
// console.log(res2)//[2, 2, 0, 2, 0, 2, 2, 0]




// let example2=[1,3,4,5,6,7,7,8]
// let re=example2.forEach(function(ele,i){
//     console.log("index",i)
//     console.log("E▶",ele)
//     return ele*2
// })
// console.log(re) // undefined

// let re1=re.map(function(ele,i){
//     console.log("index",i)
//     console.log("E▶",ele)
//     return ele*2
// })
// console.log(re1)//[2, 2, 0, 2, 0, 2, 2, 0]


// REDUCE method 

// let a1=[1,3,4,5,6,7,8]
// // traditional way
// // let sum=0
// // for(let i=0;i<a1.length;i++){
// //   sum+=a1[i]
  
// // }
// // console.log(sum)

// // modern(es6)
// // let totalres=a1.reduce(function(total,nextele,index,newarr){
// //    console.log("total:",total)
// //    console.log("nextele:",nextele)
// //     return total+nextele
// // },0)
// // console.log(totalres)

let a3=[10,20,1,7,3,4,5,6,7,8]
console.log(a3.sort())
console.log(a3.sort((a,b)=>a-b))
// console.log(a3.sort((a,b)=>b-a))
// let re=a3.find((a)=>a==10) //it returns the element that matches
// let res1=a3.findIndex((a)=>a==10) // it returns the index value
// console.log(re)
// console.log(res1)


// let product=[
//     {
//         "id": 1,
//         "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//         "price": 109.95,
//         "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//         "rating": {
//         "rate": 3.9,
//         "count": 120
//         }
//         },
//         {
//             "id": 2,
//             "title": "Mens Casual Premium Slim Fit T-Shirts ",
//             "price": 22.3,
//             "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//             "category": "men's clothing",
//             "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//             "rating": {
//             "rate": 4.1,
//             "count": 259
//             }
//             }
// ]

// let proddetails=product.find((prod)=>prod.id==2)
// console.log(proddetails)
// let sortprice=product.sort((a,b)=>a.price-b.price)
// console.log(sortprice)



// realtime usage in an app
