// methods
// function inside object

function extraInfo(){
    console.log(`this person hobbies are : ${this.hobbies}`)
}

const person1 = {
    firstname: "Riyaan",
    age:20,
    hobbies:"eat",
    about: function(){
        console.log(`person name is ${this.firstname} and age is ${this.age}`) // this keyword is the object 
    },
    extra:extraInfo
}

const person2 = {
    firstname: "Mohammed",
    age:10,
    hobbies:["sleep","run","gaming"],
    about: function(){
        console.log(`person name is ${this.firstname} and age is ${this.age}`) // this keyword is the object 
    },
    extra:extraInfo
}



person1.about()

person2.extra()