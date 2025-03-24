let name = "ram";
console.log(typeof(name));  // string

let number = 4;
console.log(typeof(number));  // number

let valueChecked = true;
console.log(typeof(valueChecked));  // boolean

let a = null;
console.log(typeof(a));  // object
// typeof returned object for the null type. This has been a known issue in JavaScript since its first release.

// Convert Number to String
let age = 24
console.log(24 + "") // Implicit conversion
console.log(String(age)) // Explicit conversion
console.log(typeof (24 + ""))

// convert String to Number
let myStr = "24"
console.log( + "24") // Implicit conversion
console.log(Number(myStr)) // Explicit conversion
console.log(typeof( + "24"))

