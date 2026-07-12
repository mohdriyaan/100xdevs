const express = require("express")
const router = express.Router()
const {Admin,Card} = require("../db.js")
const jwt = require("jsonwebtoken")
const {adminSchema,cardSchema} = require("../validation.js")
const adminMiddleware = require("../middlewares/adminMiddleware.js")  

router.post("/signup",async(req,res)=>{
  try{
    const signUpDetails = req.body
    const validateSignUp = adminSchema.safeParse(signUpDetails)
    
    if(!validateSignUp.success){
      return res.status(400).json({
        message : "Invalid Inputs"
      })
    }else{
      const accountExists = await Admin.findOne(signUpDetails)
      if(accountExists){
        return res.status(400).json({
          message : "Account already exists"
        })
      }
      await Admin.create(signUpDetails)
      return res.status(200).json({
        message: "Sign Up Success",
      },) 
    }
  }catch(err){
    return res.status(500).json({
      message : err.message
    })
  }
  
})

router.post("/signin",async(req,res)=>{
  try{
    const signInDetails = req.body
    const accountExists = await Admin.findOne(signInDetails)
    if(accountExists){
      const token = jwt.sign(signInDetails,"123456")
      return res.status(200).json({
        message: "Sign in Success",
        token : token
      },)
    }else{
      return res.status(400).json({
        message : "User does not exist. Please sign up."
      })
    }
  }catch(err){
    return res.status(500).json({
      message : err.message
    })
  }
  
})

router.get("/cards",async(req,res)=>{
  const cards = await Card.find({})
  res.status(200).json({
    cards
  })
})

router.post("/card",adminMiddleware,async(req,res)=>{
  try{
    const cardDetails = req.body
    const validateCard = cardSchema.safeParse(cardDetails)

    if(!validateCard.success){
      return res.status(400).json({
        message : "Invalid Card inputs"
      })
    }else{
      const createdCard = await Card.create(cardDetails)
      const username = req.user.username
      await Admin.updateOne({
        username : username
      },{
        $push : {cards : createdCard._id}
      })
      return res.status(200).json({
        message : "Card component created"
      })
    }
  }catch(err){
    return res.status(500).json({
      message : err.message
    })
  }
})

router.put("/card/:id",adminMiddleware,async(req,res)=>{
  try{
    const cardId = req.params.id
    const updatedCardDetails = req.body
    const validateCard = cardSchema.safeParse(updatedCardDetails)

    if(!validateCard.success){
      return res.status(400).json({
        message : "Invalid Card inputs"
      })
    }else{
      await Card.findByIdAndUpdate(
        {_id : cardId},
        updatedCardDetails
      )
      
      return res.status(200).json({
        message : "Card component Updated"
      })
    }
  }catch(err){
    return res.status(500).json({
      message : err.message
    })
  }
})

router.delete("/card/:id",adminMiddleware,async(req,res)=>{
  try{
    const cardId = req.params.id
    const cardComponentExists = await Card.findById(cardId)
    
    if(cardComponentExists){
      const username = req.user.username
      await Card.findByIdAndDelete(cardId)
      await Admin.updateOne(
        {username : username},
        {$pull : {cards : cardId}}  
      )

      return res.status(200).json({
        message : "Card component deleted"
      })
    }else{
      return res.status(400).json({
        message : "Card componenet does not exist"
      })
    }
      
  }catch(err){
    return res.status(500).json({
      message : err.message
    })
  }
})

module.exports = router