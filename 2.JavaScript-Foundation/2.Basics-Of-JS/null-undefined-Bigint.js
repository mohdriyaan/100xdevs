// Undefined
let char
console.log(char , typeof char)
char = "hello"
console.log(char , typeof char)

// Null
let char1 = null
console.log(char1, typeof char1)
// typeof char1 shows as object due to bug in the JS
char1 = "mist"
console.log(char1, typeof char1)

// BigInt
let num = BigInt(123)
let num1 = 12e3

console.log(num, typeof num)
console.log(num1, typeof num1)
