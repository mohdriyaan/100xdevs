// We use this keyword in an object method to access a property of the same object. For example,

const person = {
    name: "John",
    age: 35,
    introduce : function(){
        console.log(`Hi. I am ${this.name} and I am ${this.age} years old`)
    }
}

console.log(person)
person.introduce()

// Inserting new value to the Object person
person.pet = "dog"

person.petIntro= function(){
    console.log(`${this.name} has ${this.pet} as a pet`)
}

console.log(person)
person.petIntro()

