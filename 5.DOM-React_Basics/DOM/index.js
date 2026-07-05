const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

app.get("/sum",(req,res)=>{
  const a = req.query.a
  const b = req.query.b
  const sum = parseInt(a) + parseInt(b)
  res.send(sum.toString())
})

app.get("/interest",(req,res)=>{
  const principal = req.query.principal
  const interestRate = req.query.rate
  const time = req.query.time

  const interest = (parseInt(principal) * parseInt(interestRate) * parseInt(time))/100

  const totalAmount = parseInt(principal) + interest

  res.send({
    totalAmount,
    interest
  })
})

app.listen(3000,()=>{
  console.log("Server started running at server 3000")
})

