// object destructuring

const obj1 = {
    key1:"value1",
    key2:"value2",
    key5:"value5",
    key10:"value10"
}

let{key1,key2, ...restProps} = obj1
console.log(key1,key2)
console.log(restProps)

const arr = [0,1,2,3,4]
const[arr1,arr2, ...restElements] = arr
console.log(arr1,arr2)
console.log(restElements)