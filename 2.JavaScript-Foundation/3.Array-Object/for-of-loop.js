const arr = ["item1","item2","item3","item4","item5"]
let arr1 = []

for(let items of arr){
    arr1.push(items)
}

console.log(arr1)

for(let index in arr){
    console.log(`Index Value:- ${index} Value :- ${arr[index]}`)
}