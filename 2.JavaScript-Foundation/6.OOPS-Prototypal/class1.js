// parent class
class Animal{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    eat(food){
        return `${this.name} eats ${food}`
    }
}

const animal1 = new Animal("cow",24)
console.log(animal1)
console.log(animal1.eat("grass"))

// sub class
class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age) // takes the parameters from the parent class
        this.speed = speed
    }

    eat(food){
        return `Modified Eat : ${food}`
    } // If this is not declared then the function will be taken from the Animal class

    run(){
        return `${this.name} runs at ${this.speed}kmph`
    }
}

const dog1 = new Dog("tommy",8,45)
console.log(dog1.eat("dog-food"))
console.log(dog1.run())
