/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const strChars = str.toLowerCase().split("")
  if(strChars.length===1||str===""){
    return true
  }

  for(let i = 0; i<strChars.length; i++){
    if(strChars[i]==="?"||strChars[i]==="!"||strChars[i]==="."){
      strChars.splice(i,1)
    }
  }
  
  for(let i = 0; i<strChars.length/2-1; i++){
    for(let j = strChars.length-1; j>strChars.length/2-1; j--){
      if(strChars[i]!==strChars[j]){
        return false
      }
      return true;
    }
  }
}

console.log(isPalindrome("Nan"))

module.exports = isPalindrome;
