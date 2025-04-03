// Maps
// Maps is an iterable
// MAp stores key value pairs

const person = new Map()
person.set("name","Riyaan")
person.set("age",22)
console.log(person)

// In objects we can only use keys as string or symbol
// But in maps we can use any data type

person.set(1,"one")
person.set([1,2,3],"one")
console.log(person)
console.log(person.get(1))
console.log(person.keys())
for(let keys of person.keys()){
    console.log(keys, typeof keys)
}

// Maps are stored in ordered fashion

const person1 = {
    id : 1,
    firstName : "Riyaan"
}

const extraInfo = new Map()
extraInfo.set(person1,{age:22,gender:"male"})
console.log(extraInfo)
console.log(extraInfo.get(person1).age)