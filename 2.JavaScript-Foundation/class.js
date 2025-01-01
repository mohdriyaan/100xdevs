// Classes lets you sort of describe the way they let you put bunch of properties of a certain type together.
// Classes provides you a structure of something that's reusable and used in multiple places.

class Animal{
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount=legCount;
        this.speaks=speaks;
    }
    speak(){
        console.log("hi there " +  this.speaks)
    }
}

// let dog={
//     name:"doggy",
//     legCount:4,
//     speaks:"bhow bhow"
// }

let dog= new Animal("doggy",4,"bhow bhow") // create object 
let cat = new Animal("mikku", 4, "meow")
cat.speak()

