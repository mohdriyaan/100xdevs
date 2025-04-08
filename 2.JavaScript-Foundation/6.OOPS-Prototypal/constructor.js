// In JavaScript, a constructor function is used to create and initialize objects.

function University(){
    this.name = "MIT",
    this.city = "Masachusetts",
    this.intro = function(){
        console.log(`Welcome to ${this.name} and it is located in ${this.city}`)
    }
}

const university = new University()

console.log(university)
console.log(university.name)
university.intro()

// You can also create a constructor function with parameters. For example,
function Person(personName,personAge){
    this.name = personName,
    this.age = personAge
}

const person1 = new Person("John", 25)
const person2 = new Person("Wick", 28)

console.log(person1)
console.log(person2)

// Built-In constructors

const car = new Object({name:"Honda",year:2019})
console.log(car)