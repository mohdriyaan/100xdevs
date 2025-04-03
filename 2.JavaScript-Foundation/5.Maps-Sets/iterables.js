// iterables
// Where we can use for of loops
// string and array are iterables

let str = "Riyaan"
for(let chars of str){
    console.log(chars)
} 

const items = ["item1","item2","item3"]
for(let item of items){
    console.log(item)
}

// objects are not iterables

// String is array like object because we can access the char of the string using string indexing and get the length of the string as well
