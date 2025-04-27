//Immediately Invoked Function Expression (IIFE)


(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();


( (name) =>{
        //unnamed IIFE

    console.log(`DB CONNECTED Two ${name}`);
})('nikhil')


// function one(){
//     console.log("One")
//     two();
// }

// function two(){
//     console.log("Two");
//     three()
// }

// function three(){
//     console.log("Three");
    
// }

// one()
// two()
// three()