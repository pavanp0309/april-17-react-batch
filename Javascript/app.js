export function Greet(){
    console.log("welcome to world of modules")
}

export var a="es6 module exmaple"
export let b="common module exmaple"
export let d="common module exmaple"


export let person={
    name:"ramu"
}

export let userdata=[1,3,3,5,5,6]


export default function  Details(){
    return {
        data:person,
        userinfo:userdata
    }
}

// aliasing : giving different name 
export {d as datavalue}