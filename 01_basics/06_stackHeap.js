// Stack => Primitive : And it provides copy of that element.So when we change something (through assigned variable) it gets changed in copy of element  not in original.
let myName = "Neha"
let myAnotherName = myName
myAnotherName = "Nehu"
console.log(myName)
console.log(myAnotherName)


// Heap => Non-primitive : And it gives reference value to assigned elements. So when assigned variable makes changes it changes the both values(original and assigned one. 
let userOne = {
    email: "neha@gamil.com",
    age : 22,
}

let userTwo = userOne

userTwo.email = "nehapatil@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)