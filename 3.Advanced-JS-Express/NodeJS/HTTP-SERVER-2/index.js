const express = require("express")
const bodyParser = require("body-parser")

const app = express() // calling the express fn will give an app object
const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.get("/route-handler",(req,res)=>{
  res.json({
    name:"Riyaan",
    age:25
  })
})

app.post("/conversations",(req,res)=>{
  // console.log(req.headers.authorization)
  console.log(req.query.b)
  console.log(req.body) 
  res.send("<b>Hello</b>")
})

app.get("/delay",(req,res)=>{
  setTimeout(()=>{
    res.send("Delayed Task")
  },4000)
})

app.get("/",(req,res)=>{
  res.send("Hello World")
})

app.listen(port,()=>{
  console.log(`${port} is running`)
})