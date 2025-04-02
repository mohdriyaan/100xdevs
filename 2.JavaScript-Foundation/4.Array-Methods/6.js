// find method

const names = ["hello","cat","doggy","meow"]

// finding string having length 3
const findArr = names.find((string)=>{
    return string.length===3
})

console.log(findArr)

const users = [
    {userId:1, name:"Riyaan"},
    {userId:2, name:"Hello"},
    {userId:3, name:"Jack"},
    {userId:4, name:"Richhard"},

]

const findUser = users.find((user)=>{
    return user.userId==3
})

console.log(findUser)