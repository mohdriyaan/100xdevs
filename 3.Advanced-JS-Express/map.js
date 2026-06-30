// given an array, give me back a new array in which every value is multiplied by 2.

// Without using map
// function transform(values,number){
//   return values * number
// }

// function map(arr,number){
//   const newArr = []
//   for(let value of arr){
//     const transformedValue = transform(value,number)
//     newArr.push(transformedValue)
//   }
//   return newArr
// }

// console.log(map([1,2,3,0,10],2))

// Using map
const arr = [1,2,3,4,5]
const ans = arr.map((values)=>{
  return values*2
})

console.log(ans)