let score = 104
console.log(score)

let balance = new Number(200.90)
console.log(balance)

console.log("To String => ", balance.toString().length)
console.log("To fixed => ", balance.toFixed(3))

let num1 = 1324.15353
console.log("To precision => ", num1.toPrecision(3))

let hundreds = 1000000
console.log("Locale string => ", hundreds.toLocaleString('en-IN'))

console.log("Max Value => ", Number.MAX_VALUE)


// ********* Maths ************ //

console.log("Pi => ", Math.PI)
console.log("Abs => ", Math.abs(-478))
console.log("Round => ", Math.round(7.4))
console.log("Ceil => ", Math.ceil(4.3))
console.log("Floor => ", Math.floor(4.3))
console.log("Min => ", Math.min(7, 345, 23, 9))
console.log("Random => ", Math.random())
console.log("Random => ", (Math.random() * 10) + 1)

const min = 10
const max = 15

console.log(Math.floor(Math.random() *(max - min + 1)) + min) 