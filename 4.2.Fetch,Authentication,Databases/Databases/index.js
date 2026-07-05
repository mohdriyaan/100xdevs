const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "REDACTED/user_app",
);

const User = mongoose.model("Users", {
  name: String,
  username: String,
  password: String,
});

const app = express();
app.use(express.json());

async function userExists(username) {
  // should check in the database
  const existingUser = await User.findOne({
    username:username
  })
  return existingUser
}


app.post("/signup",async(req,res)=>{
  const name = req.body.name
  const username = req.body.username
  const password = req.body.password

  const existingUser = await User.findOne({username : username})

  if(existingUser){
    return res.status(400).json({
      msg:"User already exists."
    })
  }
  
  const user = new User({
    name : name,
    username : username,
    password : password
  })

  user.save()

  return res.status(200).json({
    msg:"User created successfully."
  })
})

app.post("/signin", async function (req, res) {
  const username = req.body.username;

  if (!userExists(username)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", async function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
    const users = await User.find({username : {$ne : username}})
    return res.status(200).json({
      users: users
    })
  } catch (err) {
    return res.status(403).json({
      msg: err.message
    });
  }
});

app.listen(3000);