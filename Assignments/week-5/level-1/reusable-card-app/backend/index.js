require("dotenv").config()
const express = require("express")
const adminRoute = require("./routes/admin.js")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())

app.use("/admin",adminRoute)

app.use((err,req,res,next)=>{
  return res.status(500).json({
    message : err
  })
})

app.listen(PORT,()=>{
  console.log(`Server started running on PORT ${PORT}`)
})
