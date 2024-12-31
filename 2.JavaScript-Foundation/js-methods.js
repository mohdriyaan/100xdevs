// String methods:-

// Length method
let value = "hello world"
console.log(value.length) // provides length of the string

// indexOf method
let value1 = "hello world world"
console.log(value1.indexOf("world"))
console.log(value1.indexOf("drj")) // return -1 if the string not found
console.log(value1.lastIndexOf("world")) // return last occurence of the substring in the string

// slice method
console.log(value1.slice(0,5)) // provides the slice of the string by using 2 arguments that is start and the end. 
// The string is sliced from the start index number to the end index number(does not include the end index number while slicing the string). 

// replace method
console.log(value1.replace("world","js")) // replaces the target substring of a string with the new provided string.
console.log(value1.replaceAll("world","js")) // replaces all the target substring of a string with the new provided string.
console.log(value1.replace("scxsworld","js"))  // will not replace the substring if the string does not match.
console.log(value1.replace("wo","js")) 

// split method
console.log(value1.split("")) // splits the string based on a delimiter.
console.log(value1.split(",")) 

// trim method
let value3 = "    hello world     "
console.log(value3.trim()) // removes the extra spaces that is at the beginning and the end of the string.

// toUpperCase method
console.log(value1.toUpperCase())

// toLowerCase method
console.log(value1.toLowerCase())

// Number methods:-
// parseInt method
console.log(parseInt("hello")) // Converts string to integer.
console.log(parseInt("1000"))
console.log(parseInt("1000,jsbcke"))
console.log(parseInt(".dbejfb1000"))
console.log(parseInt("3.14"))

// parseFloat method
console.log(parseFloat("1000")) // Converts string to float.
console.log(parseFloat("1000,jsbcke"))
console.log(parseFloat(".dbejfb1000"))
console.log(parseFloat("3.14"))

// Array methods:-
// push method
const arr = [1,21,32]
arr.push(12,14) // appends new element to the end of the array and returns the new length of the array
console.log(arr)

// pop method
arr.pop() // removes element to the end of the array and returns the new length of the array
console.log(arr)

// shift method
arr.shift() // removes first element of an array and returns it.
console.log(arr)

// unshift method
arr.unshift(12) // inserts the element at the start of an array and returns new legth of an array.
console.log(arr)

// concat method
const arr2 = ["hello", "world"]
console.log(arr.concat(arr2)) // Combines two or more arrays

// forEach method
const initialArr = [1,2,3]

function multiply(item){
    console.log(item*3)
}

function isNum(num){
    console.log(num + " is a number")
}

initialArr.forEach(multiply) //forEach function calls a function for each elements in an array.
initialArr.forEach(isNum)

// map method
