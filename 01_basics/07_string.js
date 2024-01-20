const name = "Neha"
const repoCount = 50

console.log(name + repoCount + " Value")

// String interpolation:
console.log(`Hello. I am ${name} and my repo count is ${repoCount} `)

//Another string declaration using object
let gameName = new String("Ludo")
console.log(gameName)
console.log(gameName.__proto__)
console.log(gameName[0])

console.log("Length => " + gameName.length)
console.log("Uppercase => " + gameName.toUpperCase())
console.log("Character at => " + gameName.charAt(3))
console.log("Index of => " + gameName.indexOf('L'))

let myRepo = "NehaPatil104"
let newStr = myRepo.substring(0,6)
console.log("Substring => " , newStr)

let str1 = myRepo.slice(-12,2)
console.log("Slicing => " , str1)


let str2 = "   Mumbai   "
console.log("Trim => ", str2.trim())

let url = "https://neha.com/neha%20%20patil"
console.log("Replace => ", url.replaceAll('%20', '_'))

console.log("Includes => ", url.includes('neha'))

