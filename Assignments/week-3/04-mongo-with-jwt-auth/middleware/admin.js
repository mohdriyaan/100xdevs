const { Admin } = require("../db");
const jwtVerify = require("../Authentication/verify.js")

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(" ")[1]
    
    const user = jwtVerify(token)

    Admin.findOne({
        username : user.username,
        password : user.password
    })
    .then((value)=>{
        if(value){
            next()
        }else{
            return res.status(403).json({
                message : "Admin does not exist"
            })
        }
    })
}

module.exports = adminMiddleware;