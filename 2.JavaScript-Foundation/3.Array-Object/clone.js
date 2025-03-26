// how to clone two arrays
// We need to make such array that if we make changes to arr1 then the changes won't apply to arr2

let arr1 = [0,1,2,3,4]
// 1st method
// let arr2 = arr1.slice(0)

// 2nd method
// let arr2 = [].concat(arr1)

// 3rd method :- spread operator
let extraArr = [true , false] 
let arr2 = [...arr1 , "item3", "item5", ...extraArr]

arr1.push(5)

console.log(arr1===arr2)
console.log(arr1)
console.log(arr2)


