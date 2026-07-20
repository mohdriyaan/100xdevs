require("dotenv").config()
const mongoose = require("mongoose")
const dbPassword = process.env.MONGO_PASS

mongoose.connect(`mongodb+srv://admin:${dbPassword}@cluster0.e2yxeao.mongodb.net/todo-app`)
  .then(()=>{
    console.log("Database connected Successfully")
  })
  .catch((err)=>{
    console.log(err.message)
  })

const todoSchema = mongoose.Schema({
  title : String,
  description : String
})

const Todos = mongoose.model("Todo",todoSchema)

module.exports = Todos


