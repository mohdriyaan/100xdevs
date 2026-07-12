require("dotenv").config()
const mongoose = require("mongoose")
const dbPassword = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://admin:${dbPassword}@cluster0.e2yxeao.mongodb.net/card-builder`)
  .then(()=>{
    console.log("MongoDB Connected Successfully")
  })
  .catch((err)=>{
    console.log(err.message)
  })

const adminSchema = mongoose.Schema({
  username : {
    type : String,
    required : true
  },
  password : {
    type : String,
    required : true
  },
  cards : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : "Card"
  }]
})

const cardSchema = mongoose.Schema({
  name : String,
  description : String,
  interests : [String],
  socials : {
    linkedin : {
      type : String,
      default : ""
    },
    twitter : {
      type : String,
      default : ""
    }
  }
}) 

const Card = mongoose.model("Card",cardSchema)
const Admin = mongoose.model("Admin",adminSchema)

module.exports = {Card,Admin}