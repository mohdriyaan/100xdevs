// JavaScript object is a variable that can store multiple data in key-value pairs.

// The key-value pairs of an object are referred to as properties.
let Obj={
    key1:"value1",
    key2:"value2",
    key3:"value3",    
}
console.log(Obj)
// You can access the value of a property by using its key.
console.log(Obj.key2) // dot notation
console.log(Obj["key3"]) // bracket notation

// Deleting Object properties
delete Obj.key3

console.log(Obj)

console.log(Object.keys(Obj))
console.log(Object.values(Obj))
console.log(Object.entries(Obj))
console.log(Obj.hasOwnProperty("key1"))
console.log(Obj.hasOwnProperty("key1w2"))
let newObj = Object.assign({}, Obj, {newKey:"value"})
console.log(newObj)

// We can also include function inside the object
const Obj2={
    key1: "value1",
    key2: function(){
        console.log("Hello")
    }
}

console.log(Obj2)
console.log(Obj2.key2)
Obj2.key2()



