const zod = require("zod")

const adminSchema = zod.object({
  username : zod.string().min(1),
  password : zod.string().min(4)
}) 

const cardSchema = zod.object({
  name : zod.string(),
  description : zod.string(),
  interests : zod.array(zod.string()),
  socials : zod.object({
    linkedin : zod.string(),
    twitter : zod.string() 
  })
})

module.exports = {adminSchema,cardSchema}

