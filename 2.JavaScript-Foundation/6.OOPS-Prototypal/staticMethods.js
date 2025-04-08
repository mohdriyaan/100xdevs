class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    // Calls the function using the class
    static get about(){
        return `I am ${this.firstName} and age is ${this.age}`
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

console.log(Person.about)