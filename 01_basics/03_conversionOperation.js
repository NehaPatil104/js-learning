/*
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


//********* Operations **********/
/*
let value = 3
let negValue = -value
console.log(negValue)

let str1 = "hello"
let str2 = " Neha"
console.log(str1+str2)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")
console.log(2 + "4" + 7)
console.log(2 + 4 + "7" + 1)

let val = "1" + 6
console.log(typeof val)

val = 1 + 2 + "2"
console.log(typeof val)

val = 2 + 4 + "7" + 1
console.log(typeof val)
*/

/*
NOTE:
1. If string is in the beginning all will be converted to string
2. If string is in last, operations before string will be performed and 
after string will we converted into string.
*/

// Not a good practice
console.log(+true)
console.log(+"")

let n1, n2, n3
n1 = n2 = n3 = 5
console.log(n1, n2, n3)

let gameCounter = 100
gameCounter++
console.log(gameCounter)