// The search() method searches for a match between a given string and a regular expression.

let sentence= "I love JavaScript.";

// pattern that searches the first occurence of an uppercase character
let regExp = /[A-Z]/;

// searching for a match between regExp and given string 
let indexReg = sentence.search(regExp);

console.log(indexReg);

// Output: 0

let string1 = "I love to code in JavaScript.";

// searching word "JavaScript" in the given string
let index = string1.search("code");

console.log(index);