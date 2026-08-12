import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true,
    unique : true
  },
  password : {
    type : String,
    required : true
  }
},{
  timestamps : true
})

//  Pre hook : before saving, run a function
// Makes sure user's password is hashed before it gets stored on MongoDB
userSchema.pre("save", async function(next){
  // if the user changes already registered updates name or email, the password hashing should not work
  if(!this.isModified("password")){
    return next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.matchPassword = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model("User",userSchema)

export default User