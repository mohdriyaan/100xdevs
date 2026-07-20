require("dotenv").config()
const express = require("express")
const PORT = process.env.PORT
const Todos = require("./db.js")
const todoSchema = require("./validation.js")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/todos",async(req,res)=>{
  const todos = await Todos.find({})
  res.status(200).json({
    todos
  })
})

app.post("/todo",async(req,res)=>{
  const validateTodo = todoSchema.safeParse(req.body)
  const todo = await Todos.findOne(req.body)
  if(todo){
    return res.status(401).json({
      message : "Todo already exists"
    })
  }
  if(validateTodo.success){
    await Todos.create(req.body)
    return res.status(200).json({
      message : "Todo created successfully."
    })
  }

  return res.status(400).json({
    message : "Invalid inputs"
  })
})

app.listen(PORT,()=>{
  console.log(`Server started at PORT ${PORT}`)
})

