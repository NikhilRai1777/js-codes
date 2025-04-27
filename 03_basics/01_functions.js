function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("H");
    console.log("I");
    console.log("L");
}

// sayMyName()

// function addNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addNumbers(5, 9)

function addNumbers(number1, number2){
//    let result = number1 + number2;
//    return result;

return number1 + number2;
}

const result = addNumbers(5, 9);
// console.log("result: ", result);



function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter the username")
        return
    }
     return `${username} just logged in`;
}

// console.log(loginUserMessage("Nikhil"))
// console.log(loginUserMessage( ))


function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500))


const user = {
    username: "Nihkil",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)