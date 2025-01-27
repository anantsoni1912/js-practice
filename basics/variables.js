console.log("anant")
let accountEmail="anantsoni1912@gmail.com"
const accountId =4466
var accountPassword = "12345"
let city = "jaipur"

//accountId = 10; constants cannot be changed
console.log(accountId);
accountEmail = "anant@gmail.com"
city = "pune"
accountPassword = "45612"

console.table([accountEmail,accountId,city,accountPassword])

/*
Never use var bacause of issue in block scope and functional scope.
*/