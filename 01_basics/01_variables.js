const  accountId = 144552
let accountEmail = "nikhil@gmail.com"
var accountPassword = "123467"
accountCity = "Jaipur"
let accountState;


// accountId = 2

accountEmail = "hahaha@gmail.com"
accountCity = "delhi"
accountPassword = "789456"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountCity, accountPassword, accountState])