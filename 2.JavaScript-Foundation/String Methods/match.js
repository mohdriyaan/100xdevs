// The match() method returns the result of matching a string against a regular expression.

const string = "I am learning JavaScript not Java.";
const re = /Java/;

let result = string.match(re);
console.log("Result of matching /Java/ :");
console.log(result);

const re1 = /Java/g;
let result1 = string.match(re1);

console.log("Result of matching /Java/ with g flag:")
console.log(result1);
