// The repeat() method creates a new string by repeating the given string a specified number of times and returns it.
// string declaration
const holiday = "Happy holiday!";

// repeating the given string 2 times
const result = holiday.repeat(2);

console.log(result);

// using 0 as a count value
// returns an empty string
let result2 = holiday.repeat(0);

console.log(result2);

let result3 = holiday.repeat(-1);

console.log(result3) // throws error
