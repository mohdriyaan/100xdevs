// reduce method

const nums = [1,2,3,4,5,6]

// sum of all numbers in the array
const sumArr = nums.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue
})

// accumulator , currentValue , return
//  1               2            3
//  3               3            6
//  6               4           10
//  10              5           15
//  15              6           21

console.log(sumArr)

const userCart = [
    {productId: 1, productName:"mobile",price:12000},
    {productId: 2, productName:"laptop",price:22000},
    {productId: 3, productName:"tv",price:34000},
    {productId: 4, productName:"bike",price:122000},
]

// without using reduce
// let sum =0
// for(let product of userCart){
//     sum += product.price
// }

// console.log(sum)

const total = userCart.reduce((totalPrice,currentPrice)=>{
    return totalPrice + currentPrice.price
},0)

console.log(total)

