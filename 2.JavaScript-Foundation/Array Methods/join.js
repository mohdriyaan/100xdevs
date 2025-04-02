// The join() method returns a new string by concatenating all of the elements in an array, separated by a specified separator.

var info = ["Terence", 28, "Kathmandu"];

var info_str = info.join(" | ");

// join() does not change the original array
console.log(info); // [ 'Terence', 28, 'Kathmandu' ]

// join() returns the string by joining with separator
console.log(info_str); // Terence | 28 | Kathmandu

// empty argument = no separator
var collection = [3, ".", 1, 4, 1, 5, 9, 2];
console.log(collection.join("")); // 3.141592

var random = [44, "abc", undefined];
console.log(random.join(" and ")); // 44 and abc and
