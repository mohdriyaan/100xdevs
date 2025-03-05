// In JavaScript, a Regular Expression (RegEx) is an object that describes a sequence of characters used for defining a search pattern. 

/* There are two ways you can create a regular expression in JavaScript. 

1. Using a regular expression literal:
The regular expression consists of a pattern enclosed between slashes /. 
For example,

const regularExp = /abc/;

2. Using the RegExp() constructor function:
You can also create a regular expression by calling the RegExp() constructor function. 
For example,

const regularExp = new RegExp('abc');

You can also specify a range of characters using - inside square brackets.

[a-e] is the same as [abcde].

[1-4] is the same as [1234].

[0-39] is the same as [01239].

You can complement (invert) the character set by using caret ^ symbol at the start of a square-bracket.

[^abc] means any character except a or b or c.

[^0-9] means any non-digit character.


*/