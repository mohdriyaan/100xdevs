// every method

const nums = [2,4,8,10]

const isEven = nums.every((num)=>{
    return num%2==0
})

console.log(isEven)

const userCart = [
    {productId: 1, productName:"mobile",price:12000},
    {productId: 2, productName:"laptop",price:22000},
    {productId: 3, productName:"tv",price:34000},
    {productId: 4, productName:"bike",price:122000},
]

// check every product is less than 30000

const check = userCart.every((user)=>{
    return user.price < 30000
})

console.log(check)

