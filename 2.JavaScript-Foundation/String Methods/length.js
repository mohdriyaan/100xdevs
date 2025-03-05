// The length property returns the number of characters in a string.

let message = "hello"
console.log(message.length)
// message.length = 11 // Length is a read-only property and cannot be assigned new value. 
// console.log(message.length)

function func(a,b,c,d){

}

console.log(func.length) // returns the parameters used in the function

let arr = [0,1,2,3]
console.log(arr.length)

for(let i =0 ; i<arr.length; i++){
    console.log(arr[i])
}

arr.length= 2 // Changing Length property of an array.
console.log(arr)

