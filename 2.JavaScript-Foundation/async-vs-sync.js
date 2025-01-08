// What does synchronous mean
/* Together, one after the other, sequential.
   Only one thing is happening at a time. 
*/

// What does asynchronous mean
/*  Opposite of synchronous
    Happens in parts
    Multiple things are contect switching with each other
*/

// Even though JS is single threaded, it can do context switcing to delegate the tasks and complete it in a shorter
// amount of time.
// This can be done by asynchronous functions.

// Common Async Functions
// setTimeout, fs.readFile, Fetch

const fs = require("fs")
// filesystem module

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data)
}) // Then this executes second due to async fn.

console.log("Hi") // this executes first due to being synchronus fn.

// When the asynchronous fn.s runs they are placed in the Callback Queue whie the synchronous fn.s are executed in the Call Stack. 
// Once the synchronous fn.s are completed in the call stack then the event loop will put the completed async fn.s into the call stack.
