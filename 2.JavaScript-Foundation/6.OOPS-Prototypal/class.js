// class keyword
class CreateUser{
     constructor(name,email,age,address){
        this.name = name
        this.email = email
        this.age = age
        this.address = address
    }

    about(){
        return ` I am ${this.name} and my age is ${this.age}`
    }
    is18(){
        return this.age >=18
    }
}

const user1 = new CreateUser("name","riyaan@gmail.com",19,"address")
console.log(user1)
console.log(user1.is18())
console.log(Object.getPrototypeOf(user1))

