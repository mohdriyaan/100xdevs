const userMethods = {
    about : function(){
        return ` I am ${this.name} and my age is ${this.age}`
    },
    is18 : function(){
        return this.age >=18
    }
}


function createUser(name,email,age,address){
    const user= {}
    user.name = name
    user.email = email
    user.age = age
    user.address = address
    user.about = userMethods.about
    user.is18 = userMethods.is18
    return user
}

const user1 = createUser("riyaan","riyaan@gmail.com",19,"home address")
console.log(user1)
const about = user1.about()
const is18 = user1.is18()
console.log(about)
console.log(is18)