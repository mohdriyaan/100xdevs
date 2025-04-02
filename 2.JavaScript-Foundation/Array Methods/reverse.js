// The reverse() method returns the array in reverse order.

let languages = ["JavaScript", "Python", "C++", "Java", "Lua"];

// reversing the order of languages array
// let reversedArray = languages.reverse();

// using spread operator to reverse the array
let reversedArray = [...languages].reverse();

console.log("Reversed Array: ", reversedArray);

// modifies the original array
console.log("Original Array: ", languages);
