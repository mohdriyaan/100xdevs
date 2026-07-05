const express = require("express")
const zod = require("zod")

const app = express()
const schema = zod.array(zod.number())

/*
{
  email : string => email
  password : atleast 8 letters
  country : "IN" , "US"
}
*/

const schemaObj = zod.object({
  email : zod.string(),
  password : zod.string(),
  country : zod.literal("IN").or(zod.literal("US"))
})

app.use(express.json())

// Middlewares
function userAuthenticate(req,res,next){
  const username = req.headers.username
  const password = req.headers.password
  
  if(username!=="riyaan" || password!=="pass"){
    res.status(400).json({
      msg:"Invalid username or password"
    })
    return;
  }else{
    next()
  }
}

function kidneyAuthenticate(req,res,next){
  const kidneyId = req.query.kidneyId

  if(kidneyId!=1 && kidneyId!=2){
    res.status(400).json({
      msg:"Invalid Inputs"
    })
    return;
  }else{
    next()
  }
}

app.post("/health-checkup",userAuthenticate,kidneyAuthenticate,(req,res)=>{
  
  // Ugly Way
  // if(username==="riyaan"&&password==="pass"){
  //   if(kidneyId==1||kidneyId==2){
  //     // do something with kidney
  //     res.json({
  //       msg:"Your kidney is fine!"
  //     })
  //   } 
  // }

  const kidneys = req.body.kidneys
  const response = schema.safeParse(kidneys)
  const kidneyLength = kidneys.length

  // res.status(200).json({
  //   msg:"Checkup Done!!"
  // })

  if(!response.success){
    res.status(411).json({
      msg:"Invalid input"
    })
    return;
  }

  // res.send(`You have ${kidneyLength} kidneys`)
  res.send({
    response
  })
})

// global catches
app.use((err,req,res,next)=>{
  res.status(500).json({
    msg:"Something is wrong with our server!"
  })
})

app.listen(3000)

