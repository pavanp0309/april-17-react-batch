document.write("array destructuring");

// array literal method:[]
// let array=[1,23,4,5,6,,{name:"ravi"},true ,"developer"]
// console.log(array)

// accesing the array values
// syntax : arrayname[indexvalue]
// console.log(array[0])//1
// console.log(array[6])//{name: 'ravi'}
// //accesing object inside array
// console.log(array[6].name)

// for(let i=0;i<array.length;i++){
// console.log(array[i])
// }

// for of loop
// for(let i of array){
//     console.log(i)
// }

// destrcturing syntax

// const data=[1,2,"raju","dev"]
// // old synatx
// console.log(data[3])
// // new syntax
// const [id]=data;
// console.log(id)

// // skipping the Elements
// // array destructuring order imporatant
// const [,,name]=data;
// console.log(name) //raju

// default values
// const prices=[100,200,300,500,5]

// const [p1,p2,p3,p4,p5=0,p6=90]=prices
// console.log("price1",p1) //price1 100
// console.log("price5",p5) //price5 5
// console.log("price5",p6) //price5 90

// nested array destructuring
// const prices1=[100,[200,300,500],5]
// const [pr,pr2]=prices1
// console.log(pr)//100
// console.log(pr2)//[200, 300, 500]
// const [pr1,[dp,dp2,dp3]]=prices1
// console.log(pr1)//100
// console.log(dp)//200

// function Example(d){
// console.log(d)//(5) [100, 200, 300, 500, 5]
// const [a,,,,,r=10]=d
// console.log(a)//100
// console.log(r)//10
// }

// const p=[100,200,300,500,5]

// Example(p)

// rest operator  (...rest) : collects remaining values
const rp = [100, 200, 300, 500, 5];

const [r, , ...r1] = rp;
console.log(r);
console.log(r1);

// array and object destructuring

let data1 = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];


console.log(data1) //[{…}, {…}]

const [{id,category},{title},b]=data1;
console.log(id)//1
console.log(category) //men's clothing
console.log(title) //Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
console.log(b) //{id: 1, title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', price: 109.95, description: 'Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday', category: "men's clothing", …}