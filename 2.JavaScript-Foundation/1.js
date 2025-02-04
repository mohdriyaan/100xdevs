function Company(companyName,marketCap){
    this.name = companyName,
    this.money = marketCap
}

const company1 = new Company("apple",29000)
const company2 = new Company("bmw",239000)

console.log(company1)

class Human{
    constructor(name,age){
        this.name = name,
        this.age = age
    }
    intro(){
        return(`My name is ${this.name} and my age is ${this.age}`)
    }
}

const person1 = new Human("John", 18)

console.log(person1.intro())

