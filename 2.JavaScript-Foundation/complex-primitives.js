// Array
// Program to print even numbers in the array
let array = [1,2,3,4,5,6,7,8,9,10,11,12]

for(let i=0; i<=array.length; i++){
    if(array[i]%2==0){
        console.log(array[i])
    }
}

// Program to print biggest number in the array
largest= array[0]

for(let i=0; i<array.length;){
    if(array[i]>largest){
        largest= array[i]
    }else{
        i++
    }
}

console.log(largest)

// Objects
const users=[{
    firstName: "Riyaan",
    gender: "male"
}, {
    firstName: "Mohammed",
    gender: "male"
}, {
    firstName: "Alice",
    gender: "Female"
}]

console.log(users)

for(let i=0; i<users.length;i++){
    if(users[i]["gender"]=="male"){
        console.log(users[i]["firstName"])
    }
}

// Program to reverse array
// for(let i= array.length; i<=array.length; i++){
    // console.log(array[i])
// }
for(let i=array.length-1; i--;){
    revArray = array[i]
    console.log(revArray)

}


