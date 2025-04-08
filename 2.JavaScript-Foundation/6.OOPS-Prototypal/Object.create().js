const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

const obj2 = Object.create(obj1) // Object.create creates the prototype of obj1
console.log(obj2.key1)

console.log(obj2.__proto__)

