/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  //   1st method
  let formattedStr = ""
  str = str.toLowerCase()

  for(let value of str){
    if(![" ",",",".","!","?"].includes(value)){
      formattedStr+=value
    }
  }

  str = formattedStr

  for(let i = 0 ; i < str.length/2; i++){
    if(str[i]!==str[str.length-1-i]){
      return false
    }
  }

  return true

  //   2nd method
  // let strChars = str.toLowerCase().split("")
  // for(let i = 0; i<str.length; i++){
  //     if(strChars[i]===" "||strChars[i]===","||strChars[i]==="!"||strChars[i]==="?"||strChars[i]==="."){
  //       strChars.splice(i,1)
  //       i--
  //     }
  // }

  // let reverseStr = [...strChars].reverse().join("")
  // strChars = strChars.join("")

  // if(strChars!==reverseStr){
  //   return false
  // }else{
  //   return true
  // }
}

console.log(isPalindrome("Rotor is nu ? ,"))

module.exports = isPalindrome;
