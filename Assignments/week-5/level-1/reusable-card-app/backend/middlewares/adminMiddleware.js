const jwt = require("jsonwebtoken")

function adminMiddleware(req, res, next) {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    return res.status(401).json({
      message: "Authorization required"
    })
  }

  const token = authHeader.split(" ")[1]
  let payload

  try {
    payload = jwt.verify(token, "123456")
  } catch (err) {
    return res.status(401).json({
      message: "Invalid token"
    })
  }
  
  req.user = payload
  return next()
}

module.exports = adminMiddleware
