// The substring() method returns a specified part of the string between start and end indexes.

let string = "Programiz JavaScript Tutorials";

// first character
substr1 = string.substring(0, 1);
console.log(substr1); // P

// if start > end, they are swapped
substr2 = string.substring(1, 0);
console.log(substr2); // P

// From 11th to last character
substr3 = string.substring(10);
console.log(substr3); // JavaScript Tutorials

// the extreme values are 0 and str.length

// same as string.substring(0)
substr4 = string.substring(-44, 90);
console.log(substr4); // Programiz JavaScript Tutorials

// indexEnd is exclusive
substr5 = string.substring(0, string.length - 1);
console.log(substr5); // Programiz JavaScript Tutorial