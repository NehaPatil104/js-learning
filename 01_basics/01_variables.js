const accountId = 614040 // declare a constant variable
let accountEmail = "neha@google.com" // has a block-level scope
var accountPassword = "123" // public scope throught the program
accountCity = "Pune"
let accountState

// accountId = 2 not allowed

accountEmail = "hc@hc.com"
accountPassword = "456"
accountCity = "Nandurbar"

if(18 == 18){
    let myVar = 10
    var myVar2 = 20
    accountPassword = "789"
    console.log(myVar,myVar2)
}

console.log(myVar2)

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

