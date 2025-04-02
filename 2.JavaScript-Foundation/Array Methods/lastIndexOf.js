// The lastIndexOf() method returns the index of the last occurrence of a specified element in the array.

let alphabets = ["a", "b", "c", "a", "d"];

// finding the index of the last occurence of 'a'
let lastIndex1 = alphabets.lastIndexOf("a");

console.log(lastIndex1);

// finding the index of the last occurence of 'e'
let lastIndex2 = alphabets.lastIndexOf("e");

console.log(lastIndex2);

let alphabets1 = ["a", "b", "c", "a", "d", "a"];

// second argument specifies the starting index
// from where the method searches the element backward
let lastIndex = alphabets1.lastIndexOf("a", 4);

console.log(lastIndex); 