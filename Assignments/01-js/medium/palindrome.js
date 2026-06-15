/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  //   1st method
  //   const strChars = str.toLowerCase().split("")

  //   for(let i = 0; i<strChars.length; i++){
  //     if(strChars[i]===" "||strChars[i]===","||strChars[i]==="!"||strChars[i]==="?"||strChars[i]==="."){
  //       strChars.splice(i,1)
  //       i--
  //     }
  //   }
  //   // return strChars

  //   for(let i = 0; i < strChars.length/2-1; i++){ 
  //     if(strChars[i]!==strChars[strChars.length-1-i]){
  //       return false
  //     }
  //   }
  //   return true

  //   2nd method
  let strChars = str.toLowerCase().split("")
  for(let i = 0; i<str.length; i++){
      if(strChars[i]===" "||strChars[i]===","||strChars[i]==="!"||strChars[i]==="?"||strChars[i]==="."){
        strChars.splice(i,1)
        i--
      }
  }

  let reverseStr = [...strChars].reverse().join("")
  strChars = strChars.join("")

  if(strChars!==reverseStr){
    return false
  }else{
    return true
  }
}

console.log(isPalindrome("hello"))

module.exports = isPalindrome;
