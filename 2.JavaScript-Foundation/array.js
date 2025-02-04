// An array is an object that can store multiple values at once.

// Arrays allow us to organize related data by grouping them within a single variable.

const arr = [1,2,3,4]

// Accessing Elements in the array
console.log(arr[1])

// Adding elements at the end
arr.push(5)

// Adding elements at the beginning
arr.unshift(0)

console.log(arr)

// Removing elements from an array
arr.splice(0,2)
console.log(arr)

// Relationship betwenn arrays and objects
// In JS, array are type of objects. But the catch is:-
/*
    1. Arrays use numbered indexes to access elements.
    2. Objects use named indexes(keys) to access elements. 

Since arrays are objects, the array elements are stored by reference. 
Hence, when we assign an array to another variable, we are just pointing to the same array in memory.

So, changing one will change the other because they're essentially the same array. 
*/


