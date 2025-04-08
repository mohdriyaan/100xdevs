// const userMethods = {
//     about : function(){
//         return ` I am ${this.name} and my age is ${this.age}`
//     },
//     is18 : function(){
//         return this.age >=18
//     }
// }


function createUser(name,email,age,address){
    const user = Object.create(createUser.prototype)
    user.name = name
    user.email = email
    user.age = age
    user.address = address
    return user
}

// console.log(createUser.prototype)

createUser.prototype.about = function(){
        return ` I am ${this.name} and my age is ${this.age}`
}
createUser.prototype.is18 = function(){
        return this.age >=18
}

const user1 = createUser("riyaan","riyaan@gmail.com",19,"home address")
console.log(user1)

console.log(user1.about())