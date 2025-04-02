// The toString() method returns a string formed by the elements of the given array.

let info = ["Terence", 28, "Kathmandu"];

// returns the string representation of the info array 
let info_str = info.toString();

console.log(info_str); 

// toString() does not change the original array
console.log(info); 

// defining a nested array
let nestedArray = [1, 2, 4, ["Apple", 5]];

// returns string representation of the nested array by flattening the array 
let resultingArray = nestedArray.toString();

console.log(resultingArray);





