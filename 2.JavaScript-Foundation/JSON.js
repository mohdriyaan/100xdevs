// JSON stands for JavaScript Object Notation

// JSON.parse
// JSON.stringify

// const users = '{"name":"riyaan","age":23,"gender":"male"}'
// const user = JSON.parse(users)
// console.log(user)
// console.log(user["age"])

const users = {
    name:"Riyaan",
    age:223,
    gender:"male"
}

const finalString= JSON.stringify(users)
console.log(finalString)
console.log(finalString["gender"])
