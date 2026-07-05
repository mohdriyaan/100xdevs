const express = require("express")
const jwt = require("jsonwebtoken")
const jwtPassword = "123456"

const app = express()

const ALL_USERS = [
  {
    username:"riyaan123@gmail.com",
    password:"123",
    name:"mohammed riyaan"
  },
  {
    username:"hodr23@gmail.com",
    password:"1212131",
    name:"mr hodr"
  },
  {
    username:"jacky@gmail.com",
    password:"18933",
    name:"jacky"
  }
]

function userExists(username,password){
  for(let user of ALL_USERS){
    if(user.username === username && user.password === password){
      return true
    }
  }
  return false
}

app.use(express.json())

app.post("/signin",(req,res)=>{
  const username = req.body.username
  const password = req.body.password

  if(!userExists(username,password)){
    return res.status(403).json({
      msg: "User does not exists in db"
    })
  }

  let token = jwt.sign({username:username},jwtPassword)
  return res.json({
    token
  })
})

app.get("/users",(req,res)=>{
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token,jwtPassword)
    const username = decoded.username

    return res.status(200).json({
      users : ALL_USERS.filter((user)=>{
        if(user.username===username){
          return false
        }else{
          return true
        }
      })
    })
  } catch (error) {
    return res.status(403).json({
      msg: "Invalid token"
    })
  }
})

app.listen(3000)