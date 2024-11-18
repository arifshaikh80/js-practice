const accountId = 14453
let accountEmail = 'abc@gmail.com'
var accountPassword = '12345'
accountCity = "Jaipur"

// This is will give value of undefined as in js if a variable is just declared.
let accountState

//accountId = 2 - Not allowed as it is a constant variable.

console.table([accountEmail,accountId,accountPassword, accountCity, accountState])

//Prfer not yo use var because of issue in block scope and functional scope 