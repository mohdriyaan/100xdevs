// what are promises
// 1. Just a syntatical sugar
// 2. Just a more readable way to write async fns.

// A Promise is an object that represents the eventual result of an asynchronous operation.

// Think of it like ordering food at a restaurant:
/*
You place the order → a Promise is created.
The food is being prepared → Promise is pending.
The food arrives → Promise is fulfilled (resolved).
The kitchen runs out of ingredients → Promise is rejected.
*/

// level1
// const promise = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("Hello World")
//   },2000)
// })

// const promise2 = new Promise((resolve,reject)=>{
//   reject("Network error")
// })

// const promise3 = new Promise((resolve,reject)=>{
//   const random = Math.floor(Math.random()*10+1)
//   if(random>5&&random<10){
//     resolve("Success")
//   }else{
//     reject("Failure")
//   }
// })

// promise.then((result)=>console.log(result))

// promise2.then((result)=>console.log(result))
// .catch((err)=>console.log(err))

// promise3.then((result)=>console.log(result))
// .catch((result)=>console.log(result))

// level2
// Promise.resolve(5)
// .then((num)=>num*2)
// .then((num)=>num+10)
// .then((num)=>num/5)
// .then((result)=>console.log(result))

// function double(num){
//   return new Promise((resolve,reject)=>{
//     resolve(num+num)
//   })
// }

// double(5)
//   .then(double)
//   .then(double)
//   .then(console.log)

// function wait(ms){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve()
//     },ms)
//   })
// }

// wait(1000)
//   .then(()=>{
//     console.log("1 second")
//     return wait(2000)
//   })
//   .then(()=>{
//     console.log("3 seconds total")
//   })

// level3
// Promise.resolve(10)
//   .then(num => {
//     throw new Error("Boom");
//   })
//   .catch((err)=>console.log(err.message))
// is same as 
// Promise.resolve(10)
//   .then(num=>{
//     return Promise.reject("Boom")
//   })
//   .catch((err)=>console.log(err))

// Promise.reject("Database Error")
//   .catch((err)=>{
//     console.log(err)
//     return "default data" // here the promise gets fulfilled.
//   })
//   .then((data)=>{
//     console.log(data)
//   })
  
// Promise.resolve(1)
//   .then(x => {
//     throw new Error("Error A"); // here the promise gets rejected.
//     // It's same as return Promise.reject("Error A")
//   })
//   .then(x => {
//     console.log("Won't run");
//   })
//   .catch(err => {
//     console.log(err.message);
//   });

// Level4
// function task1(){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve("Task1")
//     },1000)
//   })
// }

// function task2(){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve("Task2")
//     },2000)
//   })
// }

// function task3(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve("Task3")
//     },3000)
//   })
// }

// // Parallel
// Promise.all([task1(),task2(),task3()])
//   .then((result)=>console.log(result))
//   .catch((err)=>console.log(err))
// All three tasks start immediately
// Promise.all() waits for the slowest Promise. So total time = 3 seconds.
// Even though task1 finishes first, the results preserve the original order. Order is based on the array you passed, not completion time.
// If one Promise fails then whole Promise fails otherwise all must succeed.


// Sequential
// task1()
//   .then((result)=>{
//     console.log(result)
//     return task2()
//   })
//   .then((result)=>{
//     console.log(result)
//     return task3()
//   })
//   .then((result)=>{
//     console.log(result)
//   })

// function fastTask(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve("fasttask")
//     },4000)
//   })
// }

// function slowTask(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve("slowtask")
//     },4000)
//   })
// }

// Returns whichever finishes first
// Promise.race([
//   fastTask(),
//   slowTask()
// ])
//   .then((results)=>console.log(results))
//   .catch((err)=>console.log(`Error : ${err}`))

// Returns the status of the promise along with the value 
// Promise.allSettled([
//   Promise.resolve("A"),
//   Promise.reject("B"),
//   Promise.resolve("C")
// ])
//   .then((results)=>{
//     console.log(results)
//   })

// Promise.any([
//   Promise.reject("A"),
//   Promise.reject("B"),
//   Promise.resolve("C")
// ])
//   .then((results)=>{
//     console.log(results)
//   })

// level5

// Fake API Call
// function fetchUser(id){
//   return new Promise((resolve,reject)=>{
//     const names = ["Alex","Riyaan","Brian"]
//     const name = names[id]
//     const obj = {
//       id,
//       name
//     }
//     setTimeout(()=>{
//       resolve(obj)
//     },3000)
//   })
// }

// function fetchPosts(userId){
//   return new Promise((resolve,reject)=>{
//     const posts = [
//       {photoId:2167,story:"travel"},
//       {photoId:12341,story:"work"},
//       {photoId:3781,story:"college"},
//     ]
//     setTimeout(()=>{
//       resolve(posts[userId])
//     },4000)
//   })
// }

// function comments(userId){
//   return new Promise((resolve,reject)=>{
//     const comments = [
//       {commentId:7912,comment:"Nice travel"},
//       {commentId:1234,comment:"Good Job"},
//       {commentId:1313,comment:"Good Experience"}
//     ]

//     setTimeout(()=>{
//       resolve(comments[userId])
//     },5000)
//   })
// }

// fetchUser(1)
//   .then((user)=>{
//     console.log(user)
//     return fetchPosts(user.id)
//   })
//   .then((posts)=>{
//     console.log(posts)
//   })

// Promise.all([
//   fetchUser(1),
//   fetchPosts(1),
//   comments(1)
// ])
//   .then((results)=>{
//     for(let result of results){
//       console.log(result)
//     }
//   })

function waitDelay(ms){
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve()
    }, ms);
  })
}

async function fetchUsersWithRetry(url,retries){
  for(let attempts = 1; attempts<=retries; attempts++ ){
    try{
      const response = await fetch(url)
  
      if(!response.ok){
        throw new Error("Failed to fetch url")
      }

      const data = response.json()
      return data
    }catch(err){
      console.log(`Attempt ${attempts}/${retries} failed, Error : ${err.message}`)
      
      if(attempts==retries){
        throw new Error(`Attempts ${attempts}/${retries} completed. Last Error : ${err.message}`)
      }
      
      console.log(`Trying Again...`)
      await waitDelay(1500)
    }

  }
}  


fetchUsersWithRetry("https://jsonplaceholder.typicode.com/users",5)
  .then((data)=>{
    console.log(`List of Users : ${data.length}`)
    console.log(`List of Names : `)
    data.forEach((user)=>console.log(user.name))
  })
  .catch((err)=>console.log(err.message))