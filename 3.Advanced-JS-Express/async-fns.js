function sum(a,b){
  console.log(a+b)
}

sum(1,2)
sum(5,10)
sum(2,8)

// The above are synchronous fns. which the fns are executed on js single thread and gets executed one by one or sequential.

// Async = Asynchronous
// Your JS thread doesn't have access to everything immediately like reading a file requires OS to intervene, sending a network request to the another server, and calling a fn after a deliberate timeout.
// In that case we use async fns to delegate the tasks to others like web apis, os and js thread keep executing other tasks.

console.log("Hi!")

function onDone(){
  console.log("Click the button!")
}
setTimeout(onDone,1000) // this gets delegated to browser(web api). 
// Even though web api is ready to provide output it will be sent to the callback queue because js thread is executing other synchronous tasks. Once the thread is idle then the data in the callback queue gets executed.
console.log("Welcome to Loupe;")


