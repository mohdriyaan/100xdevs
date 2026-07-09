require("dotenv").config()
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET

// Middleware for handling auth
function jwtVerify(token) {
    const user = jwt.verify(token,secret)
    return user
}

module.exports = jwtVerify;