// map method

const nums = [0,1,2,3,4,5,10,20]

const squareNums = nums.map((number)=>{
    return number * number
})

console.log(squareNums)

const users = [
    {name:"Riyaan",age:24},
    {name:"Kratos",age:2222},
    {name:"wi",age:242},
    {name:"halo",age:142}
]

const nameArr = users.map((user)=>{
    return user.name
})

console.log(nameArr)

