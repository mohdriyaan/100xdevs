//  Prototypes allow properties and methods to be shared among instances of the function or object. For example,

function Car(modelName,year){
    this.name= modelName,
    this.year = year
}

let car1 = new Car("Toyota",2001)
let car2 = new Car("Ford",2017)

Car.prototype.color="red"
Car.prototype.wheels= function(){
    return("It has four wheels")
}
console.log(`${car1.name} is painted in ${car1.color}. ${car1.wheels()}`)
console.log(car2)
