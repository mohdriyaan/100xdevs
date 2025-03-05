// The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement.

const text = "Java is awesome. Java is fun.";

// passing a string as the first parameter
let pattern = "Java";
let new_text = text.replaceAll(pattern, "JavaScript");
console.log(new_text);

// passing a regex as the first parameter
pattern = /Java/g;
new_text = text.replaceAll(pattern, "JavaScript");
console.log(new_text);