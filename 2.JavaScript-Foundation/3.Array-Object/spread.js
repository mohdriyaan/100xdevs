const arr = [..."abcdefghijk"]
console.log(arr)

// spread operator in objects

const obj1 = {
    key1:"value1",
    key2:"value2"
}

const obj2={
    key1:"value3",
    key4:"value4"
}

const obj3 = {...obj1 , ...obj2}
console.log(obj3)
