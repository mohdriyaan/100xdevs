// given an input arr, give me back all the even values from it.

// without filter
// const arr = [1,2,3,4,5,6]
// const newArr = []
// for(let value of arr){
//   if(value%2===0){
//     newArr.push(value)
//   }
// }

// console.log(newArr)

const arr = [1,2,3,4,5,6,7,8]
const ans = arr.filter((values)=>{
  if(values%2===0){
    return true
  }
})

console.log(ans)