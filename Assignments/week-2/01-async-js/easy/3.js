const fs = require("fs")

console.log("Before file read")

fs.readFile("a.txt","utf-8",(err,data)=>{
  if(err){
    console.log(err.message)
  }else{
    console.log(data)
  }
})

let sum = 0
for(let i = 1; i<100000000; i++){
  sum+=i
}

setTimeout(()=>{
  console.log(sum)
},1000)

console.log(sum)
