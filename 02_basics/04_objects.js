// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;


// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userFullName : {
            firstName: "Nikhil",
            lastName: "Rai"
        }
    }
}

console.log(regularUser.fullname.userFullName.firstName);

