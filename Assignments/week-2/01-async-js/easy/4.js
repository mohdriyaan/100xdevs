const fs = require("fs")

fs.writeFile("a.txt","Hello NodeJS. I am the boi.","utf-8",(err,data)=>{
  if(err){
    console.log(err.message)
  }else{
    console.log(`The File has been saved.`)
  }
})

fs.readFile("a.txt","utf-8",(err,data)=>{
  if(err){
    console.log(err.message)
  }else{
    console.log(data)
  }
})

