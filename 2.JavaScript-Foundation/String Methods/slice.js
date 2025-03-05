const str = "JavaScript is a very absurd programming language.";

// from index 28 to end
console.log(str.slice(28)); // 'programming language.'

// from index 4 to 14
console.log(str.slice(4, 15)); // 'Script is a'

const str1 = "JavaScript is a very absurd programming language.";

// from 9th to last element till end
console.log(str1.slice(-9)); // 'language.'

// from 9th to last element to 2nd to last element
console.log(str1.slice(-9, -1)); // 'language'

