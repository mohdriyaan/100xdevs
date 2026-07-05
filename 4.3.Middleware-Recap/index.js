const express = require("express")

const app = express()

app.use(express.json())
// function that return a boolean if the age of the person is more than 14 years

app.use((req,res,next)=>{
  const age = req.body.age
  if(age>=14){
    next()
  }else{
    return res.status(400).json({
      msg : "Sorry you are not of age yet."
    })
  }
})

app.get("/ride1",(req,res)=>{  
  res.status(200).json({
    msg:"You have successfully riden the ride 1"
  })
})

app.get("/ride2",(req,res)=>{  
  res.status(200).json({
    msg:"You have successfully riden the ride 2"
  })
})

app.get("/ride3",(req,res)=>{  
  res.status(200).json({
    msg:"You have successfully riden the ride 3"
  })
})


app.listen(3000)