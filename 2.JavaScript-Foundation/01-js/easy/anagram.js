/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    let value1 = str1.split("")
    let value2 = str2.split("")
    // for(let i=0; i<=value1.length; i++){
    //   if(value1.match()){
    //     console.log("true")
    //   }else{
    //     console.log("false")
    //   }
    // }
    if(value1.match(value2)){
      console.log("true")
    }else{
      console.log("false")
    }
}

isAnagram("hello","wello")

module.exports = isAnagram;
