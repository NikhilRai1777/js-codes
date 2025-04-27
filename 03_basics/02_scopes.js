let a = 10;
const b = 20;
var c = 30;



// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "nikhil"

    function two (){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    // two();
}

// one();


if(true){
    const username = "nikhil"
    if(username === "nikhil"){
        const website = "youtube"
        // console.log(username + " " + website)
    }
}


// ********************* Interesting ************************

function addone(num){
    return num + 1
}

console.log(addone(4))


const addTwo = function(num){
    return num + 2
}

addTwo(4)