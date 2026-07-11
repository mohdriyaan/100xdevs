require("dotenv").config()
const express = require("express")
const jwt = require("jsonwebtoken")
const {todoSchema,updateTodoSchema} = require("./types.js")
const {connectDB,Todo} = require("./db.js")

connectDB()

const PORT = process.env.PORT
const app = express()

app.use(express.json())

app.post("/todo",async(req,res)=>{
  const createTodo = req.body

  const validateTodos = todoSchema.safeParse(createTodo)

  if(!validateTodos.success){
    return res.status(400).json({
      message : "You sent the wrong inputs"
    })
  }else{
    await Todo.create({
      title : createTodo.title,
      description : createTodo.description,
      completed : false
    })
    return res.status(200).json({
      message : "Todo Created Successfully"
    })
  }
  
})

app.get("/todos",async(req,res)=>{
  const todos = await Todo.find({})
  res.status(200).json({
    todos
  })
})

app.put("/completed",async(req,res)=>{
  const todoId = req.body
  const validateCompleteTodo = updateTodoSchema.safeParse(todoId)

  if(!validateCompleteTodo.success){
    return res.status(400).json({
      message : "You have sent invalid inputs"
    })
  }else{
    await Todo.findByIdAndUpdate({
      _id : todoId.id 
    },
    {$set : {completed : true}}
    )
    return res.status(200).json({
      message : "Todo marked as completed"
    })
  }
    
})
app.use((err,req,res,next)=>{
  if(err){
    return res.status(500).json({
      message : err
    })
  }
  
})

app.listen(PORT,()=>{
  console.log(`Server started at PORT ${PORT}`)
})

