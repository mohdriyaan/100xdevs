// The replace() method returns a new string with the specified string/regex replaced.

let str = "hello"
let newStr = str.replace("l","o")
console.log(newStr) // replaces first ocurrence of the element

newStr = str.replace(/l/g,"o")
console.log(newStr) // globally replaces the element with the pattern

let newStr1 = "JAva"
newStr1 = newStr1.replace(/a/gi,"o") // Case-Insensitive Replacement
console.log(newStr1)

