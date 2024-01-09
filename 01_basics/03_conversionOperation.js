// Conversion to Number
let score = undefined
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33" => number
// "33abc" => NaN (Type of NaN is number)
// true => 1
// undefined => NaN
// null => 0

// Conversion to Boolean
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true, 0 => false
// "" => false
// "neha" => true
// undefined => false
// null => false

// Conversion to String
let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)