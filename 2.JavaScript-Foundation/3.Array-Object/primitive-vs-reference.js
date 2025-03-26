// primitive vs reference data types
let num1 = 1
let num2 = num1
console.log(num1)
console.log(num2)
num1++
// after incrementing
console.log(num1)
console.log(num2)

// reference types
// array
let arr1 = ["item1", "item2"]
let arr2 = arr1
console.log(arr1)
console.log(arr2)

arr1.push("item3")
// Pushing item3 element to arr1
console.log(arr1)
console.log(arr2)

/* Primitive elements are stored in stack. Elements are stored in stack manner using the pointers having different address. In the above example, if we assisgn num2 as num1 variable, then num2 will be stored in different. IF we change the value of num1, then the changes won't happpen to num2 variable due to being stored in other stack */

/* Reference elements are stored in heap. Elements are also stored using pointers but have the smae address. So when we make change to arr1 then the changes also applied to arr1    */

