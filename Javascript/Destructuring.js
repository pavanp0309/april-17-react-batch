// Objects: it is a realworld entity  which has some key and value pairs 
// Property:value 
// useCases : eccomerce products ,login :{name:"raju",mobile:4,password:""} ,api data 


// syntax: 
// object literals format 
// let Product={
//     // property:value
//     // key:value
//     brand:"Voltas",
//     capacity:1.4,
//     CoolingPower:4.9 ,
//     Special_Feature:"Remote Controlled, Dust Filter ",
//     extrafeature:{
//         batterysupported:true,
//         chargingcapity:3000
//     }

// }

// accessing the values 
// // 1. using dot (.) notation 
// console.log("brand:",Product.brand)
// console.log("capacity:",Product.capacity)
// console.log("CoolingPower:",Product.CoolingPower)
// console.log(Product.extrafeature.chargingcapity)
// // 2.acccessing using the Square bracket notation
// console.log("brand:",Product['brand'])
// console.log("capacity:",Product['capacity'])
// // 3.accessing with Object.keys Object.values object.entries
// console.log(Object.values(Product))//(5) ['Voltas', 1.4, 4.9, 'Remote Controlled, Dust Filter ', {…}]
// console.log(Object.keys(Product))//['brand', 'capacity', 'CoolingPower', 'Special_Feature', 'extrafeature']
// console.log(Object.entries(Product))//['brand', 'capacity', 'CoolingPower', 'Special_Feature', 'extrafeature']


// Destructuring in JavaScript is a feature that allows 
//  values from arrays or properties from objects into distinct variables.

// let data={
//     name:"ravikumar",
//     mobile:765678987,
//     dob:181999,
//     address:"hyderabad",
//     certification:{
//         fs:"sp",
//         ds:"collage"
//     }
// }

// old syntax
// console.log(data.name)
// console.log(data.certification.fs)

// new syntax : destructuring syntax
// const {name,address,certification}=data
// console.log(name,address)
// console.log(certification)


// nested object destrcuturing
// const {certification:{fs}}=data
// console.log(fs)


// Alasing :giving/assigning different name 
// const {name:n,address,certification:c}=data
// // console.log(certification)//Uncaught ReferenceError: certification is not defined
// console.log(c)//{fs: 'sp', ds: 'collage'}
// console.log(n)//ravikumar


// // nested object Alasing
// const {certification:{fs:f}}=data
// console.log(f)//sp

// let products={
//     item1:12,
//     item2:10 

// }
// console.log(products)
// const {item1,item2=12}=products
// console.log(item1*item2)


// let products1={
//     item:12,
//     // items1:10 //absence

// }
// console.log(products1)
// const {item,items1=0}=products1 //it takes the default values
// console.log(item*items1)

// const prod={
//     id: 1,
//     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     price: 109.95,
//     description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     rating: {
//     rate: 3.9,
//     count: 120
// }
// }

// syntax: ...rest
// const {title,image,...p}=prod
// console.log(title)
// console.log(p)

// edgecase
// const {...p,title,image,}=prod //Uncaught SyntaxError: Rest element must be last element

// spread syntax : ...spread
// const newprod={...prod,data:"🍔🍔🍟🍔",...prod}
// console.log(newprod)





// const prod1={
//     id: 1,
//     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     price: 109.95,
//     description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     rating: {
//     rate: 3.9,
//     count: 120
// }
// }


// 1st way 
// function Data(p){
// console.log(p)
// const {id}=p
// console.log(id)//1
// }

// // Data(prod1)

// function Data({id,rating:{rate}}){
//     console.log(id) 
//     console.log(rate) 
// }

// Data(prod1)

// // what is Object 
// // ways to creates
// // useCases
// // destructuring 
// // alasing 
// assigning default values 





