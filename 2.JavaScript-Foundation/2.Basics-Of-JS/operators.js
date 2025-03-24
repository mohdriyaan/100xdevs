// JavaScript operators are special symbols that perform operations on one or more operands (values).

// Different types of operators are:-
/* 1. Arithmetic Operators
   2. Assignment Operator
   3. Logical Operators
   4. Bitwise Operators
   5. Comparison Operators
   6. String Operators
   7. Miscellaneous Operators   
*/

// Difference between equality(== or !=) and strictly equality(=== or !==) operators.
// The equality operators (== and !=) convert both operands to the same type before comparing their values. 
// For example,
console.log(3 == "3");  // true
// Here, we used the == operator to compare the number 3 and the string 3.
// By default, JavaScript converts string 3 to number 3 and compares the values.

// However, the strict equality operators (=== and !==) do not convert operand types before comparing their values. 
// For example,
console.log(4 === "4");  // false

// String Concatenation Operator
let str1 = "Hel", str2 = "lo";
console.log(str1 + str2);

// Output: Hello

// Comma Operator
let a = (1,2,3,4)

// Ternary Operator
console.log((100<20)?true:false)
