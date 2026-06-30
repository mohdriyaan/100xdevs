// creating a http server
// express
// express is not bundled with node so you'll have to first bring in locally using npm

const express = require("express")

const app = express() // Creating an express application / http server

// function sum(n){
//   let sum = 0
//   for(let i =1; i<=n; i++){
//     sum+=i
//   }
//   return sum;
// }

// // req -> request, res -> response
// app.get("/",(req,res)=>{
//   const n = req.query.n
//   const ans = sum(n)
//   res.send("Your ans is : "+ans)
// }) // Accepts all the requests at this route and send response "hi there"

app.use(express.json())

const users = [
  {
    name:"John",
    kidneys:[
      {
        healthy: false
      }
    ]
  }
]

app.get("/",(req,res)=>{
  const johnKidneys = users[0].kidneys
  const numberOfKidneys = johnKidneys.length
  let numberOfHealthyKidneys = 0

  for(let kidneys of johnKidneys){
    if(kidneys.healthy===true){
      numberOfHealthyKidneys++
    }
  }

  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys
  
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys
  })

})

app.post("/",(req,res)=>{
  const isHealthy = req.body.isHealthy 
  users[0].kidneys.push({
    healthy:isHealthy
  })
  res.json({
    msg:"Done!"
  })
})

app.put("/",(req,res)=>{
  if(atLeastOneUnhealthyKidney()){
    for(let kidney of users[0].kidneys){
      kidney.healthy = true
    }
    res.json({
      msg:"Updated Values"
    })
  }else{
    res.status(411).json({
      msg:"There are no Unhealthy Kidneys."
    })
  }
  
})

app.delete("/",(req,res)=>{
  if(atLeastOneUnhealthyKidney()){
    const newKidneys = []
    
    for(let kidney of users[0].kidneys){
      if(kidney.healthy){
        newKidneys.push(kidney)
      }
    }
    
    users[0].kidneys = newKidneys
    
    res.json({
      msg:"Deleted Unhealthy Values"
    })
  }else{
    res.status(411).json({
      msg:"There are no Unhealthy Kidneys."
    })
  }
  
})

function atLeastOneUnhealthyKidney(){
  let atLeastOneUnhealthyKidney = false
  
  for(let kidney of users[0].kidneys){
    if(!kidney.healthy){
      atLeastOneUnhealthyKidney = true
    }
  }

  return atLeastOneUnhealthyKidney
}

app.listen(3000)
