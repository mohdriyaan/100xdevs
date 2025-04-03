// Sets (It is iterable)
// store data
// unique elements only(no duplicates allowed)
// No index based access
// Order is not guaranteed

const nums = new Set([1,2,3])
const str = new Set("abc")
console.log(str)
console.log(nums)
console.log(nums[2]) // undefined

const nums1 = new Set()
const items = ["item1","item2","item3"]
nums1.add(1)
nums1.add(2)
nums1.add(3)
nums1.add(4)
nums1.add(5)
nums1.add(["item1","item2"])
nums1.add(["item1","item2"]) // It will take same elements of array because it treats as different arrays stored in different address. 
nums1.add(items)
console.log(nums1)

// to check if element is present in the set
if(nums1.has(1)){
    console.log("1 is present")
}else{
    console.log("1 is nt present")
}

// Sets are iterable
for(let items of nums1){
    console.log(items)
}

// Sets should only be used when unique elements are required.
// For ex. creating unique ids

const arr = [0,1,1,1,2,2,3,4,5,6,6]
const uniqueElements = new Set(arr)
console.log(uniqueElements)
// console.log(uniqueElements.length) // length propert cannot be used for thne Set
// For finding length, we can use for of loop
let length = 0
for(let element of uniqueElements){
    length++
}
console.log(length)
