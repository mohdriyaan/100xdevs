/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },n*1000)
    })
}

const start = Date.now();
wait(1)
    .then(() => {
      const end = Date.now();
      const difference = end - start;
      console.log(difference)
    })
        


module.exports = wait;
