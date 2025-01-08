// Promise is a class that makes callbacks and async functions slightly more readable.

const fs = require("fs")

// function readData(){
//     return new Promise(function(resolve){ // If we are initialising the promise class, then the first argument must always be function which has resolve as the first argument.
//         fs.readFile("a.txt","utf-8",function(error,data) {
//             resolve(data);
//         });
//     })
// }

// function onDone(data){
//     console.log(data)
// }

// readData().then(onDone)

var a = new Promise(function(resolve){
    setTimeout(()=>{
        resolve("this is a promise"),1000    
    })
})

function afterResolve(){
    console.log(a)
}

console.log(a)
a.then(afterResolve)


 