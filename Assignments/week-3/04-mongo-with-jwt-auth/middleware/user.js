const { User } = require("../db");
const jwtVerify = require("../Authentication/verify.js")

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const authHeader = req.headers.authorization

    const token = authHeader && authHeader.split(" ")[1]

    const user = jwtVerify(token)

    User.findOne({
        username : user.username,
        password : user.password
    })
    .then((value)=>{
        if(value){
            req.user = value
            next()
        }else{
            return res.status(400).json({
                message : "User does not exist"
            })
        }
    })
}

module.exports = userMiddleware;