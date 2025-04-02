// forEach method

const nums = [10,11,22,33,44]

function square(number){
    console.log(number * number)
}

// without using forEach method
for(let i = 0; i<=nums.length-1;i++){
    square(nums[i])
}

// with using forEach method
// 1st method
nums.forEach(square)

// 2nd method
nums.forEach(function square(number){
    console.log(number*number)
})

const users = [
    {name:"Riyaan",age:24},
    {name:"Kratos",age:2222},
    {name:"wi",age:242}
]

users.forEach((user)=>{
    console.log(user.name)
})

for(let user of users){
    console.log(user.name)
}



