const accountId = 12345
let accountEmail = "example@gmail"
var accountPassword = "exa123"

// accountCity = "Jaipur" // Not Recommended
let accountCity = "Jaipur"

let accountState; // undefined
// undefined -- Means Variable is declared but it's value is not defined.

// accountId = 1 // Not Allowed

accountEmail = "asus@gmail.com"
accountPassword = "asus123"
accountCity = "Gurugram"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// {
//     // This is Scope
// }

/* 
Prefer not to use var because of issue in block scope and functional scope
*/