// Singleton
// Object.create


const mySym = Symbol("key1")

//Object literals
const JsUser = {
    name: "Nikhil",
    "full name": "Nikhil Rai",
    [mySym]: "myKey1",
    age: 18,
    location: "Pune",
    email: "nikhilrai@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])

// JsUser.email = "nikhil@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "nikhil@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JsUser");
}

JsUser.greeting2 = function(){
    console.log(`Hello JsUser, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());

