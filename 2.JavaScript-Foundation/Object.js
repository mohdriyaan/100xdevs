let Obj={
    key1:"value1",
    key2:"value2",
    key3:"value3",    
}
console.log(Obj)
console.log(Object.keys(Obj))
console.log(Object.values(Obj))
console.log(Object.entries(Obj))
console.log(Obj.hasOwnProperty("key1"))
console.log(Obj.hasOwnProperty("key1w2"))
let newObj = Object.assign({}, Obj, {newKey:"value"})
console.log(newObj)


