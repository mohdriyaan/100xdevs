require("dotenv").config()
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET

function jwtSign(obj) {
  const generateToken = jwt.sign(obj,secret)
  return generateToken 
}

module.exports = jwtSign
