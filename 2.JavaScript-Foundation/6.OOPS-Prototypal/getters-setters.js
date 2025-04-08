// getters-setters.js
class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    get about(){
        return `I am ${this.firstName} and age is ${this.age}`
    }

    set fullName(fullName){
        const [firstName,lastName] = fullName.split(" ")
        this.firstName = firstName
        this.lastName = lastName
    }

}

const person1 = new Person("Riyaan","Mohammed",24)
console.log(person1.about)

person1.fullName = "John Wick"
console.log(person1)