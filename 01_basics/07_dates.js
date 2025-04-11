/*
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());

console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());
console.log(typeof myDate)
*/

// let myDate = new Date(2025, 03, 11)
// console.log(myDate.toDateString())

// let myDate = new Date(2025, 03, 11, 16, 38)
// console.log(myDate.toLocaleString())

// let myTimestamp = Date.now()
// console.log(myTimestamp);

let newDate = new Date();

newDate.toLocaleString('default', {
    weekday: "long"
})
console.log(newDate)