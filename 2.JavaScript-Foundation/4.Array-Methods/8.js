// 

const nums = [2,,3,5,7]

const isEven = nums.some((num)=>{
    return num%2==0
})

console.log(isEven)

const userCart = [
    {productId: 1, productName:"mobile",price:12000},
    {productId: 2, productName:"laptop",price:22000},
    {productId: 3, productName:"tv",price:34000},
    {productId: 4, productName:"bike",price:122000},
]

// check if any product is more than 100000

const check = userCart.some((user)=>{
    return user.price > 100000
})

console.log(check)

