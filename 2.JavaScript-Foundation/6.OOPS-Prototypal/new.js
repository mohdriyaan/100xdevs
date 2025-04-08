// new keyword

// function createUser(name,age){
//     this.name = name
//     this.age = age
// }

// createUser.about= function(){
//     console.log(this.name,this.age)
// }

// // new keyword
// // 1) creates empty object this = {}
// // 2) return this

// const user1 = new createUser("riyaan",22)

// console.log(user1)

// const userMethods = {
//     about : function(){
//         return ` I am ${this.name} and my age is ${this.age}`
//     },
//     is18 : function(){
//         return this.age >=18
//     }
// }

// constructor function
function CreateUser(name,email,age,address){
    // const user = Object.create(createUser.prototype)
    this.name = name
    this.email = email
    this.age = age
    this.address = address
}

// console.log(createUser.prototype)

CreateUser.prototype.about = function(){
        return ` I am ${this.name} and my age is ${this.age}`
}
CreateUser.prototype.is18 = function(){
        return this.age >=18
}

const user1 = new CreateUser("riyaan","riyaan@gmail.com",19,"home address")
console.log(user1)

console.log(user1.about())