/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // 1st method
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()

  if(str1.length!==str2.length){
    return false
  }

  for(let i = 0 ; i < str1.length&&str2.length; i++){
    if(!str1.split("").includes(str2[i])){
      return false
    }
  }

  return true

  // 2nd method
  // str1 = str1.toLowerCase().split("").sort().join("")
  // str2 = str2.toLowerCase().split("").sort().join("")
  // if(str1===str2){
  //   return true
  // }
  // return false
}

console.log(isAnagram("abc!","!bac"))
module.exports = isAnagram;
