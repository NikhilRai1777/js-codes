// const tinderUser = new Object()          //Singleton obj
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

// console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 =  Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "i@gmail.com"
    },
    {
        id: 3,
        email: "j@gmail.com"
    },
]

// console.log(users[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "nikhil"
}

// const {courseInstructor} = course
// console.log(courseInstructor);

//OR

const {courseInstructor: instructor} = course

console.log(instructor);
