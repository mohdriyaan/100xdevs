require("dotenv").config()

const dbPassword = process.env.DB_PASSWORD
const mongoose = require("mongoose")

function connectDB(){
  mongoose.connect(`mongodb+srv://admin:${dbPassword}@cluster0.e2yxeao.mongodb.net/todo-app`)
    .then(()=>{
      console.log("MongoDB Connected Successfully")
    })
    .catch((err)=>{
      console.log(err)
    })
}

const todoSchema = new mongoose.Schema({
  title : String,
  description : String,
  completed : Boolean
})

const Todo = mongoose.model("Todo",todoSchema)

module.exports = {connectDB,Todo}

