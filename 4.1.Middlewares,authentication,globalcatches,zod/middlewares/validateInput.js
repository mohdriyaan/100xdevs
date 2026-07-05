const zod = require("zod")
const express = require("express")

const app = express()
// If this is an array of numbers with at least 1 input, return true, else return false

// function validateInput(arr){
//   const schema = zod.array(zod.number())

//   const res = schema.safeParse(arr)
//   console.log(res.success)
// }

// validateInput([1,2,"3"])



function validateObj(obj){
  const schema = zod.object({
    email : zod.email(),
    password : zod.string().min(8)
  })
  const res = schema.safeParse(obj)
  return res
}

console.log(validateObj({
  email:"hello@gmail.com",
  password:"kickstart"
})
)

app.use(express.json())

app.post("/login",(req,res)=>{
  const response = validateObj(req.body)
  if(!response.success){
    res.status(400).json({
      msg:"Invalid inputs"
    })
    return;
  }

  res.status(200).json({
    msg : "Log In Success..."
  })
})

app.listen(3000)