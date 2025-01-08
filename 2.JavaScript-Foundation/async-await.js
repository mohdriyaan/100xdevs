// Async Await function makes the code much more readable than callbacks/promises.

// Normal promise function

// function asyncFunction(){
//     let a = new Promise(function(resolve){
//         // do some async logic here
//         resolve("hi there")
//     })
//     return a
// }

// function main(){
//     asyncFunction().then(function(value){
//         console.log(value)
//     })
// }

// main()

// Async-Await function

function asyncFunction(){
    let a = new Promise(function(resolve){
        // do some async logic here
        resolve("hi there")
    })
    return a
}

async function main(){
    let value = await asyncFunction()
    console.log(value)
}

main()