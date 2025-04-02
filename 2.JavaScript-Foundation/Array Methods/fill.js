// The fill() method returns an array by filling all elements with a specified value.

var prices = [651, 41, 4, 3, 6];

// filling every element of the array with '5'
new_prices = prices.fill(5);

console.log(prices);

console.log(new_prices); 

// array definition
var language = ["JavaScript", "Python", "C", "C++"];

// replacing element of array from index 1 to 3 by 'JavaScript'
language.fill("JavaScript", 1, 3);
// printing the original array
console.log(language);

