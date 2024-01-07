const accountId = 614040
let accountEmail = "neha@google.com"
var accountPassword = "123"
accountCity = "Pune"
let accountState

// accountId = 2 not allowed

accountEmail = "hc@hc.com"
accountPassword = "456"
accountCity = "Nandurbar"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/