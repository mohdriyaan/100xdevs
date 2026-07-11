const zod = require("zod")

const todoSchema = zod.object({
  title : zod.string().min(1),
  description : zod.string().min(1)
})

const updateTodoSchema = zod.object({
  id : zod.string()
})

module.exports = {todoSchema , updateTodoSchema}