// sort method

const nums = [1,2,10,100,1000,23]

// nums.sort() // JS sort first converts nums array to string and then sorts according to ASCII number. 

nums.sort((a,b)=>{
    return a - b
})

console.log(nums)

const products = [
    {productId:1, productName: "p1", price:300},
    {productId:2, productName: "p2", price:3000},
    {productId:3, productName: "p3", price:200},
    {productId:4, productName: "p4", price:100}
]

const lowToHigh = [...products].sort((a,b)=>{
    return a.price - b.price
})

console.log(lowToHigh)
console.log(products)