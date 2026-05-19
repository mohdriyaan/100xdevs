/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  
  let length = 0
  let str1Chars = str1.toLowerCase().split("")
  let str2Chars = str2.toLowerCase().split("")
  
  str1Chars.forEach((char) => {
    if(str2Chars.includes(char)){
      length++
    }
  });
  

  if(length==str1.length&&length==str2.length){
    return true
  }
  return false
}

console.log(isAnagram("hello","hello!"))
module.exports = isAnagram;
