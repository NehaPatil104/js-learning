// Primitive => 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

//Number
const score = 100
const testScore = 10.4

//Boolean
const isLoggedIn = false

//Null => object
const outsideTemp = null

//undefined
let userEmail

//Symbol
const id = Symbol('125')
const anotherId = Symbol('125')
console.log(id === anotherId)

//BigInt
const bigNumber = 3234728957293979n


// Reference (Non primitive) : Array, Objects, Functions

//Array => object
const superheros = ["Shaktiman", "Doga", "Naagraj"];

//Object
let myObj = {
    name: "Neha",
    age: 22,
}

//Function

const myFunction = function(){
    console.log("Hello, it's my function!")
}
myFunction()

console.log(typeof myObj)
console.log(typeof superheros)
console.log(typeof myFunction)
console.log(typeof bigNumber)
console.log(typeof id)