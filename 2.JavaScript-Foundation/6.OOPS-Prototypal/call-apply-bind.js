function about(hobby,favMusician){
    console.log(this.userName,this.age,hobby,favMusician)
}

const user1 = {
    userName : "Riyaan",
    age: 24,
    // about: function(hobby,favMusician){
    //     console.log(this.userName,this.age,hobby,favMusician)
    // }
}

const user2 = {
    userName: "Mohit",
    age: 19
}

// Call
// user1.about.call(user2) // Call Calls a method of an object substituting another object 
// user1.about.call(user2,"gaming","PUBG")  
about.call(user1,"guitar","Mozart")

// Apply
about.apply(user2,["violin","Bobby"])

// bind
const func = about.bind(user1,"hello","world")
func()