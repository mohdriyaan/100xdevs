const fs = require("fs")

fs.readFile("a.txt","utf-8",(err,data)=>{
  if(err){
    console.log(err.message)
  }else{
    console.log(`Before cleaning data : ${data}`)
    
    let newData = []
    data = data.split(" ")
    for(let chars of data){
      if(chars!==""){
        newData.push(chars)
      }
    }
    newData = newData.join(" ")
    
    fs.writeFile("a.txt",newData,"utf-8",(err,data)=>{
      if(err){
        console.log(err)
      }else{
        console.log("The New Data has been saved into the file.")
      }
    })

    fs.readFile("a.txt","utf-8",(err,data)=>{
      if(err){
        console.log(err)
      }else{
        console.log(`After cleaning data : ${data}`)
      }
    })
  }
})